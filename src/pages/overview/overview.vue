<!--suppress CssInvalidPropertyValue -->
<template>
  <div class="mainContainer">
    <div class="header">
      <dateTimePicker/>
    </div>
    <div class="info">
      <div class="piePictures">
        <generalChart/>
      </div>
    </div>
    <div class="footer">
      <energyTypePicker/>
    </div>
  </div>
</template>

<script>
import dateTimePicker from '../../components/dateTimePicker/dateTimePicker'
import energyTypePicker from '../../components/EnergyTypePicker/energyTypePicker'
import generalChart from '../../components/generalECharts/generalChart'

export default {
  name: 'overview',
  components: {dateTimePicker, energyTypePicker, generalChart}
}
</script>
<style>

page {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
<style scoped>
.piePictures {
  background-color: #ffffff;
  margin: 20rpx;
  height: 50%;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
}


.header {
  width: 100%;
  height: 80rpx;
  flex: 0;
}

.info {
  margin-top: 10rpx;
  width: 100%;
  flex: 1;
}

.footer {
  width: 100%;
  background: #fff;
  flex: 0;

}

</style>
