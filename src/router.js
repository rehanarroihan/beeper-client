import Vue from 'vue'
import Router from 'vue-router'

import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

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
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
        },
      ],
    },
    {
      path: "*",
      component: NotFound
    }
  ],
})
