import request from '../utils/request'

let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = location.host
}

export function login(data) {
  return request({
    url: `${baseURL}/api/user/login`,
    method: 'post',
    data
  })
}

export function getUserList(params) {
  return request({
    url: `${baseURL}/api/user/list`,
    method: 'get',
    params
  })
}
