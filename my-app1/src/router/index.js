import React,{Component} from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'

// 页面异步chunk优化

import Index from '../App'
import A from '../pages/A'
import B from '../pages/B'
import NoMatch from '../pages/404'

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/index"  component={Index}/>
          <Route path="/a" component={A}/>
          <Route path="/b" component={B}/>
          {/*404页面配置*/}
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
