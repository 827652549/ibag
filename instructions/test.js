const fs = require('fs')
const globalConfig = require('../configs/global')
const ncu = require('npm-check-updates')
// const children_process
const child_process = require('child_process')

const CreatePageA = require('./createPageA')
const CreatePageB = require('./createPageB')
const CreatePageC = require('./createPageC')
const CreatePage404 = require('./createPage404')
const InitIbagReact = require('./initIbagReact')
const CreateDirPage = require('./createDirPage')
const CreateDirRouter = require('./createDirRouter')
const ImportReactRouterDom = require('./importReactRouterDom')
const ImportReactRedux = require('./importReactRedux')
const ImportReduxThunk = require('./importReduxThunk')
const ImportReduxSaga = require('./importReduxSaga')
const ImportImmutable = require('./importImmutable')
const ImportReduxImmutable = require('./importReduxImmutable')
const ImportEslintForReact = require('./importEslintForReact')
const ImportBootstrapForReact = require('./importBootstrapForReact')

const InitIbagVue = require('./initIbagVue')
const ImportVueRouter = require('./importVueRouter')
const ImportBabelForVue = require('./importBabelForVue')
const ImportEslintForVue = require('./importEslintForVue')
const ImportVuex = require('./importVuex')



// 生成某目录：
// require('module-alias/register')//注册module-alias
// const { directory2json } = require('@/core/config-transform')
// let outJson = directory2json('../my-vue-app-vuex')
// fs.writeFileSync('./config.json',JSON.stringify(outJson))
// console.log(outJson)

//todo：(一)生成package.json


//公共
// new CreateDirPage()
//
// // React项目
// new CreatePageA()
// new CreatePageB()
// new CreatePageC()
// new CreatePage404()
// new InitIbagReact()
// new CreateDirRouter()
// new ImportReactRouterDom()
// new ImportReactRedux()
// new ImportReduxThunk()
// new ImportReduxSaga()
// new ImportImmutable()
// new ImportReduxImmutable()
// new ImportEslintForReact()
new ImportBootstrapForReact()


//Vue项目
// new InitIbagVue()
// new ImportVueRouter()
// new ImportBabelForVue()
// new ImportEslintForVue()
// new ImportVuex()

// console.log(child_process.execSync('npm i'))

/**
 * 将npm依赖包更新到最新版
 * @returns {Promise<void>}
 */
const upgraded = async ()=>{
  console.log('npm依赖包更新到最新版：',await ncu.run({
    packageFile:'../output/package.json',
    upgrade:true,
    // Pass any cli option.
    // Defaults:
    jsonUpgraded: true,
    silent: true
  }))
}

const run = (globalConfig,fun)=>{
  //判断Global到全局*配置
  if (globalConfig.isAllNpmPackageVersionLatest){
    upgraded().then(fun)
  }else {
    fun()
  }
}

//todo：初始化packege.json之后需要做的事情
run(globalConfig,function () {
  //todo:运行更新完依赖后，需要做的事情：如
  console.log('ibag已为您创建好您的初始化项目。')
})
