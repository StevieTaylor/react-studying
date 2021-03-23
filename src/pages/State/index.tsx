/*
 * @Author: Stevie
 * @Date: 2021-03-24 00:28:27
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-24 02:16:18
 * @Description: file content
 */
import { Button, Divider, message } from "antd"
import React from "react"

interface IState {
    title: string;
}

class State extends React.Component<{}, IState> {

    constructor(props) {
        super(props)
        this.state = {
            title: '原标题'
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
                <h2>{this.state.title}</h2>
                <Divider type='horizontal'></Divider>
                <Button onClick={this.changeTitle} ghost={true} danger={true}>改变标题</Button>
                <Divider type='vertical'></Divider>
                <Button onClick={this.changeTitle2} type='primary' ghost={true}>改变标题</Button>
                <Divider type='vertical'></Divider>
                <Button onClick={this.resetTitle}>复原标题</Button>
            </div>
        )
    }
}

export default State