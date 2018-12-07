<template>
	<router-link to="/">
		<div class="cityheader">
			<span class="iconfont">&#xe612;</span>
			城市选择
		</div>
	</router-link>
</template>

<script>
export default {
  name: 'cityheader',
  props: {
  },
}
</script>

<style lang="stylus" scoped>
	.cityheader
		position: relative
		background : #00bcd4
		width : 100%
		color : #fff
		text-align:center
		line-height : .86rem
		font-size : .30rem
		z-index: 99
		.iconfont
			position: absolute
			top : 0
			left : 0
			width : .8rem
			height : .86rem
			color : #fff
</style>
