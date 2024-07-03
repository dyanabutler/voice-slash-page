# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using yarn, copy the yarn.lock file instead
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, use the following command instead
# RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build
# If you're using yarn, use the following command instead
# RUN yarn build

# Expose the port for documentation purposes, Cloud Run does not use this
#EXPOSE 8080

# Ensure the application listens on the correct port by using the $PORT environment variable
CMD ["sh", "-c", "npm start -p $PORT"]
# If you're using yarn, change it to:
# CMD ["sh", "-c", "yarn start -p $PORT"]
