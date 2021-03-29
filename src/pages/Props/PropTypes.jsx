import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions } from 'antd'
class PropTypesLimit extends React.Component {
  render() {
    const title = `${this.props.name}的信息`;
    const labels = ['姓名', '性别','年龄', '生日', '城市','邮政编码'];
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

PropTypesLimit.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  age: PropTypes.number.isRequired,
  birthday: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string,
}

PropTypesLimit.defaultProps = {
  name: 'default name',
  age: 25,
  birthday: "2021-03-29",
  city: "上海市",
}

export default PropTypesLimit
