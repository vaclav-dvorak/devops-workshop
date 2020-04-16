FROM node:12-alpine

ENV NODE_ENV development
ENV DIR /www
ENV PORT=8080

WORKDIR ${DIR}

COPY . ${DIR}
RUN apk add --no-cache --virtual .gyp \
      python \
      make \
      g++ \
    && npm ci \
    && npm run build \
    && npm cache clean --force \
    && apk del .gyp \
    && addgroup -S rebood \
    && adduser -S -g rebood app \
    && chown app:rebood ${DIR}

USER app

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]