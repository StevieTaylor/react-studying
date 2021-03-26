/*
 * @Author: Stevie
 * @Date: 2021-03-24 00:28:27
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-26 23:50:13
 * @Description: file content
 */
import React from "react"
import { Button, Divider, message, Typography } from "antd"

const { Paragraph } = Typography;

interface IContent {
    [key: string]: any
}

interface IState {
    title: string;
    content: IContent;
    isEditable: boolean;
}

class State extends React.Component<{}, IState> {

    tooltip: string = '点击此处进行编辑'

    constructor(props) {
        super(props)
        this.state = {
            title: '原标题',
            content: {
                tip1: 'State不可以通过赋值直接更改',
                tip2: '状态必须通过setState来进行更改',
                tip3: 'State更新是合并，不是覆盖'
            },
            isEditable: false
        }
    }

    // - changeTitle是作为onClick的回调，不是通过实例调用的，即直接调用
    // - class类中的方法默认开启了局部严格模式，所以changeTitle的this指向了undefined
    changeTitle() {
        this ? this.setState({ title: '新标题' }) : message.warning('this is undefined, can not change title')
    }

    changeTitle2 = () => {
        this.setState({
            title: '新标题'
        })
    }

    resetTitle = () => {
        this.setState({
            title: '原标题'
        })
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h2>{this.state.title}</h2>
                    <Button onClick={this.changeTitle} ghost={true} danger={true}>改变标题</Button>
                    <Divider type='vertical'></Divider>
                    <Button onClick={this.changeTitle2} type='primary' ghost={true}>改变标题</Button>
                    <Divider type='vertical'></Divider>
                    <Button onClick={this.resetTitle}>复原标题</Button>
                </div>
                <Divider type='horizontal'></Divider>
                <div className="content">
                    <h2>内容</h2>
                    <Paragraph editable={{
                        tooltip: this.tooltip
                    }}>{this.state.content.tip1}</Paragraph>
                    <Paragraph editable={{
                        tooltip: this.tooltip
                    }}>{this.state.content.tip2}</Paragraph>
                    <Paragraph editable={{
                        tooltip: this.tooltip
                    }}>{this.state.content.tip3}</Paragraph>
                </div>
            </div>
        )
    }
}

export default State