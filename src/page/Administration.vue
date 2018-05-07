<template>
    <div id="Administration">

        <header-item>车辆管理</header-item>
        
        <!--<nav>
            <img src="../assets/img/cat.png" alt="">
            <p>对不起，您还未添加车牌</p>
        </nav>-->

        <div class="mains">
            <div class="main">
                <div v-for="(item,index) in imgs" :key="index">
                    <img v-lazy="item" alt="">
                    <p>苏E·B1A03</p>
                    <img class="cha" src="../assets/img/deletes.png" alt="">
                </div>
            </div>
        </div>

        <footer>
            <button>添加车牌</button>
            <p><span>温馨提示：</span><span>您最多可以添加3个车牌</span></p>
        </footer>
        
    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            imgs: [require('../assets/img/cat1.png'),require('../assets/img/cat2.png'),require('../assets/img/cat3.png')]
        }
    },
    components:{
        "header-item":header
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        
    },
    watch:{
        
    }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #Administration{
        width: 100%; height: 100vh; font-size: 4vw; top: 0; font-family: PingFang-SC-Regular; font-weight: Regular;
         padding-top: 15vw; position: fixed!important;
    }

    nav{
        width: 100%; text-align: center; margin: 15vw auto;
        img{
            width: 30vw; height: 35vw;
        }
        p{
            margin-top: 10vw; font-size: 4.5vw;
        }
    }

    .mains{
        width: 100%; overflow-x: auto;
    }
    .main{
        width: 275vw; height: 55vh; margin-top: 5vw; margin-bottom: 8vw; padding-left: 5vw;
        display: flex;
        div{
            width: 83vw; height: 100%; margin-left: 4vw; text-align: center; position: relative;
            img{
                width: 100%; height: 100%;
            }
            p{
                position: absolute; top: 3vw; left: 20vw; color: white; font-family: PingFang-SC-Bold; font-weight: bold; font-size: 8vw;
                letter-spacing: 0.3vw; 
            }
            .cha{
                width: 6vw; height: 6vw; position: absolute; top: 5vw; right: 5vw;
            }
        }
    }

    footer{
        width: 100%; text-align: center;
        button{
            width: 50%; margin: 0 auto; height: 15vw;background:rgba(255,139,75,1); border-radius: 2vw; box-shadow:0px 0px 20px rgba(0,0,0,0.2);
            border: 0; outline: none!important; font-size: 5vw; color: white; font-family:PingFang-SC-Medium; 
        }
        p{
            margin-top: 5vw; font-size: 4.5vw;
        }
    }

</style>

