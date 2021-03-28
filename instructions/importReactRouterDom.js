require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext } = require('@/core/context-handle')
const globalConfig = require('@/configs/global')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【导入React-router-dom】
 */
class ImportReactRouterDom extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null, [
        'output', [
          'src',
          [
            'router',
              {
                'filename': 'index',
                'extension': 'js',
                'context': `import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Index from '../App'
import A from '../pages/A'
import B from '../pages/B'
import C from '../pages/C'

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/index"  component={Index}/>
        <Route path="/a" component={A}/>
        <Route path="/b" component={B}/>
        <Route path="/c" component={C}/>
      </Switch>
    </BrowserRouter>
  )
}
`,
              },
            {
              "filename": "README",
              "extension": "md",
              "context": "# router config\n"
            }
          ],
        ],

      ])
      spliceStringContext(
        '../output/src/index.js',
        `import App from './App'`,
        `import Router from './router/index'`
      )
      spliceStringContext(
        '../output/src/index.js',
        `<App />`,
        `<Router/>`
      )
      addFirstLineContext(
        '../output/src/App.js',
        `import { Link } from 'react-router-dom'\n`
      )
      addStringContext(
          '../output/package.json',
          `"dependencies": {`,
          'right',
          `\n\t"react-router-dom": "${npmPackageVersion['react-router-dom']}",`
      )
      addStringContext(
        '../output/src/App.js',
        `Welcome to ibag`,
        `right`,
        `
      <p>goto page <Link to='/a'>A</Link></p>
      <p>goto page <Link to='/b'>B</Link></p>
      <p>goto page <Link to='/c'>C</Link></p>`
      )
    })
  }
}

module.exports = ImportReactRouterDom
