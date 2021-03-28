/*
 * @Author: Stevie
 * @Date: 2021-03-28 17:15:01
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-28 18:27:17
 * @Description: file content
 */
import axios, { Method } from 'axios'
axios.defaults.timeout = 3000;

const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
}

interface IConfig {
    method: Method,
    withCredentials: boolean,
    headers?: any,
    params?: any
}

/**
 * @description: 封装get请求方法
 * @param {string} url
 * @param {object} params
 * @return {*}
 */
export function get(url: string, params: object): Promise<any> {
    const config: IConfig = {
        method: 'GET',
        withCredentials: true,
        params
    }
    return axios.get(url, config)
}

/**
 * @description: 封装post请求方法
 * @param {string} url
 * @param {object} params
 * @param {object} dataBody
 * @return {*}
 */
export function post(url: string, params: object, data: object): Promise<any> {
    const config: IConfig = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        params
    }
    return axios.post(url, data, config)
}


