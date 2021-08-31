import {Router,createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import System from './modules/system'

const routes = [
  {path:'/',redirect:'/home', meta:{ hideMenu:true }},
  {path:'/home',name: 'home',component:()=> import ('/src/components/HelloWorld.vue'), 
    meta:{
       title:'首页'
   }},
  ...System
]

const router:Router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;