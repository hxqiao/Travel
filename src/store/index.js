import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		city: localStorage.city||'广州',
		searchcity: '',
	},
	actions: {
		
	},
	mutations: {
		changecity (state,city) {
			state.city = city
			localStorage.city = city
		},
		changesearchcity (state,searchcity) {
			state.searchcity = searchcity
		},
	}
})