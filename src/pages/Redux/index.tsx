/*
 * @Author: Stevie
 * @Date: 2021-04-29 17:17:21
 * @LastEditTime: 2021-06-06 17:18:55
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { Image } from 'antd';
import ReactCalculator from './ReactCalculator';

class ReduxDemo extends React.Component {
  render() {
    return (
      <div className="redux-demo-container">
        <h2>一、Redux原理图</h2>
        <Image
          width={500}
          src={require('../../assets/images/redux.png').default}
        />
        <h2>二、Calculator Demo</h2>
        <ReactCalculator />
      </div>
    );
  }
}

export default ReduxDemo;
