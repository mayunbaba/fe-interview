<template>
  <div class="container">
    <div class="face">
      <div class="dot"></div>
    </div>
    <div class="face">
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="face">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="face">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="face">
      <div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div>
        <div class="dot"></div>
      </div>
      <div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="face">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f0f0f0;
  gap: 40px;
}
.face {
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #333;
  border-radius: 10px;
  overflow: hidden;
}
.dot {
  width: 30%;
  height: 30%;
  background-color: #000;
  border-radius: 50%;
}

.face:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.face:nth-child(2) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.face:nth-child(3) {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  box-sizing: border-box;
  .dot:nth-child(1) {
    align-self: flex-start;
  }
  .dot:nth-child(2) {
    align-self: center;
  }
  .dot:nth-child(3) {
    align-self: flex-end;
  }
}

.face:nth-child(4) {
  display: flex;
  justify-content: space-around;
  gap: 10%;
  align-items: center;
}

.face:nth-child(5) {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  > div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .dot {
    width: 100%;
    height: 30%;
    background-color: #000;
    border-radius: 50%;
  }
}

.face:nth-child(6) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
