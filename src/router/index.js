import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Login from '@/page/Login'
import LicensePlate from '@/page/LicensePlate'
import Administration from '@/page/Administration'
import Record from '@/page/Record'
import Pay from '@/page/Pay'
import Exchange from '@/page/Exchange'
import ExchangeDetils from '@/page/ExchangeDetils'
import RecordExchange from '@/page/RecordExchange'
import Standard from '@/page/Standard'
import Help from '@/page/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        index:0
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        index:1
      }
    },
    {
      path: '/LicensePlate',
      name: 'LicensePlate',
      component: LicensePlate,
      meta:{
        index:3
      }
    },
    {
      path: '/Administration',
      name: 'Administration',
      component: Administration,
      meta:{
        index:2
      }
    },
    {
      path: '/Record',
      name: 'Record',
      component: Record,
      meta:{
        index:4
      }
    },
    {
      path: '/Exchange',
      name: 'Exchange',
      component: Exchange,
      meta:{
        index:2
      }
    },
    {
      path: '/ExchangeDetils',
      name: 'ExchangeDetils',
      component: ExchangeDetils,
      meta:{
        index:3
      }
    },
    {
      path: '/RecordExchange',
      name: 'RecordExchange',
      component: RecordExchange,
      meta:{
        index:3
      }
    },
    {
      path: '/Standard',
      name: 'Standard',
      component: Standard,
      meta:{
        index:2
      }
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help,
      meta:{
        index:2
      }
    },
    {
      path: '/Pay',
      // name: 'Pay',  因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性，SO解决办法是：即去除父级的name属性即可。
      component: Pay,
      meta:{
        index:7
      }
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
