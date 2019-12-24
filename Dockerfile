FROM node:13
WORKDIR src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start"]
