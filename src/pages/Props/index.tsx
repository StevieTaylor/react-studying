/*
 * @Author: Stevie
 * @Date: 2021-03-27 20:56:55
 * @LastEditTime: 2021-03-29 11:27:12
 * @LastEditors: Stevie
 * @Description:
 * @FilePath: /react-learning-demo/src/pages/PropsDemo/index.tsx
 */
import React from "react"
import { getUser } from '../../mock/user'
class Props extends React.Component {
  render() {
    getUser().then((res) => {
      console.log(res.data)
    })
    return (
      <h2>Props</h2>
    )
  }
}

export default Props;
