// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'
import jQuery from 'jquery'
import bImg from 'bootstrap-vue/es/components/image/img';

Vue.component('b-img', bImg);
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueSpotify, new Spotify())
