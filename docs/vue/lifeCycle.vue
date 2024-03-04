<template>
  <div>
    lifeCycle
    <div>{{ num }}</div>
    <button @click="add">+</button>
    <child :num="num" />
  </div>
</template>
<script>
import child from "./child.vue";
export default {
  name: "lifeCycle",
  components: {
    child,
  },
  data() {
    return {
      role: "father",
      num: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.role, "father");
  },
  created() {
    console.log("created", this.role);
  },
  beforeMount() {
    console.log("beforeMount", this.role);
  },
  mounted() {
    console.log("mounted", this.role);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.role);
  },
  updated() {
    console.log("updated", this.role);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.role);
  },
  destroyed() {
    console.log("destroyed", this.role);
  },
  methods: {
    add() {
      this.num++;
      console.log(this.num);
    },
  }
};
</script>
