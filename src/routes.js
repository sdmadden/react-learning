import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './js/pages/home'
import Posts from './js/pages/posts'
import NotFound from './js/pages/404'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/name">
        <Home name="Ted" />
      </Route>
      <Route path="/posts" component={Posts} exact />
      <Route path="/posts/:id" component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
