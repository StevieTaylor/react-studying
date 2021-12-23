/*
* @Author: Stevie
* @Date: 2021-12-23 14:45:08
 * @LastEditTime: 2021-12-23 15:43:30
 * @LastEditors: Stevie
* @Description: 
*/
import { get } from '@utils/http.service';
import { IQueryFundParams } from '../model';

export default class FundHttpService {

  private BASEURL = '/djapi/v3/filter/fund'

  getFundList = (params: IQueryFundParams): Promise<any> => {
    return get(this.BASEURL, params)
  }
}