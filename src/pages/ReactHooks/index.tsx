/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:33:45
 * @LastEditTime: 2021-06-28 00:15:32
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { useRef, useState } from 'react';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

const ReactHooks: React.FC = () => {

  const [age, setAge] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAgeChange = (e: React.BaseSyntheticEvent) => {
    console.log(e.currentTarget.value);
    const age = +e.currentTarget?.value;
    setAge(age);
  }

  const UserInfo = () => {
    return (
      <div className="form-item">
        <label>年龄:</label>
        <input ref={inputRef} onChange={handleAgeChange}></input>
      </div>
    )
  }

  return (
    <div className="react-hooks">
      <UseState />
      <UseEffect name="韩磊" age={age} />
      <UserInfo />
      <UseRef />
    </div>
  );
};

export default ReactHooks;
