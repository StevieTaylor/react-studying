/*
 * @Author: Stevie
 * @Date: 2021-04-02 00:39:46
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-02 01:31:33
 * @Description: file content
 */
import React from 'react';
import { Button, Input } from 'antd';

class CreateRefs extends React.Component {
    render() {
        const style = {
            display: 'inline',
            width: 400,
            marginRight: 5
        }
        return (
            <div>
                <h2>三、createRefs</h2>
                <Input placeholder="please input" style={style} />
                <Button type="primary" >显示</Button>
            </div>
        );
    }
}

export default CreateRefs;

