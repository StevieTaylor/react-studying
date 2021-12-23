/*
 * @Author: Stevie
 * @Date: 2021-11-09 17:39:13
 * @LastEditTime: 2021-11-22 16:52:39
 * @LastEditors: Stevie
 * @Description:
 */
import { debounce } from '@/utils/util.service'
import { Button } from 'antd'
import * as React from 'react'

const Parent: React.FC = () => {

  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}></Button>
      <Son />
    </div>
  )
}

const Son: React.FC = () => {
  return (
    <React.Fragment>
      {console.log('child component')}
      <div>子组件</div>
    </React.Fragment>
  )
}

const UseMemo: React.FC = () => {
  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      <span>{count}</span>
      <Button type="primary" onClick={debounce(() => setCount(count + 1), 1000, false)}>
        +1
      </Button>
    </div>
  )
}

export default UseMemo
