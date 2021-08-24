import router from './router'
import store from './store'
import NProgress from '@/utils/system/nrpogress'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login']
router.beforeEach((to:any, from:any, next:any) => {

  NProgress.start();
  const hasToken = getToken()
 
  if(hasToken){
    if(to.path==='/login'){
      next({path:'/'})
    }else{
      //const hasRole = store.
      next()
    }
  }else{
    /* 无token */
    if(whiteList.includes(to.path)){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to,from)=>{
  NProgress.done()
})