<template>
    <div class="loading_box">{{msg}}</div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Loading...'
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
    color: blue;
}
</style>
