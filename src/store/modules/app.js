import { login as loginApi } from '@/api/login' // 登录
import router from '@/router' // 路由
import { setTokenTime } from '@/utils/auth' // token时间
export default {
  // 创建store
  namespaced: true, // 命名空间
  state: () => ({
    // 初始化state
    token: localStorage.getItem('token') || '', // token
    siderType: true, // 左侧菜单栏类型
    lang: localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    // 初始化mutations
    setToken(state, token) {
      // 设置token
      state.token = token // 设置token
      localStorage.setItem('token', token) // 存储token
    },
    changeSiderType(state) {
      // 改变左侧菜单栏类型
      state.siderType = !state.siderType
    },
    changLang(state, lang) {
      // 改变语言
      state.lang = lang // 设置语言
    }
  },
  actions: {
    // 初始化actions
    login({ commit }, userInfo) {
      // 登录
      return new Promise((resolve, reject) => {
        // 异步操作
        loginApi(userInfo) // 登录api 返回promise
          .then((res) => {
            // 成功
            commit('setToken', res.token) // 设置token
            setTokenTime() // 设置token时间
            router.replace('/') // 跳转到首页
            resolve() // 成功
          })
          .catch((err) => {
            // 失败
            reject(err) // 失败
          })
      })
    },
    // 退出
    logout({ commit }) {
      commit('setToken', '') // 设置token
      localStorage.clear() // 清除localStorage
      router.replace('/login') // 跳转到登录页
    }
  }
}
