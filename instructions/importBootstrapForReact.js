require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为react导入bootstrap和react-bootstrap】
 */
class ImportBootstrapForReact extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addStringContext(
        '../output/package.json',
        `"dependencies": {`,
        'right',
        `\n\t"bootstrap": "${npmPackageVersion["bootstrap"]}",
\t"react-bootstrap": "${npmPackageVersion["react-bootstrap"]}",`
      )
      addFirstLineContext(
        '../output/src/index.js',
        `import 'bootstrap/dist/css/bootstrap.min.css'\n`
      )
      addFirstLineContext(
        '../output/src/App.js',
        `import {Badge} from 'react-bootstrap'\n`
      )
      spliceStringContext(
        '../output/src/App.js',
        'ibag',
        `<Badge variant="secondary">ibag</Badge>`
      )
    })
  }
}


module.exports = ImportBootstrapForReact
