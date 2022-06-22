export default {
  // 导出getters
  token: (state) => state.app.token, // 获取token
  siderType: (state) => state.app.siderType, // 获取左侧菜单栏类型
  lang: (state) => state.app.lang // 获取语言
}
