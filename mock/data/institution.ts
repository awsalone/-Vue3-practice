import Mock,{ Random } from 'mockjs'
const list:any = []
for (let i=0; i<20; i++){
  list.push({
    id:Random.id(),
    name: Random.cname(),
    code: Random.integer(1000,8000),
    url: Random.url('http'),
    createTime:Random.datetime('yyyy-MM-dd HH:mm'),
    updateTime:Random.datetime('yyyy-MM-dd HH:mm')
  })
}

export default{
  // 查
  getList: ()=>{
    return {
      total:list.length,
      list:list
    }
  },

  // 增
  create: () => ({
    result: true,
    data: 'success'
}),

// 改
update: () => ({
  result: true,
  data: 'success'
})
}