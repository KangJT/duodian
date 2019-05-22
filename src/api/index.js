import {post, get} from '@/utils/request'

const api = {

  user: {
    // 登录
    getLogin: (params) => post('/api/user/login', params),
    // 获取用户登录信息
    getUserInfo: (params) => get('/api/user/info', params),
    // 获取 验证码
    getMsgCode: (phone) => get('/api/user/msg_code', phone)
  },
  classify: {

  }
}
export default {
  api,
  install (Vue) {
    Vue.prototype.$api = api
  }
}
console.log(api, 'api')
