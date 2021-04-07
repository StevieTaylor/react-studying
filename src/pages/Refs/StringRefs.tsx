/*
 * @Author: Stevie
 * @Date: 2021-04-02 01:15:51
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-08 01:39:48
 * @Description: file content
 */
import React from 'react';
import { Button, Col, Input, message, Row } from 'antd';

class StringRefs extends React.Component {

    showValue = (): void => {
        const { stringRef } = this.refs;
        const { value } = (stringRef as Input).state;
        message.info(value);
    }

    render() {
        return (
            <div>
                <h2>一、String 类型的 Refs (已过时)</h2>
                <Row>
                    <Col span={19}>
                        <Input placeholder="请输入内容" ref="stringRef" />
                    </Col>
                    <Col span={5} className="paddingLeft5">
                        <Button type="primary" onClick={this.showValue}>显示</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default StringRefs

