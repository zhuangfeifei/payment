<template>
  <div id="login">

    <nav>
        <img src="../assets/img/fyl.png" alt="">
    </nav>

    <div class="main">
        <div class="phone">
            <p v-show="showPhone">请输入手机号</p>
            <input type="text" v-model="phones" placeholder="请输入手机号">
        </div>
        <div class="code">
            <p v-show="showCode">请输入验证码</p>
            <input type="text" v-model="codes" placeholder="请输入验证码">
        </div>
        <button>获取验证码</button>
    </div>

    <footer>
        <button :class="{active: showPhone && showCode}" @click="login">登录</button>
        <div>
            <span>小提示：</span>
            <ol>
                <li>通在线停车缴费更便捷</li>
                <li>更多活动赢取缴费时长</li>
            </ol>
        </div>
    </footer>

  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            phones:'', codes:'', showPhone:false, showCode:false, showLogin:false
        }
    },
    created(){},
    mounted(){

    },
    methods:{
        login(){
            if(this.showPhone && this.showCode){
                this.$router.push({path:'/'})
            }
        }
    },
    watch:{
        phones(val,old){
            if(val.length > 0){
                this.showPhone = true
            }else{
                this.showPhone = false
            }
        },
        codes(val,old){
            if(val.length > 0){
                this.showCode = true
            }else{
                this.showCode = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
    }
    #login{
        width: 100%; height: 100vh; color: white; padding-top: 5vw; font-size: 4vw; position: fixed;
        background: url("../assets/img/back.png") no-repeat; background-size: 100% 100%; 
    }
    nav{
        width: 100%; text-align: center; margin-top: 10vw;
        img{
            width: 50%; height: 25vw;
        }
    }

    .main{
        width: 100%; height: 45vw; color: RGBA(255, 139, 75, 1); margin-top: 10vw; 
        .inputs{
            input::-moz-placeholder{
                font-size: 5vw; color: white;
            }
            ::-webkit-input-placeholder{
                font-size: 5vw; color: white;
            }
        }
        .phone{
            width: 90%; height: 15vw; border-bottom: 1px solid white; margin: 0 auto; font-size: 4vw; padding-left: 5vw; position: relative;
            input{
                width: 100%; height: 10vw; background: none; border: 0; outline: none!important; color: white;
                font-size: 5vw; line-height: 10vw; position: absolute; bottom: 0; left: 5vw;
            }
            .inputs
        }
        .code{
            width: 50%; height: 15vw; border-bottom: 1px solid white; margin-left: 5%; float: left; margin-top: 6vw; padding-left: 5vw; position: relative;
            input{
                width: 100%; height: 10vw; background: none; border: 0; outline: none!important; color: white;
                font-size: 5vw; line-height: 10vw; position: absolute; bottom: 0; left: 5vw;
            }
            .inputs
        }
        button{
            width: 30%; height: 10vw; float: right; background-color: white; color: RGBA(255, 139, 75, 1);
            outline: none!important; border: 0; font-size: 4vw; margin-top: 11vw; margin-right: 5%; border-radius: 1.5vw;
        }
    }

    footer{
        width: 100%; height: 35vw;
        button{
            width: 90%; height: 15vw; margin-left: 5%; font-size: 5.5vw; color: white; outline: none!important; font-weight: Bold;
            background:rgba(206,206,206,1); border-radius: 2vw; box-shadow:0px 0px 10px rgba(43,43,43,0.1); border: 0;
        }
        div{
            width: 100%; height: 15vw; margin-top: 7vw; font-size: 4vw;
            span{ float: left; margin-left: 10vw;}
            ol{ float: left; margin-left: 7vw;}
        }
    }
    .active{
        background-color: RGBA(255, 139, 75, 1);
    }
</style>