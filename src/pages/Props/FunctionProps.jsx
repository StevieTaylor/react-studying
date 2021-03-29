/*
 * @Author: Stevie
 * @Date: 2021-03-30 01:18:19
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-30 01:44:54
 * @Description: 函数组件传递props
 */
import PropTypes from 'prop-types'
import { Descriptions } from 'antd'

/**
 * @description: 使用函数式组件传递props
 * ! 除了react-hooks之外的函数组件无法使用 state，refs，可以使用props
 */
function FunctionProps(props) {
    const labels = ['姓名', '性别', '年龄', '生日', '城市', '邮政编码'];
    const { name, gender, age, birthday, city, zipcode } = props;
    const title = `${name}的个人信息`;
    return (
        <Descriptions
            title={title}
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
            <Descriptions.Item label={labels[0]}>{name}</Descriptions.Item>
            <Descriptions.Item label={labels[1]}>{gender}</Descriptions.Item>
            <Descriptions.Item label={labels[2]}>{age}</Descriptions.Item>
            <Descriptions.Item label={labels[3]}>{birthday}</Descriptions.Item>
            <Descriptions.Item label={labels[4]}>{city}</Descriptions.Item>
            <Descriptions.Item label={labels[5]}>{zipcode}</Descriptions.Item>
        </Descriptions>
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
    birthday: "2021-03-29",
    city: "上海市",
}

export default FunctionProps;