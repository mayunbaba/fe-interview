<template>
  <div class="container" data-title="我是父组件">
    <div>props: {{ num }}</div>
    <div>
      provide: {{ provideNum }}
    </div>
    <button class="button-s" @click="add">+</button>
    <child v-model:num="num" />
  </div>
</template>
<script>
import child from "./child.vue";
export default {
  name: "lifeCycle",
  components: {
    child,
  },
  provide() {
    return {
      provideNum: this.provideNum,
      add: this.add,
    };
  },
  data() {
    return {
      role: "father",
      num: 0,
      provideNum: 0,
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
      this.provideNum++;
      console.log(this.num, 'num');
    },
  }
};
</script>
<style scoped>
.container {
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  &::before {
    content: attr(data-title);
  }
}
</style>
<style>
.button-s {
  padding: 0 .5em;
  font-size: 14px;
  cursor: pointer;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;
  &.danger {
    background-color: #f56c6c;
  }
}
</style>
