import NoMatch from '../pages/404'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import Index from '../App'
import A from '../pages/A'
import B from '../pages/B'
import C from '../pages/C'

export default function Router () {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/index" component={Index}/>
          <Route path="/a" component={A}/>
          <Route path="/b" component={B}/>
          <Route path="/c" component={C}/>
          {/*page 404*/}
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
