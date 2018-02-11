<template>
  <div class="home">

      <h1>Less Than 100</h1>
      <h2 id="subtitle">Find Music that is undiscovered and makes you dance.</h2>
      <p>
        <router-link v-bind:to="{name: 'Music'}">Music</router-link>
        &bull;
        <router-link v-bind:to="{name: 'About'}">About</router-link>
      </p>

  </div>
</template>
