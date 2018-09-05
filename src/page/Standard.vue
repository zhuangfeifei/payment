<template>
    <div id="standard">
        <header-item>收费标准</header-item>

        <div class="main">
            <table>
                <tr>
                    <td>车辆类型</td>
                    <td>停放时间</td>
                    <td>收费标准（辆）</td>
                </tr>
                <tr>
                    <td rowspan="3">小型车 <br>（蓝牌照）</td>
                    <td>30分钟以内</td>
                    <td class="a">免费</td>
                </tr>
                <tr>
                    <td>超出30分钟</td>
                    <td>3元/半小时 <br>（不足半小时按半小时计算）</td>
                </tr>
                <tr>
                    <td>24小时以内</td>
                    <td>封顶20元</td>
                </tr>
                <tr>
                    <td>大型车</td>
                    <td></td>
                    <td>按小型车收费加倍收取</td>
                </tr>
            </table>
            <div class="Notes">
                <h3>停车须知</h3>
                <ol>
                    <li>进入停车场的车辆，需按引导停放车辆，并按规定缴纳停车费用；</li>
                    <li>军车、执行公务的司法和行政法车、消防车、救 护车、邮资车、工程抢险车免受停放服务费；</li>
                    <li>严禁在停车场内洗车、加油、修车、动用明火；</li>
                    <li>严禁载有易燃、易爆等危险品的车辆进入本停车 场内；</li>
                    <li>停车请锁好门窗，带走贵重物品，车辆安全及车 内物品报关责任自负。</li>
                </ol>
            </div>
        </div>

    </div>
</template>

<script>
import header from './header'
export default {
    name: 'home',
    data () {
        return {
            
        }
    },
    components:{
        "header-item":header
    },
    beforeCreate(){
        
    },
    computed:{
        
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        
    },
    filters:{
       
    }
}
</script>


<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #standard{
        width: 100%; min-height: 100vh; color: white; padding-top: 5vw; font-size: 4vw; position: fixed;
        background: url("../assets/img/back.png") no-repeat; background-size: 100% 100%; 
    }

    .family{
        font-family: PingFang-SC-Medium; font-weight: Medium;
    }
    .familys{
        font-family: PingFang-SC-Bold; font-weight: Bold;
    }

    .main{
        width: 85%; height: 80vh; margin: 18vw auto; border: 0.3vw solid white; background-color: rgba(255, 255, 255, 0.2); font-size: 3.5vw;
        .family;
        table{
            width: 100%; height: 50%; border-collapse: collapse; text-align: center;
            td{
                width: 20%; border: 1px solid white;
            }
            .a{
                width: 40%;
            }
        }
        .Notes{
            width: 100%; height: 50%; border: 1px solid white;
            h3{ margin-left: 2vw; font-size: 4vw; line-height: 10vw; }
            ol{
                list-style: decimal; padding-left: 7vw;
            }
        }
    }

    
</style>
