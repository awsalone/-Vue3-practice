<template>
  404
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
import { useStore } from 'vuex';
import instance from '@/utils/system/request';

export default defineComponent({
  setup(prop,ctx) {
    function handlePromise(){
      const PENDING_STATUS = 'pending'
      const FULLFILLED_STATUS = 'fullfilled'
      const REJECT_STATUS = 'rejected'

    }
    const obj1 = [1,2,3]
    // [Symbol.toPrimitive](){

    //   return '123'
    // }
    
    obj1.toString = function(){
      return 'xxx'
    }
    //  obj1.valueOf = function(){
    //   return 'yyy'
    // }
    console.log(''+obj1)
    // obj1[Symbol.toPrimitive] = function(input){
    //   console.log(input)
    //   return '111'
    // }
    console.log(+obj1)
    console.log(0)

    const store = useStore()
    store.commit('changeName','1231')
    console.log(store.state.notFund)
    onMounted(()=>{
      const instance = getCurrentInstance()
      if(!instance) return
      const instanceAxios = instance.appContext.config.globalProperties.$axios
      instanceAxios.get('/test')
    })
  },
})
</script>



