import Vue from 'vue'
import Router from 'vue-router'

import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

import Home from './components/home/Home.vue';

import NotFound from './components/Page404.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/login',
      component: Auth,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: { requireGuest: true },
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
          meta: { requireGuest: true },
        },
      ],
    },
    {
      path: "/home",
      component: NotFound,
      components: Home
    }
    {
      path: "*",
      component: NotFound
    },
  ],
})
