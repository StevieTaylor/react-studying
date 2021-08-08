/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:40:20
 * @LastEditTime: 2021-08-08 23:28:03
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import { Card } from 'antd'
const { Meta } = Card
class ResultList extends React.Component {
  mockUsers = [
    {
      alt: 'username',
      imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'username',
      description: 'react'
    },
    {
      alt: 'username',
      imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'username',
      description: 'react'
    },
    {
      alt: 'username',
      imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'username',
      description: 'react'
    },
    {
      alt: 'username',
      imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'username',
      description: 'react'
    },
    {
      alt: 'username',
      imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'username',
      description: 'react'
    }
  ]

  render() {
    return (
      <div className="result-list">
        {this.mockUsers.map((user) => {
          return (
            <Card hoverable className="user-card" cover={<img alt={user.alt} src={user.imgSrc} />}>
              <Meta title={user.title} description={user.description}></Meta>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default ResultList
