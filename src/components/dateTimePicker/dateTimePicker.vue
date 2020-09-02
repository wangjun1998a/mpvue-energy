<!--suppress CssInvalidPropertyValue -->
<template>
  <div class="dateTimePickerContainer">
    <!--时间维度选择-->
    <div class="dimensionality" @click="openCalPicker">
      <p class="titleFont">{{ monthAndYear.text }}</p>
      <!--点击时候箭头的切换-->
      <div class="dropDownBox">
        <van-icon v-if="showCalendarBlock" color="#0098F5" name="arrow-up"/>
        <van-icon v-else color="#0098F5" name="arrow-down"/>
      </div>
    </div>
    <!--中间的间隔块-->
    <div class="divisionBlock"/>
    <!--日期选择-->
    <div class="dateTimePicker" @click="showTimeSelectBlock">
      <p class="titleFont">{{ showTime }}</p>
      <div class="dropDownBox">
        <van-icon v-if="showTimeBlock" color="#0098F5" name="arrow-up"/>
        <van-icon v-else color="#0098F5" name="arrow-down"/>
      </div>
    </div>
    <!--默认隐藏，按照时间维度或者是日期的信息进行展示对应的内容-->
    <calendarPicker/>
    <!--默认隐藏，时间选择组件-->
    <pickTime/>
  </div>
</template>

<script>
import pickTime from '../pickTime/pickTime'
import calendarPicker from '../calendarPicker/calendarPicker'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'dateTimePicker',
  data() {
    return {}
  },
  components: {
    calendarPicker,
    pickTime

  },
  computed: {
    ...mapState(['monthAndYear', 'showCalendarBlock',
      'showTimeBlock', 'showTime'])
  },
  methods: {
    ...mapActions(['openCalendarPicker', 'openDateTimePicker']),
    openCalPicker() {
      this.openCalendarPicker()
    },
    showTimeSelectBlock() {
      this.openDateTimePicker()
    }
  }
}
</script>

<style>
.van-picker {
  height: 100%
}

.divisionBlock {
  width: 27%;
}

.dateTimePickerContainer {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.dimensionality {
  display: flex;
  flex-direction: row;
  margin-left: 10rpx;
}

.dateTimePicker {
  display: flex;
  flex-direction: row;
  /*width: 55%;*/
}

.dropDownBox {
  margin-left: 8rpx;
  align-items: center;
  padding-top: 6rpx;
}

.div van-icon {
  vertical-align: middle;
}

.titleFont {
  font-weight: bold;
}

</style>
