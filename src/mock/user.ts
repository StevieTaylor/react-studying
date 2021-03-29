/*
 * @Author: Stevie
 * @Date: 2021-03-28 17:59:14
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-29 19:21:23
 * @Description: file content
 */
import Mock from 'mockjs'
import { get } from '../utils/http.service'

const URL_USER = 'http://api/mock/user.com';
Mock.mock(URL_USER, {
    "user|3": [{                            //10组数据
        'name': '@cname',                   //中文名称
        'gender': '@cword("男女")',          //性别随机男或女       
        'age|1-100': 100,                    //100以内随机整数
        'birthday': '@date("yyyy-MM-dd")',   //日期
        'city': '@city(true)',               //中国城市
        "zipcode": "@zip"                        //邮政编码
    }]
});

export async function getUser() {
    return await get(URL_USER, {});
}