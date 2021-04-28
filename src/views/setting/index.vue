<template>
  <div>
    <el-transfer v-model="value" :data="data"></el-transfer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { key: '1', label: '111' },
        { key: '2', label: '222' },
        { key: '3', label: '333' }
      ],
      value: ['2']
    }
  }
}
</script>
