/*
 * @Author: Stevie
 * @Date: 2021-04-15 23:19:30
 * @LastEditors: Stevie
 * @LastEditTime: 2021-04-18 21:28:57
 * @Description: file content
 */
import React from 'react';
import { Tabs } from 'antd';
import OldLifecycle from './OldLifecycle';

const { TabPane } = Tabs;

class ComponentLifeCycle extends React.Component {

  onTabChange = (key: string) => {
    console.log('key :>> ', key);
  }

  render() {
    return (
      <Tabs type="card" onChange={this.onTabChange}>
        <TabPane tab="旧版生命周期" key="oldLifecycle">
          <OldLifecycle />
        </TabPane>
        <TabPane tab="新版生命周期" key="newLifecycle">
          新版生命周期
        </TabPane>
      </Tabs>
    );
  }
}

export default ComponentLifeCycle;
