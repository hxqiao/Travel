<template>
	<div class='detailheader'>
		<router-link 
			tag="div"
      		to="/"
			class='header' 
			v-show="!showheader"
			:style="opacityStyle"
		>
			<div class="left iconfont">&#xe612;</div>
			<div class="headertitle">景点详情</div>
		</router-link>
		<router-link 
			tag="div"
      		to="/"
			class='header0 iconfont' 
			v-show="showheader"
		>
			&#xe612;
		</router-link>
	</div>
	
</template>

<script>
export default {
  name: 'detailheader',
  props: {
  },
  data () {
  	return {
  		showheader: true,
  		opacityStyle: {
  			opacity: 0
  		}
  	}
  },
  methods: {
  	handleScroll(){
        const top = document.documentElement.scrollTop
        if (top > 60) {
	        let opacity = top / 140
	        opacity = opacity > 1 ? 1 : opacity
	        this.opacityStyle = { opacity }
	        this.showheader = false
	    } else {
	    	this.showheader = true
	    }
	}
  },
  mounted () {
  	window.addEventListener('scroll',this.handleScroll)
  },
  //移除全局调用
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
	.header
		position: fixed
		top: 0
		left: 0
		width : 100%
		height : .86rem
		background : #00bcd4
		box-sizing:border-box
		color: #fff
		z-index: 1
		.headertitle
			width: 100%
			line-height: .86rem
			text-align: center
			font-size: .3rem
		.left
			line-height: .86rem
			position: absolute
			margin-left: .25rem
	.header0
		position: fixed
		width : .8rem
		height : .8rem
		background: #000
		border-radius: .43rem
		opacity: .8
		line-height: .8rem
		text-align: center
		box-sizing:border-box
		color: #fff
		z-index: 1
		opacity: 0.7
 
</style>
