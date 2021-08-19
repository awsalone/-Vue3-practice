<template>
<h1>ToDoList</h1>
<input :placeholder="defaultText" @keyup="inputConfirm($event)" v-model="curInput"/>
<ul>
  <li v-for="(item,index) in taskList" :key="index" :class="{completed:item.status}"><input type="checkbox" :checked="item.status" @click="updateChecked($event,index)"/>{{item.content}}</li>
</ul>
<button v-debounce="testClick" >防抖测试</button>
<button v-throttle="testClick" >节流测试</button>
<el-button @click="jump">进入404</el-button>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs , getCurrentInstance , onMounted, reactive} from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import testDemo from '@/interfaces/HelloWorld/inedx'
import myMixin from '@/mixins/test'
import Debounce from '@/directive/debounce'
import Throttle from '@/directive/throttle'
export default defineComponent({
  mixins:[myMixin],
  name: 'HelloWorld',
    directives:{
    Debounce,
    Throttle
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props,context) => {
    const router = useRouter()
    const test123:testDemo = {
      name:'fsaf',
      age:43,
      obj:[2,34]
    }
    const n1:hz = {
      sex:1
    }
    const store = useStore()
    console.log(store.state.helloWorld,store.getters.getName1)
    const count = ref(0)
    const defaultText = ref('输入待办事项')
    let taskList = reactive([{content:'任务1',status:false}])
    let curInput = ref('')
    function inputConfirm(e:any){
      if(e.keyCode!==13) return
      taskList.push({content:curInput.value,status:false})
      curInput.value = ''
    }
    function updateChecked(e:any,index:number){
      console.log(e.target.checked)
      taskList[index].status = e.target.checked
    }
    const { msg } = toRefs(props)
    console.log(getCurrentInstance())
    console.log(msg)
    console.log(context.attrs)
    const onEdit = (item:any,index:string)=>{
    }

    function testClick(){
      console.log('=========')
    }
    console.log(router)
    function jump(){
      console.log(router)
      router.push({name:'404'})
    }
    onMounted(()=>{
       const internalInstance  = getCurrentInstance()
       console.log(context)
      // console.log(11,internalInstance.appContext.config.globalProperties.testFnc())
    })
    return { 
      count,
      defaultText,
      taskList,
      inputConfirm,
      curInput,
      updateChecked,
      testClick,
      jump
       }
  },
  data(){
    return {
      name:111
    }
  },

  methods:{
    count11:function(){
      this.count++
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.completed{
  text-decoration-line: line-through;
  background-color: #ccc;
}
</style>
