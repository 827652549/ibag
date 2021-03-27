const fs = require('fs')

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


// 生成某目录：
// require('module-alias/register')//注册module-alias
// const { directory2json } = require('@/core/config-transform')
// let outJson = directory2json('../my-app1/src/store')
// fs.writeFileSync('./config.json',JSON.stringify(outJson))
// console.log(outJson)

//测试，要看到依赖项的依次调用

// new CreatePageA()
// new CreatePageB()
// new CreatePageC()
new CreatePage404()
// new InitIbagReact()
// new CreateDirPage()
// new CreateDirRouter()
// new ImportReactRouterDom()
// new ImportReactRedux()
// new ImportReduxThunk()
// new ImportReduxSaga()
new ImportImmutable()
new ImportReduxImmutable()

