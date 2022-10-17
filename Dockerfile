FROM node:16.18-alpine

COPY . . 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]