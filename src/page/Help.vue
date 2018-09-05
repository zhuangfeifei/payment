<template>
    <div id="Administration">

        <header-item>帮助</header-item>
        
        <div id="help"><img src="../assets/img/help.png" alt=""></div>
        
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
        
    },
    computed:{
        
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
        width: 100%; min-height: 100vh; font-size: 4vw;
        padding-top: 15vw; background-color: white;
    }

    #help{
        width: 100%; height: 100%;
        img{ width: 100%; height: 100%; }
    }

</style>

