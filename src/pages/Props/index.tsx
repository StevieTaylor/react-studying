/*
 * @Author: Stevie
 * @Date: 2021-03-27 20:56:55
 * @LastEditTime: 2021-03-29 19:10:13
 * @LastEditors: Stevie
 * @Description:
 * @FilePath: /react-learning-demo/src/pages/Props/index.tsx
 */
import React from 'react'
import { getUser } from '../../mock/user'
import PropTypesLimit from './PropTypes'
import { IUser } from '../../entity/user.entity'
class Props extends React.Component {
  state = {
    dataList: [],
  }

  componentDidMount() {
    getUser().then((res) => {
      const dataList: IUser[] = res.data.user
      dataList.map((user, index) => {
        return Object.assign(user, { key: `${index}-${user.name}` })
      })
      this.setState({
        dataList,
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.dataList.map((userInfo: IUser) => (
          <PropTypesLimit {...userInfo} />
        ))}
      </div>
    )
  }
}

export default Props
