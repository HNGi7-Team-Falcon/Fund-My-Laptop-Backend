# Tells the Docker which base image to start.
FROM node:12-alpine

# Adds files from the host file system into the Docker container.  
ADD . /app

# Sets the current working directory for subsequent instructions
WORKDIR /app

RUN npm install

#expose a port to allow external access
EXPOSE 2020

# Start mean application
CMD ["npm", "start"] 


# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# WORKDIR /home/node/app
# COPY package*.json ./
# USER node
# COPY --chown=node:node . .

