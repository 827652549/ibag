require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const {addStringContext,addFirstLineContext } = require('@/core/context-handle')

/**
 * 指令【在page目录下创建页面404】
 * 注意，该指令依赖react-router-dom
 */
class CreatePage404ForReact extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null, [
        'output', [
          'src',
          [
            'pages',
            [
              '404',
              {
                'filename': 'index',
                'extension': 'js',
                'context': `function NoMatch(props) {
  return (
    <div>
      page 404
    </div>
  );
}

export default NoMatch;
`,
              },
            ],

          ],
        ],

      ])
      addFirstLineContext(
        '../output/src/router/index.js',
        `import NoMatch from '../pages/404'\n`
      )
      addStringContext(
        '../output/src/router/index.js',
        `</Switch>`,
        `left`,
        `{/*page 404*/}
<Route component={NoMatch}/>
`
      )
    })
  }
}
module.exports = CreatePage404ForReact
