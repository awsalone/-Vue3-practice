const routes = [
  {
    path:'/login',
    component:()=> import('@/view/system/login.vue')
  },
  {
    path:'/system',
    component:()=> import('@/layout/index.vue'),
    children:[
      {path:'/404',name:'404',component:()=> import ('/src/components/404.vue')},
    ]
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: "/404",
    hideMenu: true
  },
]

export default routes