var myMixin = {
  data (){
    return{
      arr:[],
      myarr:[{a:1},{a:2},{a:3}]
    }
  },
  created: function () {
    console.log(1111111111);
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

export {
  myMixin
}