# Builder Stage
FROM --platform=linux/amd64 node:lts-slim AS builder

# Set working directory
WORKDIR /app

# Increase network timeout and set HTTP version
RUN yarn config set network-timeout 600000 && yarn config set network-http-version http1

# Copy only necessary files for dependencies
COPY package.json yarn.lock ./

# Install dependencies and ts-node globally
RUN yarn --frozen-lockfile && npm install -g ts-node typescript @angular/cli

# Copy the rest of the application files
COPY . .

# Create the missing build.sh script
RUN echo '#!/bin/sh\nnpx tsc -p tsconfig.build.json' > build.sh && chmod +x build.sh

# Install necessary build tools and libraries
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential chrpath libssl-dev libxft-dev libfreetype6 libfontconfig1 && \
    # Compile the admin UI first
    echo "Compiling custom admin UI..." && \
    ts-node src/custom-admin-ui/compile-admin-ui.ts && \
    echo "Admin UI compilation completed" && \
    # Verify the admin UI was created
    ls -la src/custom-admin-ui/ && \
    # Then run the main build
    yarn build && \
    # Create the archive
    tar -czf build.tar.gz dist/ static/ src/custom-admin-ui/admin-ui/

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

# Install production dependencies and global packages needed for runtime
RUN yarn install --frozen-lockfile --production && \
    npm install -g concurrently

# Copy built application from builder stage
COPY --from=builder /app/build.tar.gz ./

# Extract the build and clean up temporary files
RUN tar -xzf build.tar.gz && \
    rm build.tar.gz && \
    # Verify admin UI files are present
    echo "Checking admin UI files:" && \
    ls -la src/custom-admin-ui/ && \
    rm -rf ~/.cache/* && \
    rm -rf /usr/local/share/.cache/* && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man

# Expose application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
