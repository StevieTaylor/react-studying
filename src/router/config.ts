/*
 * @Author: Stevie
 * @Date: 2021-03-27 14:49:21
 * @LastEditTime: 2021-05-16 16:31:04
 * @LastEditors: Stevie
 * @Description: 
 * @FilePath: /react-learning-demo/src/router/config.ts
 */
import { RouteComponentProps } from "react-router-dom";
import Home from '../pages/Home';
import JSX from '../pages/JSX';
import Components from '../pages/components';
import State from '../pages/State';
import Props from '../pages/Props';
import Refs from '../pages/Refs';
import OldLifecycle from '@/pages/Lifecycle/OldLifecycle';
import NewLifecycle from '@/pages/Lifecycle/NewLifecycle';
import ReduxDemo from "@/pages/Redux";
import HandlingEvents from "@/pages/HandlingEvents";
import Forms from "@/pages/Forms";
import HighOrderFunction from "@/pages/HighOrderFunction";

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
        icon: 'kuaijian',
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
        path: '/handling-events',
        exact: true,
        component: HandlingEvents,
        icon: 'zhinan',
        title: 'Handling Events'
    },
    {
        path: '/forms',
        exact: true,
        component: Forms,
        icon: 'caidan',
        title: 'Forms'
    },
    {
        path: '/high-order-function',
        exact: true,
        component: HighOrderFunction,
        icon: 'shezhi',
        title: 'HighOrderFunction'
    },
    {
        path: '/lifecycle',
        exact: true,
        icon: 'shijian',
        title: 'Lifecycle',
        children: [
            {
                path: '/old-lifecycle',
                exact: true,
                component: OldLifecycle,
                title: 'Old Edition'
            },
            {
                path: '/new-lifecycle',
                exact: true,
                component: NewLifecycle,
                title: 'New Edition'
            }
        ]
    },
    {
        path: '/redux-demo',
        exact: true,
        component: ReduxDemo,
        icon: 'tupian',
        title: 'Redux'
    }
]


