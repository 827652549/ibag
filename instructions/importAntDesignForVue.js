require('module-alias/register')//注册module-alias
const fs = require('fs')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

/**
 * 指令【为vue导入antd】
 */
class ImportAntDesignForVue extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      addItemInPackageJson(
        'dependencies',
        {
          "ant-design-vue": npmPackageVersion["ant-design-vue"]
        }
      )
      addFirstLineContext(
        '../output/src/main.js',
        `import antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"\n`
      )
      addStringContext(
        '../output/src/main.js',
        'new Vue({',
        'left',
        `Vue.use(antd)\n`
      )
      //当App.js里有欢迎时，引入bootstrap（router会改变目录结构）
      spliceStringContext(
        '../output/src/App.vue',
        'ibag',
        `ibag<a-spin size="large" />`
      )
      //当output/src/pages/Home/index.vue时，引入bootstrap
      if (fs.existsSync('../output/src/pages/Home/index.vue')){
        spliceStringContext(
          '../output/src/pages/Home/index.vue',
          'ibag',
          `ibag<a-spin size="large" />`
        )
      }

    })
  }
}


module.exports = ImportAntDesignForVue
