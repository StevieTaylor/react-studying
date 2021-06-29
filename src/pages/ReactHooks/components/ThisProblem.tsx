/*
 * @Author: Stevie
 * @Date: 2021-06-29 14:35:38
 * @LastEditTime: 2021-06-29 15:07:58
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react'
import { Button, message, Space } from 'antd'

interface IState {
  number: number
}

class ThisProblem extends React.PureComponent<any, IState> {
  state = {
    number: 0
  }

  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
  }

  addOne() {
    this.setState({ number: this.state.number + 1 })
    message.info('构造函数中通过bind方法绑定this')
  }

  subtractOne() {
    this.setState({ number: this.state.number - 1 })
    message.info('render()函数中通过bind方法绑定this')
  }

  double() {
    this.setState({ number: this.state.number * 2 })
    message.info('调用时箭头函数改变this指向')
  }

  reset = () => {
    this.setState({ number: 0 })
    message.info('箭头函数写法')
  }

  render() {
    return (
      <div>
        <div>number: {this.state.number}</div>
        <Space>
          <Button type="primary" ghost onClick={this.addOne}>
            加1
          </Button>
          <Button type="primary" ghost onClick={this.subtractOne.bind(this)}>
            减1
          </Button>
          <Button type="primary" ghost onClick={() => this.double()}>
            乘2
          </Button>
          <Button type="primary" ghost onClick={this.reset}>
            重置
          </Button>
        </Space>
      </div>
    )
  }
}

export default ThisProblem
