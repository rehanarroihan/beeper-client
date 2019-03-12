import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import Holla from './components/Holla.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/helo',
      name: 'helo',
      component: Hello
    },
    {
      path: '/hola',
      name: 'hola',
      component: Holla
    }
  ]
})
