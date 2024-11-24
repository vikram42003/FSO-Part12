FROM node:20

WORKDIR /usr/src/todo-backend

COPY --chown=node:node . .

RUN npm ci --omit=dev

CMD npm start