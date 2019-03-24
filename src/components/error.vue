<template>
  <div class="error">
    <div class="error-bg"></div>
    <p style="font-size: 16px">亲，出错了~</p>
    <p style="font-size: 14px; color: #999;margin-bottom:40px">{{errorMsg}}</p>
    <div class="btn">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      errorCode: 0,
      toPath: '',
      sellerid: '',
      errorMsg: '系统异常，请稍后再试！'
    }
  },
  methods: {
  },
  created() {
    // this.errorCode = this.$route.query.errorCode
    // const errorMsg = decodeURIComponent(this.$route.query.errorMsg)
    // if (errorMsg !== 'undefined' && errorMsg) {
    //   this.errorMsg = errorMsg
    // }
    // const toPath = this.$route.query.toPath
    // if (toPath) {
    //   this.toPath = toPath
    // }
    // const sellerid = this.$route.query.sellerid
    // if (sellerid) {
    //   this.sellerid = sellerid
    // }
  }
}
</script>
<style lang="stylus" scoped>
.error
  padding-top: 72px /* 144/75 */
  text-align: center
  .error-bg
    width: 217px /* 434/75 */
    height: 195px /* 390/75 */
    background: url('../assets/404.png') no-repeat
    background-size: 100%
    margin: 0 auto
    margin-bottom: 37px /* 37/75 */
  p
    font-size 16px;
    line-height 1.5
  .btn
    margin-top: 1rem
    button
      padding: 8px 20px;
      font-size: 14px
      color: #fff;
      border-radius: 3px;
    .cube-btn-primary::after
      border: none
</style>
