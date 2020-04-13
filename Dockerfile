FROM node:12-alpine

ENV NODE_ENV development
ENV DIR /www
ENV PORT=8080

RUN addgroup -S app && adduser -S app -G app
WORKDIR ${DIR}

COPY . ${DIR}
RUN apk add --no-cache --virtual .gyp \
      python \
      make \
      g++ \
    && npm ci \
    && npm run build \
    && npm cache clean --force \
    && apk del .gyp

EXPOSE $PORT

CMD [ "npm", "run", "start" ]