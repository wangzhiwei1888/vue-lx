<template>
  <div class="hello">

    <Loading :title="doc.title" v-bind:myname="doc.name"></Loading>

    <h1>{{ msg }}</h1>
    <ul>
      <li>
        配置的全局变量 baseurl：{{baseurl}}
      </li>
    </ul>

    <div style="background:blue; color:#fff;">my doc.title {{doc.title}}</div>
    <text-document
      v-bind:title="doc.title"
      v-on:update:title="doc.title = $event"
    ></text-document>


  </div>
</template>

<script>

import TextDocument from './TextDocument.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      doc:{
        title:'title=xxxx',
        name:'wzw1111111'
      },
      msg: 'Welcome to Your Vue.js App',
      baseurl: this.URL_PREFIX
    }
  },
  components:{
    TextDocument
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
