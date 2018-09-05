<template>
    <div id="record">

        <header-item>停车记录</header-item>
        
        <nav v-if="record == ''">
            <img v-lazy="imgs" alt="">
            <p>您还没有停车记录</p>
            <p>再忙，也要记得来方圆里逛逛哦~</p>
        </nav>

        <div v-else class="main" v-for="(item,index) in record" :key="index">
            <div class="record_list">
                <div class="title">
                    <p><span>{{item.carNo}}</span><span>{{item.enterTime}}</span></p>
                    <div></div>
                </div>
                <div class="content">
                    <div><img v-lazy="imgs1" alt=""></div>
                    <div>
                        <p>{{item.plgName}}</p>
                        <p>
                            <span v-if="item.exitTime && item.enterTime">{{(Date.parse(new Date(item.exitTime.replace(/-/g, "/"))) - Date.parse(new Date(item.enterTime.replace(/-/g, "/")))) | filters}}</span>
                            <span v-else-if="item.enterTime">{{(time.current - Date.parse(new Date(item.enterTime.replace(/-/g, "/")))) | filters}}</span>
                            <!--<span>13元</span>-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            imgs: require('../assets/img/records.png'),imgs1: require('../assets/img/stop.png'),
            page: 1,
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        var page = { num: 1, isP: false }
        this.$store.dispatch('history', page)
    },
    computed:{
        record(){
            if(this.$store.state.record == '') this.$store.commit('SET_RECORD')
            return this.$store.state.record
        },
        time(){
            return this.$store.state.times
        },
    },
    created(){
        // document.title = "停车记录"
        
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            let scrollTop = $(window).scrollTop()
            let scrollHeight = $(document).height()
            let windowHeight = $(window).height()
            if (scrollTop + windowHeight === scrollHeight) {
                this.page ++
                var page = { num: this.page, isP: true }
                if(this.$store.state.isPage) this.$store.dispatch('history', page)
            }
        }
    },
    watch:{
        
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #record{
        width: 100%; min-height: 100vh; font-size: 4vw; font-family: PingFang-SC-Regular; font-weight: Regular;
        background-color: RGBA(232, 232, 232, 1); padding-bottom: 5vw; padding-top: 15vw;
    }


    .font1{ font-family:PingFang-SC-Medium; font-weight: Medium; }


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
        width: 100%; margin-top: 5vw;
        background-color: white;

        .family{
            font-family: PingFang-SC-Bold; font-weight: Bold;
        }

        .record_list{
            width: 90%; height: 45vw; margin: 0 auto;
            .title{
                width: 100%; height: 15vw; position: relative;
                p{
                    display: flex; justify-content: space-between; line-height: 15vw;
                    span:nth-child(1){
                        font-size: 4.5vw; .family
                    }
                }
                div{
                    width: 100%; height: 0.3vw; position: absolute; bottom: 0; left: 0;
                    background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
                    background-size: 6vw 1vw;
                    background-repeat: repeat-x;
                }
            }
            .content{
                width: 100%; height: 30vw; display: flex;
                div:nth-child(1){
                    width: 25%; height: 100%;
                    img{
                        width: 17vw; height: 17vw; margin-top: calc((30vw - 17vw) / 2);
                    }
                }
                div:nth-child(2){
                    width: 75%; height: 100%; margin-top: 3vw; line-height: 12vw;
                    p:nth-child(1){
                        font-size: 4.3vw; .family
                    }
                    p:nth-child(2){
                        span:nth-child(2){
                            color: RGBA(255, 139, 75, 1); font-size: 7vw; float: right;
                        }
                    }
                }
            }
        }
    }

</style>

