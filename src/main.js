// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    // error:'../static/error.png',
    loading:'../static/placeholder.gif'
})


import store from './store/store'
Vue.prototype.$store = store


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
