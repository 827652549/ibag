require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const createFile = [
  "output",
  {
    "filename": "babel.config",
    "extension": "js",
    "context": "module.exports = {\n  presets: [\n    '@vue/cli-plugin-babel/preset'\n  ]\n}\n"
  }
]
/**
 * 指令【为vue导入babel】
 */
class ImportBabelForVue extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null,createFile)
      addStringContext(
        '../output/package.json',
        `"devDependencies": {`,
        'right',
        `\n\t"@vue/cli-plugin-babel": "${npmPackageVersion["@vue/cli-plugin-babel"]}",`
      )
    })
  }
}


module.exports = ImportBabelForVue
