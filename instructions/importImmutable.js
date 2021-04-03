require('module-alias/register')//注册module-alias
const { addStringContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【导入immutable】
 */
class ImportImmutable extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'dependencies',
        {
          "immutable": npmPackageVersion["immutable"]
        }
      )
    })
  }
}

module.exports = ImportImmutable
