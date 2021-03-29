/*
 * @Author: Stevie
 * @Date: 2021-03-30 01:18:19
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-30 02:05:52
 * @Description: 函数组件传递props
 */
import PropTypes from 'prop-types'
import { Descriptions, Divider } from 'antd'

/**
 * @description: 使用函数式组件传递props
 * ! 除了react-hooks之外的函数组件无法使用 state，refs，可以使用props
 */
function FunctionProps(props) {
  const { name, gender, age, birthday, city, zipcode } = props
  const title = `${name}的个人信息`
  const userInfo = {
    姓名: name,
    性别: gender,
    年龄: age,
    生日: birthday,
    城市: city,
    邮政编码: zipcode,
  }
  return (
    <div style={{ marginTop: 40 }}>
      <h2>二、函数组件传递props</h2>
      <Divider type='horizontal'></Divider>
      <Descriptions
        title={title}
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        {Object.keys(userInfo).map((item) => {
          return (
            <Descriptions.Item label={item}>{userInfo[item]}</Descriptions.Item>
          )
        })}
      </Descriptions>
    </div>
  )
}

FunctionProps.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  age: PropTypes.number.isRequired,
  birthday: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string,
}

FunctionProps.defaultProps = {
  name: 'default name',
  age: 25,
  birthday: '2021-03-29',
  city: '上海市',
}

export default FunctionProps
