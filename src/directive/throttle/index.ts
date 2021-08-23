/**
 * v-throttle
 * 按钮節流指令
 * 接收参数：function类型
 */
 import type{ Directive, DirectiveBinding } from 'vue'
 interface ElType extends HTMLElement{
   __handleClick__: any
 }
 const directive:Directive = {
   mounted(el:ElType,binding:DirectiveBinding){
     if(typeof(binding.value)!=='function'){
       throw 'callback must be a function'
     }
     let pre:number = 0
     el.__handleClick__ = function(el:ElType){
       if(Date.now()-pre<(Number(binding.arg)||500)) return
       binding.value()
       pre = Date.now()
     }
     el.addEventListener('click',el.__handleClick__)
   },
 
   beforeUnmount(el: ElType) {
     el.removeEventListener('click', el.__handleClick__)
   }
 
 }
 
 export default directive