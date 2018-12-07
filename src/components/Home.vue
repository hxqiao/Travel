<template>
	<div>
		<homeheader></homeheader>
    <div class="list" ref="list">
      <div>
      <carousel :swiperList='swiperList'></carousel>
      <icon :iconList='iconList'></icon>
      <viewspot :recommendList="recommendList"></viewspot>
      </div>
    </div>
	</div>
</template>

<script>

import homeheader from './Home/homeheader'
import carousel from './Home/carousel'
import icon from './Home/icon'
import viewspot from './Home/viewspot'
import axios from 'axios'
import BScroll from 'better-scroll'


//axios.defaults.baseURL='http://120.78.221.35:8888'
axios.defaults.baseURL='http://127.0.0.1:8080'
export default {
  name: 'Home',
  components: {
  	homeheader,
    carousel,
  	icon,
    viewspot,

  },
  data () {
  	return {
  		iconList: [],
      swiperList: [],
      recommendList: [],
  	}
  },
  methods: {
  	getHomeinfo () {
  		axios.get('/api/index.json')
  		.then(this.getHomeinfoSucc)
  	},
  	getHomeinfoSucc (res) {
  		const data = res.data
  		this.iconList = data.data.iconList
      this.swiperList = data.data.swiperList
      this.recommendList = data.data.recommendList
	 }
  },

  mounted () {
  	this.getHomeinfo()
    this.scroll = new BScroll(this.$refs.list)
  }

}

</script>

<style lang="stylus" scoped>
.list
    position : absolute
    top : .86rem
    left : 0rem
    right : 0rem
    bottom : 0rem
    overflow : hidden
</style>
