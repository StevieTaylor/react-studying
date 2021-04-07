/*
 * @Author: Stevie
 * @Date: 2021-04-02 00:39:46
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-08 01:44:19
 * @Description: file content
 */
import React from 'react';
import { Button, Col, Input, message, Row } from 'antd';

class CreateRefs extends React.Component {

    // - React.createRef()调用后返回一个容器，该容器可以存储被ref标识的节点
    inputRef = React.createRef<Input>();
    // - 此容器只能给一个DOM元素或组件实例使用
    inputRef2: React.RefObject<Input>;

    constructor(props) {
        super(props);
        this.inputRef2 = React.createRef<Input>();
    }

    showValue = (): void => {
        const value = this.inputRef.current?.state.value;
        message.info(value);
    }

    selectAll = () => {
        this.inputRef2.current?.focus({
            cursor: "all"
        })
    }

    render() {
        return (
            <div>
                <h2>三、React.createRef() 创建 Refs</h2>
                <Row>
                    <Col span={19}>
                        <Input placeholder="请输入内容" ref={this.inputRef} />
                    </Col>
                    <Col span={5} className="paddingLeft5">
                        <Button type="primary" onClick={this.showValue}>显示</Button>
                    </Col>
                </Row>
                <Row className="marginTop10">
                    <Col span={19}>
                        <Input placeholder="请输入内容" ref={this.inputRef2} />
                    </Col>
                    <Col span={5} className="paddingLeft5">
                        <Button type="primary" onClick={this.selectAll}>全选</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateRefs;

