const routes = [
  {
    path:'/login',
    component:()=> import('@/view/system/login.vue')
    , meta:{ hideMenu:true }
  },
  {
    path:'/system',
    component:()=> import('@/layout/index.vue'),
    children:[
      {
        path: 'crudTable',
        component: () => import('@/view/main/pages/crudTable/index.vue'),
        meta: { title: '业务表格', cache: false, roles: ['admin', 'editor'] }
      },
      {
        path: 'categoryTable',
        component: () => import('@/view/main/pages/categoryTable/index.vue'),
        meta: { title: '分类联动表格', cache: true, roles: ['admin'] }
      },
      {
        path: 'treeTable',
        component: () => import('@/view/main/pages/treeTable/index.vue'),
        meta: { title: '树联动表格', cache: true }
      },
      {path:'/404',name:'404',component:()=> import ('/src/components/404.vue'),meta:{}},
    ]
    , meta:{ title: '业务' }
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: "404",
    hideMenu: true
    , meta:{ hideMenu:true }
  },
]

export default routes