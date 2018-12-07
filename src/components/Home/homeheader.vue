<template>
	<div class='header'>
		<div class="left iconfont">&#xe62f;</div>
		<div class="input-div">
			<input type="text" class="input" placeholder="请输入景点">
			<span class="span iconfont">&#xe62f;</span>
		</div>
		<div class="right">
			<router-link to='/city'>
				<div class="font">{{this.$store.state.city}}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'homeheader',
  props: {
  }
}
</script>

<style lang="stylus" scoped>
	.header
		width : 100%
		height : .86rem
		display : flex
		background : #00bcd4
		box-sizing:border-box
		.left
			flex : 0.8
			line-height : .86rem
			text-align : center
			color : #ffffff
		.input-div
			flex : 6
			position : relative
			height : .70rem
			margin-top : 0.08rem
			.input
				text-align : center
				box-sizing : border-box
				line-height : .4rem
				width : 100%
				height : 100%
				padding :.1rem
				border-radius : .1rem
			.span
				position : absolute
				width 0.5rem
				height 0.5rem
				z-index : 99
				left : 0.1rem
				top : 0.2rem
				left: 0.2rem
 
		.right
			flex : 1
			line-height : .86rem
			text-align : center
			color : #ffffff
			.font
				color : #fff
</style>
