<template>
  <div>轮询组件demo</div>
</template>
<script>
import Polling from './polling.js'
export default {
  data() {
    return {
      pollingInstance: null,
    }
  },
  created() {
    this.pollingInstance = new Polling({
      getData: this.fetchData,
      interval: 1000,
    })
    this.pollingInstance.start()
  },
  beforeDestroy() {
    this.pollingInstance.destroy()
  },
  methods: {
    async fetchData() {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(Math.random())
        }, 3000)
      })
      // fetch('https://www.baidu.com/')
    },
  }
}
</script>