export default {
  setItem(key:string,val:any){
    // let preVal:string = this.getItem(key)||''
    let storage = window.localStorage.setItem(key,JSON.stringify(val))
  },
  getItem(key:string){
    return window.localStorage.getItem(key)||''
  },
  cleatItem(key:string){
    
  },
  clearAll(){
    window.localStorage.clear()
  }
}