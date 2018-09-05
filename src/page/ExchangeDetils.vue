<template>
    <div id="ExchangeDetils">

        <header-item>停车兑换</header-item>

        <nav>
            <img src="../assets/img/fyls.png" alt="">
        </nav>
        
        <div class="Exchange_detils">
            <h3>{{voucher_content.ticketName}}</h3>
            <h1>{{voucher_content.score}}积分</h1>
            <p>有效期截至：{{voucher_content.holdingTime}}</p>
            <div class="tip"><div>tip：</div><div>仅用于方圆里项目停车使用,使用停车券时只能使用一张</div></div>
            <button @click="isShow">兑换</button>
        </div>

        <van-popup class="Exchange" v-model="show" :close-on-click-overlay="false">
            <div class="Exchange_popup">
                <p>本次消耗积分数</p>
                <h1>{{voucher_content.score}}</h1>
                <div class="Exchange_popup_">
                    <div @click="exchange">兑换</div>
                    <div @click="nos">放弃</div>
                </div>
            </div>
        </van-popup>

    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            show:false
        }
    },
    components:{
        "header-item":header
    },
    computed:{
        voucher_content(){
            return this.$store.state.voucher[this.$route.query.indexs]
        },
        info(){
            if(this.$store.state.info) this.$store.commit('SET_INFO')
            return this.$store.state.info
        },
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        isShow(){
            this.show = true
        },
        exchange(){
            this.show = false
            if(this.info.score >= this.voucher_content.score){
                this.$store.dispatch('exchange', this.voucher_content.id)
            }else{
                this.$toast.fail('积分不足！')
            }
        },
        nos(){
            this.show = false
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
    #ExchangeDetils{
        width: 100%; height: 100vh; font-size: 4vw; top: 0; font-family: PingFang-SC-Regular; font-weight: Regular; padding-top: 15vw;
        background: url("../assets/img/back.png") no-repeat; background-size: 100% 100%;
    }

    nav{
        width: 100%; text-align: center; margin: 7vh 0 5vh 0;
        img{
            width: 40%; height: 10vh;
        }
    }

    .Exchange_detils{
        width: 75%; height: 56vh; margin: 0 auto; background-color: white; border-radius: 3vw; text-align: center; padding: 3vh 0;
        color:rgba(75,75,75,1);  font-size: 4vw;
        h3{ color: rgba(43,43,43,1); font-size: 5.5vw; }
        h1{
            color:rgba(255,139,75,1); line-height: 15vh; font-size: 8vw;
        }
        .tip{
            width: 100%; padding: 2vh 5vh; display: flex; 
            div{ text-align: left; }
        }
        button{
            width: 75%; height: 9vh; background:rgba(255,139,75,1); border-radius:1vw; box-shadow:0px 0px 20px rgba(0,0,0,0.2); border: 0;
            color: white; font-size: 5vw; margin-top: 5vw; font-weight: Medium; font-family:PingFang-SC-Medium;
        }
    }

    .Exchange{border-radius: 3vw;}
    .Exchange_popup{
        width: 75vw; height: 25vh; border-radius: 3vw; position: relative; text-align: center; padding-top: 3vh;
        p{ font-family:PingFang-SC-Regular; font-weight: Regular; color:rgba(128,128,128,1);}
        h1{ color:rgba(43,43,43,1);}
        .Exchange_popup_{
            width: 100%; height: 8vh; border-top: 0.3vw solid rgba(255,139,75,1); display: flex; position: absolute; bottom: 0; left: 0;
            div{ width: 50%; height: 100%; line-height: 8vh; color: rgba(255,139,75,1); font-family:PingFang-SC-Bold; font-weight: bold;}
            div:nth-child(1){ border-right: 0.3vw solid rgba(255,139,75,1); }
        }
    }


</style>

