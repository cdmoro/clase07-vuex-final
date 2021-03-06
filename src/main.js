import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
