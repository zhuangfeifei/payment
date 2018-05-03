<template>
    <div id="home">

        <div class="main">
            <div><p>01:20</p><p>2018.04.22</p></div>
            <div>
                <p><span>200</span><span>剩余车位</span></p>
                <p><span>C:100</span><span>D:100</span></p>
            </div>
        </div>

        <div class="btn">
            <p>您还未登录</p>
            <router-link to="/Login">
                <button>登录</button>
            </router-link>
        </div>

        <footer>
            <div class="list">
                <div><img src="../assets/img/management.png" alt=""><p>车辆管理</p></div>
                <div><img src="../assets/img/record.png" alt=""><p>停车记录</p></div>
                <div><img src="../assets/img/exchange.png" alt=""><p>停车兑换</p></div>
                <div><img src="../assets/img/charge.png" alt=""><p>收费标准</p></div>
            </div>
        </footer>
        <div class="charge">
            <div>缴费</div>
            <div><span>?</span><span>关于帮助</span></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            
        }
    },
}
</script>


<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #home{
        width: 100%; height: 100vh; color: white; padding-top: 5vw; font-size: 4vw; position: fixed;
        background: url("../assets/img/back.png") no-repeat; background-size: 100% 100%; 
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
            outline: none!important; border: 0; color: white; font-size: 5vw; margin-top: 3vw;
        }
    }

    footer{
        width: 95%; height: 35vw; margin-top: 15vw; margin-left: 2.5%; background-color: white; border-radius: 3vw 3vw 0 0;
        .list{
            width: 90%; height: 100%; display: flex; justify-content: space-around; margin: 0 auto;
            div{
                width: 25%; height: 100%; font-family:PingFang-SC-Medium; color:rgba(43,43,43,1); text-align: center;
                padding-top: 6vw;
                img{
                    width: 15vw; height: 15vw; border-radius: 50%;
                }
                // border: 1px solid red;
            }
        }
    }
    .charge{
        width: 95%; height: 15vw; margin: 0 auto; border-top: 0.4vw solid RGBA(255, 139, 75, 1); text-align: center; line-height: 15vw; 
        div:nth-child(1){
            width: 70%; height: 15vw; border-right: 0.4vw solid RGBA(255, 139, 75, 1); background-color: rgba(206,206,206,1);
            font-size: 5vw; font-weight: Bold; border-radius: 0 0 0 3vw; float: left;
        }
        div:nth-child(2){
            width: 30%; height: 15vw; background-color: white; color: black; float: left; font-size: 4.5vw;
            span:nth-child(1){
                color: RGBA(255, 139, 75, 1); font-size: 6vw; margin-right: 1vw; 
            }
        }
    }
</style>
