/*
 * @Author: Stevie
 * @Date: 2021-05-16 20:20:21
 * @LastEditTime: 2021-05-31 23:46:44
 * @LastEditors: Stevie
 * @Description: diffing 算法
 */
import * as React from 'react';
import { Input, Divider } from 'antd';

class DiffingAlgorithm extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  render() {
    return (
      <div className="diffing-algorithm">
        <div>
          <h2>一、验证diffing算法</h2>
          <Input />
          <span>当前时间: {this.state.date.toTimeString()}</span>
        </div>
        <Divider type="horizontal"></Divider>
      </div>
    );
  }
}

export default DiffingAlgorithm;