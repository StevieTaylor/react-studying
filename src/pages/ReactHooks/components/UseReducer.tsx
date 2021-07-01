/*
 * @Author: Stevie
 * @Date: 2021-07-01 17:44:20
 * @LastEditTime: 2021-07-01 18:00:32
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'addOne':
      return { number: state.number + 1 }
    case 'subtractOne':
      return { number: state.number - 1 }
    default:
      throw new Error()
  }
}
const initialState = 0
const init = () => {
  return { number: initialState }
}

const UseReducer: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState, init)

  return (
    <div>
      Count: {state.number}
      <button onClick={() => dispatch({ type: 'addOne' })}>+</button>
      <button onClick={() => dispatch({ type: 'subtractOne' })}>-</button>
    </div>
  )
}
export default UseReducer
