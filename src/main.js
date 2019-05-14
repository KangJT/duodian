
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import constrou from './components/index.js'
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import '_lib-flexible@0.3.2@lib-flexible'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(constrou)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
