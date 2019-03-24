import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import City from '@/components/City'
import Details from '@/components/Details'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/error',
      name: 'error',
      component: error,
      meta: { auth: false }
    }
  ]
})
