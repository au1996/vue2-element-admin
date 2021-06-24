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
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting'),
        name: 'Setting',
        meta: { title: '设置', icon: 'lock', roles: ['admin'] }
      },
      {
        path: '/menu',
        component: () => import('@/views/menu/index.vue'),
        name: 'Menu',
        meta: { title: '菜单', icon: 'tree-table', roles: ['admin', 'editor'] },
        redirect: '/menu2',
        children: [
          {
            path: '/menu1',
            component: () => import('@/views/menu/menu10.vue'),
            name: 'Menu1',
            meta: { title: '菜单1', roles: ['admin', 'editor'] },
            redirect: '/menu1-2',
            children: [
              {
                path: '/menu1-1',
                component: () => import('@/views/menu/menu11.vue'),
                name: 'Menu1-1',
                meta: { title: '菜单1-1', roles: ['admin'] }
              },
              {
                path: '/menu1-2',
                component: () => import('@/views/menu/menu12.vue'),
                name: 'Menu1-2',
                meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
              }
            ]
          },
          {
            path: '/menu2',
            component: () => import('@/views/menu/menu2.vue'),
            name: 'Menu2',
            meta: { title: '菜单2', roles: ['admin', 'editor'] }
          }
        ]
      },
      {
        path: '/xueyue',
        name: 'Xueyue',
        component: () => import('@/views/xueyue/index.vue'),
        meta: { title: '雪月', icon: 'star', roles: ['admin', 'editor'] }
      }
    ]
  }
]

export const asyncRoutes = []

const router = new VueRouter({
  mode: 'history',
  routes: constantRoutes
})

export default router
