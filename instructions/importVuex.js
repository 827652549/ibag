require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const addDirGlobalStore = [
  "output",
  [
    "src",
    [
      "store",
      {
        "filename": "index",
        "extension": "js",
        "context": "import Vue from 'vue'\nimport Vuex from 'vuex'\n\nVue.use(Vuex)\n\nexport default new Vuex.Store({\n  state: {\n  },\n  mutations: {\n  },\n  actions: {\n  },\n  modules: {\n  }\n})\n"
      }
    ]
  ]
]

/**
 * 指令【导入vuex】
 */
class ImportVuex extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      //增加全局store
      modify(null,
          addDirGlobalStore
      )
      addFirstLineContext(
        '../output/src/main.js',
        `import store from './store'\n`
      )
      addStringContext(
        '../output/src/main.js',
        `new Vue({`,
        `right`,
        `\nstore,\n`
      )
      addStringContext(
          '../output/package.json',
          `"devDependencies": {`,
          'right',
          `\n\t"@vue/cli-plugin-vuex": "${npmPackageVersion['@vue/cli-plugin-vuex']}",`
      )
      addStringContext(
        '../output/package.json',
        `"dependencies": {`,
        'right',
        `\n\t"vuex": "${npmPackageVersion['vuex']}",`
      )
    })
  }
}

module.exports = ImportVuex
