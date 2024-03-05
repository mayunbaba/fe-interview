<template>
  <div>
    <h3>指令</h3>
    <div v-show="false">v-show</div>
    <div v-if="false">v-if</div>
  </div>
</template>
<script>
import child from "./child.vue";
export default {
  name: "instruct",
  components: {
    child,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
