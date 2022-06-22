import router from './index' // 导入路由
import store from '@/store' // 导入vuex

const whiteList = ['/login'] // 白名单
router.beforeEach((to, from, next) => {
  // 路由拦截器
  if (store.getters.token) {
    // 判断是否有token
    if (to.path === '/login') {
      // 判断是否是登录页
      next('/') // 跳转到首页
    } else {
      // 如果不是登录页
      next() // 执行下一个函数
    }
  } else {
    // 如果没有token
    if (whiteList.includes(to.path)) {
      // 判断是否在白名单中
      next() // 执行下一个函数
    } else {
      // 如果不在白名单中
      next('/login') // 跳转到登录页
    }
  }
})
