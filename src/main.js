import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Auth from './plugins/Auth';

Vue.config.productionTip = false
alertify.defaults.notifier.position = 'top-right';
Vue.use(Auth);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
