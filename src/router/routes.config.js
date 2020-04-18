import Home from "../Home.vue";
import Error from "../Error.vue";
// import Home from "../Home.vue";
import HelloWorld from "../components/HelloWorld.vue";
// import Bar from "./Bar.vue";

const routes = [
	{ 
		path: '/', 
		component: Home , 
		name:"home",
		
	},
	{
		path: '/helloWorld', 
		component: HelloWorld , 
		name:"helloWorld"
	},










	{
		//放在最后
		path: '*', 
		component: Error , 
		name:"error"
	}

];

export default routes;
