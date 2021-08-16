export default interface testDemo {
  name:string,
  age:number,
  obj:Array<number|string>
}

declare global {
  interface hz {
    sex:1
  }
}