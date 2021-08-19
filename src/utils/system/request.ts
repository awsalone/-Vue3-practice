import axios ,{AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'
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
    return Promise.reject(res)
  }
},(err:AxiosError)=>{
  console.log(err)
  return Promise.reject(err)
})

export default instance