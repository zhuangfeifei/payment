import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Login from '@/page/Login'
import LicensePlate from '@/page/LicensePlate'
import Administration from '@/page/Administration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/LicensePlate',
      name: 'LicensePlate',
      component: LicensePlate
    },
    {
      path: '/Administration',
      name: 'Administration',
      component: Administration
    },
  ]
})
