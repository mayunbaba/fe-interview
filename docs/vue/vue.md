# vue双向绑定原理

## 数据劫持
- Object.defineProperty: 劫持属性。重写get、set方法劫持数据
- Proxy: 代理对象。重写get、set 方法劫持数据
  [数据劫持demo](http://127.0.0.1:5500/example/jiechi/index.html)

## 递归

## mvvm模式

## 双向绑定原理
[深入响应式原理：官网](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html)

[实现简单的MVVM：附代码](https://www.jianshu.com/p/0983d2d0a416)

Vue 数据双向绑定原理是通过 数据劫持 + 发布者-订阅者模式 的方式来实现的。

**具体实现**
1. observer 劫持数据
  - 递归代理数据，或者递归劫持数据属性。
  - 数据变化通知订阅者
2. compile 解析模板指令
  - 把模板中的变量解析成数据
  - 根据指令绑定事件
  - 添加订阅者，如果数据变化，收到通知，更新视图。
3. Watcher类是连接observer和compile的桥梁，




[demo](http://127.0.0.1:5500/example/vue/index.html)
