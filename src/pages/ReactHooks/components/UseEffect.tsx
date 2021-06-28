/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:13:47
 * @LastEditTime: 2021-06-28 14:20:32
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { IUserInfo } from '@/entity/user.entity';

type IProps = {
  name: string;
  age: number;
};

function getUserInfo({ name, age }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        age,
        gender: 'male'
      });
    }, 1000);
  });
}

const UseEffect: React.FC<IProps> = ({ name, age }) => {
  const [userInfo, setUserInfo] = React.useState<IUserInfo>({} as IUserInfo);
  const [number, setNumber] = React.useState<number>(0);
  const handleResize = (e) => {
    console.log(e);
  };
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    console.log('执行了useEffect');
    // 模拟Ajax请求
    getUserInfo({ name, age }).then((res: any) => {
      setUserInfo(res);
    });
    // DOM操作
    window.addEventListener('resize', handleResize);
    // 定时器
    const $timer = setInterval(() => {

    }, 1000)

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval($timer);
    }
  }, [name, age, number]);

  return (
    <div>
      <h2>二、useEffect</h2>
      <h4 className="h4-ref">组件更新副作用钩子</h4>
      <div>
        <p>
          获取用户信息:
          <span>姓名: {userInfo.name}</span>
          <span>年龄: {userInfo.age}</span>
        </p>
      </div>
      <div>
        <span>number : {number}</span>
        <button className="primary-button" onClick={() => setNumber(number + 1)} ref={buttonRef}>
          +1
        </button>
      </div>
    </div>
  );
};
export default UseEffect;
