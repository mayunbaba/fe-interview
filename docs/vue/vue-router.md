# vue-router

## vue-router路由模式，history和hash模式区别
hash模式：`http://example.com/#/about`

history模式：`http://example.com/about`

## 部署项目后，history模式刷新页面404
- 为什么会404
  因为传统的MPA页面，路由有服务器接管，返回对应的静态html页面。

  浏览器发起请求`http://example.com/about`，服务器没有配置/about的路由，返回404页面。

  SPA页面路由由HTML5 History API 管理路由，在浏览器端解析。

- 如何解决
  nginx将找不到的文件指向index.html。然后vue-router介入，根据/about的变化，匹配对应的页面。

## nginx相关配置

```sh
http {
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript application/json application/xml text/html;
    gzip_min_length 1000;

    server {
        listen 80;
        server_name example.com;

        root /path/to/your/vue/app;
        index index.html;
        # 找不到的文件指向index.html
        location / {
            try_files $uri $uri/ /index.html;
        }
        # 反向代理 /api/
        location /api/ {
            proxy_pass http://backend-server:port/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # 开启html gzip压缩
        location ~* \.(html)$ {
            gzip_static on;
            gzip_vary on;
            gzip_comp_level 6;
            gzip_min_length 1000;
            gzip_buffers 16 8k;
            gzip_types text/html;
        }
    }
}

```
