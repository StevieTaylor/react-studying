/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Stevie
 * @Date: 2021-06-25 10:13:47
 * @LastEditTime: 2021-08-18 16:28:10
 * @LastEditors: Stevie
 * @Description:
 */
import '../index.less';
import { useState, useEffect, FC } from 'react';
import { IUserInfo } from '@/entity/user.entity';
import { Card, Descriptions } from 'antd';
import Pubsub from 'pubsub-js';
import { Girl } from '@/entity/person.entity';
const { Item } = Descriptions;
const { Meta } = Card;

function getUserInfo({ name, age, gender }): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        age,
        gender
      });
    }, 1000);
  });
}

type UserProps = {
  name: string;
  age: number;
  gender: string;
};

/**
 * - useEffect(callback, array), 如果给第二个参数传空数组[], 那么useEffect相当于类组件里面componentDidMount
 */
const ComponentDidMount: FC<UserProps> = ({ name, age, gender }) => {
  const [count, setCount] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

  useEffect(() => {
    console.log('1.useEffect实现componentDidMount');
    getUserInfo({ name, age, gender }).then((res) => {
      setUserInfo(res);
    });
  }, []);

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">1. useEffect 实现 componentDidMount</h3>
      <Descriptions title="用户信息" bordered>
        <Item label="姓名">{userInfo.name}</Item>
        <Item label="年龄">{userInfo.age}</Item>
        <Item label="性别">{userInfo.gender}</Item>
      </Descriptions>
      <div className="counter-container">
        <span className="count">次数 : {count}</span>
        <button className="primary-button" onClick={() => setCount(count + 1)}>
          点击
        </button>
      </div>
    </div>
  );
};

/**
 * - useEffect(callback, array), 如果不传第二个参数, 那么useEffect相当于类组件里面componentDidUpdate
 */
const ComponentDidUpdate: FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('2.useEffect实现componentDidUpdate');
  });

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">2. useEffect 实现 componentDidUpdate</h3>
      <div className="counter-container">
        <span className="count">次数 : {count}</span>
        <button className="primary-button" onClick={() => setCount(count + 1)}>
          点击
        </button>
      </div>
    </div>
  );
};

/**
 * - 在useEffect的callback中返回一个函数, React将会在执行清除操作时调用它
 */
const ComponentWillUnmount: FC = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('3.useEffect实现componentWillUnmount');
    }, 1000);
    // - 执行清除定时器、取消订阅的操作, 相当于类组件里的componentWillUnmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">3. useEffect 实现 componentWillUnmount</h3>
      <div className="counter-container">
        <span className="count">次数 : {count}</span>
        <button className="primary-button" onClick={() => setCount(count + 1)}>
          点击
        </button>
      </div>
    </div>
  );
};

/**
 * - 在useEffect的参数[]中添加依赖可以控制useEffect的执行
 * - 如果依赖中有多个元素, 只要有一个元素发生了变化, 那么useEffect就会执行
 */
const ControlUseEffect: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    console.log('4.只在number变化时执行');
  }, [number]);

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">4. 通过第二个参数[]控制useEffect的执行</h3>
      <div className="counter-container">
        <span className="count">count : {count}</span>
        <button className="primary-button" onClick={() => setCount(count + 1)}>
          点击
        </button>
      </div>
      <div className="counter-container">
        <span className="count">number : {number}</span>
        <button className="primary-button" onClick={() => setNumber(number + 1)}>
          点击
        </button>
      </div>
    </div>
  );
};

/**
 * - 通过多个useEffect的使用可以实现关注点分离
 */
const SeparationOfConcerns: FC<IUserInfo> = ({ name, age, gender }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

  useEffect(() => {
    const token = Pubsub.subscribe('personInfo', (_: any, res: IUserInfo) => {
      setUserInfo(res);
    });
    return () => {
      Pubsub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    getUserInfo({ name, age, gender }).then((res) => {
      setUserInfo(res);
    });
  }, []);

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">5. 使用多个useEffect实现关注点分离</h3>
      <Descriptions title="用户信息" bordered>
        <Item label="姓名">{userInfo.name}</Item>
        <Item label="年龄">{userInfo.age}</Item>
        <Item label="性别">{userInfo.gender}</Item>
      </Descriptions>
    </div>
  );
};

/**
 * - 异步useEffect: 在callback的内部使用自执行函数来实现异步
 * ! useEffect的callback返回的是清除副作用的clean-up函数, 无法返回Promise, 因此不能直接使用async/await
 */
const AsyncUseEffect: FC = () => {
  const [girlList, setGirlList] = useState<Girl[]>([]);

  useEffect(() => {
    (async function queryPersonInfo() {
      try {
        const URL = `https://gank.io/api/v2/data/category/Girl/type/Girl/page/1/count/10`;
        const res = await (await fetch(URL)).json();
        const list = res.data;
        setGirlList(list);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="useEffect-container">
      <h3 className="h3-ref">6. 异步useEffect</h3>
      <div className="card-wrapper">
        {girlList.length > 0 &&
          girlList.map((girl: Girl) => {
            return (
              <Card key={girl._id} className="girl-card" hoverable cover={<img alt={girl.author} src={girl.url} />}>
                <Meta title={girl.title} description={girl.desc} />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

const UseEffect: FC = () => {
  const persons: IUserInfo[] = [
    { name: 'Jack', age: 28, gender: '男' },
    { name: 'Rose', age: 25, gender: '女' },
    { name: 'Taylor', age: 30, gender: '女' }
  ];

  useEffect(() => {
    Pubsub.publish('personInfo', persons[2]);
  }, []);

  return (
    <div>
      <h2>二、useEffect</h2>
      <ComponentDidMount {...persons[0]} />
      <ComponentDidUpdate />
      <ComponentWillUnmount />
      <ControlUseEffect />
      <SeparationOfConcerns {...persons[1]} />
      <AsyncUseEffect />
    </div>
  );
};

export default UseEffect;
