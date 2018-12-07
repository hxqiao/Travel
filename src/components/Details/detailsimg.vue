<template>
	<div class='detailsimg' @click="handleshowgallery">
		<div class='img'>
			<img :src="bannerImg">
			<div class="imgmessage">
				<div class="imgtitle">{{sightName}}</div>
				<div class="imgnum iconfont">&#xe7b3; {{gallaryImgs.length}}</div>
			</div>
			<gallery v-show="showgallery" :gallaryImgs="gallaryImgs"></gallery>
		</div>
	</div>
</template>

<script>
import gallery from './gallery'
export default {
  name: 'detailsimg',
  props: {
  	sightName: String,
  	bannerImg: String,
  	gallaryImgs: Array,
  },
  components: {
  	gallery,
  },
  data () {
  	return{
  		showgallery: 0,
  	}
  },
  methods: {
  	handleshowgallery () {
  		this.showgallery=!this.showgallery
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.img
		position: relative
		height: 0
		padding-bottom: 55%
		width: 100%
		img
			width: 100%
		.imgmessage
			position: absolute
			bottom: 0
			left: 0
			right: 0
			line-height: .3rem
			color: #fff
			background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
			.imgtitle
				float: left
				margin: .1rem
				line-height: .3rem
				height: .3rem
				width: 70%
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
			.imgnum
				float: right
				border-radius: .1rem
				padding: .1rem .2rem .1rem .2rem
				background: black
				line-height: .3rem
		
</style>
