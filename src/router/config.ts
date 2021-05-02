/*
 * @Author: Stevie
 * @Date: 2021-03-27 14:49:21
 * @LastEditTime: 2021-05-03 00:11:02
 * @LastEditors: Stevie
 * @Description: 
 * @FilePath: /react-learning-demo/src/router/config.ts
 */
import { RouteComponentProps } from "react-router-dom";
import Home from '../pages/home';
import JSX from '../pages/JSX';
import Components from '../pages/components';
import State from '../pages/State';
import Props from '../pages/Props';
import Refs from '../pages/Refs';
import OldLifecycle from '@/pages/Lifecycle/OldLifecycle';
import NewLifecycle from '@/pages/Lifecycle/NewLifecycle';
import ReduxDemo from "@/pages/Redux";

export interface IRouterProps {
    path: string;
    exact: boolean;
    title: string;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    icon?: string;
    name?: string;
    children?: IRouterProps[];
}

export const ROUTES: IRouterProps[] = [
    {
        path: "/home",
        exact: true,
        component: Home,
        icon: 'zhuye',
        title: "Home"
    },
    {
        path: "/jsx",
        exact: true,
        component: JSX,
        icon: 'duihua',
        title: 'JSX'
    },
    {
        path: '/component',
        exact: true,
        component: Components,
        icon: 'buju',
        title: 'Component'
    },
    {
        path: '/state',
        exact: true,
        component: State,
        icon: 'zhinan',
        title: 'State'
    },
    {
        path: '/props',
        exact: true,
        component: Props,
        icon: 'xiaoxi',
        title: 'Props'
    },
    {
        path: '/refs',
        exact: true,
        component: Refs,
        icon: 'wode',
        title: 'Refs'
    },
    {
        path: '/lifecycle',
        exact: true,
        icon: 'shijian',
        title: 'lifecycle',
        children: [
            {
                path: '/old-lifecycle',
                exact: true,
                component: OldLifecycle,
                title: 'old edition'
            },
            {
                path: '/new-lifecycle',
                exact: true,
                component: NewLifecycle,
                title: 'new edition'
            }
        ]
    },
    {
        path: '/redux-demo',
        exact: true,
        component: ReduxDemo,
        icon: 'shijian',
        title: 'redux-demo'
    }
]


