/*
 * @Author: Stevie
 * @Date: 2021-06-28 14:26:57
 * @LastEditTime: 2021-06-28 20:58:10
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { Divider, Typography } from 'antd';
const { Title } = Typography;

const WhatIsHooks: React.FC = () => {
  return (
    <div>
      <h2>一、Hooks是什么?</h2>
      <h4 className="h4-ref">
        React16.8以后，新增的钩子API，目的是增加代码的可复用性，逻辑性，弥补无状态组件没有生命周期，没有数据管理状态state的缺陷.
      </h4>
    </div>
  );
};

const DisadvantagesOfClassComponent: React.FC = () => {
  return (
    <div>
      <h2>二、类组件的劣势</h2>
      <ul>
        <li>状态逻辑难复用, 需要使用render props 或 HOC</li>
        <li>趋向复杂难以维护</li>
        <li>this 指向问题</li>
      </ul>
    </div>
  );
};

const AdvantagesOfHooks: React.FC = () => {
  return (
    <div>
      <h2>三、Hooks的优势</h2>
      <ul>
        <li>优化类组件的3大问题</li>
        <li></li>
        <li>可以拆分成更小的组件单元</li>
        <li>
          <h4 className="h4-ref">
            副作用的关注点分离
          </h4>
        </li>
      </ul>
    </div>
  );
};

type TNotesProps = {
  notes: string[];
}

const Notes: React.FC<TNotesProps> = (props: TNotesProps) => {
  console.log(props);
  return (
    <div>
      <span>{props.notes}</span>
    </div>
  )
}

const ReactHooks: React.FC = () => {
  return (
    <div className="react-hooks">
      <Title level={3}>React Hooks</Title>
      <WhatIsHooks />
      <Divider type="horizontal"></Divider>
      <DisadvantagesOfClassComponent />
      <Divider type="horizontal"></Divider>
      <AdvantagesOfHooks />
      <Notes notes={['注意']} />
    </div>
  );
};

export default ReactHooks;
