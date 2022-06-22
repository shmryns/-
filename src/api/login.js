import request from './request' // 引入request.js

export const login = (data) => {
  // 登录
  return request({
    // 返回promise
    url: '/login', // 登录接口
    method: 'POST', // post请求
    data // 参数
  })
}
