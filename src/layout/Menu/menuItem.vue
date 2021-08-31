<template>
  <template v-if="!menu.meta.hideMenu">
    <el-submenu :index="pathResolve" v-if="menuType===2">
      <template #title>
        <span>{{menu.meta.title}}</span>
      </template>
      <menu-item v-for="(item, key) in menu.children" :key="key" :menu="item" />

    </el-submenu>
    <el-menu-item v-else>{{menu.meta.title}}</el-menu-item>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name:'menu-item',
  props:{
    menu:{
      type:Object,
      required:true
    }
  },
  setup(props,ctx) {
    const { menu }  = props
    console.log(menu.path)

    const menuType = computed(()=>{
      if(menu.children&&menu.children.length > 1 ){
        return 2
      } else if (menu.children&&menu.children.length === 1) {
        return 1
      } else {
        return 0
      }
    })

      const pathResolve = computed(() => {
      let path = ''
      if (menuType.value === 1) {
        if (menu.children[0].path.charAt(0) === '/') {
          path = menu.children[0].path
        } else {
          let char = '/'
          if (menu.path.charAt(menu.path.length - 1) === '/') {
            char = ''
          }
          path = menu.path + char + menu.children[0].path
        }
      } else {
        path = menu.path
      }
      return path
    })

    onMounted(()=>{
      console.log('执行')
    })

    return {
      menuType,
      pathResolve
    }
  },
})
</script>

<style lang="scss" scoped>

</style>