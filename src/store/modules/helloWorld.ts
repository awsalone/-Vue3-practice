export default {
  namespace:true,
  state: {
    name1: undefined,
    name2: false
  },
  getters:{
    getName1: (state:any) =>{
      const { name1 } = state
      return name1===undefined?'未命名':name1
    }
  },
  mutations: {},
  actions: {}
}