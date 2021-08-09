/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:27:19
 * @LastEditTime: 2021-08-09 15:34:59
 * @LastEditors: Stevie
 * @Description:
 */
import './style'
import * as React from 'react';
import ResultList from './components/ResultList';
import SearchInput from './components/SearchInput';
import { IGithubUser } from '@/entity/user.entity';

interface INetworkState {
  userList: IGithubUser[];
}

class Network extends React.Component<any, INetworkState> {

  state = {
    userList: []
  }

  getUserList = (userList: IGithubUser[]) => {
    this.setState({ userList })
  }

  render() {
    const { userList } = this.state;
    return (
      <div className="user-search-container">
        <SearchInput getUserList={this.getUserList} />
        <ResultList userList={userList} />
      </div>
    );
  }
}

export default Network;