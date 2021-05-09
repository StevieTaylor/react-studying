/*
 * @Author: Stevie
 * @Date: 2021-05-05 16:52:36
 * @LastEditTime: 2021-05-06 10:30:54
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react';
import { Row, Input, Col } from 'antd';

class SumDemo extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <span>计算结果:</span>
          </Col>
          <Col>
            <Input type="number" />
          </Col>
        </Row>

      </div>
    );
  }
}

export default SumDemo;