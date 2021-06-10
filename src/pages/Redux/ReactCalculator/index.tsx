/*
 * @Author: Stevie
 * @Date: 2021-06-05 23:43:26
 * @LastEditTime: 2021-06-10 20:50:25
 * @LastEditors: Stevie
 * @Description: 纯React版简易计算器
 */
import * as React from 'react';
import { Button, Col, message, Row, Select, Space } from 'antd';
import './style.less';

const { Option } = Select;

interface IReactCalculatorState {
  result: number;
  number: number;
}

class ReactCalculator extends React.Component<any, IReactCalculatorState> {
  private numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  state = {
    result: 0,
    number: 0
  };

  reset = (): void => {
    this.setState({ result: 0 });
  };

  add = (): void => {
    const { result, number } = this.state;
    this.setState({ result: result + number });
  };

  subtract = (): void => {
    const { result, number } = this.state;
    this.setState({ result: result - number });
  };

  multiply = (): void => {
    const { result, number } = this.state;
    this.setState({ result: result * number });
  };

  divide = (): void => {
    const { result, number } = this.state;
    if (number === 0) {
      message.error('除数不能为0');
      return;
    }
    this.setState({ result: result / number });
  };

  handleNumberChange = (number: number): void => {
    this.setState({ number });
  };

  render(): JSX.Element {
    const options = this.numbers.map((n: number) => {
      return { value: n, label: n };
    });
    return (
      <div className="react-calculator">
        <h3>1. React版</h3>
        <Row className="calculator-result">
          <Col span={2} className="label">
            <span>计算结果:</span>
          </Col>
          <Col span={3} className="result">
            <span>{this.state.result}</span>
          </Col>
        </Row>

        <Row className="calculator-options">
          <Col span={2} className="label">
            <span>数字:</span>
          </Col>
          <Col span={3}>
            <Select style={{ width: '100%' }} defaultValue={0} onChange={this.handleNumberChange}>
              {options.map((option) => (
                <Option key={option.value * Math.random()} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>

        <Row className="calculator-actions">
          <Col span={2} className="label">
            <span>操作:</span>
          </Col>
          <Col>
            <Space>
              <Button type="primary" ghost onClick={this.add}>
                加
              </Button>
              <Button type="primary" ghost onClick={this.subtract}>
                减
              </Button>
              <Button type="primary" ghost onClick={this.multiply}>
                乘
              </Button>
              <Button type="primary" ghost onClick={this.divide}>
                除
              </Button>
              <Button type="primary" ghost onClick={this.reset}>
                重置
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReactCalculator;
