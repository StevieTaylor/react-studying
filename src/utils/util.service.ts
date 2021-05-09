/*
 * @Author: Stevie
 * @Date: 2021-05-09 22:27:09
 * @LastEditTime: 2021-05-09 22:32:26
 * @LastEditors: Stevie
 * @Description: 工具服务
 */
/**
 * @description: 获取类型
 * @param {unknown} object
 * @return {*}
 */
export const getType = (object: unknown): string => {
  let type = typeof object;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString.call(object).replace(/^\[object (\S+)]$/, '$1');
}