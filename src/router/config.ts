import { RouteComponentProps } from "react-router-dom";

/*
 * @Author: Stevie
 * @Date: 2021-03-17 21:46:03
 * @LastEditors: Stevie
 * @LastEditTime: 2021-03-17 22:03:06
 * @Description: file content
 */
export interface IRouterProps {
    path: string;
    exact: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    id: number;
    name?: string;
    chilren?: IRouterProps[];
}


