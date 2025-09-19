FROM node:20

# Install yarn globally
RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY . .
RUN yarn build
