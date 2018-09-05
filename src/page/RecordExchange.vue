<template>
    <div id="Exchange">

        <header-item>兑换记录</header-item>

        <nav><div @click="change(index)" v-for="(item,index) in titles" :key="index" :class="{active:title_num == index}"><span>{{item}}</span><section v-show="title_num == index"></section></div></nav>
        
        <div class="Exchange_list">
            <div v-if="userVoucher.length > 0" class="list">
                <div class="list_" @click="useConpon(item)" v-for="(item,index) in userVoucher" :key="index" :class="{active: show}">
                    <div>
                        <p>{{item.ticketName}}</p>
                        <p>（库存{{item.remainNum}}张）</p>
                        <p>有效期截至：{{item.holdingTime}}</p>
                    </div>
                    <section>立即使用</section>
                </div>
            </div>
            <div v-else class="no"><p v-if="title_num == 0">很抱歉，目前没有方圆里停车券~</p><p v-else>目前没有已使用的方圆里停车券~</p></div>
        </div>


    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            titles:['未使用','已使用'], title_num:0, bacimg:[require('../assets/img/coupon.png'),require('../assets/img/coupons.png')],
            // show:false
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
            if(this.$store.state.userVoucher == '') {
                this.$store.commit('SET_USERVOUCHER')
                this.$store.commit('SET_ACCESS')
            }
            return this.$store.state.userVoucher
        },
        show(){
            return this.$store.state.show
        },
        access(){
            return this.$store.state.access
        },
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        change(index){
            this.title_num = index
            this.$store.dispatch('userVoucher', index)
        },
        useConpon(lists){
            if(this.title_num == 0){
                if(this.access.length > 0){
                    this.$router.push({path:'/Pay',query:{list: lists}})
                }else{
                    this.$dialog.alert({
                        title: '您还没有停车！',
                        message: '',
                        confirmButtonText: '关闭'
                    }).then(() => {
                        
                    })
                }
            }
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

    nav{
        width: 100%; height: 10vw; display: flex; line-height: 10vw; font-size: 3.5vw; border-bottom: 0.3vw solid gainsboro;
        div{ 
            width: 50%; text-align: center;
            section{
                width: 15vw; height: 0.5vw; background-color: black; margin: -0.5vw auto;
            }
        }
        .active{
            color: rgba(255,139,75,1);
            section{ background-color: rgba(255,139,75,1); }
        }
    }

    .Exchange_list{
        width: 100%; color: white;
        .title_img{ width: 100%; height: 35vh; }
        h4{ text-decoration:underline; color: rgba(255,139,75,1); text-align: right; margin-top: 5vw; margin-right: 5vw; }
        .list{
            width: 90%; margin: 0 auto; margin-bottom: 5vw;
            .list_{
                width: 100%; height: 30vw; background: url("../assets/img/use.png") no-repeat; background-size: 100% 100%;
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
                section{ float: right; line-height: 24vw; font-size: 4vw; width: 35%; height: 24vw;}
            }
            .active{ background: url("../assets/img/coupons.png") no-repeat; background-size: 100% 100%; }
        }
    }

    .no{
        width: 100%; height: 15vw; text-align: center; margin-top: 40vw; color: black;
    }


</style>

