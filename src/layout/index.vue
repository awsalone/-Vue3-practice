<template>
  
  <el-container style="height: 100vh">
    <el-aside width="250px">
      <Menu />
    </el-aside>
    <router-view></router-view>
  </el-container>
  
</template>

<script>
import { defineComponent } from 'vue'
import Menu from '@/layout/Menu/inedx.vue'

export default defineComponent({
  components:{
    Menu
  },
  setup() {
    
  },
})
</script>

<style lang="sass" scoped>

</style>
