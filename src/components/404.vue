<template>
  <div>
    404
    <div class="scroll_container" ref="containerRef">
      <ul class="wrapper">
        <li>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
 <el-row>
  <el-select  v-model="$i18n.locale">
      <el-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</el-option>
  </el-select>

  <el-button>{{proxy.$t('message.hello')}}</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<el-dialog
  title="提示"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
        </li>
      </ul>
    <el-input
          size="large"
          v-model="form.name"
          placeholder="用户名"
          type="text"
          maxlength="50"
        >
        </el-input>
      <el-input   
          size="large"
          ref="password"
          v-model="form.password"
          :type="passwordType"
          :placeholder="$t('message.system.password')"
          name="password"
          maxlength="50"></el-input>
  <el-button @click="submit">登录</el-button>
  <el-button @click="ask">请求</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  reactive,
  ref,
} from "vue";
import {loginApi} from '@/api/user'
import { useStore } from "vuex";
import { ElMessageBox } from 'element-plus';
import instance from "@/utils/system/request";
import { request } from "http";

export default defineComponent({
  // mounted(){
  //   console.log(this.$i18n)
  //   console.log('============')
  // },
  methods:{
    ask(){
      this.$axios.get('test')
    }
  },
  setup(prop, ctx) {
    const form = reactive({
      name:'admin',
      password:'123456'
    })
    const instance = getCurrentInstance()
      const dialogVisible = ref(false);
      const handleClose = (done:any) => {
        ElMessageBox
          .confirm('确认关闭？')
          .then((_) => {
            done();
          })
          .catch((_) => {
            // catch
          });
      };

    function handlePromise() {
      const PENDING_STATUS = "pending";
      const FULLFILLED_STATUS = "fullfilled";
      const REJECT_STATUS = "rejected";
    }
    const obj1 = [1, 2, 3];
    // [Symbol.toPrimitive](){

    //   return '123'
    // }

    obj1.toString = function () {
      return "xxx";
    };
    //  obj1.valueOf = function(){
    //   return 'yyy'
    // }
    console.log("" + obj1);
    // obj1[Symbol.toPrimitive] = function(input){
    //   console.log(input)
    //   return '111'
    // }
    console.log(+obj1);
    console.log(0);

    const store = useStore();
    store.commit("changeName", "1231");
    console.log(store.state.notFund);

    /**
     * 长列表渲染
     */
    const containerRef = ref(null);

  let {proxy}:any = getCurrentInstance()

    onMounted(() => {
        
       const instance = getCurrentInstance()
      function ask(){
        if(!instance) return
      instance.appContext.config.globalProperties.$axios.get('/test')
    }
    
    //   // const instanceAxios = instance.appContext.config.globalProperties.$axios
    //   // instanceAxios.get('/test')
    //   console.log(containerRef.value);
    });
    function submit(){
      loginApi({
        name: form.name,
        password: form.password
      }).then(res=>{
        console.log(res)
      })
    }
  
    return {
      dialogVisible,
        handleClose,
        proxy,
        form,
        submit
    }
  },
});
</script>



<style scoped lang="scss">
.scroll_container {
  height: 520px;
}
</style>