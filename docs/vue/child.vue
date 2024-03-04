<template>
  <div></div>
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