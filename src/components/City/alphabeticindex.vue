<template>
	<div class="alphabeticindex" v-show="!this.$store.state.searchcity">
		<div class="alphabetic" 
		     v-for="(item,key) of cities" 
		     :key="key"
		     :ref="key"
		     @click="getalphabetic"
		     @touchstart="handertouchstart"
		     @touchmove="handertouchmove"
		     @touchend="handertouchend"
		     >
		     {{key}}
		</div>
	</div>
</template>

<script>
export default {
  name: 'alphabeticindex',
  props: {
  	cities: Object,
  	searchcity: String
  },
  data () {
  	return {
  		touchstatus: false
  	}
  },
  computed: {
  	letters () {
  		const letters = []
  		for (let i in this.cities) {
  			letters.push(i)
  		}
  		return letters
  	}
  },
  methods : {
  	getalphabetic (e) {
  		this.$emit('watchalphabetic',e.target.innerText)
  	},
  	handertouchstart () {
  		this.touchstatus=true
  	},
  	handertouchmove (e) {
  		if (this.touchstatus = true){
  			const offsetTop = this.$refs['A'][0].offsetTop
  			const clientY = e.touches[0].clientY
  			const touchY = clientY - offsetTop - 79
        let zimu = Math.floor(touchY/17)
        if (zimu >= 0 && zimu <= 21){
          this.$emit('watchalphabetic',this.letters[zimu])
        }
  			
  		}
  	},
  	handertouchend () {
  		this.touchstatus=false
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.alphabeticindex
		position: absolute
		top:1.68rem
		right : 0
		bottom : 0
		width : .4rem
		line-height : .35rem
		display :flex
		flex-direction :column
		justify-content :center
		.alphabetic
			text-align : center
			color : #00bcd4
		
</style>
