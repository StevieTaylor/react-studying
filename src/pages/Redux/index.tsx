/*
 * @Author: Stevie
 * @Date: 2021-04-29 17:17:21
 * @LastEditTime: 2021-06-06 17:28:10
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { Divider, Image } from 'antd';
import ReactCalculator from './ReactCalculator';
import ReduxCalculator from './ReduxCalculator';

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
        <Divider type="horizontal"></Divider>
        <ReduxCalculator />
      </div>
    );
  }
}

export default ReduxDemo;
