import About from 'Pages/About'
import React from 'react'
import { Route, Switch } from 'react-router'
import Landing from './Landing'

const Pages = () => {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/tour'>
        <h1>tour</h1>
      </Route>
      <Route path='/history'>
        <h1>history</h1>
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  )
}

export default Pages
