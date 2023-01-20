FROM node
WORKDIR /app
COPY package.json /app
RUN npm init
COPY . /app
CMD node server.js
EXPOSE 4000