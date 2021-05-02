/*
 * @Author: Stevie
 * @Date: 2021-03-17 22:29:37
 * @LastEditors: Stevie
 * @LastEditTime: 2021-05-03 00:09:50
 * @Description: file content
 */
import React, { Component } from 'react'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import './index.less'
import { Route, withRouter, Link } from 'react-router-dom'
import { IRouterProps, ROUTES } from '../router/config'
import Menus from './Menu';
const { Header, Sider, Content } = Layout

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

  handleRoutes = ({ children, path, component }: IRouterProps) => {
    if (Array.isArray(children) && children.length) {
      children.map((route) => {
        return (
          <Route
            key={`${route.path}`}
            path={`${route.path}`}
            component={route.component}
          />
        )
      })
    } else {
      return (
        <Route
          key={`${path}`}
          path={path}
          component={component}
        />
      )
    }
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme="light">
          <div className="sider-logo">
            <Link to='/home'>React学习指南</Link>
          </div>
          <Menus />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header" style={{ padding: 0 }}>
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
              ROUTES.map(this.handleRoutes)
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(PageLayout)
