import {
  CLOSE_SELECT_BLOCK,
  UPDATE_MONTH_OR_YEAR,
  OPEN_CALENDAR_PICKER,
  OPEN_DATETIME_PICKER,
  UPDATE_TIME_VALUE,
  UPDATE_CURRENT_DATE,
  INITIALIZE_YEAR_ARRAY,
  INITIALIZE_WEEKS_ARRAY
} from './mutations_type'

export default {
  // 关闭全部弹窗
  closeSelectBlock({commit}) {
    commit(CLOSE_SELECT_BLOCK)
  },
  // 打开维度选择弹窗
  openCalendarPicker({commit}) {
    commit(OPEN_CALENDAR_PICKER)
  },
  // 更新页面的年月日显示
  updateMonthOrYear({commit}, data) {
    commit(UPDATE_MONTH_OR_YEAR, data)
  },
  // 打开时间选择弹窗
  openDateTimePicker({commit}) {
    commit(OPEN_DATETIME_PICKER)
  },
  updateTimeValue({commit}, data) {
    commit(UPDATE_TIME_VALUE, data)
  },
  updateCurrentDate({commit}, data) {
    commit(UPDATE_CURRENT_DATE, data)
  },
  initializeYearArray({commit}, data) {
    commit(INITIALIZE_YEAR_ARRAY, data)
  },
  initializeWeeksArray({commit}, data) {
    commit(INITIALIZE_WEEKS_ARRAY, data)
  }
}
