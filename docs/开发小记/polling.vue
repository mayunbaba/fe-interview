<template>
  <div>轮询组件demo</div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      listData: []
    }
  },
  mounted() {
    this.fetchData()
    this.startPolling()
    window.addEventListener('visibilitychange', this.fetchData)
  },
  beforeDestroy() {
    this.stopPolling()
    window.removeEventListener('visibilitychange', this.fetchData)
  },
  methods: {
    startPolling() {
      this.timer = setInterval(() => {
        this.fetchData()
      }, 5000)
    },
    stopPolling() {
      clearInterval(this.timer)
    },
    fetchData() {
      if (document.hidden) return
      console.log('fetchData')
      // fetch('https://www.baidu.com/')
    },
  }
}
</script>