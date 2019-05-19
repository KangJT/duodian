import {post} from '@/utils/request'

const api = {
  user: {
    user: (obj) => post('/api/user/info', {
      phone: obj.phone,
      code: obj.code
    })
  }
  // identify: {
  //   identify: (phoneNumber) => get('/api/user/msg_code', phoneNumber)
  // }
}
export default {
  api,
  install (Vue) {
    Vue.prototype.$api = api
  }
}
