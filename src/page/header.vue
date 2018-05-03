<template>
    
    <nav id="nav">
        <div class="headers">
            <i @click="history" class="fa fa-angle-left his" aria-hidden="true"></i>
            <span id="title" v-for="(value, index) in headers" :key="index">{{value}}</span>
        </div>
    </nav>

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
<style scoped>
/*顶部*/
#nav{
    width: 100%; height: 15vw; background-color: black; line-height: 15vw; font-size: 5vw;
    position: fixed; top: 0; color: white; text-align: center; z-index: 100;
}
.fa-angle-left{
    float: left; margin-left: 5vw;
    font-size: 10vw;
    line-height: 15vw;
}
#title{
    position: relative; left: -4vw;
}         
</style>


