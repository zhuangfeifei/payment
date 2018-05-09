import Vue from 'vue'
import axios from 'axios'
import Util from './storage'
import Api from './api'
import * as types from './types'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    fetchLoading:false,     //全局加载状态的Loading
    token:'12'
}

const mutations = {
    [types.SET_TOKEN](state,res){
        state.fetchLoading = res
    },
    [types.SET_LOADING](state,res){
        state.fetchLoading = res
    },
}

const actions = {
    index(context){
        // Api.post('/shopping/api/basic/carousel')
        Api.post('/puman/api/delegatcontract/list', $.param({token:context.state.token}))
        // Api.post('/puman/api/delegatcontract/list',$.param({token:'123'}))
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})