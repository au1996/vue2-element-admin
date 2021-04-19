import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401'
    }
  },
  {
    path: '',
    component: () => import('@/layout/index.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },
      {
        path: 'setting',
        component: () => import('@/views/setting'),
        name: 'setting',
        meta: { title: '设置', icon: 'el-icon-s-tools', roles: ['admin'] }
      }
    ]
  }
]

export const asyncRoutes = []

const router = new VueRouter({
  routes: constantRoutes
})

export default router
