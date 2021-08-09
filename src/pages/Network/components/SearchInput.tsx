/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:39:45
 * @LastEditTime: 2021-08-09 15:42:15
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { Input, Row, Col, Button } from 'antd';
import axios from 'axios';
import { IGithubUser } from '@/entity/user.entity';

interface ISearchInputProps {
  getUserList: (list: IGithubUser[]) => void;
}

class SearchInput extends React.Component<ISearchInputProps, any> {

  inputRef = React.createRef<Input>();

  searchUsers = () => {
    const keyword = this.inputRef.current?.input.value;
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (res) => {
        const userList: IGithubUser[] = res?.data?.items;
        console.log(`userList`, userList)
        userList.length > 0 && this.props.getUserList(userList)
      },
      (error) => {
        console.error(error)
      }
    )
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
            <Button type="primary" onClick={this.searchUsers}>Search</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchInput;