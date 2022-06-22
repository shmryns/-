import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant' // 存储token的key

// 登录时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now()) // 设置时间
}

// 获取
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME) // 获取时间
}

// 是否已经过期
export const diffTokenTime = () => {
  // 是否已经过期
  const currentTime = Date.now() // 当前时间
  const tokenTime = getTokenTime() // token时间
  return currentTime - tokenTime > TOKEN_TIME_VALUE // 当前时间 - token时间 > TOKEN_TIME_VALUE
}
