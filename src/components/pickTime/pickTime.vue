<template>
  <div>
    <van-popup :show="showTimeBlock" position="bottom" custom-style="height: 40%;">
      <van-datetime-picker v-if="monthAndYear.code === '0402701'" type="year-month" :value="currentDate" :max-date="max"
                           title="月选择" @cancel="onClose" @confirm="onMonthConfirm"/>
      <van-picker v-if="monthAndYear.code === '0402702'" show-toolbar :columns="arrYear" title="年选择" default-index="4"
                  @confirm="onYearConfirm" @cancel="onClose"/>
      <van-picker v-if="monthAndYear.code === '0402703'" show-toolbar :columns="arrWeeks" title="周选择" default-index="4"
                  @confirm="onWeeksConfirm" @cancel="onClose"/>
    </van-popup>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: 'pickTime',
  mounted() {
    this.initializeYearMethod()
    this.initializeWeekendMethod()
  },
  data() {
    return {
      max: new Date().getTime()
    }
  },
  computed: {
    ...mapState(['showCalendarBlock', 'showTimeBlock', 'showTime', 'currentDate', 'monthAndYear', 'arrYear', 'arrWeeks']),
    ...mapGetters(['showName'])
  },
  methods: {
    ...mapActions(['closeSelectBlock', 'updateTimeValue', 'updateCurrentDate', 'initializeYearArray', 'initializeWeeksArray']),
    getWeeks(date) {
      let date2 = new Date(date.getFullYear(), 0, 1)
      let d = Math.round((date.valueOf() - date2.valueOf()) / 86400000)
      return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7)
    },
    initializeWeekendMethod() {
      // 获取当前天是今年第几周
      // 声明一个空数组 把遍历出的周添加到数组里
      let weeksArray = []
      let zhouNum = this.getWeeks(new Date())
      // 如果周是1 证明是当前年的第一周 需要处理跨年问题
      if (zhouNum === 1) {
        // 首先保存跨年的周
        let thisYear = new Date(this.currentDate).getFullYear()
        weeksArray.push({
          code: zhouNum,
          belongYear: thisYear,
          text: '本周'
          // text: thisYear + '年 第' + zhouNum + '周'
        })
        let date = new Date(new Date().getFullYear() - 1, 12, 31)
        zhouNum = this.getWeeks(date)
        for (let i = 0; i < 4; i++) {
          weeksArray.push({
            code: zhouNum,
            belongYear: thisYear,
            text: thisYear + '年 第' + zhouNum-- + '周'
          })
        }
      } else {
        let thisYear = new Date(this.currentDate).getFullYear()
        for (let i = 0; i < 5; i++) {
          weeksArray.push({
            code: zhouNum,
            belongYear: thisYear,
            text: thisYear + '年 第' + zhouNum-- + '周'
          })
        }
        weeksArray[0].text = '本周'
      }
      this.initializeWeeksArray(weeksArray.reverse())
    },
    initializeYearMethod() {
      // 初始化年展示数组，交给vuex管理
      let date = new Date()
      let thisYear = date.getFullYear() // 获取当年年份
      let Section = thisYear - 4 // 声明一个变量 获得当前年份至想获取年份差
      let yearArray = [] // 声明一个空数组 把遍历出的年份添加到数组里
      for (let i = 0; i < 5; i++) {
        yearArray.push(Section++)
      }
      this.initializeYearArray(yearArray)
    },
    onClose() {
      this.closeSelectBlock()
    },
    onMonthConfirm(event) {
      // 获取选择的时间
      const date = new Date(event.mp.detail)
      // 更新数据状态
      this.updateCurrentDate(event.mp.detail)
      // 更新维度状态
      this.updateTimeValue(this.showName(date))
      // 关闭弹出层
      this.onClose()
    },
    onYearConfirm(event) {
      // 获取选择的时间
      const date = new Date(new Date(event.target.value, 0, 1).getTime())
      // 更新数据状态
      this.updateCurrentDate(new Date(event.target.value, 0, 1).getTime())
      // 更新维度状态
      this.updateTimeValue(this.showName(date))
      // 关闭弹出层
      this.onClose()
    },
    onWeeksConfirm(event) {
      // TODO 根据传递的周获取开始时间
      let year = new Date(this.currentDate).getFullYear()
      for (let arrWeek of this.arrWeeks) {
        if (arrWeek.code === event.target.value.code) {
          year = arrWeek.belongYear
          break
        }
      }
      let date = new Date(year, 0, event.target.value.code * 7 - 7)
      let thisDayInWeek = date.getDay()
      let month = date.getMonth()
      let thisDayInMonth = date.getDate()
      if (thisDayInWeek === 0) {
        thisDayInWeek = 6
      } else {
        thisDayInWeek -= 1
      }
      let startTime = new Date(year, month, thisDayInMonth - thisDayInWeek)
      let endTime = new Date(year, month, thisDayInMonth + (6 - thisDayInWeek))
      console.log(startTime)
      console.log(endTime)
      // 获取选择的时间
      // const date = new Date(new Date(event.target.value, 0, 1).getTime())
      // 更新数据状态
      this.updateCurrentDate(new Date(startTime).getTime())
      // 更新维度状态
      this.updateTimeValue(this.showName(date))
      // 关闭弹出层
      this.onClose()
    }
  }
}
</script>

<style scoped>

</style>
