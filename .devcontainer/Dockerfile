FROM node:16.15

WORKDIR /app 

COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 

COPY . /app 
CMD npm run develop 

EXPOSE 3000

