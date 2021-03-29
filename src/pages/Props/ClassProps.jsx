/*
 * @Author: Stevie
 * @Date: 2021-03-30 00:18:41
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-30 01:39:04
 * @Description: class组件传递props
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions } from 'antd'

class ClassProps extends React.Component {
  // - 使用class的static关键字可以将属性绑定到类本身上，即 class.属性
  // - 在没有Typescript 或 Flow的情况下，可以使用PropTypes进行类型检查
  static propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    age: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string,
  }

  // - defaultProps可以定义props的默认值
  static defaultProps = {
    name: 'default name',
    age: 25,
    birthday: "2021-03-29",
    city: "上海市",
  }

  render() {
    const title = `${this.props.name}的个人信息`;
    const labels = ['姓名', '性别', '年龄', '生日', '城市', '邮政编码'];
    return (
      <Descriptions
        title={title}
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label={labels[0]}>{this.props.name}</Descriptions.Item>
        <Descriptions.Item label={labels[1]}>{this.props.gender}</Descriptions.Item>
        <Descriptions.Item label={labels[2]}>{this.props.age}</Descriptions.Item>
        <Descriptions.Item label={labels[3]}>{this.props.birthday}</Descriptions.Item>
        <Descriptions.Item label={labels[4]}>{this.props.city}</Descriptions.Item>
        <Descriptions.Item label={labels[5]}>{this.props.zipcode}</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default ClassProps
