/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:39:45
 * @LastEditTime: 2021-09-29 14:43:33
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import { Input, Row, Col, Button, message } from 'antd'
import axios from 'axios'
import { IGithubUser } from '@entity/user.entity'
import Pubsub from 'pubsub-js'

class SearchInput extends React.Component<any, any> {
  inputRef: React.RefObject<Input> = React.createRef<Input>()

  searchUsers = () => {
    Pubsub.publish('userList', [])
    const keyword = this.inputRef.current?.input.value
    if (!keyword) {
      message.warning('请输入搜索关键字')
      return
    }
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        const userList: IGithubUser[] = res?.data?.items
        if (userList.length > 0) {
          Pubsub.publish('userList', userList)
        }
      },
      (error) => {
        console.error(error)
      }
    )
  }

  searchUsersByFetch = async () => {
    Pubsub.publish('userList', [])
    const keyword = this.inputRef.current?.input.value
    if (!keyword) {
      message.warning('请输入搜索关键字')
      return
    }
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
      const data = await response.json();
      data.items && Pubsub.publish('userList', data.items)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className="search-wrapper">
        <h2>Search Github Users</h2>
        <Row>
          <Col className="search-input">
            <Input placeholder="please input github username" ref={this.inputRef} />
          </Col>
          <Col className="search-button">
            <Button type="primary" onClick={this.searchUsersByFetch}>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchInput
