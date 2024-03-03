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
  - 父：beforeCreate、created、beforeMounted
  - 子：beforeCreate、created、beforeMounted、mounted
  - 父：mounted
  
- 发送请求放在哪个生命周期
  - 官方没有明确规定，`created、 mounted`都可以，created可以使请求早发起几毫秒（渲染页面的时间），mounted中DOM元素已经挂载完成，做一些相关操作更加方便。根据页面渲染的先后顺序，和父子组件生命周期调整。
- keep-alive
  - activated
  - deactivated

## 关于组件
- 组件传值方式
  - 父传子
    - props: 单向传值、子组件不可修改
    - $parent：直接取值，子组件可修改父组件值（不建议） 
    - 依赖注入（provide/inject） 数据不是响应式的
  - 子传父
    - $emit
  - 兄弟组件
    - 共同的父组件传递数据
    - 事件总线
    - vuex
  - $parent、$refs

