/*
 * @Author: Stevie
 * @Date: 2021-06-06 21:46:07
 * @LastEditTime: 2021-06-06 22:33:58
 * @LastEditors: Stevie
 * @Description:
 */
import { CalculatorActionTypes as types } from '../action-types';

const CalculatorActions = {
  add: (data: any) => ({ type: types.ADD, data }),
  subtract: (data: any) => ({ type: types.SUBTRACT, data }),
  multiply: (data: any) => ({ type: types.MULTIPLY, data }),
  divide: (data: any) => ({ type: types.DIVIDE, data }),
  reset: (data: any) => ({ type: types.RESET, data })
};

export default CalculatorActions;
