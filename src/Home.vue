<template>
  <div id="app2">
        <!-- 主页-->主页
       <el-button>默认按钮</el-button>
       <el-button type="warning">警告按钮</el-button>

        <!-- <p><button v-on:click="addnumber">加文件中的数字</button></p>
        <p><router-link  :to="{name:'home'}">home</router-link></p>
        <p><router-link  :to="{name:'helloWorld'}">helloWorld</router-link></p>
        <router-view></router-view> -->
      
  </div>
</template>

<script>


    export default {
      name: 'home',
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
