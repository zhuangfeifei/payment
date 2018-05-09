import axios from 'axios'
import store from './store'
import router from '../router/index'

let localhostDev = true
const api = axios.create();
api.defaults.baseURL = localhostDev ? '/Shop' : 'http://www.homeamc.cn'
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截
api.interceptors.request.use(function (config) {
    // console.log(config)
    // 在发送请求之前做些什么
    store.commit('SET_LOADING',true)

    return config

  }, function (error) {
    
    alert('网络错误,请稍后再试')

      store.commit('SET_LOADING',false)

    return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(function (response) {
    // console.log(response)
    // setTimeout(()=>{
      store.commit('SET_LOADING',false)
    // },2000)

    if(response.data.message === "无效token") {
      router.replace({path: 'login'})
    }

    return response;

  }, function (error) {
    
      store.commit('SET_LOADING',false)
    
    if(errore.response) {

      if(error.response.status== 401) {
          // 如果返回401 即没有权限，跳到登录页重新登录
        store.commit('CHANGE_TOKEN',0);

        alert('请重新登录');

        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })

      }
    }

    return Promise.reject(error)
})
export default api