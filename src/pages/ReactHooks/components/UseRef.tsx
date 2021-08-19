/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:12:52
 * @LastEditTime: 2021-08-19 18:06:50
 * @LastEditors: Stevie
 * @Description:
 */
import { FC, useEffect, useRef, useState } from 'react'
import { message } from 'antd'

/**
 * - useRef的返回值可以被dom元素的ref标记，可以获取被标记的元素节点
 */
const GetDOM: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const showInputValue = (): void => {
    console.log('ref.current :>> ', inputRef.current)
    console.log('custom-attr :>> ', inputRef.current?.getAttribute('custom-attr'))
    const value = inputRef.current?.value
    value ? message.info(value) : message.warning('输入不能为空')
  }

  return (
    <div>
      <h3 className="h3-ref">1. 获取元素</h3>
      <div className="form-item">
        <label>姓名:</label>
        <input ref={inputRef} placeholder="请输入姓名" style={{ marginRight: '8px' }} custom-attr="自定义属性"></input>
        <button className="primary-button" onClick={showInputValue}>
          显示
        </button>
      </div>
    </div>
  )
}

/**
 * - useRef(initParams)的参数initParams可以作为缓存数据的初始值
 * - 变更.current属性不会引发组件的重新渲染
 */
const CacheData: FC = () => {
  const initCount: number = 0
  const [count, setCount] = useState<number>(initCount)
  const countRef = useRef<number>(count)

  useEffect(() => {
    countRef.current = count
  }, [count])

  return (
    <div>
      <h3 className="h3-ref">2. 缓存数据</h3>
      <div className="counter-container">
        <p className="count">初始Count值 : {initCount}</p>
        <p className="count">上次Count值 : {countRef.current}</p>
        <p className="count">当前Count值 : {count}</p>
        <button className="primary-button" onClick={() => setCount(count + 1)}>
          点击+1
        </button>
      </div>
    </div>
  )
}

const UseRef: FC = () => {
  return (
    <div>
      <h2>三、useRef</h2>
      <GetDOM />
      <CacheData />
    </div>
  )
}

export default UseRef
