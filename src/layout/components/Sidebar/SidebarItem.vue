<template>
  <div v-if="item.meta && !item.hide">
    <div class="menu-wrapper">
      <!-- 一级菜单 -->
      <el-menu-item :index="item.path" v-if="!item.children" :class="{ 'submenu-title-noDropdown': !isNest }">
        <svg-icon v-if="item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.path">
        <!-- 二级菜单 -->
        <template slot="title">
          <svg-icon v-if="item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <!-- 三级菜单 -->
        <template v-for="child in item.children">
          <sidebar-item
            v-if="child.children && child.children.length > 0"
            :key="child.path"
            :index="child.path"
            :is-nest="true"
            :item="child"
            class="nest-menu"
          ></sidebar-item>
          <el-menu-item v-else :index="child.path" :key="child.path">
            <svg-icon v-if="child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
            <span slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </div>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children) {
      const showingChildren = children.filter(item => {
        this.onlyOneChild = item
        return true
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths)
    }
  }
}
</script>

<style scoped="scoped"></style>
