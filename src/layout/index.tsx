/*
 * @Author: Stevie
 * @Date: 2021-03-17 22:29:37
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-20 22:48:44
 * @Description: file content
 */
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import './index.less'
import { Route, withRouter } from 'react-router-dom'
import { IRouterProps, ROUTES } from '../router/config'

const { Header, Sider, Content } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2433703_oi6fcx7574e.js',
    '//at.alicdn.com/t/font_2433942_z9n7zdrblm9.js'
  ]
});

class PageLayout extends Component<any, any> {
  state = {
    collapsed: false,
  }

  direct = ({ item, key, keyPath, domEvent }): void => {
    // console.log(this.props)
    this.props.history.push(key);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              ROUTES.map((item) => {
                return (
                  <Menu.Item key={item.path} onClick={this.direct}>
                    <IconFont type={`icon-${item.icon}`} />{item.name}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {
              ROUTES.map((item: IRouterProps) => {
                return (
                  <Route key={item.path} path={item.path} component={item.component} ></Route>
                )
              })
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(PageLayout)
