<template>
	<div class="icon">
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="(page,index) of pages" :key='index'>
		    	<div v-for="item of page" class="icon1" :key='item.id'>
					<div class="icon-img"> 
						<img :src="item.imgUrl">
					</div>
					<p class="icon-text">{{item.desc}}</p>
				</div>
			</swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
  name: 'icon',
  props: {
    iconList: Array
  },
  data () {
  	return {
  		swiperOption: {
  			loop: false,
  			disableOnInteraction: false
  		}
  	}
  },
  computed: {
  	pages () {
  		const pages = []
  		this.iconList.forEach ( (item,index)=>{
  			var page = Math.floor(index/8)
  			if (!pages[page]){
  				pages[page] = []
  			}
  			pages[page].push(item)
  		})
  		return pages
  	}
  }
}
</script>

<style lang="stylus" scoped>
.icon
	margin-top : 0.25rem
	overflow : hidden
	padding-bottom : 50%
	height : 0
	.icon1
		position: relative
		box-sizing: border-box
		width: 25%
		height: 0
		float: left
		padding-bottom: 25%
		.icon-img
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0.5rem
			img
				display: block
				height: 100%
				margin: 0px auto
			
		.icon-text
			position: absolute
			left: 0
			right: 0
			bottom: 0
			text-align:center
			line-height: 0.5rem
			height: 0.5rem
	    
</style>
