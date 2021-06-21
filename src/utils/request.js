import axios from 'axios'
import { Message } from 'element-ui'
import { getToken, removeToken, removeRoles } from './auth'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = getToken()
    // 如果有token 就携带tokon
    if (token) {
      config.headers['Authorization'] = 'Bearer__' + token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      removeToken()
      removeRoles()
      location.reload()
    }
    Message({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service
