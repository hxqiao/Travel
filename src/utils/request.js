import axios from 'axios'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 0,
  headers: { 'cache-control': 'no-cache' }
})

// request拦截器
service.interceptors.request.use(config => {
  const token = store.getters.token
  if (token) {
    config.headers['Authorization'] = 'Bearer' + token
  }
  return config
}, error => {
  console.log('request err' + error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  const res = response
  if (res.data.ret !== true) {
    console.log('interceptor err' + res.msg)
    return Promise.reject(res.msg)
  }
  return res
}, error => {
  console.log('interceptor err' + error)
  return Promise.reject(error)
})

export default service
