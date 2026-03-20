#!/usr/bin/env bash
set -euo pipefail

backup_ts="$(date +%Y%m%d%H%M%S)"

find /var/www/html/marhoo_home_page -name '._*' -delete
chown -R root:root /var/www/html/marhoo_home_page

cp /etc/nginx/nginx.conf "/etc/nginx/nginx.conf.bak-${backup_ts}"
sed -i 's|root         /var/www/html/marhoo_home_page/MarhooGames.github.io;|root         /var/www/html/marhoo_home_page;|' /etc/nginx/nginx.conf

cat > /etc/nginx/default.d/marhoo_static.conf <<'EOF'
index index.html;
location / {
    try_files $uri $uri/ $uri.html =404;
}
EOF

cat > /etc/nginx/conf.d/marhoo_ip.conf <<'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _ 47.108.132.52;
    root /var/www/html/marhoo_home_page;

    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /40x.html {}

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {}
}
EOF

nginx -t
systemctl reload nginx

echo "BACKUP:${backup_ts}"
echo "ROOT_UPDATED"
