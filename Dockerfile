# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com
COPY .  ./
RUN npm install --global gulp-cli
RUN npm install
RUN gulp
RUN ls
