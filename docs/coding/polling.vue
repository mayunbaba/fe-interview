<template>
  <div>
    <ul>
      <li v-for="item in listData">{{ item }} {{ new Date().toLocaleTimeString() }}</li>
    </ul>
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
        this.fetchData()
      }, 1000)
    },
    stopPolling() {
      clearInterval(this.timer)
    },
    fetchData() {
      this.listData = [
        Math.random(),
        Math.random(),
        Math.random(),
      ]
    },
  }
}
</script>