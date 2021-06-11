/*
 * @Author: Stevie
 * @Date: 2021-05-02 15:45:35
 * @LastEditTime: 2021-06-11 17:59:24
 * @LastEditors: Stevie
 * @Description: 新生命周期 v16.4
 */
import React from 'react';
import { Button, Typography, Collapse, Divider, Image } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './style.less';
import NewChildComponent from './NewChildComponent';

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

class NewLifecycle extends React.Component<IProps, IState> {

  static defaultProps = {
    name: '计数器'
  }

  constructor(props) {
    super(props);
    // console.log('一、挂载阶段');
    this.state = {
      number: 0,
      dates: [],
      time: 0
    }
    console.log('执行了constructor()');
  }

  // ! UNSAFE不是指安全性, 将在未来可能出现bug
  // * 从props中获取派生的state
  // * 使用场景: state的值在任何时候都取决于props时
  static getDerivedStateFromProps(props, state) {
    console.log('执行了static getDerivedStateFromProps()');
    // console.log('props:', props);
    // console.log('state:', state);
    return props;
  }

  // * 组件已经挂载
  componentDidMount() {
    console.log('执行了componentDidMount()');
  }

  // * 控制组件是否更新，默认返回true，如果为false，停止更新
  shouldComponentUpdate() {
    console.log('执行了shouldComponentUpdate()');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('执行了getSnapshotBeforeUpdate()');
    return 'snapshot';
  }

  // * 组件已经更新
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot: any) {
    console.log(snapshot);
    console.log('执行了componentDidUpdate()');
  }

  // * 组件将要卸载
  componentWillUnmount() {
    console.log('执行了componentWillUnmount()');
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
    console.log('执行了render()');
    return (
      <div>
        <div>
          <h2>一、新版生命周期流程图</h2>
          <Divider type="horizontal"></Divider>
          <Image
            src={require('../../assets/images/new-lifecycle.png').default}
            width={500}
          />
        </div>

        <div className="lifecycle-functions">
          <h2>二、新版生命周期方法</h2>
          <Divider type="horizontal"></Divider>
          <Collapse
            accordion
            bordered={false}
            defaultActiveKey="mount"
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          >
            <Panel header={<Title level={4}>Stage1.挂载阶段</Title>} key="mount">
              <ol className="list">
                <li>constructor()</li>
                <li>static getDerivedStateFromProps()</li>
                <li className="oftenUse">render()</li>
                <li className="oftenUse">componentDidMount()</li>
              </ol>
            </Panel>

            <Panel header={<Title level={4}>Stage2.更新阶段</Title>} key="update">
              <ol className="list">
                <li>static getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
              </ol>
              <Title level={4}>更新的3种方式:</Title>
              <ul>
                <li>
                  <h2>setState()</h2>
                  <h3>{this.props.name}:{this.state.number}</h3>
                  <Button type="primary" onClick={this.addOne}>加1</Button>
                </li>
                <li>
                  <Divider type="horizontal"></Divider>
                  <h2>forceUpdate()</h2>
                  <Button type="primary" danger onClick={this.forceUpdateComponent}>强制更新</Button>
                </li>
                <li>
                  <Divider type="horizontal"></Divider>
                  <h2>父组件更新props</h2>
                  <NewChildComponent time={this.state.time} />
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
      </div>
    );
  }
}

export default NewLifecycle;