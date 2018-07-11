<template>
  <div class="test">
    <div class="box">
      <div class="">{{age}}</div>
      <div >second</div>
      <button @click="sendToFirst">sendToFirst</button>
    </div>
  </div>
</template>

<script>
import bus from '../../common/event.js';

export default {
  name: 'Second',

  data () {
    return {
      arr:[1,2,3,4,4]
    }
  },
  props:['age'],
  created(){

    
  },
  methods:{

    sendToFirst:function(){

      bus.$emit('second-to-first','msg')

    }
  }
}
</script>

<style scoped>
.box{
  margin: 10px;
  background-color: red;
}
</style>
