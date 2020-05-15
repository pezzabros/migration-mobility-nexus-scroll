const MOBILE_BREAKPOINT = 768

export default {
  data () {
    return {
      isMobile: window.outerWidth <= MOBILE_BREAKPOINT
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.isMobile = window.outerWidth <= MOBILE_BREAKPOINT
    })
  }
}
