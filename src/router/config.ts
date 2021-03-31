/*
 * @Author: Stevie
 * @Date: 2021-03-27 14:49:21
 * @LastEditTime: 2021-03-31 06:09:57
 * @LastEditors: Stevie
 * @Description: 
 * @FilePath: /react-learning-demo/src/router/config.ts
 */
import { RouteComponentProps } from "react-router-dom";
import Home from '../pages/home';
import JSX from '../pages/JSX';
import Components from '../pages/components';
import State from '../pages/State';
import Props from '../pages/Props'
import Refs from '../pages/Refs'

export interface IRouterProps {
    path: string;
    exact: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    icon: string;
    name?: string;
    chilren?: IRouterProps[];
}

export const ROUTES: IRouterProps[] = [
    {
        path: "/home",
        exact: true,
        component: Home,
        icon: 'zhuye',
        name: "Home"
    },
    {
        path: "/jsx",
        exact: true,
        component: JSX,
        icon: 'duihua',
        name: 'JSX'
    },
    {
        path: '/component',
        exact: true,
        component: Components,
        icon: 'buju',
        name: 'Component'
    },
    {
        path: '/state',
        exact: true,
        component: State,
        icon: 'zhinan',
        name: 'State'
    },
    {
        path: '/props',
        exact: true,
        component: Props,
        icon: 'xiaoxi',
        name: 'Props'
    },
    {
        path: '/refs',
        exact: true,
        component: Refs,
        icon: 'wode',
        name: 'Refs'
    },
]


