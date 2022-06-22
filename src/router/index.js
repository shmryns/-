import { createRouter, createWebHashHistory } from 'vue-router' // 创建路由

const routes = [
  // 路由
  {
    path: '/login', // 登录页
    name: 'Login', // 登录页名称
    component: () => import('../views/login') // 登录页组件
  },
  {
    path: '/', // 首页
    name: '/', // 首页名称
    component: () => import('../layout'), // 首页组件
    redirect: '/users', // 重定向到用户列表页
    children: [
      // 子路由
      {
        path: 'users', // 用户列表页
        name: 'users', // 用户列表页名称
        component: () => import('@/views/users/index.vue') // 用户列表页组件
      },
      {
        path: 'categories', // 分类列表页
        name: 'categories', // 分类列表页名称
        component: () => import('@/views/categories/index.vue') // 分类列表页组件
      },
      {
        path: 'goods', // 商品列表页
        name: 'goods', // 商品列表页名称
        component: () => import('@/views/goods/index.vue') // 商品列表页组件
      },
      {
        path: 'orders', // 订单列表页
        name: 'orders',
        component: () => import('@/views/orders/index.vue') // 订单列表页组件
      },
      {
        path: 'params', // 参数列表页
        name: 'params', // 参数列表页名称
        component: () => import('@/views/params/index.vue') // 参数列表页组件
      },
      {
        path: 'reports', // 报表列表页
        name: 'reports', // 报表列表页名称
        component: () => import('@/views/reports/index.vue') // 报表列表页组件
      },
      {
        path: 'rights', // 权限列表页
        name: 'rights', // 权限列表页名称
        component: () => import('@/views/rights/index.vue') // 权限列表页组件
      },
      {
        path: 'roles', // 角色列表页
        name: 'roles', // 角色列表页名称
        component: () => import('@/views/roles/index.vue') // 角色列表页组件
      }
    ]
  }
]

const router = createRouter({
  // 创建路由实例
  history: createWebHashHistory(), // 创建路由历史记录
  routes // 路由
})

export default router // 导出路由
