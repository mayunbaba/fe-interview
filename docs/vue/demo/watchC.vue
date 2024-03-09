<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  watch: {
    message: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log('watcher执行了');
      }
    }
  },
  created() {
    console.log('created执行了');
  },
};
</script>
