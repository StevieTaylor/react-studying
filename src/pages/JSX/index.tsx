/*
 * @Author: Stevie
 * @Date: 2021-03-20 16:08:10
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-21 01:24:20
 * @Description: file content
 */
import React from 'react'
import { List, Typography } from 'antd'
import './jsx.less'

/**
 *  - 虚拟DOM：
 *  -        1. 本质是object类型的对象
 *  -        2. 虚拟DOM很"轻"，有较少的属性，而真实DOM很"重"，有大量的属性
 *  -        3. 虚拟DOM会转化为真实DOM
 */
class JSX extends React.Component {
  // - 使用 JSX 创建DOM
  renderVDOM = () => {
    return <span>virtual dom</span>
  }

  // - 使用 JS 创建DOM
  element = React.createElement(
    'li',
    { style: { color: '#d59bf6' } },
    'use React.createElement',
  )

  render() {
    const Rules: string[] = [
      '内容包裹在括号()中',
      '字符串属性，要用" "包裹',
      'JavaScript 表达式，要用{ }处理',
      '元素添加class类名，要用className',
      '内联样式，用style={{ key:value }}，且样式属性key必须为camelCase驼峰命名法',
      '根标签只能有一个，且所有标签必须闭合',
      '标签的首字母为小写时，转化为HTML标签',
      '标签的首字母为大写时，视为React的组件来渲染',
    ]
    return (
      <div className="jsx">
        <List
          header={<h2>jsx的使用规则</h2>}
          bordered
          dataSource={Rules}
          renderItem={(item, index) => (
            <List.Item>
              <Typography.Text code>{`[${index + 1}]`}</Typography.Text> {item}
            </List.Item>
          )}
        />
        {
          <ul className="example">
            <h2>jsx的使用范例</h2>
            <li className="date">time : {new Date().toLocaleDateString()}</li>
            <li style={{ color: '#ea5455' }}>change style</li>
            {this.element}
          </ul>
        }
      </div>
    )
  }
}
export default JSX
