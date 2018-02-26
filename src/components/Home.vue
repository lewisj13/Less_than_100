<template>
  <div class="home">
    <div>

      <b-nav id='nav' pills>
        <b-nav-item v-bind:to="{name: 'Home'}">Home</b-nav-item>
        <b-nav-item v-bind:to="{name: 'Music'}">Music</b-nav-item>
        <b-nav-item v-bind:to="{name: 'About'}">About</b-nav-item>
    </b-nav>
          </div>
<div>
  <b-jumbotron id='main' header="Find Music to Dance" lead="Find music on Spotify that has been played 100 times or less." >

  <b-btn id='button2' v-bind:to="{name: 'Music'}">Find Music</b-btn>
</b-jumbotron>
</div>

</div>
</template>

<script>


</script>

<style>

#nav {
  background-color: #4ABDAC;
  font-family: trebuchet;
  border: none;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
}

#nav active {
  background-color: #f7b733;
}

#button2 {
  background-color: #4ABDAC;
  border: none;
}

#main {
  padding-top: 45px;
  border-top: solid;

}

#footer {
  background-color: gray;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
