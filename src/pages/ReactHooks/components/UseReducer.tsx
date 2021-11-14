/*
 * @Author: Stevie
 * @Date: 2021-07-01 17:44:20
 * @LastEditTime: 2021-11-14 23:45:11
 * @LastEditors: Stevie
 * @Description:
 */
import { IAction } from '@/entity/common.entity'
import { Button, Form, Input, InputNumber, Radio, RadioChangeEvent, Space } from 'antd'
import * as React from 'react'

enum CountAction {
  PlusOne = 'plusOne',
  MinusOne = 'minusOne'
}

const SimpleCase: React.FC = () => {
  const reducer = (state: { count: number }, action: IAction) => {
    const { count } = state
    switch (action.type) {
      case CountAction.PlusOne:
        return { count: count + 1 }
      case CountAction.MinusOne:
        return { count: count - 1 }
      default:
        return state
    }
  }

  const initialState = {
    count: 0
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div>
      <h3 className="h3-ref">1.无状态组件中的redux</h3>
      <div>
        <Space size={16}>
          <span>count: {state.count}</span>
          <Button type="primary" onClick={() => dispatch({ type: CountAction.PlusOne })}>
            +1
          </Button>
          <Button type="primary" onClick={() => dispatch({ type: CountAction.MinusOne })}>
            -1
          </Button>
        </Space>
      </div>
    </div>
  )
}

interface IFormInfo {
  name: string
  age: number
  gender: string
}

type FormInfo = keyof IFormInfo

interface IFormAction {
  type: FormInfo
  payload: any
}

const ComplexCase: React.FC = () => {
  const initialState = {
    name: '',
    age: 0,
    gender: 'male'
  }

  const reducer = (state: IFormInfo, action: IFormAction): IFormInfo => {
    const { type, payload } = action
    switch (type) {
      case 'name':
        return { ...state, name: payload }
      case 'age':
        return { ...state, age: payload }
      case 'gender':
        return { ...state, gender: payload }
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const style: React.CSSProperties = { width: '200px' }

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: { offset: 3, span: 16 }
  }

  const submitForm = () => {
    console.log(state)
  }

  const cancelSubmit = () => { }

  return (
    <div style={{ margin: '30px 0' }}>
      <h3 className="h3-ref">2.useReducer管理多个state</h3>
      <div>
        <Form {...layout}>
          <Form.Item label="姓名" name="name" initialValue={state.name} required>
            <Input
              placeholder="请输入姓名"
              style={style}
              onChange={(e) => dispatch({ type: 'name', payload: e.currentTarget.value })}
            />
          </Form.Item>

          <Form.Item label="年龄" name="age" initialValue={state.age} required>
            <InputNumber
              placeholder="请输入年龄"
              style={style}
              onChange={(e) => dispatch({ type: 'age', payload: e.valueOf() })}
            />
          </Form.Item>

          <Form.Item label="性别" name="gender" initialValue={state.gender} required>
            <Radio.Group onChange={(e: RadioChangeEvent) => dispatch({ type: 'gender', payload: e.target.value })}>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space size={10}>
              <Button type="primary" htmlType="submit" onClick={submitForm}>
                保存
              </Button>
              <Button type="default" htmlType="button" onClick={cancelSubmit}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

const UseReducer: React.FC = () => {
  return (
    <div className="use-reducer">
      <h2>四、useReducer</h2>
      <SimpleCase />
      <ComplexCase />
    </div>
  )
}

export default UseReducer
