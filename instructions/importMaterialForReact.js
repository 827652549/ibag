require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为react导入material】
 */
class ImportMaterialForReact extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'dependencies',
        {
          "@material-ui/core": npmPackageVersion["@material-ui/core"]
        }
      )
      addFirstLineContext(
        '../output/src/App.js',
        `import Avatar from '@material-ui/core/Avatar'\n`
      )
      spliceStringContext(
        '../output/src/App.js',
        'ibag',
        `<Avatar style={{display:'inline-flex'}}>ibag</Avatar>`
      )
    })
  }
}


module.exports = ImportMaterialForReact
