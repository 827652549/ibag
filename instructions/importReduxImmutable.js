require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【导入redux-immutable】
 * 依赖redux
 */
class ImportReduxImmutable extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      spliceStringContext(
        '../output/src/store/reducer.js',
        'import {combineReducers} from \'redux\'',
        'import {combineReducers} from \'redux-immutable\''
      )
      addItemInPackageJson(
        'dependencies',
        {
          "redux-immutable": npmPackageVersion["redux-immutable"]
        }
      )
    })
  }
}


module.exports = ImportReduxImmutable
