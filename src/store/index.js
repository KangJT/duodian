
import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vue/dist/logger'
import user from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user
  }
  // plugins: [createLogger()]
})
