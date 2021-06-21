<template>
  <div class="sidebar-container">
    <div class="logo" @click="$router.push('/')">
      <img class="logoImg" :src="require('@/assets/logo.png')" alt="logo" />
      <transition name="el-zoom-in-center">
        <h1 v-show="sidebar.opened" class="logoText">Vue Element Admin</h1>
      </transition>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :default-active="$route.path"
        :collapse="isCollapse"
        :show-timeout="200"
        unique-opened
        text-color="#fff"
        background-color="#4a5a74"
        active-text-color="#409EFF"
      >
        <SidebarItem v-for="item in routers" :key="item.path" :index="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { constantRoutes } from '@/router'
import { getRoles } from '@/utils/auth'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data() {
    return {
      roles: '',
      routers: []
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {
    this.routers = this.filterRoutes()
  },
  methods: {
    // 路由过滤
    filterRoutes() {
      this.roles = getRoles()
      const routerList = []
      constantRoutes.forEach((item) => {
        if (item.path === '/') {
          routerList.push(...item.children)
        }
      })
      for (let i = 0; i < routerList.length; i++) {
        if (routerList[i].meta && routerList[i].meta.roles && !routerList[i].meta.roles.includes(this.roles)) {
          routerList.splice(i, 1)
          i--
        }
      }
      this.filterChildrens(routerList)
      return routerList
    },
    // 权限过滤子路由
    filterChildrens(routers) {
      const childrens = []
      routers.forEach((item) => {
        if ((item.meta && !item.meta.roles) || (item.meta && item.meta.roles && item.meta.roles.includes(this.roles))) {
          childrens.push(item)
          if (item.children) {
            this.filterChildrens(item.children)
          }
        }
      })
      routers.length = 0
      routers.push(...childrens)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.logo {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background-color: #2b2f3a;
  justify-content: center;
  align-items: center;

  .logoImg {
    width: 32px;
    height: 32px;
  }

  .logoText {
    display: inline-block;
    height: 50px;
    margin-left: 12px;
    font-size: 14px;
    line-height: 50px;
    color: #fff;
  }
}
</style>
