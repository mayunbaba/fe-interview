<template>
  <div class="child-container" data-title="我是子组件">
    <div>
      <h5>props传入的数据是响应式的，不建议修改父组件数据</h5>
      <span>props：{{ num }}</span>
    </div>
    <div>
      <h5>子组件修改父组件数据：</h5>
      <button class="button-s" @click="$emit('update:num', 100)">v-model配合$emit。sync vue3已废弃</button>
      <button class="button-s danger" @click="$parent.num++">$parent 不建议（造成代码无法维护）</button>
    </div>
    <div>
      <h5>provide注入的数据不是响应式的，一般用来调用父组件方法</h5>
      <span>provide：{{ provideNum }}</span>
      <button class="button-s" @click="add">父组件注入的add方法，相当于调用父组件方法</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lifeCycle',
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  inject: ['provideNum', 'add'],
  data() {
    return {
      role: 'child'
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.role, 'child')
  },
  created() {
    console.log('created', this.role)
  },
  beforeMount() {
    console.log('beforeMount', this.role)
  },
  mounted() {
    console.log('mounted', this.role)
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.role)
  },
  updated() {
    console.log('updated', this.role)
  },
  beforeDestroy() {
    console.log('beforeDestroy', this.role)
  },
  destroyed() {
    console.log('destroyed', this.role)
  }
}
</script>
<style scoped>
.child-container {
  background-color:aqua;
  padding: 20px;
  text-align: center;
  &::before {
    content: attr(data-title);
  }
}
</style>