<template>
  <div class="test">
    
    <div class="box">
      <div>{{name}}</div>
      <div>{{msg}}</div>
    </div>

  </div>
</template>

<script>
import bus from '../../common/event.js';

export default {
  name: 'First',

  data () {
    return {
      arr:[1,2,3,4,4],
      msg:'First'
    }
  },
  props:['name'],
  created(){

    
  },
  mounted: function (){
    this.receive();
  },
  methods:{

    receive:function(){

      bus.$on('second-to-first',(msg)=>{

        this.msg = msg;
        console.log(msg);

      })
    }
  }
}
</script>

<style scoped>
.box{
  background-color: red;
}
</style>
