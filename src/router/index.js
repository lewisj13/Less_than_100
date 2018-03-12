import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Music from '@/components/Music'
import authorize from '@/components/authorize'


Vue.use(Router);
Vue.use(BootstrapVue)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: authorize
    }
  ]
})
