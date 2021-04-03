require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为vue导入eslint】
 */
class ImportEslintForVue extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'devDependencies',
        {
          "@vue/cli-plugin-eslint": npmPackageVersion["@vue/cli-plugin-eslint"],
          "babel-eslint": npmPackageVersion["babel-eslint"],
          "eslint": npmPackageVersion["eslint"],
          "eslint-plugin-vue": npmPackageVersion["eslint-plugin-vue"]
        }
      )
      addItemInPackageJson(
        'eslintConfig',
        {
          "root": true,
          "env": {
            "node": true
          },
          "extends": [
            "plugin:vue/essential",
            "eslint:recommended"
          ],
          "parserOptions": {
            "parser": "babel-eslint"
          },
          "rules": {}
        }
      )
      addItemInPackageJson(
        'scripts',
        {
          "lint": "vue-cli-service lint"
        }
      )
    })
  }
}


module.exports = ImportEslintForVue
