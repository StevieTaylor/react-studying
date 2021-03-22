/*
 * @Author: Stevie
 * @Date: 2021-03-22 23:33:23
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-23 01:56:12
 * @Description: file content
 */
import React from "react";
import FunctionalComponent from './FunctionalComp';
import ClassComponent from './ClassComp';

class Components extends React.Component {
    render() {
        return (
            <div>
                <FunctionalComponent />
                <ClassComponent />
            </div>
        )
    }
}

export default Components