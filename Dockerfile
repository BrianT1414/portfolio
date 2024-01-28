FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
