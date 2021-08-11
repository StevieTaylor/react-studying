/*
 * @Author: Stevie
 * @Date: 2021-08-08 22:27:19
 * @LastEditTime: 2021-08-11 10:54:45
 * @LastEditors: Stevie
 * @Description:
 */
import './style'
import * as React from 'react'
import ResultList from './components/ResultList'
import SearchInput from './components/SearchInput'

class Network extends React.Component<any, any> {
  render() {
    return (
      <div className="user-search-container">
        <SearchInput />
        <ResultList />
      </div>
    )
  }
}

export default Network
