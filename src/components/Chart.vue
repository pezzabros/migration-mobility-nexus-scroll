<template>
  <div class="chart-steps">
    <svg xmlns="http://www.w3.org/2000/svg" width="1762.968" height="1012" viewBox="0 0 1762.968 1012" id="main-image" ref="mainSVG">
      <g id="Group_11" data-name="Group 11" transform="translate(0 1219)">
        <g id="migration-box" x="0" y="0" transform="translate(0, 700) scale(2)">
          <path id="Path_1" data-name="Path 1" d="M0-506.318H357.728V-845H0Z" transform="translate(0 -63.5)" fill="red"/>
          <g id="Group_1" data-name="Group 1" transform="translate(66.257 -839.5)">
            <text id="Human_movement_labelled_migration_" data-name="Human movement labelled ‘migration’" transform="translate(-60 -17)" fill="#fff" font-size="49" font-family="Roboto-Regular, Roboto" letter-spacing="0.001em"><tspan x="93.122" y="45">Human </tspan><tspan x="56.413" y="102">movement </tspan><tspan x="87.66" y="159">labelled </tspan><tspan x="56.85" y="216" font-family="Roboto-Bold, Roboto" font-weight="700">‘migration’</tspan></text>
          </g>
        </g>
        <g id="dotted-circle" transform="translate(384.64 -1211.5)" opacity="0">
          <path id="Path_2" data-name="Path 2" d="M0,498.5C0,223.186,223,0,498.086,0S996.172,223.186,996.172,498.5,773.171,997,498.086,997,0,773.814,0,498.5Z" fill="none" stroke="red" stroke-linejoin="round" stroke-width="15" stroke-dasharray="30 30"/>
          <transition-group name="fade" tag="g" height="320" width="320" transform="translate(180, 180)">
            <image
              v-for="index in totalSteps - IMAGE_STEP_OFFSET"
              :key="'img'+index"
              v-show="currentStep == index + IMAGE_STEP_OFFSET"
              :href="getImgUrl(index)"
              height="300" width="300" transform="translate(0,0) scale(2)"/>
          </transition-group>
        </g>
        <g id="mobility-box" x="0" y="0" transform="translate(-1900, 700) scale(2)">
          <path id="Path_3" data-name="Path 3" d="M1696-506.318h358.556V-845H1696Z" transform="translate(-291.588 -63.011)" fill="red"/>
          <text id="Human_movement_labelled_mobility_" data-name="Human movement labelled ‘mobility’" transform="translate(1411.257 -856.5)" fill="#fff" font-size="49" font-family="Roboto-Regular, Roboto" letter-spacing="0.001em"><tspan x="93.122" y="45">Human </tspan><tspan x="56.413" y="102">movement </tspan><tspan x="87.66" y="159">labelled </tspan><tspan x="72.088" y="216" font-family="Roboto-Bold, Roboto" font-weight="700">‘mobility’</tspan></text>
        </g>
      </g>
    </svg>
    
  </div>
</template>

<script>
const d3 = require('d3')

export default {
  name: 'ChartSteps',
  props: ['currentStep', 'totalSteps'],
  data() {
    return {
      IMAGE_STEP_OFFSET: 2
    }
  },
  mounted () {
    this.updateDraw()
  },
  methods: {
    getImgUrl(index) {
      /*var images = require.context('../assets/images/', false, /\.svg$/)
      return images('./step' + index + ".svg")*/
      var images = require.context('../assets/images/new', false, /\.png$/)
      return images('./step' + index + ".png")
    },
    updateDraw() {
      let mainSVG = d3.select(this.$refs.mainSVG)
      if (this.currentStep < 2) {
          mainSVG.selectAll('#dotted-circle').transition().attr('opacity', 0)
          mainSVG.selectAll('#migration-box').transition().attr('transform', "translate(0, 700) scale(2)")
          mainSVG.selectAll('#mobility-box').transition().attr('transform', "translate(-1900, 700) scale(2)")
      } else {
        mainSVG.selectAll('#dotted-circle').transition().attr('opacity', 1)
        mainSVG.selectAll('#migration-box').transition().attr('transform', 'scale(1)')
        mainSVG.selectAll('#mobility-box').transition().attr('transform', 'scale(1)')
      }
    }
  },
  watch: {
    currentStep () {
      this.updateDraw()
    }
  },
}
</script>

<style lang="stylus" scoped>
.chart-steps
  background none
  position relative
  #main-image
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
      top 50%
      left 0
      width: 100%;
      transform translateY(-100%)

.fade-enter-active,
.fade-leave-active {
    transition: opacity .8s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>