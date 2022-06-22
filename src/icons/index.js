import SvgIcon from '@/components/SvgIcon' // svg组件

const svgRequired = require.context('./svg', false, /\.svg$/) // svg图标文件夹
svgRequired.keys().forEach((item) => svgRequired(item)) // 加载svg图标文件

export default (app) => {
  // 导出svg组件
  app.component('svg-icon', SvgIcon) // 导出svg组件
}
