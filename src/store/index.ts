import { createStore, Store } from 'vuex'
import helloWorld from '@/store/modules/helloWorld'
import notFund from '@/store/modules/404'
import user from '@/store/modules/user'

export default createStore({
  modules:{
    helloWorld,
    notFund,
    user
  }
})