import notFundState from '@/interfaces/store/modules/404'
export default {
  namespace:true,
  state:():notFundState=>({
    unFindName:'测试404'
  }),
  getters:{},
  mutations:{
    changeName(store:any,data:string){
      store.unFindName = data
    }
  },
  actions:{}
}