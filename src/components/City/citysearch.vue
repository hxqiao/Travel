<template>
	<div class="citysearch">
		<div class="searchkuang">
			<input class="input" v-model="searchcity" type="text" placeholder="请输入城市名称">
		</div>
		<div ref="list">
			<div class="search" v-show="searchcity">
				<div class="searchcity border-bottom" 
					 dir="" v-for="(item,index) of searchcitylist" 
					 :key="index"
					 @click="changecitys(item)"
				>
					{{item}}
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citysearch',
  props: {
  	cities: Object,
  },
  data () {
  	return {
  		searchcity: '',
  		searchcitylist: [],
  		timer: null
  	}
  },
  methods: {
  	changecitys (city) {
  		this.$store.commit("changecity",city)
  		this.$router.push("/")
  		this.searchcity=''
  	}
  },
  watch: {

  	searchcity () {
  		this.$store.commit("changesearchcity",this.searchcity)
  		if (this.timer) {
  			clearTimeout(this.timer)
  		}
  		this.timer=setTimeout( () => {
  			const list=[]

  			for (let i in this.cities){
	  			this.cities[i].forEach((value)=>{
	  				if (value.spell.indexOf(this.searchcity)>=0||value.name.indexOf(this.searchcity)>=0){
	  					list.push(value.name)
	  				}
	  			})
	  		} 
	  		
	  		this.searchcitylist = list
	  		if (this.searchcity == ""){
	  			this.searchcitylist=[]
  			}
  		},100)
  		
  	},
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  },
}
</script>

<style lang="stylus" scoped>
	.searchkuang
		position: relative
		background : #00bcd4
		width : 100%
		color : #fff
		height : .82rem
		z-index: 99
		.input
			display : block
			width : 96%
			margin : 0 auto
			border-radius : .05rem
			text-align : center
			line-height : .62rem
			box-sizing : border-box
			padding : 0 .1rem
	.search
		position: absolute
		top: 1.68rem
		left: 0
		right: 0
		border-bottom:.2rem solid #eee
		border-radius: .1rem
		z-index: 2
		background: #fff
		.searchcity
			line-height: .58rem
			padding-left: .2rem
			
			
		
</style>
