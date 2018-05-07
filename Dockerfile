FROM node:alpine

ENV PORT=3000

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE $PORT

CMD ["npm", "run", "start"]
