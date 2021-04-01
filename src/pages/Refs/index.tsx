/*
 * @Author: Stevie
 * @Date: 2021-03-31 06:05:27
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-02 01:19:20
 * @Description: file content
 */
import React from 'react';
import { Divider } from 'antd'
import StringRefs from './StringRefs';
import CallbackRefs from './CallbackRefs';
import CreateRefs from './CreateRefs';

class RefsDemo extends React.Component {
    render() {
        return (
            <div className="refs">
                <StringRefs />
                <Divider type="horizontal"></Divider>
                <CallbackRefs />
                <Divider type="horizontal"></Divider>
                <CreateRefs />
            </div>
        );
    }
}

export default RefsDemo;

