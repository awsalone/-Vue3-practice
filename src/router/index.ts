import {Router,createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import System from './modules/system'

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',name: 'home',component:()=> import ('/src/components/HelloWorld.vue')},
  
  ...System
]

const router:Router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;