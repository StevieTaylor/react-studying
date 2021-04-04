/*
 * @Author: Stevie
 * @Date: 2021-04-02 00:24:45
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-05 01:35:53
 * @Description: file content
 */
import React from 'react'
import { Button, Col, Divider, Input, message, Row } from 'antd'

class CallbackRefs extends React.Component {
  inputElement: Input | undefined
  inputElement2: Input | undefined

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

  render() {
    const inputStyle = { minWidth: 400, maxWidth: 600 }
    const paddingLeft_5 = { paddingLeft: 5 }
    return (
      <div>
        <h2>二、回调 Refs</h2>
        <div style={inputStyle}>
          <h3>1. 内联函数定义 ref 回调</h3>
          <Row>
            <Col span={19}>
              <Input
                maxLength={400}
                placeholder="请输入内容"
                ref={(currentElement: Input) => {
                  this.inputElement = currentElement
                }}
              />
            </Col>
            <Col span={5} style={paddingLeft_5}>
              <Button type="primary" onClick={this.showValue}>
                显示
              </Button>
            </Col>
          </Row>
        </div>

        <Divider type="horizontal"></Divider>

        <div style={inputStyle}>
          <h3>2. class绑定函数定义 ref 回调</h3>
          <Row>
            <Col span={19}>
              <Input placeholder="请输入内容" ref={this.refCallback} />
            </Col>
            <Col span={5} style={paddingLeft_5}>
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
