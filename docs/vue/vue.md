# vue双向绑定原理

<!-- <script>
import './vue/defineProperty.js'
import './vue/proxy.js'
</script> -->
## 数据劫持
- Object.defineProperty: 通过重写get、set方法劫持数据
- Proxy: 重写get、set 方法劫持数据
  [demo](http://127.0.0.1:5500/example/jiechi.html)


## 双向绑定原理
Vue 数据双向绑定原理是通过 数据劫持 + 发布者-订阅者模式 的方式来实现的。

- 数据劫持：
  - 原理：使用Object.defineProperty()或Proxy对象来劫持数据对象的getter和setter方法，从而在数据发生变化时能够触发响应的更新。
  - 优点：能够精确的追踪数据的变化，只更新发生变化部分，提高性能。
  
- 依赖追踪：Vue 在模板编译过程中，会将模板中的数据绑定指令（如 v-model）转换为相应的 Watcher 对象，并建立起依赖关系。这样当数据发生改变时，能够通知相应的 Watcher 进行更新。
- 发布订阅模式：
  - 原理：通过一个事件管理器来实现发布-订阅机制，在数据发生变化时，通知所有订阅了该数据的对象进行更新。
  - 优点：实现了解耦，降低了对象之间的直接依赖，提高了灵活性。
  - 缺点：需要维护一个额外的事件管理器，可能会引入一定的复杂性，并且在使用过程中需要手动管理事件的订阅和取消订阅。



[demo](http://127.0.0.1:5500/example/vue/index.html)
