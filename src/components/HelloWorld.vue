<template>
<h1>ToDoList</h1>
<input :placeholder="defaultText" @keyup="inputConfirm($event)" v-model="curInput"/>
<ul>
  <li v-for="(item,index) in taskList" :key="index" :class="{completed:item.status}"><input type="checkbox" :checked="item.status" @click="updateChecked($event,index)"/>{{item.content}}</li>
</ul>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs , getCurrentInstance , onMounted, reactive} from 'vue'
import { useStore } from 'vuex'
import testDemo from '@/interfaces/HelloWorld/inedx'
import myMixin from '@/mixins/test'
export default defineComponent({
  mixins:[myMixin],
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props,context) => {
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
      updateChecked
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
