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
import { getCityinfo } from '@/api/index'
import axios from 'axios'

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
      getCityinfo()
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
