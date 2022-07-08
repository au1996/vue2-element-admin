<template>
  <div>
    <Chart height="300px" />
    <Chart :e-data="edataObj" height="500px" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/index.vue'

export default {
  components: { Chart },
  data() {
    return {
      edataObj: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {},
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            data: []
          }
        ]
      }
    }
  },
  created() {
    const list = []
    for (var i = 0; i <= 100; i++) {
      var theta = (i / 100) * 360
      var r = 5 * (1 + Math.sin((theta / 180) * Math.PI))
      list.push([r, theta])
    }
    this.edataObj.series[0].data = list
  }
}
</script>
