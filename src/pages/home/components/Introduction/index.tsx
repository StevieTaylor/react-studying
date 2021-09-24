/*
 * @Author: Stevie
 * @Date: 2021-09-24 14:20:58
 * @LastEditTime: 2021-09-24 17:32:59
 * @LastEditors: Stevie
 * @Description:
 */
import './style.less'
import * as React from 'react'
import { Avatar, Card } from 'antd'
import avatarUrl from '@images/avatar.jpeg'

const Introduction: React.FC = () => {
	return (
		<Card style={{ height: 400 }} title="Introduction">
			<div className="introduction">
				<div className="avatar">
					<Avatar src={avatarUrl} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 150, xxl: 200 }} />
				</div>
				<div className="username">Stevie Taylor</div>
				<div className="info">
					<div className="info-section">
						<p>161</p>
						<span>Post</span>
					</div>
					<div className="info-section">
						<p>6</p>
						<span>Followers</span>
					</div>
					<div className="info-section">
						<p>19</p>
						<span>Following</span>
					</div>
				</div>
			</div>
		</Card>
	)
}
export default Introduction
