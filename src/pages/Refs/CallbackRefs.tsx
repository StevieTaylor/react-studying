/*
 * @Author: Stevie
 * @Date: 2021-04-02 00:24:45
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-02 01:31:08
 * @Description: file content
 */
import React from 'react';
import { Button, Divider, Input, message } from 'antd';

class CallbackRefs extends React.Component {
    inputElement: Input | undefined;
    inputElement2: Input | undefined;

    showValue = () => {
        message.info(this.inputElement?.state.value);
    }

    showValue2 = () => {
        message.info(this.inputElement2?.state.value);
    }

    // - React 会自动调用绑定在ref属性上的回调函数
    refCallback = (element: Input) => {
        this.inputElement2 = element;
    }

    render() {
        const style = {
            display: 'inline',
            width: 400,
            marginRight: 5
        }
        return (
            <div>
                <h2>二、回调 Refs</h2>
                <div>
                    <h3>1.内联函数定义 ref 回调</h3>
                    <Input placeholder="please input" style={style} ref={(el: Input) => this.inputElement = el} />
                    <Button type="primary" onClick={this.showValue}>显示</Button>
                </div>
                <Divider type="horizontal"></Divider>
                <div>
                    <h3>2.class绑定函数定义 ref 回调</h3>
                    <Input placeholder="please input" style={style} ref={this.refCallback} />
                    <Button type="primary" onClick={this.showValue2}>显示</Button>
                </div>
            </div>
        );
    }
}

export default CallbackRefs;
