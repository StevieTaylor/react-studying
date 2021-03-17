import React, { Fragment } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Redirect to={"/home"}></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App
