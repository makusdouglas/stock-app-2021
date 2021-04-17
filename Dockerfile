FROM node:14.15.4-alpine3.12

WORKDIR /home/node/app

RUN chown node:node /home/node/app

USER node

COPY --chown=node:node . .


EXPOSE 3000
RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]

