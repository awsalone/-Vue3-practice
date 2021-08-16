import Mock from 'mockjs'
import institution from './data/institution'

Mock.mock('/api/list','get',institution.getList)
Mock.mock('/api/create', 'post' ,institution.create); // 增

export default Mock