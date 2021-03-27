require('module-alias/register')//注册module-alias
const { addStringContext } = require('@/core/context-handle')
const globalConfig = require('@/configs/global')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【导入immutable】
 */
class ImportImmutable extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addStringContext(
        '../output/package.json',
        `"dependencies": {`,
        'right',
        `\n\t"immutable": "${globalConfig.isAllNpmPackageVersionLatest?'*':npmPackageVersion["immutable"]}",`
      )
    })
  }
}

module.exports = ImportImmutable
