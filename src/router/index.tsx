import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { IRouterProps, ROUTES } from './config'

ReactDOM.render(
  <Router>
    <Switch>
      {ROUTES.map((item: IRouterProps) => {
        return (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
          ></Route>
        )
      })}
      {/* 默认跳到home组件 */}
      <Redirect from="/" to="/home" exact></Redirect>
      {/* 匹配不到跳转404 */}
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root'),
)
