import { defineComponent } from "vue"

export default defineComponent({
  data(){
    return {
      testName:'测试'
    }
  },
  methods:{
    testMethod(){
      console.log(123)
    }
  },
  onMounted:function(){
    console.log('mount')
    function test123(){
      console.log('000000')
    }
  }
})