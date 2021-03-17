import { RouteComponentProps } from "react-router-dom";
import Home from '@pages/home/home';
import Login from "@pages/login/login";

export interface IRouterProps {
    path: string;
    exact: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    name?: string;
    chilren?: IRouterProps[];
}

export const ROUTES: IRouterProps[] = [
    {
        path: "/home",
        exact: true,
        component: Home,
        name: "home"
    },
    {
        path: "/login",
        exact: false,
        component: Login,
        name: "login"
    }
]


