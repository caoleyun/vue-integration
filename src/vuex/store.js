import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";
//vuex 自带日志插件  
import createLogger from "vuex/dist/logger";
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const store=new Vuex.Store({
    //state必须是 对象
    state:{
        count:0
    },
    //突变
    mutations:{
        add(state,a){
            a=a?a:1;
            state.count+=a;
        },
        minus(state){
            state.count--;
        }
    },
    getters:{
        
    },
    actions:{
        addnumber({commit}){
            $.get("/a.txt",function(data){
                commit('add',Number(data));
            });
        }
    },
    plugins:debug ? [createLogger()]:[]

});

export default store;