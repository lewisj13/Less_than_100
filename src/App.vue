<template>
  <div id="app">
    <img id='image' src="./assets/logo1.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
template {
    background-color: #fc4a1a;
}
#app {
  font-family: Myriad Pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html {
  background: #fc4a1a;
  margin: 0;
  padding: 0;
}
</style>
