import Vue from 'vue'
import axios from 'axios'
import Util from './storage'
import Api from './api'
import * as types from './types'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from '../router/index'
import { Toast, Dialog } from 'vant'

const state = {
    fetchLoading:false,     //全局加载状态的Loading
    openId: Util.getLocal('pay_openIds'),
    times: '',    // 当前时间
    info:'',      // 车主手机及车牌的绑定信息
    list:'',      // 绑定的车辆列表
    record:'',      // 根据车牌查询进出记录
    access:'',      // 查询车主当前在库的车辆进出记录信息
    remain:'',      // 查询停车场剩余车位数
    voucher:'',      // 查询可进行积分兑换的抵扣券列表
    userVoucher:'',      // 查询车主名下抵扣券列表
    isPage:true,      // 页
    show:false
}

const mutations = {
    [types.SET_LOADING](state,res){
        state.fetchLoading = res
    },
    [types.OPENID](state){
        state.openId = Util.getLocal('pay_openIds')
    },
    [types.SET_TIMES](state){
        var date = new Date();
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            vWeek_s = date.getDay()
        var times = year + "-" + toDub(month) + "-" + toDub(day) + " " + toDub(hours) + ":" + toDub(minutes) + ":" + toDub(seconds)
        var times1 = year + "." + toDub(month) + "." + toDub(day)
        function toDub(n) {
            return n < 10 ? "0" + n : "" + n
        }
        var current = Date.parse(new Date(times.replace(/-/g, "/")))
        var list = { times, times1, current }
        state.times = list
    },
    [types.SET_INFO](state){
        state.info = Util.getLocal('info')
    },
    [types.SET_PAGE](state,res){
        state.isPage = res
    },
    [types.SET_LIST](state){
        state.list = Util.getLocal('list')
    },
    [types.SET_RECORD](state){
        state.record = Util.getLocal('record')
    },
    [types.SET_ACCESS](state){
        state.access = Util.getLocal('access')
    },
    [types.SET_REMAIN](state){
        state.remain = Util.getLocal('remain')
    },
    [types.SET_VOUCHER](state){
        state.voucher = Util.getLocal('voucher')
    },
    [types.SET_USERVOUCHER](state){
        state.userVoucher = Util.getLocal('userVoucher')
    },
    ['SHOW'](state,res){
        state.show = res
    },
}

const actions = {
    info({commit,state,dispatch}){   // 查询车主手机及车牌的绑定信息
        Api.post('/shops/api/car/info', $.param({ carOwnerId: state.openId }))
        .then(res => {
            // console.log(res.data)
            if (res.data.code == 200) {
                Util.setLocal(res.data.data, 'info')
                commit('SET_INFO')
                dispatch('access')
            }
        })
        .catch(err => console.log(err))
    },
    access({commit,state}){   // 查询车主当前在库的车辆进出记录信息
        Api.post('/shops/api/car/access', $.param({ carOwnerId: state.openId }))
        .then(res => {
            // console.log(res.data)
            if (res.data.code == 200) {
                Util.setLocal(res.data.data, 'access')
                commit('SET_ACCESS')
            }
        })
        .catch(err => console.log(err))
    },
    history({commit,state}, page){   // 查询当前车主所有车辆停车历史记录
        Api.post('/shops/api/car/history', $.param({ carOwnerId: state.openId, current: page.num, limit: 4 }))
        .then(res => {
            // console.log(res.data)
            if (res.data.code == 200) {
                if(res.data.data.rows.length > 0) {
                    Util.setLocal(res.data.data.rows, 'record', page.isP)
                    commit('SET_RECORD')
                }else{
                    Util.setLocal(res.data.data.rows, 'record', false)
                    commit('SET_PAGE', false)
                }
            } else {
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    remain({commit,state}){   // 查询停车场剩余车位数
        Api.post('/shops/api/car/remain')
        .then(res => {
            // console.log(res.data)
            if (res.data.code == 200) {
                Util.setLocal(res.data.data, 'remain')
                commit('SET_REMAIN')
            } else {
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    code({commit,state}, phones){   // 获取验证码
        Api.post('/puman/api/system/code', $.param({ phone: phones, msgType:3 }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200) {
                Toast.success('发送成功！')
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    phone({commit,state,dispatch}, information){   // 绑定手机号
        Api.post('/shops/api/car/phone', $.param({ carOwnerId: state.openId, phone: information.phone, code: information.code }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Toast.success('登录成功！')
                router.push({path:'/'})
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    binding({commit,state,dispatch}, brand){   // 绑定车牌号
        Api.post('/shops/api/car/binding', $.param({ carOwnerId: state.openId, carNo: brand }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Toast.success('绑定成功！')
                router.push({path:'/'})
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    // list({commit,state,dispatch}){   // 绑定的车辆列表
    //     Api.post('/shops/api/car/list', $.param({ carOwnerId: state.openId }))
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data.code == 200){
    //             Util.setLocal(res.data.data, 'list')
    //             commit('SET_LIST')
    //         }else{
    //             Toast.fail(res.data.message)
    //         }
    //     })
    //     .catch(err => console.log(err))
    // },
    unbind({commit,state,dispatch}, carIds){   // 解绑车辆
        Api.post('/shops/api/car/unbind', $.param({ carId: carIds }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Toast.success('删除成功！')
                dispatch('info')
            }else{
                // Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    record({commit,state,dispatch}, carIds){   // 根据车牌查询进出记录
        Api.post('/shops/api/car/record', $.param({ carId: carIds, current: 1, limit: 10 }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Util.setLocal(res.data.data, 'record')
                commit('SET_RECORD')
                router.push({path:'/Record'})
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    voucher({commit,state,dispatch}){   // 查询可进行积分兑换的抵扣券列表
        Api.post('/shops/api/car/tkt/list')
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Util.setLocal(res.data.data, 'voucher')
                commit('SET_VOUCHER')
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    userVoucher({commit,state,dispatch}, useStates){   // 查询车主名下抵扣券列表
        Api.post('/shops/api/car/tkt/user/list', $.param({ carOwnerId: state.openId, useState: useStates }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Util.setLocal(res.data.data, 'userVoucher')
                commit('SET_USERVOUCHER')
                useStates == 0 ? commit('SHOW', false) : commit('SHOW', true)
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    exchange({commit,state,dispatch}, ticketIds){   // 积分兑换抵扣券
        Api.post('/shops/api/car/tkt/exchange', $.param({ carOwnerId: state.openId, ticketId: ticketIds }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                Toast.success('兑换成功！')
                router.push({path:'/Exchange'})
            }else{
                Toast.fail(res.data.message)
            }
        })
        .catch(err => console.log(err))
    },
    use({commit,state,dispatch}, list){   // 使用抵扣券
        Api.post('/shops/api/car/tkt/use', $.param({ carOwnerId: state.openId, uniqueCode: list.uniqueCode, carId: list.id }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                dispatch('pay')
            }else{
                Dialog.alert({
                    title: res.data.message,
                    confirmButtonText: '关闭'
                }).then(() => {
                    
                })
            }
        })
        .catch(err => console.log(err))
    },
    pay({commit,state,dispatch}, carNos){   // 缴费
        Api.post('/shops/api/car/pay', $.param({ carNo: carNos || state.access[0].carNo }))
        .then(res => {
            // console.log(res.data)
            if(res.data.code == 200){
                window.location.href = res.data.message
            }else{
                Dialog.alert({
                    title: res.data.message,
                    confirmButtonText: '关闭'
                }).then(() => {
                    router.push({path:'/'})
                })
            }
        })
        .catch(err => console.log(err))
    },
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})