/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:12:52
 * @LastEditTime: 2021-08-19 14:24:16
 * @LastEditors: Stevie
 * @Description:
 */
import { message } from 'antd';
import React, { FC, useRef } from 'react';

const GetDOM: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const showInputValue = (): void => {
    const value = inputRef.current?.value;
    value ? message.info(value) : message.warning('输入不能为空');
  };

  return (
    <div>
      <h3 className="h3-ref">1. 获取元素</h3>
      <div className="form-item">
        <label>姓名:</label>
        <input ref={inputRef} placeholder="请输入姓名" style={{ marginRight: '8px' }}></input>
        <button className="primary-button" onClick={showInputValue}>
          显示
        </button>
      </div>
    </div>
  );
};

const CacheData: FC = () => {
  return (
    <div>
      <h3 className="h3-ref">2. 缓存数据</h3>
    </div>
  );
};

const UseRef: FC = () => {
  return (
    <div>
      <h2>三、useRef</h2>
      <GetDOM />
      <CacheData />
    </div>
  );
};

export default UseRef;
