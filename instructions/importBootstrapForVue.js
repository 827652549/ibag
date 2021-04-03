require('module-alias/register')//注册module-alias
const fs = require('fs')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为vue导入bootstrap和bootstrap-vue】
 */
class ImportBootstrapForVue extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'dependencies',
        {
          "bootstrap": npmPackageVersion["bootstrap"],
          "bootstrap-vue": npmPackageVersion["bootstrap-vue"]
        }
      )
      addFirstLineContext(
        '../output/src/main.js',
        `import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'\n`
      )
      addStringContext(
        '../output/src/main.js',
        'new Vue({',
        'left',
        `Vue.use(BootstrapVue)\n`
      )
      //当App.js里有欢迎时，引入bootstrap（router会改变目录结构）
      spliceStringContext(
        '../output/src/App.vue',
        'ibag',
        `<b-badge variant='secondary'>ibag</b-badge>`
      )
      //当output/src/pages/Home/index.vue时，引入bootstrap
      if (fs.existsSync('../output/src/pages/Home/index.vue')){
        spliceStringContext(
          '../output/src/pages/Home/index.vue',
          'ibag',
          `<b-badge variant='secondary'>ibag</b-badge>`
        )
      }

    })
  }
}


module.exports = ImportBootstrapForVue
