import {
  CLOSE_SELECT_BLOCK,
  OPEN_CALENDAR_PICKER,
  UPDATE_MONTH_OR_YEAR,
  OPEN_DATETIME_PICKER,
  UPDATE_TIME_VALUE,
  UPDATE_CURRENT_DATE,
  INITIALIZE_YEAR_ARRAY,
  INITIALIZE_WEEKS_ARRAY
} from './mutations_type'

export default {
  [CLOSE_SELECT_BLOCK](state) {
    state.showCalendarBlock = false
    state.showTimeBlock = false
  },
  [OPEN_CALENDAR_PICKER](state) {
    state.showCalendarBlock = true
  },
  [UPDATE_MONTH_OR_YEAR](state, data) {
    state.monthAndYear = data
  },
  [OPEN_DATETIME_PICKER](state) {
    state.showTimeBlock = true
  },
  [UPDATE_TIME_VALUE](state, data) {
    state.showTime = data
  },
  [UPDATE_CURRENT_DATE](state, data) {
    state.currentDate = data
  },
  [INITIALIZE_YEAR_ARRAY](state, data) {
    state.arrYear = data
  },
  [INITIALIZE_WEEKS_ARRAY](state, data) {
    state.arrWeeks = data
  }

}
