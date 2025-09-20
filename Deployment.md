### This Deployment assumes that a vendure project is already setup and is working locally. If not please follow the steps at https://docs.vendure.io/guides/getting-started/installation/

## This example also assumes that the project is pushed to a git repository.

## Create or Update the Dockerfile in the project as:

```Dockerfile


# Builder Stage
FROM --platform=linux/amd64 node:lts-slim AS builder

# Set working directory
WORKDIR /app

# Increase network timeout and set HTTP version
RUN yarn config set network-timeout 600000 && yarn config set network-http-version http1

# Copy only necessary files for dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Install necessary build tools and libraries
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential chrpath libssl-dev libxft-dev libfreetype6 libfontconfig1 && \
    yarn build && \
    tar -czf build.tar.gz dist/ static/

# Runner Stage
FROM --platform=linux/amd64 node:lts-slim AS runner

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install minimal dependencies and libraries
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential chrpath libssl-dev libxft-dev libfreetype6 libfontconfig1 && \
    apt-get clean

# Install production dependencies only
RUN yarn install --frozen-lockfile --production

# Copy built application from builder stage
COPY --from=builder /app/build.tar.gz ./

# Extract the build and clean up temporary files
RUN tar -xzf build.tar.gz && \
    rm build.tar.gz && \
    rm -rf ~/.cache/* && \
    rm -rf /usr/local/share/.cache/* && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man

# Expose application port
EXPOSE 3000

# Set default command
CMD ["yarn", "start"]
```

## Create a build.sh in the root of the project and paste the following code:

```bash

set -e

echo ">> Cleaning old build files"
rm -rf dist src/custom-admin-ui/admin-ui

echo ">> Compiling project"
tsc -p tsconfig.build.json

echo '>> Compiling admin ui'
ts-node src/custom-admin-ui/compile-admin-ui.ts

echo '>> Copying files'
mkdir -p dist/custom-admin-ui/admin-ui dist/static/email

set +e

cp -r src/custom-admin-ui/admin-ui/dist dist/custom-admin-ui/admin-ui/dist
cp -r static/email/templates dist/static/email/

set -e

```

## Run command:

```bash
chmod +x build.sh
```

## Open package.json and replace the "scripts" object with following code:

```json

  "scripts": {
    "dev:server": "ts-node ./src/index.ts",
    "dev:worker": "ts-node ./src/index-worker.ts",
    "dev:admin-ui": "ts-node src/custom-admin-ui/compile-admin-ui.ts --dev --watch",
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:admin-ui\"",
    "build": "./build.sh",
    "start:server": "node ./dist/index.js",
    "start:worker": "node ./dist/index-worker.js",
    "start": "concurrently yarn:start:*"
  },
```

## Replace tsconfig.json file in the root of the project with the following code:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "target": "es2019",
    "strict": true,
    "sourceMap": false,
    "skipLibCheck": true,
    "outDir": "./dist",
    "baseUrl": "./"
  },
  "exclude": [
    "node_modules",
    "migration.ts",
    "src/plugins/**/ui/*",
    "src/custom-admin-ui/admin-ui"
  ],
  "include": ["src/**/*", "**/*.tsx"],
  "ts-node": {
    "files": true
  }
}
```

## Create a new file as tsconfig.build.json in the root of the project and paste the following code:

```json
{
  "extends": "./tsconfig",
  "exclude": ["src/plugins/**/ui/"]
}
```

## Setting up admin ui

Install following package:

```bash
yarn add -D @vendure/ui-devkit
```

## Create a file at src/custom-admin-ui/compile-admin-ui.ts and paste the following code:

```ts
import { compileUiExtensions, setBranding } from "@vendure/ui-devkit/compiler";
import path from "path";

// Import your plugins that have UI extensions here
// Example:
// import { YourPlugin } from "../plugins/your-plugin/your-plugin.plugin";

// This allows the script to be run directly for compilation
if (require.main === module) {
  customAdminUi({ recompile: true, devMode: false })
    .compile?.()
    .then(() => {
      process.exit(0);
    });
}

export function customAdminUi(options: {
  recompile: boolean;
  devMode: boolean;
}) {
  console.log("Compiling admin UI with options:", options);

  if (options.recompile) {
    return compileUiExtensions({
      outputPath: path.join(__dirname, "admin-ui"),
      extensions: [
        // 1. Set custom branding
        setBranding({
          //   faviconPath: path.join(__dirname, "favicon.ico"),
          //  largeLogoPath: path.join(__dirname, "logo-large.png"),
          // Commenting out the smallLogoPath to avoid the error
          // smallLogoPath: path.join(__dirname, "logo-small.png"),
        }),

        // 2. Add translations
        {
          translations: {
            // en: path.join(__dirname, "en.json"),
            // es: path.join(__dirname, "es.json"),
            // Add more languages as needed
          },
        },

        // 3. Add global styles and static assets
        {
          // Comment out globalStyles to avoid the error
          // globalStyles: path.join(__dirname, "styles.scss"),
          staticAssets: [
            // path.join(__dirname, "logo-large.png"),
            // Commenting out the logo-small.png reference to avoid the error
            // path.join(__dirname, "logo-small.png"),
            // path.join(__dirname, "icons/info.svg"),
            // Add more static assets as needed
          ],
        },

        // 4. Add plugin UI extensions here
        // YourPlugin.ui,
        // AnotherPlugin.ui,
      ],
      devMode: options.devMode,
    });
  } else {
    // Return the path to the compiled admin UI
    return {
      path:
        process.env.ADMIN_UI_PATH ||
        path.join(__dirname, "./admin-ui/dist/browser"),
    };
  }
}
```

## Open src/vendure-config.ts and import the customAdminUi function from the compile-admin-ui.ts file:

import { customAdminUi } from "./custom-admin-ui/compile-admin-ui";

## Replace the AdminUiPlugin found in src/vendure-config.ts with the following code:

```ts

    AdminUiPlugin.init({
      route: "admin",
      app: customAdminUi({
        devMode: IS_DEV,
        recompile: IS_DEV,
      }),
      port: 3000,
      adminUiConfig: {
        tokenMethod: "bearer",
        brand: "Renue",
        hideVendureBranding: false,
        hideVersion: false,
      },
    }),
```

## Testing it production config locally:

## Create a postgres database and open and replace your database credentials in the .env file

```bash
yarn build

# wait for build to complete

yarn start

## open http://localhost:3000/admin/login to view the login page
```

## Deploy (EasyPanel)

## Create a new project on EasyPanel (Example: my_project)

Lets first create a database for our project.

Inside the project click on "Service" button on the top right and click on postgres, enter all the details as your preference from the service name, database name, user and password, the docker image can be empty. Just clicking on "Create" will create a database for our project

## Now to deploy the vendure application:

1. Inside the project, Click on "Service" button on the top right
2. From all the options select "App" and give any name(example: vendure_app)
3. Now select your new service from the left menu and click on Github and enter your information
   a. Owner is your github user name (Example: abcd)
   b. Repository is your github repository name (Example: my_project)
   c. Branch is your github branch name (Example: main)
   d. Build path should be "/"

   From the "build" section just select Dockerfile and click on "Save"

4. Easy Panel will now setup your project. In order for your vendure application to be available to you, we just need to setup the environment variable

5. Copy the below env variable and replace as mentioned in the example. Click on "Environment" tab and enable the option which says "Create .env file", in the text section above paste in the value before by replacing with actual credentials

```bash
APP_ENV=prod
PORT=3000 (default value, recommended to keep this)
COOKIE_SECRET=<any_text>
SUPERADMIN_USERNAME=superadmin
SUPERADMIN_PASSWORD=superadmin

DB_CLIENT=postgres
DB_HOST=<your_db_host>
DB_NAME=<your_db_name>
DB_PASSWORD=<your_db_password>
DB_PORT=<your_db_port>
DB_USERNAME=<your_db_username>
DB_SCHEMA=public (default value, in basic project no need to touch this )

SERVER_URL=https://test-vendure-test-vendure.ci2gmf.easypanel.host (this is your domain, optional for starting)
```

6. Click Deploy and wait for the deployment to complete
7. Now you should be able to access your vendure application from "Share" icon show in the tab
