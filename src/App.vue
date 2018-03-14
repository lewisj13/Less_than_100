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
    margin: 100%;
    padding-top: 0;
}
#app {
  background-color: #fc4a1a;
  font-family: Myriad Pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: auto;
}
body, html {
  margin: auto;
  padding: auto;
  background-color: #fc4a1a;
}

</style>
