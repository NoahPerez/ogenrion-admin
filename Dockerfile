# Builder Stage
FROM --platform=linux/amd64 node:lts-slim AS builder

# Set working directory
WORKDIR /app

# Increase network timeout and set HTTP version
RUN yarn config set network-timeout 600000 && yarn config set network-http-version http1

# Copy only necessary files for dependencies
COPY package.json yarn.lock ./

# Install dependencies and ts-node globally
RUN yarn --frozen-lockfile && npm install -g ts-node typescript

# Copy the rest of the application files
COPY . .

# Install necessary build tools and libraries
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential chrpath libssl-dev libxft-dev libfreetype6 libfontconfig1 && \
    # Compile the admin UI first
    ts-node src/custom-admin-ui/compile-admin-ui.ts && \
    # Then run the main build
    yarn build && \
    # Make sure admin UI is in the right place
    mkdir -p dist/custom-admin-ui && \
    cp -r src/custom-admin-ui/admin-ui dist/custom-admin-ui/ && \
    # Create the archive
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

# Set environment variable for admin UI path
ENV ADMIN_UI_PATH=/app/dist/custom-admin-ui/admin-ui/dist/browser

# Expose application port
EXPOSE 3000


# Set default command
CMD ["yarn", "start"]
