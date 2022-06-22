import axios from 'axios' // 引入axios
import { ElMessage } from 'element-plus' // 引入element-ui的message插件
import { diffTokenTime } from '@/utils/auth' // 引入token时间差
import store from '@/store' // 引入store
const service = axios.create({
  // 创建axios实例
  baseURL: process.env.VUE_APP_BASE_API, // 设置基础路径
  timeout: 5000 // 设置超时时间
})

service.interceptors.request.use(
  // 请求拦截器
  (config) => {
    // config为请求配置
    if (localStorage.getItem('token')) {
      // 如果有token
      if (diffTokenTime()) {
        // 如果token时间差小于30分钟
        store.dispatch('app/logout') // 退出登录
        return Promise.reject(new Error('token 失效了')) // 返回promise失败
      }
    }
    config.headers.Authorization = localStorage.getItem('token') // 设置请求头
    return config // 返回配置
  },
  (error) => {
    // 错误处理
    return Promise.reject(new Error(error)) // 返回promise失败
  }
)

service.interceptors.response.use(
  // 响应拦截器
  (response) => {
    // response为响应配置
    const { data, meta } = response.data // 获取data和meta
    if (meta.status === 200 || meta.status === 201) {
      // 如果状态码为200或201
      return data // 返回data
    } else {
      // 如果状态码不为200或201
      ElMessage.error(meta.msg) // 显示错误信息
      return Promise.reject(new Error(meta.msg)) // 返回promise失败
    }
  },
  (error) => {
    // 错误处理
    console.log(error.response) // 打印错误信息
    error.response && ElMessage.error(error.response.data) // 显示错误信息
    return Promise.reject(new Error(error.response.data)) // 返回promise失败
  }
)
export default service // 导出service
