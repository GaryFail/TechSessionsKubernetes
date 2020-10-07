from node:12

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

CMD ["node", "platform_server.js"]