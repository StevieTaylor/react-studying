/*
 * @Author: Stevie
 * @Date: 2021-12-23 15:07:00
 * @LastEditTime: 2021-12-24 10:15:52
 * @LastEditors: Stevie
 * @Description:
 */
export interface IFund {
  fd_code: string // 基金代码
  fd_name: string // 基金名称
  yield: string // 增长率
  sf_type: string
  unit_nav: string // 净值
  f_type: string
}

export interface IQueryFundParams {
  type: string
  order_by: string
  size: number
  page: number
}

export enum FundTypeEnum {
  股票型 = '1',
  债券型 = '2',
  混合型 = '3',
  QDII型 = '11',
  指数型 = '5'
}

export enum OrderByEnum {
  日涨幅 = 'td',
  近一周 = '1w',
  近一月 = '1m',
  近三月 = '3m',
  近六月 = '6m',
  今年以来 = 'ty',
  近一年 = '1y',
  近两年 = '2y',
  近三年 = '3y',
  近五年 = '5y',
  成立以来 = 'base'
}

type enumValueToUnion<T> = T extends `${infer R}` ? R : never

export type FundType = enumValueToUnion<FundTypeEnum>

export type OrderBy = enumValueToUnion<OrderByEnum>
