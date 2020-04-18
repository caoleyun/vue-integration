<template>
  <div id="app2">
      404页面
      
      <p><router-link  :to="{name:'home'}">home</router-link></p>
      <p><router-link  :to="{name:'helloWorld'}">helloWorld</router-link></p>
      <router-view></router-view>
    
  </div>
</template>

<script>


    export default {
      name: 'error',
      components: {

      },
      computed:{
        
      },
      methods:{
        
      }
    }
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
