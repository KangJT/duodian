
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import api from '@/api'
import constrou from './components/index.js'
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import '_lib-flexible@0.3.2@lib-flexible'
import store from '@/store'
import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper)
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
