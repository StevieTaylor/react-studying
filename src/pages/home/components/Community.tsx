/*
 * @Author: Stevie
 * @Date: 2021-09-23 15:47:51
 * @LastEditTime: 2021-09-23 18:28:44
 * @LastEditors: Stevie
 * @Description:
 */
import '../style.less'
import * as React from 'react'
import { Card, Col, Progress, Row } from 'antd'
import * as Icons from '@ant-design/icons/lib/icons'
const { GithubOutlined, MediumOutlined, TwitterOutlined, FacebookOutlined } = Icons

interface ICommunity {
	backgroud: string
	icon: React.ReactNode
	title: string
	trend: string
	followers: number
	progress: number
}

const Community: React.FC = () => {
	const communities: ICommunity[] = [
		{
			backgroud: '#88aff2',
			icon: <GithubOutlined />,
			title: 'Github',
			trend: '+20.7%',
			followers: 10234,
			progress: 31
		},
		{
			backgroud: '#ffe2a4',
			icon: <MediumOutlined />,
			title: 'Medium',
			trend: '+34.2%',
			followers: 29134,
			progress: 57
		},
		{
			backgroud: '#9df6c4',
			icon: <TwitterOutlined />,
			title: 'Twitter',
			trend: '+15.6%',
			followers: 4291,
			progress: 25
		},
		{
			backgroud: '#ff9888',
			icon: <FacebookOutlined />,
			title: 'Facebook',
			trend: '+7.8%',
			followers: 5612,
			progress: 41
		}
	]

	const renderTitle = (community: ICommunity) => {
		const { icon, title, trend } = community
		return (
			<Row gutter={16}>
				<Col span={3}>{icon}</Col>
				<Col span={9} className="title">
					<span>{title}</span>
				</Col>
				<Col span={12} className="trend">
					<span>{trend}</span>
				</Col>
			</Row>
		)
	}

	const renderContent = (community: ICommunity) => {
		return (
			<Row gutter={16} className="content">
				<Col span={12}>
					<h2>{community.followers}</h2>
					<div style={{ paddingLeft: 2 }}>Followers</div>
				</Col>
				<Col span={12} className="progress">
					<Progress type="circle" percent={community.progress} width={68} status="active" />
				</Col>
			</Row>
		)
	}

	return (
		<div className="community">
			<Row gutter={24}>
				{communities.map((community, index) => {
					const style = { backgroundColor: community.backgroud }
					return (
						<Col span={6} key={`${community.title}-${index}`}>
							<Card
								className="community-card"
								hoverable
								title={renderTitle(community)}
								headStyle={style}
								bodyStyle={style}
							>
								{renderContent(community)}
							</Card>
						</Col>
					)
				})}
			</Row>
		</div>
	)
}
export default Community
