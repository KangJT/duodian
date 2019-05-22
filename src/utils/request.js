import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
// import router from '../router/index'
// import store from '../store/index'
Vue.use(Toast)

const request = axios.create({
  baseURL: ''
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Authorization'] = window.localStorage.getItem('id')
  config.url = process.env.NODE_ENV === 'development' ? `/api${config.url}` : config.url
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  console.log(error.response, 'hhhhhhh')
  if (error.response) {
    switch (error.response.status) {
      // case 401:
      //   // 返回 401 清除token信息并跳转到登录页面
      //   store.commit('clearToken')
      //   router.replace({
      //     path: 'login',
      //     query: {redirect: router.currentRoute.fullPath}
      //   })
      //   break
      case 402:
        Toast.fail(error.response.data.msg)
    }
  }
  return Promise.reject(error.response.data)
})

export const get = (url, data) => {
  return request.get(url, {params: data})
}
export const post = (url, data) => {
  return request.post(url, data)
}

// import axios from 'axios'
// const request = axios.create({
//   baseURL: '',
//   timeout: 1000

// })
// // 添加请求拦截器
// request.interceptors.request.use(function (config) {
// // 发送请求
//   console.log('显示')
//   return config
// }, function (error) {
//   // 对请求错误
//   return Promise.reject(error)
// })

// // 添加响应拦截器
// request.interceptors.response.use(function (response) {
//   console.log('loading关闭')
//   // 响应数据
//   return response.data
// }, function (error) {
//   const status = error.response.status
//   if (status >= 500) {
//     alert('服务器繁忙请稍后再试!!!不要走开噢')
//   } else if (status >= 400) {
//     alert(error.response.data.message)
//   }
//   console.dir(error)
//   // 响应错误
//   return Promise.reject(error)
// })

// const get = (url, data) => request.get(url, {
//   params: data
// })

// const post = (url, data) => request.post(url, data)

// export {
//   get,
//   post
// }
