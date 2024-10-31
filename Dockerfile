# Step 1: Use an official Node.js runtime as a parent image
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3031

# Step 7: Start the application in development mode
CMD ["yarn", "dev"]

