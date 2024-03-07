## 双向绑定原理

- 数据劫持：
  - 原理：使用Object.defineProperty()或Proxy对象来劫持数据对象的getter和setter方法，从而在数据
- 依赖追踪：Vue 在模板编译过程中，会将模板中的数据绑定指令（如 v-model）转换为相应的 Watcher 对象，并建立起依赖关系。这样当数据发生改变时，能够通知相应的 Watcher 进行更新。
- 发布订阅模式：Vue 中采用了发布-订阅模式来实现数据更新的通知机制。当数据发生改变时，会通知相关的 Watcher 对象，然后 Watcher 对象负责更新对应的视图。



[demo](http://127.0.0.1:5500/example/vue/index.html)
