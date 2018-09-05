import axios from 'axios'
import store from './store'
import router from '../router/index'

let localhostDev = false
const api = axios.create();
api.defaults.baseURL = localhostDev ? '/Shop' : 'http://www.homeamc.cn'
// api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截
api.interceptors.request.use(function (config) {
    // console.log(config)
    // 在发送请求之前做些什么
    store.commit('SET_LOADING',true)
    store.commit('OPENID')

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


    return response;

  }, function (error) {
    
      store.commit('SET_LOADING',false)
    

    return Promise.reject(error)
})
export default api