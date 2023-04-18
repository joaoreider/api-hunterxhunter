FROM node:18-slim

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000



