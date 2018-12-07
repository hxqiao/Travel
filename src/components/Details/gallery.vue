<template>
	<div class='gallery'>
		<div class="galleryimg">
			<swiper :options="swiperOption">
	    <!-- slides -->
			    <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
			    	<img :src="item">
				</swiper-slide>
		    	<div class="swiper-pagination" slot="pagination"></div>
	    	</swiper>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
export default {
  name: 'gallery',
  props: {
  	gallaryImgs: Array
  },
  data () {
  	return {
  		swiperOption: {
  			pagination: ".swiper-pagination",
  			paginationType : 'fraction',
  			observeParents: true,
  			observer: true
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.gallery
		position: fixed
		top: 0
		right: 0
		bottom: 0
		left: 0
		background: #000
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		.galleryimg
			border: .02rem solid #fff
			width: 100%
			height: 0
			padding-bottom: 100%
			img
				width: 100%
			.swiper-pagination
				color: #fff
			
</style>