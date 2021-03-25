const CreatePageA = require('./createPageA')
const CreatePageB = require('./createPageB')
const CreatePageC = require('./createPageC')
const CreatePage404 = require('./createPage404')
const InitIbagReact = require('./initIbagReact')
const CreateDirPage = require('./createDirPage')
const CreateDirRouter = require('./createDirRouter')
const ImportReactRouterDom = require('./importReactRouterDom')


//测试，要看到依赖项的依次调用

// new CreatePageA()
// new CreatePageB()
// new CreatePageC()
new CreatePage404()
// new InitIbagReact()
// new CreateDirPage()
// new CreateDirRouter()
// new ImportReactRouterDom()
