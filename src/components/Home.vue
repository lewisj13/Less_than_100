<template>
  <div class="home">

      <h1>Less Than 100</h1>
      <h2 id="subtitle">Find Music that is undiscovered and makes you dance.</h2>
      <p>
        <router-link v-bind:to="{name: 'Music'}">Music</router-link>
        &bull;
        <router-link v-bind:to="{name: 'About'}">About</router-link>
      </p>

      <p> Find music on Spotify that has been played 100 times or less.</p>
       

  </div>
</template>
