<template>
    <div id="plate">

        <header-item>添加车牌</header-item>
        
        <nav>
            <p>请您添加真是有效的车牌（新能源选填）</p>
            <div class="License_plate">
                <div><span :class="{active:show0}" @click="change_city0">{{city}}</span><span :class="{active:show1}" @click="change_city1">{{city_num}}</span></div>
                <div @click="change_city2">
                    <span :class="{active:num.length == 0 && show2 && !show3}">{{num[0]}}</span><span :class="{active:num.length == 1 && show2 && !show3}">{{num[1]}}</span>
                    <span :class="{active:num.length == 2 && show2 && !show3}">{{num[2]}}</span><span :class="{active:num.length == 3 && show2 && !show3}">{{num[3]}}</span>
                    <span :class="{active:num.length == 4 && show2 && !show3}">{{num[4]}}</span>
                </div>
                <div @click="change_city3" :class="{active:show3}">{{energys}}</div>
            </div>
            <div class="energy">新能源</div>
        </nav>

        <div class="main" v-show="show0">
            <span v-for="(item,index) in data.city" :key="index" @click="plate_city(index)" :class="{city_active:city_index == index}">{{item}}</span>
            <div><img src="../assets/img/delete.png" alt=""></div>
        </div>
        <div class="main" v-show="show1">
            <span v-for="(item,index) in data.city_Letter" :key="index" @click="plate_city_Letter(index)" :class="{city_active:city_Letter_index == index}">{{item}}</span>
            <div><img src="../assets/img/delete.png" alt=""></div>
        </div>
        <div class="main" v-show="show2">
            <span v-for="(item,index) in data.city_Letter_num" :key="index" @click="plate_city_Letter_num(index)" :class="{city_active:city_Letter_num_index == index}">{{item}}</span>
            <div @click="deletes"><img src="../assets/img/delete.png" alt=""></div>
        </div>

        <button class="btn" :class="{btn_active:show_btn}" @click="Determine">完成添加</button>

    </div>
</template>

<script>
import header from './header'
export default {
    data () {
        return{
            data:{
                city:['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁',
                '豫','鄂','湘','粤','桂','琼','渝','川','贵','云','藏','陕','甘','青','宁','新','台'],
                city_Letter:['A','B','C','D','E','F','G','H','I','J','K','M','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                city_Letter_num:['A','B','C','D','E','F','G','H','I','J','K','M','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    '1','2','3','4','5','6','7','8','9','0'
                ],
            },
            city:'苏', city_index:9, city_num:'E', city_Letter_index:4, city_Letter_num_index:-1, show0:false, show1:false, show2:false, show3:false,
            num:[],count:0,energys:'',show_btn:false
        }
    },
    components:{
        "header-item":header
    },
    created(){
        this.show0 = true
    },
    mounted(){
        
    },
    methods:{
        change_city0(){
            this.show0 = true
            this.show1 = false
            this.show2 = false
            this.show3 = false
        },
        change_city1(){
            this.show1 = true
            this.show0 = false
            this.show2 = false
            this.show3 = false
        },
        change_city2(){
            this.show2 = true
            this.show0 = false
            this.show1 = false
            this.show3 = false
        },
        change_city3(){
            this.show3 = true
            this.show0 = false
            this.show1 = false
            this.show2 = true
        },
        plate_city(index){
            this.city = this.data.city[index]
            this.city_index = index
        },
        plate_city_Letter(index){
            this.city_num = this.data.city_Letter[index]
            this.city_Letter_index = index
        },
        plate_city_Letter_num(index){
            if(this.show3){
                this.energys = this.data.city_Letter_num[index]
            }
            if(!this.show3 && this.count < 5){
                this.num.push(this.data.city_Letter_num[index])
                this.count ++
            }
            this.city_Letter_num_index = index
        },
        deletes(){
            if(this.count > 0 && !this.show3){
                this.num.pop()
                this.count --
            }
            if(this.show3){
                this.energys = ''
            }
        },
        Determine(){
            if(this.show_btn){
                this.$router.push({path:'/',query:{plate_num:1}})
            }
        }
    },
    watch:{
        count(val,old){
            if(val == 5){
                this.show_btn = true
            }else{
                this.show_btn = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #plate{
        width: 100%; height: 100vh; position: fixed; font-size: 4vw; top: 0; padding-top: 15vw;
    }

    nav{
        width: 100%; height: 35vw; text-align: center; padding: 5vw; font-family:PingFang-SC-Medium; position: relative;
        // border: 1px solid red;
        .License_plate{
            width: 100%; height: 100%; display: flex; justify-content: space-between; line-height: 13vw; margin-top: 3vw;
            div{ box-shadow:0px 0px 20px rgba(0,0,0,0.2); border-radius: 1.5vw; }
            div:nth-child(1){
                width: 22%; height: 13vw; background:rgba(255,139,75,1); color: white;
                span{
                    display: inline-block; width: 50%; height: 100%; position: relative;
                }
                span:nth-child(1):after{
                    content: ' '; z-index: 10;
                    position: absolute; top: 10%; right: -0.3vw; height: 80%; width: 0.3vw; background-color: white;
                }
            }
            div:nth-child(2){
                width: 55%; height: 13vw; border: 0.4vw solid RGBA(255, 139, 75, 1); display: flex;
                span{
                    display: inline-block; width: 20%; height: 100%; position: relative;
                }
                span:after{
                    content: ' ';
                    position: absolute; top: 10%; right: 0; height: 80%; width: 0.4vw; background-color: RGBA(255, 139, 75, 1);
                }
                span:nth-child(5):after{
                    width: 0;
                }
            }
            div:nth-child(3){
                width: 11%; height: 13vw; border: 0.4vw solid RGBA(98, 185, 0, 1);
            }
        }
        .energy{
            width: 10vw; height: 5vw; background-color: RGBA(98, 185, 0, 1); color: white; font-size: 2.3vw; line-height: 5vw;
            border-radius: 1.5vw; position: absolute; bottom: 18.3vw; right: 3vw;
        }
    }

    .active{
        border: 0.5vw solid RGBA(255, 188, 87, 1)!important; border-radius: 1.5vw!important; box-shadow:0px 0px 20px rgba(0,0,0,0.2)!important;
    }


    .main{
        width: 90%; margin: 0 auto; border: 0.3vw solid RGBA(255, 139, 75, 1); border-radius: 1.5vw;
        font-family: PingFang-SC-Medium; font-weight: Medium; padding: 2vw 2vw 4vw 2vw; position: relative;
        span{
            display: inline-block; width: 10vw; height: 10vw;
            background-color: RGBA(232, 232, 232, 1); padding: 2vw 3vw; border-radius: 1.5vw; margin-left: 2vw; margin-top: 2vw;
        }
        div{
            width: 10vw; height: 10vw; position: absolute; bottom: 4vw; right: 3.5vw;
            img{
                width: 100%; height: 100%;
            }
        }
    }

    .city_active{
        color: RGBA(255, 139, 75, 1);
    }

    .btn{
        width: 90%; height: 13vw; background:rgba(206,206,206,1); font-family:PingFang-SC-Bold; color:rgba(255,255,255,1);
        border-radius: 1.5vw; outline: none!important; border: 0; margin-left: 5%; margin-top: 10vw; font-size: 5vw; font-weight: Bold;
        letter-spacing: 0.3vw;
    }

    .btn_active{
        background:rgba(255,139,75,1);
    }

</style>

