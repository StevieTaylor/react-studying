import { RouteComponentProps } from "react-router-dom";
import Home from '@pages/home/home';
import JSX from '@pages/JSX/index';
import Components from '../pages/components/index';

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
        name: "home"
    },
    {
        path: "/jsx",
        exact: true,
        component: JSX,
        icon: 'duihua',
        name: 'jsx'
    },
    {
        path: '/component',
        exact: true,
        component: Components,
        icon: 'buju',
        name: 'component'
    }
]


