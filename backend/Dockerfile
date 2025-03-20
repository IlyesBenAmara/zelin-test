FROM node:22.14-alpine3.20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run db:deploy

RUN npm run build

FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production

USER node
WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./dist/prisma

ENV PORT 3000

CMD ["dumb-init", "node", "./dist/src/index.js", "-v"]