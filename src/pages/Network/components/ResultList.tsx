/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:40:20
 * @LastEditTime: 2021-08-11 10:40:46
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import { Card } from 'antd'
import { IGithubUser } from '@/entity/user.entity'
import Pubsub from 'pubsub-js'
const { Meta } = Card

interface IResultListState {
  userList: IGithubUser[]
}

class ResultList extends React.Component<any, IResultListState> {
  state = {
    userList: [] as IGithubUser[]
  }

  componentDidMount() {
    Pubsub.subscribe('userList', (_: any, data: any) => {
      this.setState({ userList: data })
    })
  }

  renderUrl = (url: string) => {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    )
  }

  render() {
    const { userList } = this.state
    return (
      <div className="result-list">
        {userList.map((user) => {
          return (
            <Card
              className="user-card"
              key={user.id}
              hoverable
              bordered
              size="small"
              cover={<img alt={user.html_url} src={user.avatar_url} />}
            >
              <Meta title={user.login} description={this.renderUrl(user.html_url)} className="user-html-url"></Meta>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default ResultList
