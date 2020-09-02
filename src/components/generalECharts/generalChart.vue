<template>
  <div class="echarts-wrap">
    <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="overview_pie"/>
  </div>
</template>

<script>
import echarts from 'echarts/dist/mini_echarts'
import mpvueEcharts from 'mpvue-echarts'
import data from '../../../static/data'

let chart = null

export default {
  name: 'generalChart',
  components: {
    mpvueEcharts
  },
  data() {
    return {
      echarts,
      onInit: function (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        // ECharts 配置项
        chart.setOption(data.pie)
        return chart // 返回 chart 后可以自动绑定触摸操作
      }
    }
  }
}
</script>

<style scoped>
.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>
