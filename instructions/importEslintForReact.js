require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为react导入eslint】
 */
class ImportEslintForReact extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'devDependencies',
        {
          "babel-eslint": npmPackageVersion["babel-eslint"],
          "eslint": npmPackageVersion["eslint"],
          "eslint-plugin-import": npmPackageVersion["eslint-plugin-import"],
          "eslint-plugin-react": npmPackageVersion["eslint-plugin-react"]
        }
      )
      addItemInPackageJson(
        'eslintConfig',
        {
          "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
          ],
          "env": {
            "browser": true,
            "commonjs": true,
            "es6": true
          },
          "parser": "babel-eslint",
          "parserOptions": {
            "ecmaVersion": 7,
            "ecmaFeatures": {
              "experimentalObjectRestSpread": true,
              "experimentalDecorators": true,
              "jsx": true
            },
            "sourceType": "module"
          },
          "plugins": [
            "react"
          ],
          "rules": {
            "react/react-in-jsx-scope": 0,
            "react/prop-types": 0,
            "no-unused-vars": 0
          }
        }
      )
      addItemInPackageJson(
        'scripts',
        {
          "lint": "eslint --ext .js,.jsx src"
        }
      )
    })
  }
}


module.exports = ImportEslintForReact
