/*
 * @Author: Stevie
 * @Date: 2021-04-18 16:57:06
 * @LastEditTime: 2021-04-18 17:15:26
 * @LastEditors: Stevie
 * @Description:
 */
import Mock from 'mockjs'
import { get } from '../utils/http.service'

const URL_DATE = 'http://mock/api/date';
Mock.mock(URL_DATE, {
  "date|10": [{
    'date': '@date("yyyy-MM-dd")',
    'time': '@time("HH:mm:ss")'
  }]
});

export async function getDate() {
  return await get(URL_DATE, {});
}