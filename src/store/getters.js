export default {
  showName: (state) => (date) => {
    const code = state.monthAndYear.code
    if (code === '0402701') {
      // 月
      return date.getFullYear() + '年 ' + (date.getMonth() + 1) + '月'
    } else if (code === '0402702') {
      // 年
      return date.getFullYear() + '年'
    } else if (code === '0402703') {
      // 周
      let year = new Date(state.currentDate).getFullYear()
      let date2 = new Date(date.getFullYear(), 0, 1)
      let d = Math.round((date.valueOf() - date2.valueOf()) / 86400000)
      let weeks = Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7)
      return year + '年 第' + weeks + '周'
    }
  }
}
