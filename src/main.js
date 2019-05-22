
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import api from '@/api'
import constrou from './components/index.js'
import store from '@/store'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import '_lib-flexible@0.3.2@lib-flexible'
import '@/assets/font_347965_t3ra0og8n2l3ow29/iconfont.css'
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.use(api)
Vue.use(Vuex)
Vue.use(constrou)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
