<template>
  <div style="background-color: #4a5a74;padding-top: 100px;">
    <div class="logo">
      <p v-show="$store.state.app.sidebar.opened"></p>
    </div>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        :router="true"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#4a5a74"
        text-color="#fff"
        active-text-color="#409EFF"
        unique-opened
      >
        <sidebar-item
          v-for="(item, index) in routers"
          :class="{ ddd: routers.length === index + 1 }"
          :key="item.name"
          :index="item.path"
          :item="item"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { constantRoutes } from '@/router'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  data() {
    return {
      routers: []
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    // 是否显示
    formatRouters(routes) {
      let arr = []
      for (let i = 0; i < routes.length; i++) {
        if (!routes[i].hide) {
          arr.push(routes[i])
        }
        if (routes[i].path === '/') {
          arr = [...arr, ...routes[i].children]
        }
      }
      return arr
    },
    // 权限过滤
    filterRoutes() {
      let arr = this.formatRouters(constantRoutes)
      let routes = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].meta && arr[i].meta.roles && arr[i].meta.roles.indexOf(+localStorage.userType) !== -1) {
          routes.push(arr[i])
        }
      }
      for (let i = 0; i < routes.length; i++) {
        let arr2 = []
        if (routes[i].children) {
          for (let j = 0; j < routes[i].children.length; j++) {
            if (
              routes[i].children[j].meta &&
              routes[i].children[j].meta.roles &&
              routes[i].children[j].meta.roles.indexOf(+localStorage.userType) !== -1
            ) {
              arr2.push(routes[i].children[j])
            }
          }
          routes[i].children = [...arr2]
        }
      }
      return routes
    },
    // 排序
    sortRoutes() {
      let arr = this.filterRoutes()
      arr.sort((item1, item2) => {
        return item1.meta.sort - item2.meta.sort
      })
      return arr
    }
  },
  mounted() {
    this.routers = this.sortRoutes()
  }
}
</script>

<style scoped="scoped">
.logo {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  background-color: #3e4e68;
}

.logo p {
  width: 160px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: url(../../../assets/logo.png) no-repeat;
}
</style>
