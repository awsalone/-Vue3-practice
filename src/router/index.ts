import {Router,createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import NProgress from '@/utils/system/nrpogress'

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',name: 'home',component:()=> import ('/src/components/HelloWorld.vue')},
  {path:'/404',name:'404',component:()=> import ('/src/components/404.vue')},
]

const router:Router = createRouter({
  history:createWebHistory(),
  routes
})
const routerList = ['/','/home','/404']

router.beforeEach((to:any, from:any, next:any) => {
  // to and from are both route objects. must call `next`.
  NProgress.start();
  if(routerList.includes(to.path)){
    next()
  }else{
    next({ name:'404' })
  }
  
})

router.afterEach((to,from)=>{
  NProgress.done()
})

export default router;