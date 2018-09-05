<template>
    <div id="Exchange">

        <header-item>停车兑换</header-item>
        
        <div class="Exchange_list">
            <img class="title_img" src="../assets/img/banner.png" alt="">
            <div class="score"><span>当前积分： {{info.score}}</span><router-link to="/RecordExchange"><span>兑换记录</span></router-link></div>
            <div v-if="voucher.length > 0" class="list">
                <div class="list_" @click="detils(index)" v-for="(item,index) in voucher" :key="index">
                    <div>
                        <p>{{item.ticketName}}</p>
                        <p>（库存{{item.remainNum}}张）</p>
                        <p>有效期截至：{{item.holdingTime}}</p>
                    </div>
                    <section>{{item.score}}</section>
                </div>
            </div>
            <div v-else class="no">很抱歉，目前没有方圆里停车券~</div>
        </div>


    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        this.$store.dispatch('voucher')
    },
    computed:{
        voucher(){
            return this.$store.state.voucher
        },
        info(){
            return this.$store.state.info
        },
    },
    created(){
        
    },
    mounted(){
        // $(window).scrollTop(0);
        // document.body.scrollTop = 0
        // document.documentElement.scrollTop = 0
    },
    methods:{
        detils(index){
            this.$router.push({path:'/ExchangeDetils',query:{indexs:index}})
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
    #Exchange{
        width: 100%; min-height: 100vh; background-color: white; font-size: 4vw; top: 0; font-family: PingFang-SC-Regular; font-weight: Regular; padding-top: 15vw;
    }

    .Exchange_list{
        width: 100%; color: white;
        .title_img{ width: 100%; height: 35vh; }
        .score{
            width: 100%; height: 5vw; color: black; margin-top: 5vw; padding-left: 5vw;
            a{ text-decoration:underline; color: rgba(255,139,75,1); float: right; margin-right: 5vw; }
        }
        .list{
            width: 90%; margin: 0 auto; margin-bottom: 5vw; 
            .list_{
                width: 100%; height: 30vw; background: url("../assets/img/coupon.png") no-repeat; background-size: 100% 100%;
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
    }

    .no{
        width: 100%; height: 15vw; text-align: center; margin-top: 10vw; color: black;
    }


</style>

