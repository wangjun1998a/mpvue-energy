<template>
  <van-popup :show="showCalendarBlock" position="bottom" custom-style="height: 40%;">
    <van-picker show-toolbar :columns="columns" title="时间维度选择" default-index="1"
                @confirm="updateDimension" @cancel="isClose"/>
  </van-popup>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: 'calendarPicker',
  data() {
    return {
      columns: [
        {'code': '0402702', 'text': '年'},
        {'code': '0402701', 'text': '月'},
        {'code': '0402703', 'text': '周'}
      ]
    }
  },
  computed: {
    ...mapState(['showCalendarBlock', 'monthAndYear', 'currentDate']),
    ...mapGetters(['showName'])
  },
  methods: {
    ...mapActions(['closeSelectBlock', 'updateMonthOrYear', 'updateTimeValue', 'updateCurrentDate']),
    isClose() {
      // 关闭弹出层
      this.closeSelectBlock()
    },
    updateDimension(event) {
      const data = event.target.value
      // 修改界面的文字提示 展示年月周
      this.updateMonthOrYear(data)
      // 应该需要同步更新一下实际时间的数据 currentDate的值 如果维度切换了 应该把值设置到当前时间。
      // ！注意， 这里更新当前时间的设置 需要在更新页面数据展示之前
      this.updateCurrentDate(new Date().getTime())
      // 同步修改展示的日期数据，使用当前选中的日期作为参数
      const name = this.showName(new Date(this.currentDate))
      this.updateTimeValue(name)
      // 关闭弹出层
      this.isClose()
    }
  }
}
</script>

<style scoped>

</style>
