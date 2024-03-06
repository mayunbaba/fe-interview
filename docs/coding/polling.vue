<template>
  <div>
  </div>
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
    this.startPolling()
    this.fetchData()
  },
  beforeDestroy() {
    this.stopPolling()
  },
  methods: {
    startPolling() {
      this.timer = setInterval(() => {
        !document.hidden && this.fetchData()
      }, 1000)
    },
    stopPolling() {
      clearInterval(this.timer)
    },
    fetchData() {
      fetch('https://www.baidu.com/')
    },
  }
}
</script>