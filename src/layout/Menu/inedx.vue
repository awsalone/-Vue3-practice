<template>
  <el-menu>
      <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
   
    onMounted(()=>{
 console.log(123)
    })
  },
})
</script>

<style lang="sass" scoped>

</style>
