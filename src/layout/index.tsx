/*
 * @Author: Stevie
 * @Date: 2021-03-17 22:29:37
 * @LastEditors: Stevie
 * @LastEditTime: 2022-01-24 17:51:13
 * @Description: file content
 */
import './index.less'
import logo from '../logo.png'
import Menus from './Menu'
import React, { Component } from 'react'
import Home from '@pages/Home'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Route, withRouter, Link, Switch, Redirect } from 'react-router-dom'
import { IRouterProps, ROUTES } from '../router/config'
import NotFound from '@/pages/Exceptions/NotFound'

const { Header, Sider, Content } = Layout

class PageLayout extends Component<any, any> {
	title: string = 'React 学习指北'
	state = {
		collapsed: false
	}

	direct = ({ item, key, keyPath, domEvent }): void => {
		// console.log(this.props)
		this.props.history.push(key)
	}

	toggle = () => {
		this.setState({ collapsed: !this.state.collapsed })
	}

	handleRoutes = ({ children, path, component, exact }: IRouterProps) => {
		if (Array.isArray(children) && children.length) {
			return children.map(this.handleRoutes)
		} else {
			return <Route key={`${path}`} path={path} component={component} exact={exact} />
		}
	}

	render() {
		return (
			<Layout>
				<Sider className="sider" trigger={null} collapsible collapsed={this.state.collapsed} theme="light">
					<div className="sider-logo">
						<img src={logo} alt="logo" width="26" className="sider-logo-img" />
						<Link to="/home" className="sider-logo-title">
							{this.state.collapsed ? null : this.title}
						</Link>
					</div>
					<div className="sider-menus">
						<Menus />
					</div>
				</Sider>

				<Layout className="layout">
					<Header className="layout-header" style={{ padding: 0 }}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.toggle
						})}
					</Header>
					<Content className="layout-content">
						<Switch>
							<Route path="/404" component={NotFound} exact={true} />
							<Route path="/" component={Home} exact={true} />
							{ROUTES.map(this.handleRoutes)}
							<Route render={() => <Redirect to="/404" />} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default withRouter(PageLayout)
