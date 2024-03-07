## 状态码
- 200 OK：请求已成功。
- 3xx 重定向
- 4xx 客户端错误
- 5xx 服务端错误

## method（RESTfulApi）
GET(查) POST(增) PUT（改） DELETE（删）

## 缓存策略
- 强缓存
  - Expires头字段：服务器返回资源时，通过设置 Expires 头字段指定资源的过期时间，可能与客户端时间不一致。
  - Cache-Control 头字段： 通过设置 Cache-Control 头字段的 max-age 指令，告诉客户端资源在多长时间内有效，单位是秒。与 Expires 不同，Cache-Control 是相对时间，不受客户端时间影响。
  
- 协商缓存（很常用）
  - Last-Modified 和 If-Modified-Since 头字段： 服务器返回资源时，通过设置 Last-Modified 头字段指定资源的最后修改时间，客户端可以通过发送 If-Modified-Since 头字段检查资源是否有更新。

## Cookie 和 Session 区别 （偏后端）
- 存储位置：
  - Cookie 存储在客户端，以文本形式保存在客户端的浏览器中，每次请求都会将 Cookie 信息发送给服务器。
  - Session 存储在服务器端，通常存储在服务器的内存或数据库中，客户端只保存了 SessionID，用来标识服务器端存储的 Session 数据。

## http和https的区别
- 数据传输方式：
  - 明文
  - SSL/TLS加密处理，保证数据传输的安全性
- 默认端口
  - HTTP: 80
  - HTTPS: 443
- 认证：
  - HTTPS通常使用证书来验证服务器的身份，以确保链接的安全性和可信度。
  - HTTP不提供身份验证，因此容易受到中间人攻击。

## http/1.1和http/2 区别
- 多路复用
- 头部压缩
- 服务器推送

## TCP 三次握手
- 客户端发起连接请求
- 服务器响应连接请求
- 客户端确认连接

## preload和prefetch区别
- preload 提高资源加载优先级。一般用于加载首屏CSS、JavaScript。
- prefetch 降低资源加载优先级。一般用于其他页面的资源。
[demo](http://127.0.0.1:5500/example/pre/1.html)

