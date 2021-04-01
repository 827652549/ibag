require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为vue导入eslint】
 */
class ImportEslintForVue extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      addStringContext(
        '../output/package.json',
        `"devDependencies": {`,
        'right',
        `\n\t"@vue/cli-plugin-eslint": "${npmPackageVersion["@vue/cli-plugin-eslint"]}",
\t"babel-eslint": "${npmPackageVersion["babel-eslint"]}",
\t"eslint": "${npmPackageVersion["eslint"]}",
\t"eslint-plugin-vue": "${npmPackageVersion["eslint-plugin-vue"]}",`
      )
      addStringContext(
        '../output/package.json',
        `"browserslist": [`,
        'left',
        `"eslintConfig": {
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
  },\n`
      )
      addStringContext(
        '../output/package.json',
        `"scripts": {`,
        'right',
        `\n\t"lint": "vue-cli-service lint",`
      )
    })
  }
}


module.exports = ImportEslintForVue
