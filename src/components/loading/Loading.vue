<template>
    <div  class="loading_box">
        <div>{{newmsg}}</div>
        <div>{{myname}}</div>
    </div>
</template>
<script>
    export default {
        
        data(){
            return {
                msg: 'Loading...'
            }
        },
        props:{
            title:{
                type:String
            },
            myname:{
                default:'aaaaaaa'
            }
        },
        computed:{
            newmsg:function(){

                if(this.title == 'title=xxxx'){

                    return this.msg
                    
                } 
                return this.title;
            }
        }
        
    }
</script>
<style scoped>
.loading_box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 5rem;
    color: royalblue;
}
</style>
