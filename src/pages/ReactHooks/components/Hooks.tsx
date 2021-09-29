/*
 * @Author: Stevie
 * @Date: 2021-06-28 14:26:57
 * @LastEditTime: 2021-09-29 14:41:50
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react'
import Section, { ISection } from '@components/section'
import { Typography } from 'antd'
import ThisProblem from './ThisProblem'
const { Title } = Typography

const WhatIsHooks: React.FC = () => {
  const hooksIntro: ISection = {
    title: '一、Hooks是什么?',
    content: {
      items: [
        'React16.8以后，新增的钩子API，目的是增加代码的可复用性，逻辑性，弥补无状态组件没有生命周期，没有数据管理状态state的缺陷.'
      ]
    }
  }
  return <Section {...hooksIntro} />
}

const DisadvantagesOfClassComponent: React.FC = () => {
  const disadvantages: ISection = {
    title: '二、类组件的劣势',
    content: {
      items: [
        '状态逻辑难复用, 需要使用render props 或 HOC',
        '趋向复杂难以维护',
        { description: 'this 指向问题', example: <ThisProblem /> }
      ]
    }
  }
  return <Section {...disadvantages} />
}

const Effect: React.FC = () => {
  const effect: ISection = {
    title: '三、副作用: 指那些没有发生在数据向视图转换过程中的逻辑',
    content: {
      items: ['Ajax请求', '访问原生DOM元素', '绑定/解绑事件', '设置定时器', '日志记录', '本地持久化缓存']
    }
  }
  return <Section {...effect} />
}

const AdvantagesOfHooks: React.FC = () => {
  const advantages: ISection = {
    title: '四、Hooks的优势',
    content: {
      items: [
        '能优化类组件的3大问题',
        '能在无需修改组件结构的情况下复用状态逻辑(自定义hooks)',
        '能拆分成更小的组件单元',
        {
          description: '副作用的关注点分离',
          example:
            <ol>
              <li>useEffect在全部渲染完毕后执行</li>
              <li>useLayoutEffect会在浏览器layout布局以后,painting绘制以前执行</li>
            </ol>
        }
      ]
    }
  }
  return <Section {...advantages} />
}

const Notes: React.FC = () => {
  const notes: ISection = {
    title: '五、注意事项',
    content: {
      items: [
        '只能在函数内部的顶层调用Hook, 不能在循环、条件判断、子函数中调用',
        '只能在 React 的函数组件中调用 Hook，不要在其他 JavaScript 函数中调用'
      ]
    }
  }
  return <Section {...notes} />
}

const ReactHooks: React.FC = () => {
  return (
    <div className="react-hooks">
      <Title level={3}>React Hooks</Title>
      <WhatIsHooks />
      <DisadvantagesOfClassComponent />
      <Effect />
      <AdvantagesOfHooks />
      <Notes />
    </div>
  )
}

export default ReactHooks
