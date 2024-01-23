#!/bin/sh

envsubst < /config_template.js > /usr/share/nginx/html/config.js

exec "$@"
