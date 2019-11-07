FROM node:6.11.5

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run start
EXPOSE 3002
CMD [ "npm", "run", "server" ]