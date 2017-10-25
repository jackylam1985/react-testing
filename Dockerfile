FROM node:8-alpine
ARG token

RUN apk update && apk add git

# This prevents ts-node creating the v8flags and ts-node files in the root of the project
RUN npm config set unsafe-perm true

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/

EXPOSE 8080
CMD npm start

