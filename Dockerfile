### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /acisportsstore/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /acisportsstore/src/app/dist/acisportsstore /usr/share/nginx/html


###docker run --name acisportsstore -d -p 8888:80 acisportsstoreapp