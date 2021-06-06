/*
 * @Author: Stevie
 * @Date: 2021-06-06 19:46:56
 * @LastEditTime: 2021-06-06 22:20:39
 * @LastEditors: Stevie
 * @Description:
 */
import { IAction } from '@/entity/common.entity';
import { CalculatorActionTypes } from '../action-types';

const initState = 0;
/**
 * @description:
 * @param {any} state 之前的状态
 * @param {IAction} action 动作对象
 * @return {*} 新的状态
 */
export default function calculatorReducer(state: number = initState, action: IAction): number {
  // console.log('previousState:>> ', state);
  const { type, data } = action;
  switch (type) {
    case CalculatorActionTypes.ADD:
      return state + data;
    case CalculatorActionTypes.SUBTRACT:
      return state - data;
    case CalculatorActionTypes.MULTIPLY:
      return state * data;
    case CalculatorActionTypes.DIVIDE:
      return state / data;
    case CalculatorActionTypes.RESET:
      return 0;
    default:
      return state;
  }
}
