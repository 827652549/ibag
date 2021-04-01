require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为react导入eslint】
 */
class ImportEslintForReact extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addStringContext(
        '../output/package.json',
        `"devDependencies": {`,
        'right',
        `\n\t"babel-eslint": "${npmPackageVersion["babel-eslint"]}",
    \t"eslint": "${npmPackageVersion["eslint"]}",
    \t"eslint-plugin-import": "${npmPackageVersion["eslint-plugin-import"]}",
    \t"eslint-plugin-react": "${npmPackageVersion["eslint-plugin-react"]}"\n`
      )
      spliceStringContext(
        '../output/package.json',
        `"eslintConfig": {
    "extends": [
      "react-app"
    ]
  },`,
        `"eslintConfig": {
    "extends": [
      "react-app",
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
      "react/prop-types": 0
    }
  },`
      )
      addStringContext(
        '../output/package.json',
        `"scripts": {`,
        'right',
        `\n\t"lint": "eslint --ext .js,.jsx src",`
      )
    })
  }
}


module.exports = ImportEslintForReact
