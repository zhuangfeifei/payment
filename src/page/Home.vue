<template>
    <div id="home" v-lazy:background-image="imgIcon">

        <div class="main">
            <div><p>01:20</p><p>2018.04.22</p></div>
            <div>
                <p><span>200</span><span>剩余车位</span></p>
                <p><span>C:100</span><span>D:100</span></p>
            </div>
        </div>

        <div v-if="this.$route.query.login" class="btn">
            <p>对不起，您还未添加车牌</p>
            <router-link to="/LicensePlate">
                <button>添加车牌</button>
            </router-link>
        </div>
        <div v-if="!this.$route.query.plate_num" class="btns">
            <div class="plate">苏E·B2101</div>
            <p><span>进入时间</span><span>2018.01.01 14：00</span></p>
            <p><span>当前时间</span><span>2018.01.01 16：00</span></p>
            <p><span>已停时间</span><span>2 小时</span></p>
            <p><span>应缴费</span><span>13</span><span>元</span></p>
        </div>
        <!--<div v-else class="btn">
            <p>您还未登录</p>
            <router-link to="/Login">
                <button>登录</button>
            </router-link>
        </div>-->

        <footer>
            <div class="list">
                <router-link :to="item.url" v-for="(item,index) in list" :key="index">
                    <div><img v-lazy="item.img" alt=""><p>{{item.title}}</p></div>
                </router-link>
            </div>
        </footer>
        <div class="charge">
            <div :class="{active:!this.$route.query.plate_num}" @click="Pay">缴费</div>
            <div><span>?</span><span>关于帮助</span></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            imgIcon:require("../assets/img/back.png"),
            list:[
                { title:'车辆管理', img:require("../assets/img/management.png"), url:'/Administration' },
                { title:'停车记录', img:require("../assets/img/record.png"), url:'/Record' },
                { title:'停车兑换', img:require("../assets/img/exchange.png"), url:'/Administration' },
                { title:'收费标准', img:require("../assets/img/charge.png"), url:'/Administration' },
            ]
        }
    },
    methods:{
        Pay(){
            this.$router.push({path:'/Pay'})
        }
    }
}
</script>


<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #home{
        width: 100%; height: 100vh; color: white; padding-top: 5vw; font-size: 4vw; position: fixed;
        background: no-repeat; background-size: 100% 100%; 
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
            width: 51%; 
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
        width: 100%; height: 30vw; text-align: center; margin-top: 15vw; font-size: 4.5vw;
        // border: 1px solid red;
        button{
            width: 60%; height: 13vw; background:rgba(255,139,75,1); border-radius: 1.5vw; box-shadow:0px 0px 20px rgba(0,0,0,0.2);
            outline: none!important; border: 0; color: white; font-size: 5vw; margin-top: 3vw; .family;
        }
    }

    .btns{
        width: 100%; height: 50vw; font-size: 4.5vw; margin-top: 3vw; letter-spacing: 0.3vw;
        .plate{
            width: 40%; height: 11vw; margin: 0 auto; .familys; font-size: 6vw; text-align: center;
            background-color: RGBA(255, 139, 75, 1); border-radius: 1.5vw; line-height: 11vw; margin-bottom: 5vw;
        }
        p{
            line-height: 8vw; padding-left: 16vw; .family;
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


    footer{
        width: 95%; height: 35vw; margin-left: 2.5%; background-color: white; border-radius: 3vw 3vw 0 0; position: fixed; bottom: 30vw;
        .list{
            width: 90%; height: 100%; display: flex; justify-content: space-around; margin: 0 auto;
            a{
                width: 25%; height: 100%; text-decoration: none;
                div{
                    width: 100%; height: 100%; color:rgba(43,43,43,1); text-align: center; .family;
                    padding-top: 6vw;
                    img{
                        width: 15vw; height: 15vw; border-radius: 50%;
                    }
                    // border: 1px solid red;
                }
            }
        }
    }
    .charge{
        width: 95%; height: 15vw; margin-left: 2.5%; border-top: 0.4vw solid RGBA(255, 139, 75, 1); text-align: center; line-height: 15vw; position: fixed; bottom: 15vw;
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
