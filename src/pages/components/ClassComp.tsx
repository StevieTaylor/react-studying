/*
 * @Author: Stevie
 * @Date: 2021-03-23 00:57:42
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-24 00:33:28
 * @Description: file content
 */
import React from "react";

class ClassComponent extends React.Component {
    // - render方法是在当前组件ClassComponent的原型对象上，供实例对象调用
    render() {
        // - this指向当前组件的实例对象
        // console.log(this) 
        return (
            <div>
                <h2>二、class组件</h2>
                <p>适用于复杂组件(有状态state)</p>
            </div>
        )
    }
}

export default ClassComponent
