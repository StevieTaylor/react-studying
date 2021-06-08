/*
 * @Author: Stevie
 * @Date: 2021-06-06 19:43:01
 * @LastEditTime: 2021-06-08 23:53:19
 * @LastEditors: Stevie
 * @Description:
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// - 创建核心store对象
const store = createStore(reducers, applyMiddleware(thunk));
export default store;