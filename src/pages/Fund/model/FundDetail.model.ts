/*
 * @Author: Stevie
 * @Date: 2021-12-24 15:13:58
 * @LastEditTime: 2021-12-24 15:13:59
 * @LastEditors: Stevie
 * @Description: 
 */
export interface IFundDetail {
  // 基金代码
  fd_code: string;
  // 基金类型
  fd_type: string;
  // 基金名称
  fd_name: string;
  // 基金全称
  fd_full_name: string;
  // 成立时间
  found_date: string;
  fd_status: string;
  declare_status: string;
  subscribe_status: string;
  withdraw_status: string;
  auto_invest_status: string;
  totshare: string;
  keeper_name: string;
  manager_name: string;
  trup_name: string;
  sale_status: string;
  risk_level: string;
  ipo_start_date: number;
  fund_derived: FundDerived;
  fund_rates: FundRates;
  op_fund: IOpfund;
  yield: string;
  yield_name: string;
  growth_day: string;
  sales: string;
  type_desc: string;
  rating_desc: string;
  follower_count: number;
  status_count: number;
  stock_position_names: string;
  agent_sell: boolean;
  trade_reason: ITradeReason;
}

export type FundDetail = Partial<IFundDetail>

interface ITradeReason {
  content: string;
  show_button: boolean;
  withdraw_display: boolean;
}

interface IOpfund {
  fund_tags: FundTag[];
}

interface FundTag {
  category: string;
  name: string;
}

interface FundRates {
  subscribe_rate: string;
  declare_rate: string;
  discount: string;
  subscribe_discount: string;
  declare_discount: string;
}

interface FundDerived {
  end_date: string;
  unit_nav: string;
  nav_grtd: string;
  nav_grl1m: string;
  nav_grl3m: string;
  nav_grl6m: string;
  nav_grlty: string;
  nav_grl1y: string;
  nav_grl3y: string;
  nav_grl5y: string;
  nav_grbase: string;
  srank_l1m: string;
  srank_l3m: string;
  srank_l6m: string;
  srank_lty: string;
  srank_l1y: string;
  srank_l3y: string;
  srank_l5y: string;
  nav_growth: string;
  yield_history: YieldHistory[];
}

interface YieldHistory {
  yield: string;
  name: string;
}