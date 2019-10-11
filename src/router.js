import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Notebooks from '@/components/NoteBookList'
import Note from '@/components/NoteDetail'
import Trash from '@/components/TrashDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/notebooks',
      component: Notebooks
    },
    {
      path: '/note/:noteId',
      component: Note
    },
    {
      path: '/trash/:noteId',
      component: Trash
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }


  ]
})
