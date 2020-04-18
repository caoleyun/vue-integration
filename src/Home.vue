<template>
  <div id="app2">
        home组件
        <button @click="add">+</button>
        <p>{{count}}</p>
        <button @click="minus">-</button>

        <p><button v-on:click="addnumber">加文件中的数字</button></p>
        <p><router-link  :to="{name:'home'}">home</router-link></p>
        <p><router-link  :to="{name:'helloWorld'}">helloWorld</router-link></p>
        <router-view></router-view>
      
  </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue';


    export default {
      name: 'home',
      components: {

      },
      computed:{
        count(){
          return this.$store.state.count;
        }
      },
      methods:{
        add(){
          this.$store.commit("add");
        },
        minus(){
          this.$store.commit("minus");
        },
        addnumber(){
            this.$store.dispatch("addnumber");
        }
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
