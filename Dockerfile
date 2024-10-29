FROM node:18-alpine as builder
# Set working directory
WORKDIR /usr/src/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn install --immutable --non-interactive --ignore-scripts
RUN yarn nuxt prepare

# Fix sharp
RUN npm rebuild --platform=linux --arch=x64 --libc=glibc sharp

# Copy all files
COPY ./ ./

# Set env
ENV NODE_ENV production

# Delete Dockerfile
RUN rm Dockerfile

# Build app using cluster mode
RUN NITRO_PRESET=node_cluster yarn build

# base image use distroless for smaller build
FROM gcr.io/distroless/nodejs18-debian11:nonroot

# Set env
ENV NODE_ENV production

# Set working directory
WORKDIR /usr/src/app

# Copy .output from builder
COPY --from=builder /usr/src/app/.output/ /usr/src/app/.output/

# Expose the listening port
EXPOSE 3000

# Launch app
CMD [ ".output/server/index.mjs" ]
