<template>
    <div id="Pays">

        <header-item>停车缴费</header-item>
        
        
        <div class="main">
            <div class="plate">苏E·B2101</div>
            <p><span>进入时间</span><span>2018.01.01 14：00</span></p>
            <p><span>当前时间</span><span>2018.01.01 16：00</span></p>
            <p><span>已停时间</span><span>2 小时</span></p>
            <p><span>应缴费</span><span>13</span><span>元</span></p>
        </div>

        <div class="pay">
            <div><img src="../assets/img/wx.png" alt=""><span>微信支付</span><img @click="wxPays" :src="show ? wxImg : payImg" alt=""></div>
            <div><img src="../assets/img/yinlian.png" alt=""><span>银联支付</span><img @click="yinPays" :src="!show ? wxImg : payImg" alt=""></div>
        </div>

        <div class="shiji">
            <span>停车券</span><span>-10元</span>
        </div>
        <div class="shiji">
            <span>实缴费用</span><span class="moeny">¥3.00</span>
        </div>

        <button @click="pay">缴费</button>

        <router-view></router-view>
        
    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            imgs: require('../assets/img/records.png'),imgs1: require('../assets/img/stop.png'),
            wxImg:require('../assets/img/checked.png'),payImg:require('../assets/img/checke.png'), show:true
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        this.$store.dispatch('index')
    },
    created(){
        // console.log(wx)
        
    },
    mounted(){
        
    },
    methods:{
        wxPays(){
            this.show = true
        },
        yinPays(){
            this.show = false
        },
        pay(){
            console.log(this.show)
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
        width: 100%; height: 52vw; font-size: 4vw; letter-spacing: 0.3vw; background-color: white; padding-top: 5vw;
        .plate{
            width: 40%; height: 11vw; margin: 0 auto; font-family: PingFang-SC-Bold; font-weight: Bold; font-size: 6vw; text-align: center;
            background-color: RGBA(255, 139, 75, 1); border-radius: 1.5vw; line-height: 11vw; margin-bottom: 3vw; color: white;
        }
        p{
            line-height: 7vw; padding-left: 18vw;
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
        span:nth-child(2){
            float: right; color: RGBA(255, 139, 75, 1);
        }
        .moeny{
            color: RGBA(234, 22, 22, 1)!important;
        }
    }

    button{
        width: 100%; height: 15vw; background:rgba(255,139,75,1); text-align: center; line-height: 15vw; color: white;
        position: fixed; bottom: 0; left: 0; font-size: 5.5vw; border: 0; outline: none; font-family: PingFang-SC-Bold; font-weight: Bold;
    }

</style>

