/*
 * @Author: Stevie
 * @Date: 2021-09-11 17:15:24
 * @LastEditTime: 2021-09-24 15:13:08
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react'
import { Col, Row } from 'antd'
import Community from './components/Community'
import Statistics from './components/Statistics'
import Introduction from './components/Introduction/index'

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div>
					<Community />
				</div>
				<div style={{ margin: '20px 0' }}>
					<Row gutter={36}>
						<Col span={16}>
							<Statistics />
						</Col>
						<Col span={8}>
							<Introduction />
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Home
