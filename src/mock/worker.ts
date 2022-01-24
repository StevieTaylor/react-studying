/*
 * @Author: Stevie
 * @Date: 2022-01-24 14:29:11
 * @LastEditTime: 2022-01-24 17:19:16
 * @LastEditors: Stevie
 * @Description: 
 */
import Mock from 'mockjs'
export const WORKER_URL = 'http://mock/api/workers';

Mock.mock(WORKER_URL, {
  "total": 100,
  "list|100": [{
    'id': '@guid',
    'name': '@cname',
    'age|18-30': 30,
    'gender': '@cword("男女")',
    'birthday': '@date("yyyy-MM-dd")',
    'telephone': /^1[3-9]\d{9}$/,
    'address': '@county(true)'
  }]
})