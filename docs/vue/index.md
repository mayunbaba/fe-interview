<script>
import lifeCycle from './demo/lifeCycle.vue'

export default {
  components: {
    lifeCycle
  },
}
</script>
<lifeCycle />

## vue2生命周期
```
创建阶段
beforeCreated
created
挂载阶段（渲染dom）
beforeMount
mounted
更新阶段
beforeUpdate
updated
销毁阶段
beforeDestory
destroyed
```

- 父组件引入子组件，生命周期的执行顺序是
  
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

## v-show和v-if区别

## 为什么v-for需要使用key

## v-for和v-if优先级，如何一起使用

## 

