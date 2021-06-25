/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:12:23
 * @LastEditTime: 2021-06-25 17:28:21
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { useState } from 'react';
import { Button, Divider, Space } from 'antd';

const UseState: React.FC = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>一、useState</h2>
      <h4 className="h4-ref">状态存储,派发状态更新</h4>
      <Space size={20}>
        <span>number : {number}</span>
        <Button type="primary" onClick={() => setNumber(number + 1)}>
          +1
        </Button>
        <Button type="primary" onClick={() => setNumber(number - 1)}>
          -1
        </Button>
      </Space>
      <Divider type="horizontal"></Divider>
    </div>
  );
};

export default UseState;
