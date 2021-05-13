/*
 * @Author: Stevie
 * @Date: 2021-05-13 16:47:31
 * @LastEditTime: 2021-05-13 17:50:44
 * @LastEditors: Stevie
 * @Description: 非受控组件
 */
import React, { FormEvent } from 'react';
import { message } from 'antd';
import './style.less';

class UncontrolledComponents extends React.Component {

  usernameRef = React.createRef<HTMLInputElement>();
  passwordRef = React.createRef<HTMLInputElement>();

  submitForm = (e: FormEvent) => {
    e.preventDefault();
    message.info(this.usernameRef.current?.value);
  }

  render() {
    return (
      <div>
        <h2>非受控组件</h2>
        <form onSubmit={e => this.submitForm(e)} action="https://www.baidu.com" className="form">
          <div className="form-item">
            <label>用户名:</label>
            <input type="text" ref={this.usernameRef} name="username" />
          </div>
          <div className="form-item">
            <label>密码:</label>
            <input type="password" ref={this.passwordRef} name="password" />
          </div>
          <div className="form-item">
            <label></label>
            <button className="primary">登陆</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UncontrolledComponents;