const fs = require('fs')
require('module-alias/register')//注册module-alias
const globalConfig = require('../configs/global')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')

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
const ImportAntDesignForReact = require('./importAntDesignForReact')
const ImportMaterialForReact = require('./importMaterialForReact')
const ImportJestForReact = require('./importJestForReact')


// const InitIbagVue = require('./initIbagVue')
// const ImportVueRouter = require('./importVueRouter')
// const ImportBabelForVue = require('./importBabelForVue')
// const ImportEslintForVue = require('./importEslintForVue')
// const ImportVuex = require('./importVuex')
// const ImportBootstrapForVue = require('./importBootstrapForVue')
// const ImportAntDesignForVue = require('./importAntDesignForVue')
// const ImportMaterialForVue = require('./importMaterialForVue')
// const ImportJestForVue = require('./importJestForVue')
const ImportMochaForVue = require('./importMochaForVue')


// 生成某目录：
// require('module-alias/register')//注册module-alias
// const { directory2json } = require('@/core/config-transform')
// let outJson = directory2json('../my-vue-app-jest/tests')
// fs.writeFileSync('./config.json',JSON.stringify(outJson))
// console.log(outJson)

//todo：(一)生成package.json


// //公共
// new CreateDirPage()

// React项目
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
// new ImportBootstrapForReact()
// new ImportAntDesignForReact()
// new ImportMaterialForReact()
// new ImportJestForReact()


//Vue项目
// new InitIbagVue()
// new ImportVueRouter()
// new ImportBabelForVue()
// new ImportEslintForVue()
// new ImportVuex()
// new ImportBootstrapForVue()
// new ImportAntDesignForVue()
// new ImportMaterialForVue()
// new ImportJestForVue()
new ImportMochaForVue()



// console.log(child_process.execSync('npm i'))

// addItemInPackageJson('devDependencies',{a:1})

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
  console.log('请耐心等待……')
  //删除空依赖@junking/empty，添加这个包是为了避免ibag执行构建项目的过程中出现的package.json语法格式的异常。
  // child_process.execSync('npm uni -D @junking/empty --prefix ../output')
  //todo:运行更新完依赖后，需要做的事情：如
  console.log('ibag已为您创建好您的初始化项目。')
})

