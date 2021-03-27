/*
 * @Author: Stevie
 * @Date: 2021-03-24 00:28:27
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-27 20:54:06
 * @Description: file content
 */
import React from "react"
import { Button, Divider, message, Typography } from "antd"
import SimplifiedState from './Simplify';

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
        // - 构造器调用了1次
        console.log('执行了constructor()');
        this.state = {
            title: '原标题',
            content: {
                tip1: '1. State不可以通过赋值直接更改',
                tip2: '2. State必须通过setState来进行更改',
                tip3: '3. State更新是合并，不是覆盖，即对于同名的进行替换'
            },
            isEditable: false
        }
        // - 使用bind修改this指向，不推荐
        this.changeTitle2 = this.changeTitle2.bind(this);
    }

    // - changeTitle是作为onClick的回调，不是通过实例调用的，即直接调用
    // ! 类和模块的内部，默认就是严格模式，所以changeTitle的this指向了undefined
    changeTitle() {
        this ? this.setState({ title: '新标题' }) : message.warning('this is undefined, can not change title')
    }

    // - 修改this指向
    // - 1.使用bind修改this指向
    changeTitle2() {
        this.setState({
            title: '新标题'
        })
    }

    // - 2.使用箭头函数改变this指向
    resetTitle = () => {
        this.setState({
            title: '原标题'
        })
    }

    renderTitle() {
        return (
            <div className="title">
                <h2>{this.state.title}</h2>
                <Button onClick={this.changeTitle} ghost={true} danger={true}>改变标题</Button>
                <Divider type='vertical'></Divider>
                <Button onClick={this.changeTitle2} type='primary' ghost={true}>改变标题</Button>
                <Divider type='vertical'></Divider>
                <Button onClick={this.resetTitle}>复原标题</Button>
            </div>
        )
    }

    renderContent() {
        return (
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
        )
    }

    render() {
        // - render方法执行了(1+n)次，1代表了初始化的那次，n是状态更新的次数
        console.log('执行了render(),' + new Date().toLocaleString());
        return (
            <div className="state">
                {this.renderTitle()}
                <Divider type='horizontal'></Divider>
                {this.renderContent()}
                <Divider type='horizontal'></Divider>
                <SimplifiedState />
            </div>
        )
    }
}

export default State