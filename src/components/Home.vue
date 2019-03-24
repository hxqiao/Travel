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
import { getHomeinfo } from '@/api/index'
import axios from 'axios'
import BScroll from 'better-scroll'

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
  		getHomeinfo()
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
    this.scroll = new BScroll(this.$refs.list,{
      click: true // 一开始的点击事件被bscroll阻止了，设置这个才能点击
      })
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
