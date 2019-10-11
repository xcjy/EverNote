<template>
    <div class="notebook-detail">
        <h1> {{msg}} :{{$route.params.noteId}}</h1>
     

    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: '回收笔记本详细页'
        }
    }
}
</script>

<style  scoped>
h1{
    color:blue;
}
</style>