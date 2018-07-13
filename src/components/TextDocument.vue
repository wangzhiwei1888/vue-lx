<template>
  <div class="hello">
    <div>this is TextDocument component</div>
    {{title}}
    <button v-on:click="update()">update title</button>
  </div>
</template>

<script>
export default {
  name: 'TextDocument',
  props:['title'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    update:function(){
      this.$emit('update:title', 'newTitle');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: red;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
