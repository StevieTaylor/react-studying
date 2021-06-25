/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:33:45
 * @LastEditTime: 2021-06-25 14:07:01
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

const ReactHooks: React.FC = () => {
  return (
    <div className="react-hooks">
      <UseState />
      <UseEffect />
      <UseRef />
    </div>
  );
};

export default ReactHooks;
