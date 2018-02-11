import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Music from '@/components/Music'
import About from '@/components/About'


Vue.use(Router);
Vue.use(BootstrapVue)

export default new Router({
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
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
