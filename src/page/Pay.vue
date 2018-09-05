<template>
    <div id="Pays">

        <header-item>停车缴费</header-item>
        
        
        <div v-if="access" class="main">
            <div class="plate">{{access.carNo}}</div>
            <p><span>进入时间</span><span>{{access.enterTime}}</span></p>
            <p><span>当前时间</span><span>{{time.times}}</span></p>
            <p><span>已停时间</span><span>{{(time.current - Date.parse(new Date(access.enterTime.replace(/-/g, "/")))) | filters}}</span></p>
            <!--<p><span>应缴费</span><span>13</span><span>元</span></p>-->
        </div>

        <!--<div class="pay">
            <div><img src="../assets/img/wx.png" alt=""><span>微信支付</span><img @click="wxPays" :src="show ? wxImg : payImg" alt=""></div>
            <div><img src="../assets/img/yinlian.png" alt=""><span>银联支付</span><img @click="yinPays" :src="!show ? wxImg : payImg" alt=""></div>
        </div>-->

        <div class="shiji" @click="coupon">
            <span>停车券（{{userVoucher.length}} 张可用）</span><img src="../assets/img/Mores.png" alt=""><span>{{detils.ticketName}}</span>
        </div>
        <!--<div class="shiji">
            <span>实缴费用</span><span class="moeny">¥3.00</span>
        </div>-->

        <button @click="pay">缴费</button>

        <transition name="slide-bottom">
            <div v-show="show_coupon" class="Exchange_list">
                <div @click="coupon" class="go"></div>
                <div v-if="userVoucher.length > 0" class="list">
                    <div class="list_" @click="changes(index)" v-for="(item,index) in userVoucher" :key="index" :style="{'background': 'url('+bacimg[0]+')' + 'no-repeat','background-size': '100% 100%'}">
                        <div>
                            <p>{{item.ticketName}}</p>
                            <p>（库存{{item.remainNum}}张）</p>
                            <p>有效期截至：{{item.holdingTime}}</p>
                        </div>
                        <section>{{item.score}}</section>
                    </div>
                </div>
                <div v-else class="no">很抱歉，目前没有方圆里停车券~</div>
                <div @click="nocoupon" class="noCoupon">不使用抵扣券</div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            imgs: require('../assets/img/records.png'),imgs1: require('../assets/img/stop.png'),
            wxImg:require('../assets/img/checked.png'),payImg:require('../assets/img/checke.png'), 
            show:true, show_coupon: false,
            bacimg:[require('../assets/img/coupon.png'),require('../assets/img/coupons.png')],
            detils:''
        }
    },
    head(){
        return{
            title:'123'
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        this.$store.dispatch('userVoucher', 0)
    },
    computed:{
        userVoucher(){
            return this.$store.state.userVoucher
        },
        access(){
            if(this.$store.state.access == '') this.$store.commit('SET_ACCESS')
            return this.$store.state.access[0]
        },
        time(){
            return this.$store.state.times
        },
    },
    created(){
        // console.log(wx)
        this.detils = this.$route.query.list ? this.$route.query.list : ''
    },
    mounted(){
        
    },
    methods:{
        // wxPays(){
        //     this.show = true
        // },
        // yinPays(){
        //     this.show = false
        // },
        coupon(){
            this.show_coupon = !this.show_coupon
        },
        nocoupon(){
            this.coupon()
            this.detils = ''
        },
        changes(index){
            this.detils = this.userVoucher[index]
            this.coupon()
        },
        pay(){
            var list = { uniqueCode: this.detils.uniqueCode, id: this.access.id }
            this.detils == '' ? this.$store.dispatch('pay', this.access.carNo) : this.$store.dispatch('use', list)
        }
    },
    watch:{
        
    }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #Pays{
        width: 100%; min-height: 100vh; font-size: 4vw; top: 0; font-family: PingFang-SC-Medium; font-weight: Medium;
        background-color: RGBA(232, 232, 232, 1); padding-bottom: 5vw; padding-top: 15vw;
    }

    nav{
        width: 100%; text-align: center; margin: 20vw auto;
        img{
            width: 30vw; height: 35vw; margin-bottom: 10vw; 
        }
        p{
            font-size: 4.5vw; color: RGBA(43, 43, 43, 1);
        }
        p:nth-child(3){
            font-size: 3.5vw; color: RGBA(128, 128, 128, 1); margin-top: 3vw;
        }
    }

    .main{
        width: 100%; height: 52vw; font-size: 4vw; letter-spacing: 0.3vw; background-color: white; padding-top: 10vw;
        .plate{
            width: 40%; height: 11vw; margin: 0 auto; font-family: PingFang-SC-Bold; font-weight: Bold; font-size: 6vw; text-align: center;
            background-color: RGBA(255, 139, 75, 1); border-radius: 1.5vw; line-height: 11vw; margin-bottom: 3vw; color: white;
        }
        p{
            line-height: 7vw; padding-left: 16vw;
            span:nth-child(2){
                margin-left: 8vw;
            }
        }
        p:nth-child(5){
            margin-top: 1vw;
            span:nth-child(2){
                margin-left: 14vw; font-size: 8vw; margin-right: 2vw; color: RGBA(255, 139, 75, 1)
            }
        }
    }

    .pay{
        width: 100%; height: 30vw; background-color: white; margin-top: 4vw; line-height: 15vw; font-size: 4.5vw;
        div{
            display: flex; width: 100%; height: 15vw; justify-content: space-between;
            img:nth-child(1){
                width: 10vw; height: 10vw; margin: 2.5vw 0 0 5vw;
            }
            span{
                display: inline-block; width: 70%; text-align: left;
            }
            img:nth-child(3){
                width: 5vw; height: 5vw; margin: 5vw 5vw 0 0;
            }
        }
    }

    .shiji{
        width: 100%; height: 10vw; line-height: 10vw; background-color: white; margin-top: 4vw; padding: 0 5vw;
        span:nth-child(3){
            float: right; color: RGBA(255, 139, 75, 1);
        }
        img{ width: 3vw; height: 4vw; float: right; position: relative; top: 3vw; left: 1vw; }
        .moeny{
            color: RGBA(234, 22, 22, 1)!important; float: right;
        }
    }

    button{
        width: 100%; height: 15vw; background:rgba(255,139,75,1); text-align: center; line-height: 15vw; color: white;
        position: fixed; bottom: 0; left: 0; font-size: 5.5vw; border: 0; outline: none; font-family: PingFang-SC-Bold; font-weight: Bold;
    }


    .Exchange_list{
        width: 100%; height: 100vh; color: white; position: fixed; top: 0; left: 0; z-index: 101;
        .go{
            width: 100%; height: 15vw;
        }
        .list{
            width: 100%; height: calc(100vh - 15vw - 12vw); padding: 5%; position: fixed; bottom: 12vw; left: 0; 
            background-color: white; overflow-y: auto; -webkit-overflow-scrolling: touch;
            .list_{
                width: 100%; height: 30vw;
                margin-top: 4vw; padding-top: 3vw; padding-left: 5vw; text-align: center;
                div{ 
                    width: 58%; height: 24vw; border: 0.3vw solid white; border-radius: 1.5vw; padding-top: 2vw;
                    font-size: 4vw; float: left;
                    p:nth-child(1){
                        font-family: PingFang-SC-Medium; font-weight: Medium;
                    }
                    p:nth-child(2){
                        margin-bottom: 3vw; font-size: 3.5vw; 
                    }
                    p:nth-child(3){
                        font-size: 3.5vw;
                    }
                }
                section{ float: right; line-height: 24vw; font-size: 8vw; width: 35%; height: 24vw;}
            }
        }
        .no{
            width: 100%; height: 100%; text-align: center; padding-top: 40vw; color: black; background-color: white;
        }
        .noCoupon{
            width: 100%; height: 12vw; text-align: center; line-height: 12vw; font-size: 3.8vw; box-shadow:0px 0px 20px rgba(0,0,0,0.2);
            position: fixed; bottom: 0; left: 0; background-color: white; color: black;
        }
    }




    .slide-bottom-enter-active,
    .slide-bottom-leave-active{
        will-change: transform;
        transition: all 0.5s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-bottom-enter {
        transform: translateY(100%);
    }
    .slide-bottom-leave-active {
        transform: translateY(100%);
    }
    

</style>

