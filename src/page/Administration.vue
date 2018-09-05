<template>
    <div id="Administration">

        <header-item>车辆管理</header-item>
        
        <div v-if="info.cars" class="mains">
            <!--<div class="main" :style="{'width': ''+((info.cars[0].length)*87 + 14)+'vw'}">
                <div @click="Record(item.id)" v-for="(item,index) in info" :key="index">
                    <img :src="imgs[index]" alt="">
                    <p>{{item.carNo}}</p>
                    <img @click="deletes(index)" class="delete" src="../assets/img/deletes.png" alt="">
                </div>
            </div>-->
            <div class="main">
                <div @click="Record(info.cars[0].id)">
                    <img :src="imgs[1]" alt="">
                    <p>{{info.cars[0].carNo}}</p>
                    <img @click.stop="deletes" class="delete" src="../assets/img/deletes.png" alt="">
                </div>
            </div>
        </div>

        <nav v-else>
            <img src="../assets/img/cat.png" alt="">
            <p>对不起，您还未添加车牌</p>
        </nav>

        <footer v-if="info.cars">
            <button @click="Add" :class="{noAdd:info.cars ? true : false}">添加车牌</button>
            <p><span>温馨提示：</span><span>您最多可以添加1个车牌</span></p>
        </footer>
        
    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            imgs: [require('../assets/img/cat1.png'),require('../assets/img/cat2.png'),require('../assets/img/cat3.png')],
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        // this.$store.dispatch('list')
    },
    computed:{
        info(){
            if(this.$store.state.info == '') this.$store.commit('SET_INFO')
            return this.$store.state.info
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        Add(){
            if(this.info.length < 1) this.$router.push({path:'/LicensePlate'})
        },
        deletes(){
            this.$store.dispatch('unbind', this.info.cars[0].id)
        },
        Record(id){
            this.$store.dispatch('record', id)
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
    #Administration{
        width: 100%; min-height: 100vh; font-size: 4vw; top: 0; font-family: PingFang-SC-Regular; font-weight: Regular;
         padding-top: 15vw; position: fixed!important; background-color: white;
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
        width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;
    }
    .main{
        height: 55vh; margin-top: 5vw; margin-bottom: 8vw; padding-left: 5vw;
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
            .delete{
                width: 6vw; height: 6vw; position: absolute; top: 3vw; right: 3vw;
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
        .noAdd{ background-color: rgba(206,206,206,1); }
    }

</style>

