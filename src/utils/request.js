import axios from 'axios'
const request = axios.create({
  baseURL: '',
  timeout: 1000

})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
// 发送请求
  console.log('显示')
  return config
}, function (error) {
  // 对请求错误
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  console.log('loading关闭')
  // 响应数据
  return response.data
}, function (error) {
  const status = error.response.status
  if (status >= 500) {
    alert('服务器繁忙请稍后再试!!!不要走开噢')
  } else if (status >= 400) {
    alert(error.response.data.message)
  }
  console.dir(error)
  // 响应错误
  return Promise.reject(error)
})

const get = (url, data) => request.get(url, {
  params: data
})

const post = (url, data) => request.post(url, data)

export {
  get,
  post
}
