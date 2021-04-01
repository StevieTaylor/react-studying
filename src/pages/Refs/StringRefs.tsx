/*
 * @Author: Stevie
 * @Date: 2021-04-02 01:15:51
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-02 01:24:11
 * @Description: file content
 */
import React from 'react';
import { Button, Input, message } from 'antd';

class StringRefs extends React.Component {

    showValue = (): void => {
        const { stringRef } = this.refs;
        const { value } = (stringRef as Input).state;
        message.info(value);
    }

    render() {
        const style = {
            display: 'inline',
            width: 400,
            marginRight: 5
        }
        return (
            <div>
                <h2>一、String 类型的 Refs (已过时)</h2>
                <Input placeholder="please input" style={style} ref="stringRef" />
                <Button type="primary" onClick={this.showValue}>显示</Button>
            </div>
        )
    }
}

export default StringRefs

