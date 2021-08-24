import axios ,{AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
const BaseURL = process.env.NODE_ENV === 'development'?'/api':''

const instance: AxiosInstance = axios.create({
  baseURL:BaseURL,
  timeout: 8000
})

instance.interceptors.request.use((config:AxiosRequestConfig)=>{
  return config
},(err:AxiosError)=>{
  console.log(err)
  return Promise.reject(err)
})

instance.interceptors.response.use((response:AxiosResponse)=>{
  const res = response.data
  if(res.code === 200 ) {
    return res
  } else {
    showError(res)
    return Promise.reject(res)
  }
},(err:AxiosError)=>{
  return Promise.reject(err)
})

function showError(error: any) {
  if (error.code === 403) {
    // to re-login
    store.dispatch('user/loginOut')
  } else {
    ElMessage({
      message: error.msg || error.message || '服务异常',
      type: 'error',
      duration: 3 * 1000
    })
  }
  
}

export default instance