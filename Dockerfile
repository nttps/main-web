FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# customize port 80
EXPOSE 80
CMD ["node", "NITRO_PORT=80 node .output/server/index.mjs"]

# default port 3000
# EXPOSE 3000
# CMD ["node", ".output/server/index.mjs"]