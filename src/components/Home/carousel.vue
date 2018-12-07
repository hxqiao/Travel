<template>
	<div class='carousel'>
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key='item.id'>
		    	<img class="carouselimg" 
		    		 :src="item.imgUrl" 
		    	>
			</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
    </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
  	swiperList: Array
  },
  data () {
  	return {
  		swiperOption: {
  			loop: true,
  			autoplay: 3000
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
.carousel
	width: 100%
	height: 0
	padding-bottom: 31.5%
	.carouselimg
		width: 100%
</style>
