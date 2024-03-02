<template>
  <div class="container">
    <header>Header</header>
    <div class="content-wrapper">
      <div class="sidebar">Left Sidebar</div>
      <div class="content">Content</div>
      <div class="sidebar">Right Sidebar</div>
    </div>
    <footer>Footer</footer>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header,
footer {
  height: 50px;
  background-color: lightgray;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  background-color: lightblue;
  padding: 20px;
}

.sidebar {
  width: 200px;
  background-color: lightgreen;
  padding: 20px;
}
</style>
