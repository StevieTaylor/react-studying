/*
 * @Author: Stevie
 * @Date: 2021-03-27 14:49:21
 * @LastEditTime: 2021-09-01 17:10:59
 * @LastEditors: Stevie
 * @Description: 
 * @FilePath: /react-learning-demo/src/router/config.ts
 */
import { RouteComponentProps } from "react-router-dom";
import Home from '@pages/Home';
import JSX from '@pages/JSX';
import Components from '@pages/Components';
import State from '@pages/State';
import Props from '@pages/Props';
import Refs from '@pages/Refs';
import OldLifecycle from '@pages/Lifecycle/OldLifecycle';
import NewLifecycle from '@pages/Lifecycle/NewLifecycle';
import ReduxDemo from "@pages/Redux";
import HandlingEvents from "@pages/HandlingEvents";
import Forms from "@pages/Forms";
import HighOrderFunction from "@pages/HighOrderFunction";
import DiffingAlgorithm from "@pages/DiffingAlgorithm";
import Hooks from "@pages/ReactHooks/components/Hooks";
import UseState from "@pages/ReactHooks/components/UseState";
import UseEffect from "@pages/ReactHooks/components/UseEffect";
import UseRef from "@pages/ReactHooks/components/UseRef";
import UseReducer from "@pages/ReactHooks/components/UseReducer";
import Network from "@pages/Network";
import NotFound from "@/pages/Exceptions/NotFound";
import Context from "@/pages/Context";

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
        path: '/diffing-algorithm',
        exact: true,
        component: DiffingAlgorithm,
        icon: 'gouwu',
        title: 'Diffing Algorithm'
    },
    {
        path: '/redux-demo',
        exact: true,
        component: ReduxDemo,
        icon: 'tupian',
        title: 'Redux'
    },
    {
        path: '/react-hooks',
        exact: true,
        icon: 'liebiao',
        title: 'React Hooks',
        children: [
            {
                path: '/hooks',
                exact: true,
                title: 'Hooks',
                component: Hooks
            },
            {
                path: '/useState',
                exact: true,
                title: 'useState',
                component: UseState
            },
            {
                path: '/useEffect',
                exact: true,
                title: 'useEffect',
                component: UseEffect
            },
            {
                path: '/useRef',
                exact: true,
                title: 'useRef',
                component: UseRef
            },
            {
                path: '/useReducer',
                exact: true,
                title: 'useReducer',
                component: UseReducer
            }
        ]
    },
    {
        path: '/network',
        exact: true,
        component: Network,
        icon: 'gouwu',
        title: 'Network'
    },
    {
        path: '/404',
        exact: true,
        component: NotFound,
        icon: 'gouwu',
        title: 'Not Found'
    },
    {
        path: '/context',
        exact: true,
        component: Context,
        icon: 'shijian',
        title: 'Context'
    }
]


