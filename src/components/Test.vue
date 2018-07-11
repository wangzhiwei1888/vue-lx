<template>
  <div class="test">
    <div refs="name">姓名：{{userInfo.name}}</div>
    <div>年龄：{{userInfo.age}}</div>

    <span v-for="(value,key,index) in arr" :key="key">
      {{key}}:{{value}}:{{index}}
    </span>

    <div v-for="(value,key,index) in obj" :key="key">
      <div>{{key}}:{{value}}:{{index}}</div>
    </div>

    <div v-for="(value,key,index) in myarr" :key="index">
      <div>{{key}}:{{value.a}}:{{index}}</div>
    </div>
  

    <div>
      <div class="tab">
        <button v-for="(value,key,index) in arr" :key="key" v-on:click="changeTab(value)">{{value}}</button>
        <!-- <button v-on:click="changeTab(2)">2</button>
        <button v-on:click="changeTab(3)">3</button> -->
      </div>
      <div class="tab-content">
        <component v-bind:is="currentTabComponent" v-on:child-tell-me="listenToSon"></component>
      </div>
    </div>
  
    <div class="mybox">
      <first/>
      <second/>
    </div>

    <div>
      <button v-on:click="add">add</button>
    </div>
  </div>
</template>

<script>

import {myMixin} from '../common/mixin.js';
import first from './tab/first.vue';
import second from './tab/second.vue';
import three from './tab/three.vue';
import add from './tab/add.vue';


// console.log(myMixin)
// var myMixin = {
//   data (){
//     return{
//       arr:[],
//       myarr:[{a:1},{a:2},{a:3}]
//     }
//   },
//   created: function () {
//     this.hello()
//   },
//   methods: {
//     hello: function () {
//       console.log('hello from mixin!')
//     }
//   }
// }

// 定义一个使用混入对象的组件
// var Component = Vue.extend({
//   mixins: [myMixin]
// })
// var component = new Component() 

export default {
  name: 'Test',

  data () {
    return {
      arr:[1,2,3,4,5],
      obj:{
        a:1,
        b:2
      },
      currentTabComponent:'first'
    }
  },
  created(){

    console.log(this.$options);
    console.log(1);

    // this.arr = this.arr.map(function(item){

    //   return item = item *10;

    // })

    // this.arr.forEach(function(item,index,arr){

    //   item = item * 10;
    //   console.log(item)
    // })

    // var set = new Set(this.arr);

    // console.log(set)
    // console.log([...set]) //

    // var s = new Set();
    // [2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
    // for (let i of s) {
    //   console.log(i);
    // }
    // console.log([...s]) //[2, 3, 5, 4]

  },
  components:{
    first,
    second,
    three,
    add
  },
  methods:{
    changeTab: function(num){
      
      if(num == 1){

        this.currentTabComponent = 'first';
      }else if(num == 2){

        this.currentTabComponent = 'second';
      }else if(num == 3){

        this.currentTabComponent = 'three';
      }else{

        this.currentTabComponent = 'add';
      }
    },
    add: function(){

      this.arr.push(6);
    },
    listenToSon: function(msg){
      // console.log(msg)
      // console.log(1);
      this.currentTabComponent = msg;
    }

  },
  mixins:[myMixin]
}
</script>

<style scoped>
.mybox{
  padding: 20px;
}
</style>
