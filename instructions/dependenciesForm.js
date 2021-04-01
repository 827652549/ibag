const CreateDirPage = require('./createDirPage')
const CreateDirRouter = require('./createDirRouter')
const InitIbagReact = require('./initIbagReact')
const CreatePageA = require('./createPageA')
const CreatePageB = require('./createPageB')
const CreatePageC = require('./createPageC')
const CreatePage404 = require('./createPage404')
const ImportReactRouterDom = require('./importReactRouterDom')
const ImportReactRedux = require('./importReactRedux')
const ImportReduxThunk = require('./importReduxThunk')
const ImportReduxSaga = require('./importReduxSaga')
const ImportImmutable = require('./importImmutable')
const ImportReduxImmutable = require('./importReduxImmutable')

const InitIbagVue = require('./initIbagVue')
const ImportVueRouter = require('./importVueRouter')
const ImportBabelForVue = require('./importBabelForVue')
const ImportEslintForVue = require('./importEslintForVue')



//依赖关系，属性名代表源指令，值代表依赖指令，如果需要执行源指令，需要执行依赖指令
module.exports = {
  "_instruction":[],
  "InitIbagReact":[],
  "CreateDirPage":[InitIbagReact],
  "CreateDirRouter":[CreateDirPage],
  "CreatePageA":[CreateDirPage],
  "CreatePageB":[CreateDirPage],
  "CreatePageC":[CreateDirPage],
  "CreatePage404":[ImportReactRouterDom],
  "ImportReactRouterDom":[CreateDirRouter,CreatePageA,CreatePageB,CreatePageC],
  "ImportReactRedux":[ImportReactRouterDom],
  "ImportReduxThunk":[ImportReactRedux],
  "ImportReduxSaga":[ImportReactRedux],
  "ImportImmutable":[InitIbagReact],
  "ImportReduxImmutable":[ImportReactRedux],

  "InitIbagVue":[],
  "ImportVueRouter":[InitIbagVue],
  "ImportBabelForVue":[InitIbagVue],
  "ImportEslintForVue":[InitIbagVue],

}
