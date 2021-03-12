import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

function IsRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={About} />
    </Switch>
  )
}

export default IsRouter
