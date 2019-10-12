<template>
    <div class="notebook-detail">
        <h1> {{msg}} :{{$route.params.noteId}}</h1>
     

    </div>
</template>

<script>
import Auth from '@/api/auth'

export default {
    data(){
        return{
            msg: '笔记本详细页'
        }
    },
        created(){
        Auth.getInfo().then(data=>{
            if(!data.isLogin){
                this.$router.push({path:'/login'})
            }
        })
    }
}
</script>

<style  scoped>
h1{
    color:red;
}
</style>