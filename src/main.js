// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    // error:'../static/error.png',
    loading:'../static/placeholder.gif'
})


import store from './store/store'
Vue.prototype.$store = store


Vue.filter('filters', function (value) {
    //计算出相差天数
    var days = Math.floor(value / (24 * 3600 * 1000))
    //计算出小时数
    var leave1 = value % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))
    return days + "天" + hours + "小时" + minutes +"分钟"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
