import request from './request' // 引入request.js

export const menuList = () => {
  // 获取菜单列表
  return request({
    // 返回promise
    url: '/menus' // 菜单接口
  })
}
