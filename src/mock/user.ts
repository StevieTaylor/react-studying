/*
 * @Author: Stevie
 * @Date: 2021-03-28 17:59:14
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-28 18:25:02
 * @Description: file content
 */
import Mock from 'mockjs'
import { get } from '../utils/http.service'

const URL_USER = 'http://api/mock/user.com';
Mock.mock(URL_USER, {
    "user|10": [{                                  //10组数据
        'name': '@cname',                    //中文名称
        'age|1-100': 100,                       //100以内随机整数
        'birthday': '@date("yyyy-MM-dd")',      //日期
        'city': '@city(true)'                   //中国城市
    }]
});

export async function getUser() {
    return await get(URL_USER, {});
}