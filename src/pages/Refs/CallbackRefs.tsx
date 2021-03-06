/*
 * @Author: Stevie
 * @Date: 2021-04-02 00:24:45
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-08 01:36:49
 * @Description: 回调形式的refs
 */
import React from 'react'
import { Alert, Button, Col, Divider, Input, message, Row } from 'antd'

class CallbackRefs extends React.Component {
  inputElement: Input | undefined = undefined;
  inputElement2: Input | undefined = undefined;

  state = {
    dirty: false
  }

  showValue = () => {
    message.info(this.inputElement?.state.value)
  }

  showValue2 = () => {
    message.info(this.inputElement2?.state.value)
  }

  // - React 会自动调用绑定在ref属性上的回调函数
  refCallback = (element: Input) => {
    this.inputElement2 = element
  }

  onChange = (e: any) => {
    if (e.nativeEvent.data) {
      this.setState({ dirty: true })
    }
  }

  onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  }

  render() {
    return (
      <div>
        <h2>二、回调 Refs</h2>
        <div>
          <h3>1. 内联函数定义 ref 回调</h3>
          <Row>
            <Col span={19}>
              <Input maxLength={400} placeholder="请输入内容" onChange={this.onChange}
                ref={(currentElement: Input) => {
                  this.inputElement = currentElement
                }}
              />
            </Col>
            <Col span={5} className="paddingLeft5">
              <Button type="primary" onClick={this.showValue}>
                显示
              </Button>
            </Col>
          </Row>
        </div>

        <div>
          {this.state.dirty ? <Alert message="输入值已经更新" type="info" closable onClose={this.onClose} /> : null}
        </div>

        <Divider type="horizontal"></Divider>

        <div>
          <h3>2. class绑定函数定义 ref 回调</h3>
          <Row>
            <Col span={19}>
              <Input placeholder="请输入内容" ref={this.refCallback} />
            </Col>
            <Col span={5} className="paddingLeft5">
              <Button type="primary" onClick={this.showValue2}>
                显示
          </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default CallbackRefs
