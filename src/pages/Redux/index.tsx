/*
 * @Author: Stevie
 * @Date: 2021-04-29 17:17:21
 * @LastEditTime: 2021-05-09 18:03:36
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react';
import SumDemo from './components/SumDemo';
import './style.less';

class ReduxDemo extends React.Component {
  render() {
    return (
      <div className="redux-demo-container">
        <SumDemo />
      </div>
    );
  }
}

export default ReduxDemo;