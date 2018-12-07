<template>
	<div class="list" ref="list" v-show="!this.$store.state.searchcity">
		<div>
			<div class="area border-bottom">
				<div class="title">当前城市</div>
				<div class="citylist">
					<div class="city">{{this.$store.state.city}}</div>
				</div>
			</div>
			<div class="area border-bottom">
				<div class="title">热门城市</div>
				<div class="citylist">
					<div class="city" 
						 v-for="item of hotCities" 
						 :key="item.id" 
						 @click="handlecity(item.name)"
					>
						{{item.name}}
					</div>
				</div>
			</div>
			<div class="area border-bottom" 
				 v-for="(item,key) of cities" 
				 :key="key" 
				 :ref="key"
			>
				<div class="title">{{key}}</div>

				<div class="citylists border-bottom" 
					 v-for="cityitem of item" 
					 :key="cityitem.id"
					 @click="handlecity(cityitem.name)"
				>
					{{cityitem.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citylist',
  props: {
  	cities: Object,
  	hotCities: Array,
  	alphabetic: String,
  },
  methods: {
  	handlecity: function(city){
  		this.$store.commit("changecity",city)
  		this.$router.push("/")
  	}
  },
  watch: {
  	alphabetic () {	
  		const element = this.$refs[this.alphabetic][0]
  		this.scroll.scrollToElement(element)
  	}
  },
  mounted () {
  	this.scroll = new BScroll(this.$refs.list)
  },
}
</script>


<style lang="stylus" scoped>	

	.list
		position : absolute
		top : 1.68rem
		left : 0rem
		right : 0rem
		bottom : 0rem
		overflow : hidden
		.area
			width : 100%
			.title
				padding-left : .2rem
				background : #eaeaea
				line-height : .76rem
			.citylist
				padding : .1rem
				overflow : hidden
				.city
					float : left
					line-height : .5rem
					width : 2rem
					border-radius : .15rem
					border : .02rem solid #cacaca
					text-align : center
					margin : .1rem
			.citylists
				line-height : .7rem
				padding-left: .2rem
			
			.border-bottom
				&:before
					border-color : #ccc
</style>
