/*
 * @Author: Stevie
 * @Date: 2021-05-12 23:13:15
 * @LastEditTime: 2021-05-13 18:18:33
 * @LastEditors: Stevie
 * @Description: 受控组件
 */
import { message } from 'antd';
import React from 'react';
import './style.less';

class ControlledComponents extends React.Component {

  state = {
    username: '',
    password: ''
  }

  usernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const username = e.currentTarget?.value;
    this.setState({ username });
  }

  passwordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const password = e.currentTarget?.value;
    this.setState({ password });
  }

  login = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    message.info(
      <div>
        <span>用户名: {username}</span>
        <span> , </span>
        <span>密码: {password}</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>受控组件</h2>
        <form className="form">
          <div className="form-item">
            <label className="required">用户名:</label>
            <input type="text" name="username" onChange={this.usernameChange} />
          </div>
          <div className="form-item">
            <label className="required">密码:</label>
            <input type="password" name="password" onChange={this.passwordChange} />
          </div>
          <div className="form-item">
            <label></label>
            <button className="primary" onClick={this.login}>登陆</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ControlledComponents;