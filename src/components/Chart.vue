<template>
  <div class="chart-steps">
    <svg xmlns="http://www.w3.org/2000/svg" width="1357.257" height="782.561" viewBox="0 0 1357.257 782.561" id="main-image" ref="mainSVG">
        <g id="Group_11" data-name="Group 11" transform="translate(0 1219)">
          <g id="migration-box" x="0" y="0" transform="translate(0, 700) scale(2)">
            <path id="Path_1" data-name="Path 1" d="M0-584.259H275.4V-845H0Z" transform="translate(0 -132.853)" fill="red"/>
            <g id="Group_1" data-name="Group 1" transform="translate(75.983 -938.327)">
              <text id="Human_" data-name="Human " transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial" letter-spacing="0.001em"><tspan x="0" y="0">Human </tspan></text>
            </g>
            <g id="Group_2" data-name="Group 2" transform="translate(48.373 -906.452)">
              <text id="movement_" data-name="movement " transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial"><tspan x="0" y="0">movement </tspan></text>
            </g>
            <g id="Group_3" data-name="Group 3" transform="translate(71.68 -874.576)">
              <text id="labelled_" data-name="labelled " transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial" letter-spacing="0.001em"><tspan x="0" y="0">labelled </tspan></text>
            </g>
            <g id="Group_4" data-name="Group 4" transform="translate(41 -842.701)">
              <text id="_" data-name="‘" transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial"><tspan x="0" y="0">‘</tspan></text>
            </g>
            <g id="Group_5" data-name="Group 5" transform="translate(49.527 -842.701)">
              <text id="migration_" data-name="migration’" transform="translate(0 34)" fill="#fff" font-size="38" font-family="Arial-BoldMT, Arial" font-weight="700" letter-spacing="0.001em"><tspan x="0" y="0">migration’</tspan></text>
            </g>
          </g>
          <g id="dotted-circle" opacity="0">
              <g id="Group_6" data-name="Group 6" transform="translate(296.123 -1211.5)">
              <path id="Path_2" data-name="Path 2" d="M0,383.781C0,171.824,171.682,0,383.462,0S766.924,171.824,766.924,383.781,595.242,767.561,383.462,767.561,0,595.737,0,383.781Z" fill="none" stroke="red" stroke-linejoin="round" stroke-width="15" stroke-dasharray="30 30"/>
            </g>
          </g>
          <g id="mobility-box" x="0" y="0" transform="translate(-1500, 700) scale(2)">
            <path id="Path_3" data-name="Path 3" d="M1696-584.259h276.042V-845H1696Z" transform="translate(-614.784 -132.853)" fill="red"/>
            <g id="Group_7" data-name="Group 7" transform="translate(1157.596 -938.327)">
              <text id="Human_2" data-name="Human " transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial" letter-spacing="0.001em"><tspan x="0" y="0">Human </tspan></text>
            </g>
            <g id="Group_8" data-name="Group 8" transform="translate(1129.985 -906.452)">
              <text id="movement_2" data-name="movement " transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial"><tspan x="0" y="0">movement </tspan></text>
            </g>
            <g id="Group_9" data-name="Group 9" transform="translate(1153.293 -874.576)">
              <text id="labelled" transform="translate(0 34)" fill="#fff" font-size="38" font-family="ArialMT, Arial" letter-spacing="0.001em"><tspan x="0" y="0">labelled</tspan></text>
            </g>
            <g id="Group_10" data-name="Group 10" transform="translate(1135.404 -842.701)">
              <text id="_mobility_" data-name="‘mobility’" transform="translate(0 34)" fill="#fff" font-size="38" font-family="Arial-BoldMT, Arial" font-weight="700" letter-spacing="-0.001em"><tspan x="0" y="0">‘mobility’</tspan></text>
            </g>
          </g>
        </g>
      </svg>
    <transition-group name="fade" tag="div" class="inner-image">
      <img
        v-for="index in totalSteps - IMAGE_STEP_OFFSET"
        :key="'img'+index"
        v-show="currentStep == index + IMAGE_STEP_OFFSET"
        :src="getImgUrl(index)"/>
    </transition-group>
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
      var images = require.context('../assets/images/', false, /\.svg$/)
      return images('./step' + index + ".svg")
    },
    updateDraw() {
      let mainSVG = d3.select(this.$refs.mainSVG)
      if (this.currentStep < 2) {
          mainSVG.selectAll('#dotted-circle').transition().attr('opacity', 0)
          mainSVG.selectAll('#migration-box').transition().attr('transform', "translate(0, 700) scale(2)")
          mainSVG.selectAll('#mobility-box').transition().attr('transform', "translate(-1500, 700) scale(2)")
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