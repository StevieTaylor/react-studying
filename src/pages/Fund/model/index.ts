/*
 * @Author: Stevie
 * @Date: 2021-12-23 15:07:00
 * @LastEditTime: 2021-12-24 10:08:29
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

type enumValueToUnion<T> = T extends `${infer R}` ? R : never

export type FundType = enumValueToUnion<FundTypeEnum>
