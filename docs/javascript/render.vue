<template>
  <div class="button-wrap">
    <button @click="addDom()" class="btn button-s">添加dom按钮</button>
  </div>
</template>
<script>
// 死眠函数
function die(time) {
  const start = Date.now();
  while (Date.now() - start < time) {}
}
die(3000);
export default {
  methods: {
    addDom,
  },
}

function addDom() {
  console.log("点击了添加dom按钮");
  const btn = document.querySelector(".btn");
  btn.innerHTML = "添加dom按钮 " + new Date().toLocaleString();
  const p = document.createElement("p");
  p.innerHTML = "我是新添加的dom " + new Date().toLocaleString();
  const buttonWrap = document.querySelector(".button-wrap");
  buttonWrap.appendChild(p);
  die(5000);
}
</script>
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
}
</style>
