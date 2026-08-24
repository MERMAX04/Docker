# Start from a small official Node.js runtime image.
FROM node:22-alpine

# Keep all application files inside a predictable working directory.
WORKDIR /app

# Copy dependency metadata first so Docker can reuse this layer when source changes.
COPY package.json ./

# Install only the production dependency required by the API.
RUN npm install --omit=dev

# Copy the API source code into the image.
COPY server.js ./

# Document the port used by the Express application.
EXPOSE 3000

# Start the API whenever the container starts.
CMD ["npm", "start"]
