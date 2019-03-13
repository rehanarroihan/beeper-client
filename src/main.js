import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false
alertify.defaults.notifier.position = 'top-right';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
