<template>
	<div>
    <cityheader></cityheader>
    <citysearch :cities="cities"></citysearch>
    <citylist 
      :hotCities="hotCities" 
      :cities="cities" 
      :alphabetic='alphabetic' 
      :searchcity="searchcity"
    >
    </citylist>
    <alphabeticindex 
      :cities="cities" 
      @watchalphabetic='changealphabetic'
    >
    </alphabeticindex>
	</div>
</template>

<script>

import cityheader from './City/cityheader'
import citysearch from './City/citysearch'
import citylist from './City/citylist'
import alphabeticindex from './City/alphabeticindex'
import axios from 'axios'

//axios.defaults.baseURL='http://120.78.221.35:8888'
axios.defaults.baseURL='http://127.0.0.1:8080'
export default {
  name: 'City',
  components: {
  	cityheader,
    citysearch,
    citylist,
    alphabeticindex,
  },
  data () {
  	return {
      cities: {},
      hotCities: [],
      alphabetic: '',
      searchcity: "",
  	}
  },
  
  methods: {
    getCityinfo () {
      axios.get('/api/city.json')
      .then(this.getCityinfoSucc)
    },
    getCityinfoSucc (ref) {
      const data = ref.data
      if(data.ret){
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
      
    },
    changealphabetic (alphabetic) {
      this.alphabetic = alphabetic
    },
  },
  mounted () {
    this.getCityinfo()
  },
}

</script>

<style>

</style>
