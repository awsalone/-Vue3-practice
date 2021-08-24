import {Router,createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import System from './modules/system'

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',name: 'home',component:()=> import ('/src/components/HelloWorld.vue')},
  {path:'/404',name:'404',component:()=> import ('/src/components/404.vue')},
  ...System
]

const router:Router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;