# Step 1: Build the React frontend
FROM node:18 AS build-client
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install && npm run build

# Step 2: Build the backend and include frontend
FROM node:18
WORKDIR /app

# Copy backend code
COPY server ./server
WORKDIR /app/server

# Install backend dependencies
RUN npm install

# Copy built frontend into backend's public directory
COPY --from=build-client /app/client/dist ./public

# Expose backend port
EXPOSE 8080

# Start backend server
CMD ["npm", "start"]
