<template>
  <div class="test">
    <div class="box">
      <div>add</div>
      <button @click="toFirst()">tofirst</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Second',

  data () {
    return {
      arr:[1,2,3,4,4],
      msg:'first'
    }
  },
  created(){

    
  },
  methods:{

    toFirst:function(){
      // console.log('first')
      this.$emit('child-tell-me',this.msg)
    }
  }
}
</script>

<style scoped>
.box{
  background-color: red;
}
</style>
