<template>
  <div class="chart-steps">
    <img src="~@/assets/images/main-chart.svg">
    <transition-group name="fade" tag="div" class="inner-image">
      <img
        v-for="index in totalSteps"
        :key="'img'+index"
        v-show="currentStep == index"
        :src="getImgUrl(index)"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ChartSteps',
  props: ['currentStep', 'totalSteps'],
  methods: {
    getImgUrl(index) {
      var images = require.context('../assets/images/', false, /\.svg$/)
      return images('./step' + index + ".svg")
    }
  },
}
</script>

<style lang="stylus" scoped>
.chart-steps
  background none
  position relative
  img
    width 100%
  .inner-image
    position absolute
    display flex
    height 50%
    width 50%
    justify-content center
    top 25%
    left 25%
    img
      position absolute
      top 25%
      left 0
      transform translateY(-50%)

.fade-enter-active,
.fade-leave-active {
    transition: opacity .8s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>