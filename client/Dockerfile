FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --silent



COPY . .

CMD ["npm", "start"]

