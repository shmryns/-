import { createStore } from 'vuex' // 导入vuex
import app from './modules/app' // 导入app模块
import getters from './getters' // 导入getters
export default createStore({
  // 导出store
  modules: {
    // 导出模块
    app // 导出app模块
  },
  getters // 导出getters
})
