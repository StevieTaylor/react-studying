/*
 * @Author: Stevie
 * @Date: 2021-06-06 20:41:31
 * @LastEditTime: 2021-12-23 15:01:58
 * @LastEditors: Stevie
 * @Description:
 */
export interface IAction {
  type: string;
  data?: any;
}

export interface IPagination {
  pageNo?: number
  pageSize?: number
}