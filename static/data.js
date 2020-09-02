var arr = [
  {value: 6910000, name: '电', dw: 'kwh'},
  {value: 1000000, name: '水', dw: 'm3'},
  {value: 1992500, name: '蒸汽', dw: 't'},
  {value: 1648000, name: '清液处理', dw: 'm3'}
]

export default {
  pie: {
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      orient: 'vertical',
      formatter: function (name) {
        for (var a in arr) {
          if (arr[a].name === name) {
            return name + ' ' + arr[a].value + ' ' + arr[a].dw
          }
        }
        return name
      },
      top: 'middle',
      left: '63%',
      data: ['电', '水', '蒸汽', '清液处理']
    },
    series: [
      {
        name: '访问来源',
        center: ['31%', '50%'],
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          position: 'inner',
          formatter: '{d}%'
        },
        labelLine: {
          show: false
        },
        data: arr
      }
    ]
  },
  option: {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
}
