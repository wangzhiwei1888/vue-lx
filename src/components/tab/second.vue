<template>
  <div class="test">
    
    <div class="box">second</div>
    <button @click="sendToFirst">sendToFirst</button>
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
  background-color: red;
}
</style>
