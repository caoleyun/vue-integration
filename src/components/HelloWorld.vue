<template>
  <div>
      我是hellowWorld组件
      父组件传给我的props为 
      <p>{{msg}}</p>
      <p>{{methodTest()}}</p>
      <p>{{computedTest}}</p>

      <p><router-link  :to="{name:'home'}">home</router-link></p>
      <p><router-link  :to="{name:'helloWorld'}">helloWorld</router-link></p>
      <router-view></router-view>
      
  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'helloWorld',
  props: {
    msg: String
  },
  data:function(){
    return{};
  },
  methods:{
     methodTest() {
            return this.msg + '现在我用的是methods';
        }
  },
  computed:{
        computedTest(){
            return this.msg + '现在我用的是computed';
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  

</style>
