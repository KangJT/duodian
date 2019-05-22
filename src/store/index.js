
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 挂载modules
import user from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user
  },

  state: {
    selectCity: '',
    token: document.cookie
  },
  mutations: {
    clearToken (state) {
      state.token = ''
    }
  },
  plugins: [createLogger()]
})
