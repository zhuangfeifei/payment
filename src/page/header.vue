<template>
    
    <div id="nav">
        <div class="headers">
            <img @click="history" src="../assets/img/fan.png" alt="">
            <slot></slot>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:['headers'],
    components: {
        
    },
    created(){

    },
    methods:{
        history() {
            history.go(-1)
        },
    }
}
</script>
<style lang="less" scoped>
/*顶部*/
#nav{
    width: 100%; height: 15vw; background-color: black; line-height: 15vw; font-size: 5vw; font-weight: Bold;
    position: fixed!important; top: 0; color: white; text-align: center; z-index: 100;
}
img{
    width: 6vw; height: 6vw; float: left; position: absolute; top: 4.5vw; left: 1vw;
}       
</style>


