### This Deployment assumes that a vendure project is already setup and is working locally. If not please follow the steps at https://docs.vendure.io/guides/getting-started/installation/

## This example also assumes that the project is pushed to a git repository.

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
