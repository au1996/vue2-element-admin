<template>
  <div class="settingView">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="item in list" :key="item.name" :label="item.label" :name="item.name">
        {{ item.label + '指令' }}
      </el-tab-pane>
    </el-tabs>
    <Debounce v-if="activeName === 'debounce'" />
    <Throttle v-if="activeName === 'throttle'" />
    <Permission v-if="activeName === 'permission'" />
    <LazyLoad v-if="activeName === 'lazyLoad'" />
    <WaterMarker v-if="activeName === 'waterMarker'" />
    <Draggable v-if="activeName === 'draggable'" />
    <Copy v-if="activeName === 'copy'" />
  </div>
</template>

<script>
import Debounce from './components/Debounce'
import Throttle from './components/Throttle'
import Permission from './components/Permission'
import LazyLoad from './components/LazyLoad'
import WaterMarker from './components/WaterMarker'
import Draggable from './components/Draggable'
import Copy from './components/Copy'
export default {
  components: { Debounce, Throttle, Permission, LazyLoad, WaterMarker, Draggable, Copy },
  data() {
    return {
      activeName: 'debounce',
      list: [
        { label: '防抖', name: 'debounce' },
        { label: '节流', name: 'throttle' },
        { label: '权限', name: 'permission' },
        { label: '懒加载', name: 'lazyLoad' },
        { label: '水印', name: 'waterMarker' },
        { label: '拖拽', name: 'draggable' },
        { label: '复制', name: 'copy' }
      ]
    }
  }
}
</script>
