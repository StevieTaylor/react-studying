/*
 * @Author: Stevie
 * @Date: 2021-04-15 23:19:30
 * @LastEditors: Stevie
 * @LastEditTime: 2021-05-03 17:48:16
 * @Description: file content
 */
import React from 'react';
import { Tabs } from 'antd';
import OldLifecycle from './OldLifecycle';

const { TabPane } = Tabs;

class ComponentLifeCycle extends React.Component {

  render() {
    return (
      <Tabs type="card">
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
