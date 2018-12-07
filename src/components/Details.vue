<template>
	<div>
		<detailheader></detailheader>
		<detailsimg :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detailsimg>
    <detailsprice :categoryList="categoryList"></detailsprice>
		<div class="bottom"></div>
	</div>
</template>

<script>
import detailheader from './Details/detailheader'
import detailsimg from './Details/detailsimg'
import detailsprice from './Details/detailsprice'
import axios from 'axios'
import BScroll from 'better-scroll'

//axios.defaults.baseURL='http://120.78.221.35:8888'
axios.defaults.baseURL='http://127.0.0.1:8080'
export default {
  name: 'Details',
  components: {
  	detailheader,
  	detailsimg,
    detailsprice,
  },
  data () {
  	return {
        sightName: "",
        bannerImg: "",
        gallaryImgs: [],
        categoryList: [],
  	}
  },
  methods: {
    getDetailinfo () {
      axios.get('/detail?',{
        params: {
        id: this.$route.params.id
      }
    }).then(this.getDetailinfoSucc)
    },
    getDetailinfoSucc (res) {
      const data = res.data
      if (data && data.ret == true){
        const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailinfo()
  }

}

</script>

<style lang="stylus" scoped>
.bottom
	height: 50rem
</style>
