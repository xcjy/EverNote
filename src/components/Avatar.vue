<template>
    <span :title="username" > {{slug}} </span>

</template>


<script>
import Auth from '@/api/auth'
import Bus from '@/helpers/bus'
export default {
    data(){
        return{
            username: '未登录',
        }
    },
    created(){
        Bus.$on('userInfo',user=>{
            this.username=user.username
        })
        Auth.getInfo().then(res=>{
            if(res.isLogin){
                this.username=res.data.username
            }
            console.log(res)
        })
    },
    computed:{
        slug(){
            return this.username[0]
        }
    }
}
</script>

<style  scoped>
    span{
     display:inline-block;
     
     width: 30px;
     height: 30px;
     text-align: center;
     line-height: 32px;
     border-radius:50%;
     background: skyblue;
     color: #fff;
     text-shadow: 1px 0 1px #795c19;
     font-weight: bold;
     text-transform: uppercase;
     font-size: 19px;
     margin-top : 15px;

    }
</style>