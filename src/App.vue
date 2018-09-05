<template>
  <div id="app">
      <!--<transition :name="transitionName">-->
        <router-view/>
      <!--</transition>-->
    <!--<v-loading v-show="fetchLoading"></v-loading>-->
  </div>
</template>

<script>
import Loading from '@/page/_loading'
import Util from './store/storage'
export default {
  name: 'App',
  data(){
      return{
          transitionName:''
      }
  },
  components:{
    'v-loading':Loading
  },
  beforeCreate(){
        // this.$store.dispatch('access')
        // this.$store.dispatch('history')
        this.$store.commit('OPENID')
  },
  computed:{
    fetchLoading(){
      return this.$store.state.fetchLoading
    }
  },
  watch:{
    $route(to, from) {
      //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
            this.transitionName = 'slide-right'
        }else{
            this.transitionName = 'slide-left'
        }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding: 0; margin: 0;
}

    
    .slide-left-enter-active,
    .slide-left-leave-active{
        will-change: transform;
        transition: all 0.5s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter-active,
    .slide-right-leave-active {
        will-change: transform;
        transition: all 0.5s;
        position: absolute;
        width:100%;
        left:0;
        /*bottom: 0;*/
    }
    .slide-right-enter {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(-100%);
    }
</style>
