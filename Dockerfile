FROM node:12-alpine

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8


WORKDIR /app/

COPY package*.json yarn.lock /app/

RUN yarn install 

RUN apk update && apk add   \
  tmux \
  bash \
  sudo \
  zsh \
  curl


RUN apk --update add tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*
# RUN apk add 
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 5500
# CMD [ "ash"]

