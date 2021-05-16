/*
 * @Author: Stevie
 * @Date: 2021-05-14 23:09:21
 * @LastEditTime: 2021-05-16 16:35:23
 * @LastEditors: Stevie
 * @Description: 高阶函数与柯里化
 */
import * as React from 'react'
import { Divider, message } from 'antd'

// - 高阶函数: 符合下列1和2任意其中一条,即为高阶函数
// - 1. 函数接收的参数是一个函数
// - 2. 函数调用的返回值是一个函数
// - 常见高阶函数: Promise、setTimeout、array.filter()
class HighOrderFunction extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  }

  // * 柯里化: 通过函数调用并继续返回函数的方式, 将使用多个参数的1个函数转换为多个只使用1个参数的函数的编码技术
  saveFormItem = (formItem: string) => {
    return (e: React.BaseSyntheticEvent) => {
      this.setState({
        [formItem]: e.target.value,
      })
    }
  }

  login = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { username, password, confirmPassword, phoneNumber } = this.state
    if (username && password && confirmPassword && phoneNumber) {
      message.info(
        <div>
          <p>用户名:{username}</p>
          <p>密码:{password}</p>
          <p>确认密码:{confirmPassword}</p>
          <p>手机号:{phoneNumber}</p>
        </div>
      )
    } else {
      message.error('请完善表单')
    }
  }

  render() {
    return (
      <div>
        <h2>高阶函数与柯里化</h2>
        <Divider type='horizontal'></Divider>
        <form>
          <div className='form-item'>
            <label className='required'>用户名:</label>
            <input onChange={this.saveFormItem('username')} />
          </div>
          <div className='form-item'>
            <label className='required'>密码:</label>
            <input onChange={this.saveFormItem('password')} />
          </div>
          <div className='form-item'>
            <label className='required'>确认密码:</label>
            <input onChange={this.saveFormItem('confirmPassword')} />
          </div>
          <div className='form-item'>
            <label className='required'>手机号:</label>
            <input onChange={this.saveFormItem('phoneNumber')} />
          </div>
          <div className='form-item'>
            <label></label>
            <button className='primary-button' onClick={this.login}>
              登陆
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default HighOrderFunction
