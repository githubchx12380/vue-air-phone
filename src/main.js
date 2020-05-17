import Vue from 'vue'

import App from './App.vue'

import router from './router'

import '@/assets/css/init.css'

import store from './store'

import Vant from 'vant';

import animated from 'animate.css' 

import 'vant/lib/index.css';

Vue.use(animated)

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
