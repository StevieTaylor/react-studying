/*
 * @Author: Stevie
 * @Date: 2021-03-30 00:18:41
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-30 11:28:22
 * @Description: class组件传递props
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Divider } from 'antd'

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
    const { name, gender, age, birthday, city, zipcode } = this.props
    const title = `${name}的个人信息`;
    const userInfo = {
      姓名: name,
      性别: gender,
      年龄: age,
      生日: birthday,
      城市: city,
      邮政编码: zipcode,
    }
    return (
      <div>
        <h2>一、class组件传递props</h2>
        <Divider type='horizontal'></Divider>
        <Descriptions
          title={title}
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          {Object.keys(userInfo).map((item) => {
            return (
              <Descriptions.Item label={item} key={item.toString()}>{userInfo[item]}</Descriptions.Item>
            )
          })}
        </Descriptions>
      </div>
    )
  }
}

export default ClassProps
