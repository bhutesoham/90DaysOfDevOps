#User official Node image
FROM node:18-alpine

#Set up the work directory
WORKDIR /app

#COPY files first (better layer catching)
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the rest of the application code
COPY . .

#Expose the port
EXPOSE 3000

#Start the application
CMD ["node", "app.js"]