FROM node:12

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8


WORKDIR /app/

COPY package*.json yarn.lock /app/

RUN yarn install 

RUN apt-get update && apt-get install -y \
	tmux \
	curl


# RUN apk add 
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 3300
# CMD [ "ash"]

