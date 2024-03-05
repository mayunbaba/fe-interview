<script>
import lifeCycle from './demo/lifeCycle.vue'
import watchC from './demo/watchC.vue'

export default {
  components: {
    lifeCycle,
    watchC
  },
}
</script>
<lifeCycle />
<watchC />

## vue生命周期
```
创建阶段
beforeCreated
created（setup）
挂载阶段（渲染dom）
beforeMount（onBeforeMount）
mounted （onMounted）
更新阶段
beforeUpdate （onBeforeUpdate）
updated （onUpdated）
销毁阶段
beforeDestory （onBeforeUnmount）
destroyed （onUnmounted）
```

## 父组件引入子组件，生命周期的执行顺序是
  
  创建阶段

  |父组件|子组件|
  |--|--|
  |beforeCreate||
  |created||
  |beforeMount||
  ||beforeCreate|
  ||created|
  ||beforeMount|
  |--|--|
  ||mounted|
  |mounted||

  更新阶段
  |父组件|子组件|
  |--|--|
  |beforeUpdate||
  ||beforeUpdate|
  ||updated|
  |updated||

  销毁阶段
  |父组件|子组件|
  |--|--|
  |beforeDestroy||
  ||beforeDestroy|
  ||destroyed|
  |destroyed||

- 发送请求放在哪个生命周期
  - 官方没有明确规定，`created、 mounted`都可以，created可以使请求早发起几毫秒（渲染页面的时间），mounted中DOM元素已经挂载完成，做一些相关操作更加方便。根据页面渲染的先后顺序，和父子组件生命周期调整。
- keep-alive
  - activated
  - deactivated

## 组件传值方式
- 父传子
  - props: 单向传值、子组件不可修改
  - 依赖注入（provide/inject） 数据不是响应式的
- 子传父
  - $emit
- 兄弟组件
  - 共同的父组件传递数据
  - 事件总线
  - vuex
- $parent、$child、$refs
  - 不建议修改数据，调用事件（vant就这么用）


<instruct />

## v-show和v-if区别

## v-for key作用

[参考文档1: 掘金](https://juejin.cn/post/7069004247651581989)
[参考文档2：阿里云](https://developer.aliyun.com/article/1432915)

1. 准确性：在某些情况下，如果没有明确提供 :key，Vue 可能无法准确地跟踪和管理元素的身份。这可能导致意外的行为或渲染错误。
2. 动态组件：如果你在 v-for 循环中动态地创建或切换组件，那么 :key 是必需的。它用于确保组件的正确卸载和重新加载。
3. 可复用性：如果你打算在模板中复用相同的元素，并且它们在不同的循环中具有不同的状态，那么使用 :key 可以确保每个元素在其对应的循环中保持独立。
   
**为什么要使用 key 呢？主要原因如下：**

**DOM Diff 算法：**
Vue 使用虚拟 DOM 来优化页面渲染。

key 主要用于 DOM Diff 算法，它在同级比较时，会比较当前标签上的 key 和标签名。如果 key 和标签名都一样，Vue 只会移动元素，而不会重新创建或删除元素。如果没有设置 key，默认会采用就地复用策略。这意味着，如果数据顺序发生变化，Vue 不会移动 DOM 元素来匹配数据项的改变，而是简单地复用原来位置的每个元素。这可能导致不必要的更新，而设置了 key 可以避免这个问题。

**避免使用索引值作为 key**：尽量避免使用索引值（如 index）作为 key，因为当向数组中插入新元素时，索引会重新更新，导致不必要的更新。使用唯一标识（如 id）作为 key 更为合适，因为它不会受到数组顺序变化的影响。


**总之**，为了更高效地更新虚拟 DOM，Vue 中的列表循环需要加上 :key='唯一标识'，唯一标识最好是具有唯一性的值，如 id。这样可以确保在数据变化时，只更新需要更新的元素，而不会重新渲染整个列表。


## v-for和v-if优先级，如何一起使用
vue2中 v-for优先级更高，一起使用会造成性能浪费。

vue3中，v-if优先级更高，一起使用会不渲染。

**最优解** 使用filter过滤数据

## watch和created执行顺序
vue2中 watch先执行

vue3中 watch后执行

## 跨页面传参
1. 路由传参
   1. URL传参 (query)
   2. router传参 (动态路由params, 需要预设)

## vuex
