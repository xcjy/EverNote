<template>
    <div  class="detail" id="notebook-list">
       <header>
           <a href="#" class="btn" @click.prevent="onCreate"> <i class="iconfont icon-plus">新建笔记本</i></a>
       </header>
    <main>
        <div class="layout">
            <h3>笔记本列表({{notebooks.length}})</h3>
            <div class="book-list">
                <router-link v-for="notebook in notebooks" :key="notebook.id" to="/note/1" class="notebook">
                    <div>
                        <span class="iconfont icon-notebook"></span>{{notebook.title}}
                        <span>{{notebook.noteCounts}}</span> 
                        <span class="action" @click.prevent="onEdit(notebook)">
                            编辑 </span>
                        <span class="action" @click.prevent="onDelete(notebook)"> 删除</span>
                        <span class="date">{{notebook.friendlyCreatedAt}}</span>
                    </div>
                </router-link>

               
            </div>
        </div>



    </main>
    </div>
</template>

<script>
import Auth from '@/api/auth'
import Notebooks from '@/api/notebook'
import {friendlyDate} from '@/helpers/util'
export default {
    name: 'Notebooks',
    data(){
        return{
           notebooks:[]
        }
    },
    created(){
        //未登录就跳转
        Auth.getInfo().then(data=>{
            if(!data.isLogin){
                this.$router.push({path:'/login'})
            }
        })
        //获取所有笔记本
        Notebooks.getAll().then(res=>{
            this.notebooks=res.data
        })
    },
    methods:{
        onCreate(){
            let title= window.prompt('创建笔记本')
            if(title.trim()===''){
                alert('笔记本名字不能为空')
                return
            }
            Notebooks.addNoteBook({title:title})
            .then(res=>{
                res.data.friendlyCreatedAt= friendlyDate(res.data.createdAt)
                alert(res.msg)
                this.notebooks.unshift(res.data)
            })
        },
        onEdit(notebook){
            let title=window.prompt('修改标题',notebook.title)
            Notebooks.updateNotebook(notebook.id,{title})
            .then(res=>{
                console.log(res)
                alert(res.msg)
                notebook.title=title
            })
        },
        onDelete(notebook){
              let isConfirm=window.confirm('删除吗')
              if(isConfirm){
                  Notebooks.deleteNotebook(notebook.id).then(
                      res=>{
                          alert(res.msg)
                          this.notebooks.splice(this.notebooks.indexOf(notebook),1)
                      }
                  )
              }

        }
    }
}
</script>

<style lang="less" scoped>
#notebook-list{
    flex:1;
    .btn{
        font-size:12px;
        color:#666;
        cursor:pointer;
        margin-left:10px;
      
    }
    input{
        width:30px;
        height:30px;
        line-height:30px;
        border:1px solid #ccc;
        border-radius: 3px;
        padding: 3px 5px;
        outline: none;
    }
    header{
        padding:12px;
        border-bottom: 1px solid #ccc;
    }
    main{
        padding:30px 40px;
    }
    .layout{
        max-width: 966px;
        margin: 0 auto;
    }
    main h3{
        font-size: 12px;
        color: #000;

    }
    main .book-list span{
        font-size:12px;
        font-weight: bold;
        color: #b3c0c8;

    }
    main .date,
    main .action{
        float:right;
        margin-left:10px;
    }
    main .iconfont{
        color:#1687ea;
        margin-right:4px;

    }
    main .notebook{
        display: block;
        cursor: pointer;

    }
    main a.notebook:hover{
        background-color: #f7fafd;

    }
    main a.notebook div{
        border-bottom: 1px solid #ebebeb;
        padding: 12px 14px;

    }
    main .error-msg{
        font-size:12px;
        color:red;

    }
}
</style>