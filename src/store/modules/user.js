import api from '@/api'
import Vue from 'vue'
// 存储数据封装的一个方法
import storage from '@/utils/storage'
import { Notify } from 'vant'
Vue.use(Notify)
const state = {
  info: {}, // ？
  msgCode: '', // 验证码
  token: '',
  userInfo: [], // 用户信息
  gps_location: storage.getItem('location')
}
// 同步改变
const mutations = {
  updateState (state, payload) {
    for (let key in payload) {
      state[key] = payload[key]
    }
  },

  setGps (state, payload) {
    state.gps_location = payload
    storage.setItme('loacation', payload)
  }
}

// 异步请求
const actions = {
  // 获取用户信息
  getUserInfo ({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await api.api.user.getUserInfo(payload)
      console.log(data, 'stateuser')
      commit('updateState', state.userInfo.push(data))
      resolve(data)
    })
  },
  // 登录
  getLogin ({commit}, payload) {
    console.log(payload, '123')
    return new Promise(async (resolve, reject) => {
      let data = await api.api.user.getLogin(payload)
      console.log(data, 'stateuser')
      if (data.code === 0) {
        Notify({
          message: data.msg,
          duration: 1000,
          background: '#ff712b'
        })
        window.history.go(-1)
        state.token = document.cookie.split('=')[1]
        resolve(document.cookie.split('=')[1])
      }
      // console.log(data, 'stateuser')
      // commit('updateState', data)
      // resolve(data)
    })
  },
  // 获取验证码
  getMsgCode ({commit}, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await api.api.user.getMsgCode(payload)
      console.log(data, '获取烟瘴吗验证码')
      commit('updataState', {
        msgCode: data.msg_code
      })
      resolve(data)
    })
  }
}

export default {
  // 命名空间
  namespaced: true,
  state,
  actions,
  mutations
}
