<template>
  <div id="app">
    <router-view/>
    <v-loading v-show="fetchLoading"></v-loading>
  </div>
</template>

<script>
import Loading from '@/page/_loading'
export default {
  name: 'App',
  components:{
    'v-loading':Loading
  },
  computed:{
    fetchLoading(){
      return this.$store.state.fetchLoading
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
</style>
