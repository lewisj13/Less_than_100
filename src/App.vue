<template>
  <div id="app">

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
    margin: 0;
    padding-top: 0;
}
#app {
  background-color: #fc4a1a;
  font-family: Myriad Pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html {
  margin: 0;
  padding: 0;
  background-color: #fc4a1a;
}

</style>
