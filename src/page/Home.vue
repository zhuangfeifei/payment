<template>
    <div id="home">
    <!--<div id="home" v-lazy:background-image="imgIcon">-->

        <div class="main">
            <div><p v-if="time">{{time.times.substring(11,16)}}</p><p>{{time.times1}}</p></div>
            <div>
                <p><span>{{remain || 0}}</span><br><span>剩余车位</span></p>
                <!--<p><span>C:100</span><span>D:100</span></p>-->
            </div>
        </div>

        <div v-if="info.isBindPhone == 0" class="btn">
            <p>您还未登录</p>
            <router-link to="/Login">
                <button>登录</button>
            </router-link>
        </div>
        <div v-if="info.isBindPhone == 1 && info.isBindCar == 0" class="btn">
            <p>对不起，您还未添加车牌</p>
            <router-link to="/LicensePlate">
                <button>添加车牌</button>
            </router-link>
        </div>
        <div v-if="info.isBindPhone == 1 && info.isBindCar == 1 && access.length > 0" class="btns">
            <div class="btns_list" v-for="(item,index) in access" :key="index">
                <div v-if="index == 0">
                    <div class="plate">{{item.carNo}}</div>
                    <p><span>进入时间</span><span>{{item.enterTime}}</span></p>
                    <p><span>当前时间</span><span v-if="time">{{time.times}}</span></p>
                    <p><span>已停时间</span><span v-if="time">{{(time.current - Date.parse(new Date(item.enterTime.replace(/-/g, "/")))) | filters}}</span></p>
                    <!--<p><span>应缴费</span><span>13</span><span>元</span></p>-->
                </div>
            </div>
        </div>
        <div v-if="info.isBindPhone == 1 && info.isBindCar == 1 && access.length == 0" class="btn">
            <p>没有在停车辆！</p>
        </div>

        <footer>
            <div class="list">
                <div @click="Record(index)" v-for="(item,index) in data" :key="index">
                    <router-link :to="item.url"><img :src="item.img" alt=""><p>{{item.title}}</p></router-link>
                </div>
            </div>
            <div class="charge">
                <div @click="pay" :class="{active:access.length > 0 && access.carType == 1}">缴费</div>
                <div @click="help"><span>?</span><span>关于帮助</span></div>
            </div>
        </footer>

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'home',
    data () {
        return {
            imgIcon:require("../assets/img/back.png"),
            data:[
                { title:'车辆管理', img:require("../assets/img/management.png"), url:'/Administration' },
                { title:'停车记录', img:require("../assets/img/record.png"), url:'' },
                { title:'停车兑换', img:require("../assets/img/exchange.png"), url:'/Exchange' },
                { title:'兑换记录', img:require("../assets/img/charge.png"), url:'/RecordExchange' },
            ],
            // times:'',times1:'', current:''
        }
    },
    beforeCreate(){
        this.$store.dispatch('info')
        // this.$store.dispatch('access')
        this.$store.dispatch('remain')
        setInterval(()=>{
            this.$store.commit('SET_TIMES')
        },1000)
    },
    computed:{
        info(){
            if(this.$store.state.info == '') {
                this.$store.commit('SET_INFO')
                this.$store.commit('SET_ACCESS')
            }
            return this.$store.state.info
        },
        access(){
            return this.$store.state.access
        },
        remain(){
            return this.$store.state.remain
        },
        time(){
            return this.$store.state.times
        },
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        Record(index){
            if(index == 1){
                this.$store.commit('SET_PAGE', true)
                // var page = { num: 1, isP: false }
                // this.$store.dispatch('history', page)
                this.$router.push({path:'/Record'})
            }
        },
        pay(){
            if(this.access.length > 0 && access.carType == 1) this.$router.push({path:'/Pay'})
        },
        help(){
            this.$router.push({path:'/Help'})
        }
    },
}
</script>


<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #home{
        width: 100%; min-height: 100vh; color: white; padding-top: 5vw; font-size: 4vw; position: fixed;
        background: url("../assets/img/back.png") no-repeat; background-size: 100% 100%; 
    }

    .family{
        font-family: PingFang-SC-Medium; font-weight: Medium;
    }
    .familys{
        font-family: PingFang-SC-Bold; font-weight: Bold;
    }

    .main{
        width: 100%; height: 30vw; letter-spacing: 0.3vw;
        display: flex; justify-content: space-around; text-align: center;
        div{
            line-height: 8vw; padding-top: 8vw;
        }
        div:nth-child(1){
            width: 49%; position: relative; line-height: 8.5vw;
            p:nth-child(1){
                font-size: 8vw; font-weight: 600; 
            }
        }
        div:nth-child(2){
            width: 51%; line-height: 7.3vw;
            p:nth-child(1){
                span:nth-child(1){font-size: 8vw; font-weight: 600; margin-right: 3vw;}
            }
            p:nth-child(2){
                span:nth-child(1){ margin-right: 6vw;}
            }
        }
        div:nth-child(1):after{
            content: ' ';
            position: absolute; height: 33%; top: 33.5%; right: 0; width: 1px; background-color: white;
        }
    }
    
    .btn{
        width: 100%; height: 30vw; text-align: center; margin-top: 10vw; font-size: 4.5vw; margin-bottom: 10vh;
        // border: 1px solid red;
        button{
            width: 60%; height: 13vw; background:rgba(255,139,75,1); border-radius: 1.5vw; box-shadow:0px 0px 20px rgba(0,0,0,0.2);
            outline: none!important; border: 0; color: white; font-size: 5vw; margin-top: 3vw; .family;
        }
    }

    .btns{
        width: 100%; height: 50vw; font-size: 4.5vw; letter-spacing: 0.3vw; margin-bottom: 5vw;
        .btns_list{
            width: 100%; height: 100%;
            .plate{
                width: 40%; height: 11vw; margin: 0 auto; .familys; font-size: 6vw; text-align: center;
                background-color: RGBA(255, 139, 75, 1); border-radius: 1.5vw; line-height: 11vw; margin-bottom: 3vw;
            }
            p{
                line-height: 8vw; padding-left: 13vw; .family;
                span:nth-child(2){
                    margin-left: 8vw;
                }
            }
            p:nth-child(5){
                margin-top: 2vw;
                span:nth-child(2){
                    margin-left: 14vw; font-size: 8vw; margin-right: 2vw; color: RGBA(255, 188, 87, 1); .family;
                }
            }
        }
    }


    footer{
        width: 94%; height: 35vw; margin-left: 3%; background-color: white; border-radius: 3vw 3vw 0 0;
        .list{
            width: 90%; height: 100%; display: flex; justify-content: space-around; margin: 0 auto;
            div{
                width: 25%; height: 100%; text-align: center; .family;
                padding-top: 6vw;
                img{
                    width: 15vw; height: 15vw; border-radius: 50%;
                }
                a{  color:rgba(43,43,43,1); }
            }
        }
    }
    .charge{
        width: 100%; height: 15vw; border-top: 0.4vw solid RGBA(255, 139, 75, 1); text-align: center; line-height: 15vw;
        a{ color: white; }
        div:nth-child(1){
            width: 70%; height: 15vw; border-right: 0.4vw solid RGBA(255, 139, 75, 1); background-color: rgba(206,206,206,1);
            font-size: 5vw; font-weight: Bold; border-radius: 0 0 0 3vw; float: left; .family;
        }
        div:nth-child(2){
            width: 30%; height: 15vw; background-color: white; color: black; float: left; font-size: 4.5vw; border-radius: 0 0 3vw 0; .family;
            span:nth-child(1){
                color: RGBA(255, 139, 75, 1); font-size: 6vw; margin-right: 1vw; 
            }
        }
    }

    .active{
        background:rgba(255,139,75,1)!important;
    }
</style>
