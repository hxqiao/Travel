<template>
	<div class='viewspot'>
		<router-link 
			tag='div' 
			:to="'/details/'+item.id"
			class="view" 
			v-for="item of recommendList"
			:key="item.id"
		>
			<div class="viewimg">
				<img class="img" :src="item.imgUrl">
			</div>
			<div class="viewtext">
				<div class="viewname">{{item.title}}</div>
				<div class="viewintroduce">{{item.desc}}</div>
				<div class="viewdetails">查看详情</div>
			</div>
		</router-link>
    </div>
</template>

<script>
export default {
  name: 'viewspot',
  props: {
  	recommendList: Array
  },
  data () {
  	return{
  		
  	}
  	}
}
</script>

<style lang="stylus" scoped>
.view
	display: flex
	width: 100%
	height: 1.5rem
	padding: .1rem
	border: 1px solid #ccc
	.viewimg
		height: 100%
		.img
			height: 100%
	
	.viewtext
		flex: 1
		padding .1rem
		.viewname
			line-height: .4rem
			font-size: .3rem
			font-weight: bold
		.viewintroduce
			color: #ccc
			line-height: .4rem
			font-size: .12rem
		.viewdetails
			line-height: .4rem
			background-color: #ffbe0a
			color: #fff
			width: 1.5rem
			text-align: center
			border-radius: .1rem

</style>
