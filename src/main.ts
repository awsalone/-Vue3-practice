import { createApp } from 'vue'
import axios from '@/utils/system/request'
import router from '@/router'
import store from '@/store';
import App from '@/App.vue'
import './css/reset.css'
import 'normalize.css'
const app = createApp(App)
app
  .use(store)
  .use(router)
  .mount('#app')
app.config.globalProperties.test = '111'
app.config.globalProperties.testFnc = function(){
  console.log('test')
}

if(process.env.NODE_ENV === 'development'){
  app.config.globalProperties.$axios = axios;
  // require('./mock')
};