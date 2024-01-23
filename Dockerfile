FROM node:16-alpine as builder

#Labels
LABEL Maintainer="OCRV_BLOCKCHAIN_PLATFORM"

#set timezone
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

COPY . .

RUN rm -rf /app/dist/*
#RUN rm -rf /app/node_modules/*
RUN yarn install
RUN yarn build


# Развертываем приложение Angular на NGINX
FROM nginx:alpine

# Заменяем дефолтную страницу nginx соответствующей веб-приложению
RUN rm -rf /usr/share/nginx/html/*

# проброс конфигов и скрипта
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/config_template.js /
COPY --from=builder /app/entrypoint.sh /
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf

# запуск скрипта для замены плейсхолдеров в конфиг.жс
ENTRYPOINT ["sh", "entrypoint.sh"]

# запуск нгинкса в контейнере
CMD ["nginx", "-g", "daemon off;"]
