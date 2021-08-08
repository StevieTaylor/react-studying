/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:39:45
 * @LastEditTime: 2021-08-08 23:00:47
 * @LastEditors: Stevie
 * @Description:
 */
import { Input, Row, Col, Button } from 'antd';
import * as React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search-input">
        <h2>Search Github Users</h2>
        <Row>
          <Col span={5}>
            <Input />
          </Col>
          <Col className="search-button">
            <Button type="primary">Search</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchInput;