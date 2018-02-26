<template>
  <div class="about">
    <div>
    <b-nav id='nav' pills>
      <b-nav-item v-bind:to="{name: 'Home'}">Home</b-nav-item>
      <b-nav-item v-bind:to="{name: 'Music'}">Music</b-nav-item>
      <b-nav-item v-bind:to="{name: 'About'}">About</b-nav-item>
        </b-nav>
          </div>

      <b-jumbotron id='info' header="Why this App?"  >

      <p> This app is a fun way to discover new music through Spotify. With the help of the Spotify web API and Vue.
        This project has come to life. The main goal was to create a fun space to discover new music.
        So come explore and find something you didnt know existed in the mircocosm that is Spotify.</p>
      </b-jumbotron>

  </div>


</template>

<script>
import axios from "axios";



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

#info {
  text-align: center;
}


</style>
