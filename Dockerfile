FROM node:14-slim

WORKDIR /app

COPY package*.json ./

# Add a random argument to bust the cache
ARG CACHEBUST=2

RUN npm install

COPY . .

CMD ["npm", "start"]
