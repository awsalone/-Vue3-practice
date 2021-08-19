const env = import.meta.env.MODE || 'production'

const EnvConfig = {
  dev:{
    baseApi:'/',
    mockApi:""
  },
  test:{
    baseApi:'/api',
    mockApi:""
  },
  prod:{
    baseApi:'/api',
    mockApi:""
  }
}

export default{
  env,
  mock:true,
  ...EnvConfig[env]
}