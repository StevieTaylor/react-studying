/*
 * @Author: Stevie
 * @Date: 2021-05-13 16:46:08
 * @LastEditTime: 2021-05-13 17:00:47
 * @LastEditors: Stevie
 * @Description: 表单:受控组件、非受控组件
 */
import React from 'react';
import { Divider } from 'antd';
import ControlledComponents from './Controlled';
import UncontrolledComponents from './Uncontrolled';

class FormDemo extends React.Component {
  render() {
    return (
      <div>
        <UncontrolledComponents />
        <Divider type="horizontal" />
        <ControlledComponents />
      </div>
    );
  }
}

export default FormDemo;