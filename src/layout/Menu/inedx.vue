<template>
<el-menu>
   <menu-item v-for="(item,index) in allRoutes" :key="index" :menu=item />
</el-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './menuItem.vue'

export default defineComponent({
  components:{
    MenuItem
  },
  setup() {
   const allRoutes = useRouter().options.routes
    onMounted(()=>{
 console.log(allRoutes)
    })
    return {
      allRoutes
    }
  },
})
</script>

<style lang="sass" scoped>

</style>
