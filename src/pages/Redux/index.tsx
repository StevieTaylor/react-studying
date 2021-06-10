/*
 * @Author: Stevie
 * @Date: 2021-04-29 17:17:21
 * @LastEditTime: 2021-06-10 21:04:28
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import './style.less';
import { Divider, Image } from 'antd';
import ReactCalculator from './ReactCalculator';
import ReduxCalculator from './ReduxCalculator';

class ReduxDemo extends React.Component {
  render() {
    return (
      <div className="redux-demo-container">
        <div className="redux-container">
          <h2>一、Redux原理图</h2>
          <Divider type="horizontal"></Divider>
          <Image width={600} src={require('../../assets/images/redux.png').default} />
        </div>

        <div className="redux-container">
          <h2>二、Calculator Demo</h2>
          <Divider type="horizontal"></Divider>
          <ReactCalculator />
          <ReduxCalculator />
        </div>

        <div className="redux-container">
          <h2>三、React-redux模型图</h2>
          <Divider type="horizontal"></Divider>
          <Image width={600} src={require('../../assets/images/react-redux.png').default} />
        </div>
      </div>
    );
  }
}

export default ReduxDemo;
