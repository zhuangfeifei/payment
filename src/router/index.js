import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Login from '@/page/Login'
import LicensePlate from '@/page/LicensePlate'
import Administration from '@/page/Administration'
import Record from '@/page/Record'
import Pay from '@/page/Pay'

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
    {
      path: '/Record',
      name: 'Record',
      component: Record
    },
    {
      path: '/Pay',
      // name: 'Pay',  因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性，SO解决办法是：即去除父级的name属性即可。
      component: Pay,
      // children: [{
      //   path: '/',
      //   component:Record
      // },{
      //   path: 'Login',
      //   component:Login
      // }]
    },
  ]
})
