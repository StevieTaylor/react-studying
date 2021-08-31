/*
 * @Author: Stevie
 * @Date: 2021-08-31 15:29:41
 * @LastEditTime: 2021-08-31 15:32:39
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { Result, Button } from 'antd';

class NotFound extends React.Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起, 您访问的页面未找到."
        extra={<Button type="primary">回到首页</Button>}
      />
    );
  }
}

export default NotFound;