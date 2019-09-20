import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'

import axios from 'axios'
Vue.prototype.axios = axios;

import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import loading from '@/components/loading'
Vue.component('loading',loading);

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
