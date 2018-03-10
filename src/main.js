// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'
import jQuery from 'jquery'

global.jQuery = jQuery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* Bootstrap */
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

/* Spotify */
Vue.use(VueSpotify, new Spotify())

Vue.config.productionTip = false
