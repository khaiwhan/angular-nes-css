# Use official node image as the base image
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use official nginx image as the base image
FROM nginx:stable
COPY --from=build /app/dist/angular-nes-css/browser /usr/share/nginx/html
COPY ./dockerizer/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]