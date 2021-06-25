/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:12:52
 * @LastEditTime: 2021-06-25 17:18:46
 * @LastEditors: Stevie
 * @Description:
 */
import { message } from 'antd';
import * as React from 'react';

const UseRef: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const showInputValue = (): void => {
    const value = inputRef.current?.value;
    value ? message.info(value) : message.warning('输入不能为空');
  };

  return (
    <div>
      <h2>三、useRef</h2>
      <div>
        <h4 className="h4-ref">获取元素</h4>
        <div className="form-item">
          <label>姓名:</label>
          <input ref={inputRef} placeholder="请输入姓名"></input>
          <button className="primary-button" onClick={showInputValue}>
            显示
          </button>
        </div>
      </div>
      <div>
        <h4 className="h4-ref">缓存数据</h4>
      </div>
    </div>
  );
};

export default UseRef;
