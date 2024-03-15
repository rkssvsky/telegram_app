# Сборка проекта с помощью Vite
vite build

scp -r -P 22 dist/* root@95.163.241.152:/usr/share/nginx/html
ssh root@95.163.241.152 "systemctl restart nginx"
