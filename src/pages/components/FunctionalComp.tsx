/*
 * @Author: Stevie
 * @Date: 2021-03-23 00:57:42
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-23 02:03:01
 * @Description: file content
 */

const FunctionalComponent = () => {
    // - this为undefined，babel编译后，使用的是strict严格模式
    // console.log(this) 
    return (
        <div>
            <h2>一、函数式组件</h2>
            <p>适用于简单组件</p>
        </div>
    )
}
export default FunctionalComponent