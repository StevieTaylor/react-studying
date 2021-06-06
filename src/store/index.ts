/*
 * @Author: Stevie
 * @Date: 2021-06-06 19:43:01
 * @LastEditTime: 2021-06-06 20:10:45
 * @LastEditors: Stevie
 * @Description:
 */
import { createStore } from 'redux';
import reducers from './reducers';
// - 创建核心store对象
const store = createStore(reducers);
export default store;