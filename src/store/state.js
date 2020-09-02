export default {
  // 是否展示维度选择
  showCalendarBlock: false,
  // 是否展示日期选择
  showTimeBlock: false,
  // 维度展示数据
  monthAndYear: {code: '0402701', text: '月'},
  // 日期展示的数据，默认是当前年的当前月
  showTime: new Date().getFullYear() + '年 ' + (new Date().getMonth() + 1) + '月',
  // 当前选中的时间
  currentDate: new Date().getTime(),
  // 年数组
  arrYear: [],
  // 周数组
  arrWeeks: []
}
