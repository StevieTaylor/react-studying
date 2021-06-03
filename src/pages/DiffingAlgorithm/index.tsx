/*
 * @Author: Stevie
 * @Date: 2021-05-16 20:20:21
 * @LastEditTime: 2021-06-03 18:38:27
 * @LastEditors: Stevie
 * @Description: diffing 算法
 */
import * as React from 'react';
import { Button, Divider } from 'antd';
import './style.less';

interface IPerson {
  id: number;
  name: string;
  age: number;
}

interface IState {
  date: Date;
  number: number;
  personList: IPerson[];
  name: string;
  age: number;
}

class DiffingAlgorithm extends React.Component<any, IState> {
  private dateTimer;

  state = {
    date: new Date(),
    number: 9,
    personList: [],
    name: '',
    age: 0
  };

  componentDidMount() {
    this.dateTimer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.initPersonList();
  }

  componentWillUnmount() {
    clearInterval(this.dateTimer);
  }

  initPersonList = (): void => {
    const { number } = this.state;
    const personList: IPerson[] = [];
    for (let i = 0; i < number; i++) {
      personList.push({
        id: i + 1,
        name: ['Jack', 'Rose', 'Lucy'][i % 3],
        age: 21 + (i % 10)
      });
    }
    this.setState({ personList });
  };

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleAgeChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ age: +e.currentTarget.value });
  };

  renderVerification = () => {
    return (
      <div>
        <h2>一、验证diffing算法</h2>
        <div>
          <div style={{ height: 40, paddingLeft: 20 }}>
            当前时间: {this.state.date.toTimeString()}
          </div>
          <div className='form-item'>
            <label className='required'>姓名:</label>
            <input type='text' placeholder='请输入你的姓名' onChange={this.handleNameChange} />
          </div>
        </div>
        <div>
          <div className='form-item'>
            <label className='required'>年龄:</label>
            <input type='text' placeholder='请输入你的年龄' onChange={this.handleAgeChange} />
          </div>
          <Button type='primary' onClick={this.reverseAdd} style={{ marginLeft: 85 }}>
            逆序新增
          </Button>
          <Button type='primary' onClick={this.orderAdd} style={{ marginLeft: 8 }}>
            顺序新增
          </Button>
        </div>
      </div>
    );
  };

  getNewPerson = () => {
    const { personList, name, age } = this.state;
    return {
      id: personList.length + 1,
      name,
      age
    };
  };

  // * 顺序添加
  orderAdd = (): void => {
    const { personList } = this.state;
    this.setState({ personList: [...personList, this.getNewPerson()] });
  };

  // * 逆序添加
  reverseAdd = (): void => {
    const { personList } = this.state;
    this.setState({ personList: [this.getNewPerson(), ...personList] });
  };

  renderEffectOfKey = () => {
    const { personList } = this.state;
    return (
      <div>
        <h2>二、Key的作用</h2>
        <div className='person-list-container'>
          <div className='useIndex'>
            <h3>1.使用index作为key</h3>
            <ul>
              {personList.map((person: IPerson, index: number) => (
                <li key={index}>
                  <span>姓名:{person.name}</span>,<span>年龄:{person.age}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='useId'>
            <h3>2.使用id作为key</h3>
            <ul>
              {personList.map((person: IPerson) => (
                <li key={person.id}>
                  <span>姓名:{person.name}</span>,<span>年龄:{person.age}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className='diffing-algorithm'>
        {this.renderVerification()}
        <Divider type='horizontal'></Divider>
        {this.renderEffectOfKey()}
      </div>
    );
  }
}

export default DiffingAlgorithm;
