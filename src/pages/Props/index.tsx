/*
 * @Author: Stevie
 * @Date: 2021-03-27 20:56:55
 * @LastEditTime: 2021-03-30 01:39:25
 * @LastEditors: Stevie
 * @Description: Props
 */
import React from 'react'
import { getUser } from '../../mock/user'
import { IUser } from '../../entity/user.entity'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export interface IState {
  userList: IUser[];
}
class Props extends React.Component<{}, IState> {
  /**
   * - React构造器的作用：
   * -     1.通过 this.state 对 state 进行初始化 
   * -     2.为事件处理方法绑定实例 (this)
   * * 子类构造器要使用 this 则必须通过 super() 来调用父类的 constructor(), 因为子类的构造器内是没有 this 的，需要通过集成父类 this 并进行加工
   * ! 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数，故构造函数一般不用写
   */
  constructor(props) {
    super(props)
    this.state = {
      userList: [],
    }
  }

  componentDidMount() {
    getUser().then((res) => {
      const userList: IUser[] = res.data.user
      userList.map((user, index) => {
        return Object.assign(user, { key: `${index}-${user.name}` })
      })
      this.setState({
        userList
      })
    })
  }

  render() {
    const { userList } = this.state;
    const [userInfo1, userInfo2] = userList;
    return (
      <div className="props">
        <ClassProps {...userInfo1} />
        <FunctionProps {...userInfo2} />
      </div>
    )
  }
}

export default Props
