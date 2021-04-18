/*
 * @Author: Stevie
 * @Date: 2021-04-18 18:33:07
 * @LastEditTime: 2021-04-18 21:25:23
 * @LastEditors: Stevie
 * @Description: 
 */
import React from 'react';

interface IProps {
  time: number;
}

class ChildComponent extends React.Component<IProps, any> {

  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time
    }
  }

  componentWillReceiveProps(props) {
    console.log('子组件接收新的props之后执行更新');
    console.log('props:', props);
    console.log('2.1.子组件执行了componentWillReceiveProps');
  }

  // * 控制组件是否更新，默认返回true，如果为false，停止更新
  shouldComponentUpdate() {
    console.log('2.2.子组件执行了shouldComponentUpdate');
    return true;
  }

  // * 组件将要更新
  componentWillUpdate() {
    console.log('2.3.子组件执行了componentWillUpdate');
  }

  // * 组件已经更新
  componentDidUpdate() {
    console.log('2.5.子组件执行了componentDidUpdate');
  }

  render() {
    console.log('2.4.子组件执行了render');
    return (
      <div>
        <h3>子组件被更新次数:{this.props.time}</h3>
      </div>
    );
  }
}

export default ChildComponent;