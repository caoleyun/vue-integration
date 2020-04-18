import Vue from 'vue';
import App from './App.vue';

import {Button,Select} from 'element-ui';


import store from "./vuex/store.js";

import VueRouter from "vue-router";
import routes from "./router/routes.config.js";

 Vue.use(Button)
 Vue.use(Select)

Vue.use(VueRouter);

//创建router实例 传入routes参数 值是routes.config.js的一个数组
const router =new VueRouter({
	// mode: 'history',
	routes
});

//这里是一个监控调试 当路由发生跳转时候  就会触发beforeEach()函数中的会点函数
router.beforeEach((to,from,next)=>{
	//console.log(to,from);
	next();
});

//它会显示你生产模式的消息
Vue.config.productionTip = false

new Vue({
	el:"#app",
	store,
	router,
  render: h => h(App)
});
