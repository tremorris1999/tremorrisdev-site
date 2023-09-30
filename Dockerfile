FROM node:latest
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build.client
RUN npm run build.server
COPY ./dist /usr/src/app/dist
COPY ./server /usr/src/app/server
CMD ["npm", "run", "serve"]