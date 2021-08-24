import { createStore, Store } from 'vuex'

/**
 * vite支持的多模块导入
 */
const files = import.meta.globEager('./modules/*.ts')

const modules:any = {}

Object.keys(files).forEach((item:string)=>{
  const module = files[item].default
  const moduleName = item.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})


export default createStore({
  modules:{
   ...modules
  }
})