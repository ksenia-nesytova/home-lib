# Use official Node.js 20 LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the Angular app
RUN ng build

# Serve the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]


