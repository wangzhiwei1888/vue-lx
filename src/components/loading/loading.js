import LoadingComponent from './Loading.vue';
import LoadingComponent2 from './Loading2.vue';
//需要main.js 中执行 vue.use
const Loading = {

	install:function(Vue){
		Vue.component('Loading',LoadingComponent);
	}
}
//js引入后直接生效
import Vue from 'vue';
Vue.component('Loading2',LoadingComponent2);

export default Loading;