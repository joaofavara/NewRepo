import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from './axios/index';
// import VueAxios from 'vue-axios'
 
require('./assets/main.scss');

// Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
