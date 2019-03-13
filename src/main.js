import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CustomAuth from './plugins/Auth.js';

Vue.use(CustomAuth);

Vue.config.productionTip = false;
alertify.defaults.notifier.position = 'top-right';

//route guard
router.beforeEach(function(to, from, next) {
  if(to.matched.some(function(record) { return record.meta.requireGuest }) && Vue.auth.loggedIn()) {
    next({
      path: '/home'
    });
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
