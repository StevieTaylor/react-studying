/*
 * @Author: Stevie
 * @Date: 2021-06-06 17:14:31
 * @LastEditTime: 2021-06-11 16:04:35
 * @LastEditors: Stevie
 * @Description: Redux版简易计算器
 */
import * as React from 'react';
import './style.less';
import { Button, Col, message, Row, Select, Space } from 'antd';
import store from '@/store';
import { CalculatorActions as actions } from '@/store/actions';
import { IAction } from '@/entity/common.entity';
const { Option } = Select;

interface IReduxCalculatorState {
  number: number;
}

class ReduxCalculator extends React.Component<any, IReduxCalculatorState> {
  private numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  state = {
    number: 0
  };

  componentDidMount() {
    // * 监测redux中状态的变化,只要变化,就调用render
    store.subscribe(() => {
      this.setState({});
    });
  }

  add = (): void => {
    const { number } = this.state;
    store.dispatch(actions.add(number));
  };

  subtract = (): void => {
    const { number } = this.state;
    store.dispatch(actions.subtract(number));
  };

  multiply = (): void => {
    const { number } = this.state;
    store.dispatch(actions.multiply(number));
  };

  divide = (): void => {
    const { number } = this.state;
    if (number === 0) {
      message.error('除数不能为0');
      return;
    }
    store.dispatch(actions.divide(number));
  };

  reset = (): void => {
    store.dispatch(actions.reset(0));
  };

  resetAfter = (): void => {
    store.dispatch((actions.resetAfterOneSecond(0, 1000) as unknown) as IAction);
  };

  handleNumberChange = (number: number): void => {
    this.setState({ number });
  };

  render(): JSX.Element {
    const options = this.numbers.map((n: number) => {
      return { value: n, label: n };
    });
    return (
      <div>
        <h3>2. Redux版</h3>
        <Row className="calculator-result">
          <Col span={2} className="label">
            <span>计算结果:</span>
          </Col>
          <Col span={3} className="result">
            <span>{store.getState().calculatorReducer}</span>
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

export default ReduxCalculator;
