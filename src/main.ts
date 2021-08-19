import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import axios from '@/utils/system/request'
import router from '@/router'
import store from '@/store';
import App from '@/App.vue'
import 'element-plus/lib/theme-chalk/index.css';
import '@/css/reset.css'
import 'normalize.css'
import i18n from '@/locale/index'

console.log(import.meta.env)
const app = createApp(App)
app
  .use(ElementPlus,{size:'small'})
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app')
app.config.globalProperties.test = '111'
app.config.globalProperties.testFnc = function () {
  console.log('test')
}

/***
* 防抖 单位时间只触发最后一次
*  @param {?Number|2000} time - 间隔时间
*  @param {Function} fn - 执行事件
*  @param {?String|"click"} event - 事件类型 例："click"
*  @param {Array} binding.value - [fn,event,time]
*  @date  2021/8/17
*  @author awsalone
*  例：<el-button v-debounce="[reset,`click`,300]">刷新</el-button>
*  也可简写成：<el-button v-debounce="[reset]">刷新</el-button>
*/

// app.directive('debounce', {
//   mounted(el, binding) {
//     let [fn, event = 'click', time = '2000'] = binding.value
//     let timer: NodeJS.Timer | null = null
//     el.addEventListener(event, () => {
//       console.log('click')
//       timer&&clearTimeout(Number(timer))
//       timer = setTimeout(()=>fn(),time)
//     })
//   }
// }
// )

/***
*  节流 每单位时间可触发一次
*  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
* 【考虑到input的change事件】
*  @param {?Number|300} time - 间隔时间
*  @param {Function} fn - 执行事件
*  @param {?String|"click"} event - 事件类型 例："click"
*  @param {Array} binding.value - [fn,event,time]
*  @date  2021/8/17
*  @author awsalone
*  例：<el-button v-throttle="[reset,`click`,300]">刷新</el-button>
*  传递参数则：<el-button v-throttle="[()=>reset(param),`click`,300]">刷新</el-button>
*/

// app.directive('throttle',{
//   mounted(el,binding){
//     let [fn, event = 'click', time = '2000'] = binding.value
//     let preDate = 0
//     el.addEventListener(event,()=>{
//       if(Date.now()-preDate<time) return 
//       fn()
//       preDate = Date.now()
//     })
//   }
// })

if (import.meta.env.MODE === 'development') {
  app.config.globalProperties.$axios = axios;
  // require('./mock')
};