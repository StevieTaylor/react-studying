/*
 * @Author: Stevie
 * @Date: 2021-05-09 18:07:56
 * @LastEditTime: 2021-05-11 14:16:08
 * @LastEditors: Stevie
 * @Description: 事件处理
 */
import React, { BaseSyntheticEvent, SyntheticEvent } from 'react'
import { Button, Divider, message, Space, Table, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { getType } from '../../utils/util.service'
import './style.less'

const { Paragraph } = Typography

class HandlingEvents extends React.Component {
  tooltip: string = '点击此处进行编辑'

  // * BaseSyntheticEvent: 基础合成事件
  preventDefault = (event: BaseSyntheticEvent): void => {
    event.preventDefault()
    console.log(event)
  }

  // * 获取原生事件对象
  getNativeEvent = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    console.log('nativeEvent :>> ', event.nativeEvent)
    console.log(getType(event.nativeEvent))
  }

  renderSyntheticEvent() {
    return (
      <div>
        <h2>一、SyntheticEvent 合成事件</h2>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          1. React使用的是合成事件SyntheticEvent, 可以模拟DOM事件的所有功能
        </Paragraph>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          2. 合成事件的作用:为了解决跨浏览器的兼容性问题
        </Paragraph>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          3. event.nativeEvent是原生事件对象
        </Paragraph>
        <a href='http://192.168.1.5:3000/home'>回到首页</a>
        <Divider type='vertical'></Divider>
        <a href='http://192.168.1.5:3000/home' onClick={this.preventDefault}>
          阻止a标签默认行为
        </a>
        <Divider type='vertical'></Divider>
        <a href='http://192.168.1.5:3000/home' onClick={this.getNativeEvent}>
          原生事件对象
        </a>
      </div>
    )
  }

  /**
   * @description: 合成事件target
   * @param {SyntheticEvent} e
   * @return {*}
   */
  getSyntheticEventTarget = (e: SyntheticEvent): void => {
    console.log('SyntheticEvent.target :>> ', e.target)
  }

  /**
   * @description: 合成事件currentTarget
   * @param {SyntheticEvent} e
   * @return {*}
   */
  getSyntheticEventCurrentTarget = (e: SyntheticEvent): void => {
    console.log('SyntheticEvent.currentTarget :>> ', e.currentTarget)
  }

  /**
   * @description: 原生事件target
   * @param {SyntheticEvent} e
   * @return {*}
   */
  getNativeEventTarget = (e: SyntheticEvent): void => {
    console.log('nativeEvent.target :>> ', e.nativeEvent.target)
  }

  /**
   * @description: 原生事件currentTarget
   * @param {SyntheticEvent} e
   * @return {*}
   */
  getNativeEventCurrentTarget = (e: SyntheticEvent): void => {
    console.log('nativeEvent.currentTarget :>> ', e.nativeEvent.currentTarget)
  }

  getParentTarget = (e) => {
    console.log('---------------父元素---------------')
    console.log('SyntheticEvent.target :>> ', e.target)
    console.log('SyntheticEvent.currentTarget :>> ', e.currentTarget)
    console.log('nativeEvent.target :>> ', e.nativeEvent.target)
    console.log('nativeEvent.currentTarget :>> ', e.nativeEvent.currentTarget)
  }

  getChildTarget = (e) => {
    console.log('---------------子元素---------------')
    console.log('SyntheticEvent.target :>> ', e.target)
    console.log('SyntheticEvent.currentTarget :>> ', e.currentTarget)
    console.log('nativeEvent.target :>> ', e.nativeEvent.target)
    console.log('nativeEvent.currentTarget :>> ', e.nativeEvent.currentTarget)
  }

  renderTargetAndCurrentTarget() {
    return (
      <div onClick={this.getSyntheticEventTarget} className="target-container">
        <h2>二、target和currentTarget的区别</h2>
        <Paragraph className="aaaa">
          1. 在 SyntheticEvent 合成事件中:
          <ul>
            <li>
              <span className='target' onClick={this.getSyntheticEventTarget}>
                target
              </span>
              指向了触发事件的原始元素
            </li>
            <li>
              <span className='currentTarget' onClick={this.getSyntheticEventCurrentTarget}>
                currentTarget
              </span>
              指向了
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          2. 在 nativeEvent 原生事件中:
          <ul>
            <li>
              <span className='target' onClick={this.getNativeEventTarget}>
                target
              </span>
              指向了触发事件的原始元素
            </li>
            <li>
              <span className='currentTarget' onClick={this.getNativeEventCurrentTarget}>
                currentTarget
              </span>
              可能是触发事件的父元素
            </li>
          </ul>
        </Paragraph>
        <div onClick={this.getParentTarget} className='parentElement'>
          点击父元素空白区域
          <button onClick={this.getChildTarget} className='childElement'>
            点击子元素触发冒泡
          </button>
        </div>
      </div>
    )
  }

  /**
   * @description: 直接绑定
   * @param {BaseSyntheticEvent} event
   * @return {*}
   */
  directBinding = (event: BaseSyntheticEvent): void => {
    console.log('event :>> ', event)
  }

  /**
   * @description: 显式传递
   * @param {number} id
   * @param {BaseSyntheticEvent} event
   * @return {*}
   */
  explicitTransfer = (id: number, event: BaseSyntheticEvent): void => {
    console.log('event :>> ', event)
    message.info(`显式传递了id:${id}`)
  }

  /**
   * @description: 隐式传递
   * @param {number} id
   * @param {BaseSyntheticEvent} event
   * @return {*}
   */
  implicitTransfer = (id: number, event: BaseSyntheticEvent): void => {
    console.log('event :>> ', event)
    message.info(`隐式传递了id:${id}`)
  }

  renderActions = (value: any, record: any, index: number): React.ReactNode => {
    return (
      <Space>
        <Button type='link' onClick={this.directBinding}>
          直接绑定
        </Button>
        <Button
          type='link'
          onClick={(e: BaseSyntheticEvent) => this.explicitTransfer(record.id, e)}
        >
          显式传递
        </Button>
        <Button type='link' onClick={this.implicitTransfer.bind(this, record.id)}>
          隐式传递
        </Button>
      </Space>
    )
  }

  renderPassParameter() {
    const columns: ColumnsType<any> = [
      { align: 'center', title: 'ID', dataIndex: 'id', key: 'id' },
      { align: 'center', title: 'Name', dataIndex: 'name', key: 'name' },
      { align: 'center', title: 'Age', dataIndex: 'age', key: 'age' },
      { align: 'center', title: 'Gender', dataIndex: 'gender', key: 'gender' },
      {
        align: 'center',
        title: 'Actions',
        key: 'actions',
        render: (value, record, index) => this.renderActions(value, record, index),
      },
    ]
    const dataSource = [
      { key: 'jack', id: 10001, name: 'jack', age: 27, gender: '男' },
      { key: 'lucy', id: 10002, name: 'lucy', age: 23, gender: '女' },
    ]
    return (
      <div>
        <h2>三、向事件处理函数传递参数</h2>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          1. 直接绑定函数获得的参数为事件对象
        </Paragraph>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          2. 通过箭头函数的方式,可以显式传递事件对象
        </Paragraph>
        <Paragraph editable={{ tooltip: this.tooltip }}>
          3. 通过bind的方式,可以隐式传递事件对象
        </Paragraph>
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          rowKey={(item) => `${item.key}-${item.id}`}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderSyntheticEvent()}
        <Divider type='horizontal'></Divider>
        {this.renderTargetAndCurrentTarget()}
        <Divider type='horizontal'></Divider>
        {this.renderPassParameter()}
      </div>
    )
  }
}

export default HandlingEvents
