// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.devtools = true


var index = 1
Vue.mixin({
  data (){
  	return {
  		userInfo:{
	  		name:'wzw',
	  		age:'28'
	  	}
  	}
  },
  created: function () {

  	// console.log(this.$options);
  	console.log('全局混入执行次数：'+index++);
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // myOption:'全局混入',
  components: { App },
  template: '<App/>'
})
