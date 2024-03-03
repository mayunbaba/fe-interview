# ajax fetch axios

ajax是js异步请求的称呼，基于XMLHttpRequest实现。

因为回调地狱的问题，诞生了axios来解决这个问题。

随着时间的推移诞生了原生API fetch，他用来替代XMLHttpRequest。

但是他有兼容问题，所以在项目中使用 `whatwg-fetch`


## fetch 和 axios 区别
- fetch 默认情况下不会携带cookie
- 仅当网络故障的时候才会返回reject

