<template>
  <div ref="echartMain" :style="{ width: width, height: height }">雪月测试</div>
</template>

<script>
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, TitleComponent, TooltipComponent, PolarComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  PolarComponent,
  LegendComponent
])

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    eData: {
      type: Object,
      default: () => {
        return {
          title: {
            text: 'Chart 标题'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      }
    }
  },
  mounted() {
    const myChart = echarts.init(this.$refs.echartMain)
    myChart.setOption(this.eData)
  }
}
</script>
