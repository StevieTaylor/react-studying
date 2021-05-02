/*
 * @Author: Stevie
 * @Date: 2021-05-02 16:37:15
 * @LastEditTime: 2021-05-03 00:11:45
 * @LastEditors: Stevie
 * @Description:
 */
import React from 'react';
import { IRouterProps, ROUTES } from '../../router/config';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.less';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_2433703_oi6fcx7574e.js',
    '//at.alicdn.com/t/font_2433942_z9n7zdrblm9.js'
  ]
});

class Menus extends React.Component<any, any> {

  handleMenuItem = ({ children, path, title, icon }: IRouterProps) => {
    const menuIcon = icon ? (<IconFont type={`icon-${icon}`} />) : null;
    if (Array.isArray(children) && children.length) {
      const subMenu = children.map(this.handleMenuItem);
      if (subMenu.length) {
        return (
          <Menu.SubMenu
            key={`${path}`}
            title={title}
            icon={menuIcon}
            className="menu-submenu menu-item"
          >
            {subMenu}
          </Menu.SubMenu>
        )
      }
    } else {
      return (
        <Menu.Item
          key={`${path}`}
          icon={menuIcon}
          className="menu-item"
        >
          <Link to={path}>{title || path}</Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Menu
        mode="inline"
        className="menu-container"
      >
        {ROUTES.map(this.handleMenuItem)}
      </Menu>
    );
  }
}

export default Menus;