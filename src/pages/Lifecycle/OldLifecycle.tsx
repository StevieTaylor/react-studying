/*
 * @Author: Stevie
 * @Date: 2021-04-18 16:09:02
 * @LastEditTime: 2021-04-18 21:23:14
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react';
import { Button, Typography, Collapse, Divider } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import ChildComponent from './ChildComponent';
import './style.less';

const { Title } = Typography;
const { Panel } = Collapse;

interface IProps {
  name: string;
  titles: string[];
}

interface IState {
  number: number;
  dates: [];
  time: number;
}

class OldLifecycle extends React.Component<IProps, IState> {

  static defaultProps = {
    name: '计数器',
    titles: [
      'setState()',
      'forceUpdate()',
      '父组件更新props'
    ]
  }

  constructor(props) {
    super(props);
    console.log('一、挂载阶段');
    this.state = {
      number: 0,
      dates: [],
      time: 0
    }
    console.log('1.执行了constructor');
  }

  // * 组件将要挂载
  componentWillMount() {
    console.log('2.执行了componentWillMount');
  }

  // * 组件已经挂载
  componentDidMount() {
    console.log('4.执行了componentDidMount');
  }

  // * 控制组件是否更新，默认返回true，如果为false，停止更新
  shouldComponentUpdate() {
    console.log('二、更新阶段');
    console.log('1).执行了shouldComponentUpdate');
    return true;
  }

  // * 组件将要更新
  componentWillUpdate() {
    console.log('2).执行了componentWillUpdate');
  }

  // * 组件已经更新
  componentDidUpdate() {
    console.log('4).执行了componentDidUpdate');
  }

  // * 组件将要卸载
  componentWillUnmount() {
    console.log('执行了componentWillUnmount');
  }

  addOne = (): void => {
    const { number } = this.state;
    this.setState({ number: number + 1 });
  }

  forceUpdateComponent = (): void => {
    console.log('使用forceUpdate()强制更新');
    this.forceUpdate();
  }

  // 更新次数
  updateTime = () => {
    const { time } = this.state;
    this.setState({ time: time + 1 });
  }

  render() {
    console.log('3.执行了render');
    const { titles } = this.props;
    return (
      <div>
        <Collapse
          accordion
          bordered={false}
          defaultActiveKey="mount"
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        >
          <Panel header={<Title level={4}>Stage1.挂载阶段</Title>} key="mount">
            <ol className="list">
              <li>constructor()</li>
              <li>componentWillMount()</li>
              <li className="oftenUse">render()</li>
              <li className="oftenUse">componentDidMount()</li>
            </ol>
          </Panel>
          <Panel header={<Title level={4}>Stage2.更新阶段</Title>} key="update">
            <ol className="list">
              <li>shouldComponentUpdate()</li>
              <li>componentWillUpdate()</li>
              <li>render()</li>
              <li>componentDidUpdate()</li>
            </ol>
            <Title level={4}>更新的3种方式:</Title>
            <ul>
              <li>
                <h2>{titles[0]}</h2>
                <h3>{this.props.name}:{this.state.number}</h3>
                <Button type="primary" onClick={this.addOne}>加1</Button>
              </li>
              <li>
                <Divider type="horizontal"></Divider>
                <h2>{titles[1]}</h2>
                <Button type="primary" danger onClick={this.forceUpdateComponent}>强制更新</Button>
              </li>
              <li>
                <Divider type="horizontal"></Divider>
                <h2>{titles[2]}</h2>
                <ChildComponent time={this.state.time} />
                <Button onClick={this.updateTime} type="primary">更新props</Button>
              </li>
            </ul>
          </Panel>
          <Panel header={<Title level={4}>Stage3.卸载阶段</Title>} key="unmount">
            <ul>
              <li className="list oftenUse">componentWillUnmount()</li>
            </ul>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default OldLifecycle;