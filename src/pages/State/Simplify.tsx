/*
 * @Author: Stevie
 * @Date: 2021-03-27 17:03:13
 * @LastEditTime: 2021-03-27 20:53:30
 * @LastEditors: Stevie
 * @Description: 
 * @FilePath: /react-learning-demo/src/pages/State/Simplify.tsx
 */
import React from "react"
import { Avatar, Divider, Input, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class SimplifiedState extends React.Component {
  // - 1.初始化状态，在class类的顶部直接定义实例属性state
  state = {
    isAvatarShow: true,
    isReadonly: false
  }

  // - 2.箭头函数的内部没有this，引用的是外层的this，即当前类的实例对象
  changeShowStatus = () => {
    const isAvatarShow = this.state.isAvatarShow;
    this.setState({
      isAvatarShow: !isAvatarShow
    })
    console.log(this);
  }

  renderAvatar() {
    return (
      <Avatar style={{ backgroundColor: '#87d068', marginLeft: '10px' }} icon={<UserOutlined />} />
    )
  }

  changeReadonlyStatus = () => {
    this.setState({
      isReadonly: !this.state.isReadonly
    })
  }

  renderInput() {
    return (
      <div style={{ marginTop: 15 }}>
        用户名:<Input readOnly={this.state.isReadonly} placeholder='请输入用户名' />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          <h2>显示与隐藏</h2>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked onChange={this.changeShowStatus}></Switch>
          <span style={{ marginLeft: 20 }}>头像:</span>
          {this.state.isAvatarShow ? this.renderAvatar() : null}
        </div>
        <Divider type='horizontal'></Divider>
        <div>
          <h2>只读与可编辑</h2>
          <Switch checkedChildren="可编辑" unCheckedChildren="只读" defaultChecked onChange={this.changeReadonlyStatus}></Switch>
          {this.renderInput()}
        </div>
      </div>
    )
  }
}

export default SimplifiedState;