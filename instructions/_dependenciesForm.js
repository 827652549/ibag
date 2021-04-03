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
const ImportEslintForReact = require('./importEslintForReact')
const ImportBootstrapForReact = require('./importBootstrapForReact')
const ImportAntDesignForReact = require('./importAntDesignForReact')
const ImportMaterialForReact = require('./importMaterialForReact')
const ImportJestForReact = require('./importJestForReact')

const InitIbagVue = require('./initIbagVue')
const ImportVueRouter = require('./importVueRouter')
const ImportBabelForVue = require('./importBabelForVue')
const ImportEslintForVue = require('./importEslintForVue')
const ImportVuex = require('./importVuex')
const ImportBootstrapForVue = require('./importBootstrapForVue')
const ImportAntDesignForVue = require('./importAntDesignForVue')
const ImportMaterialForVue = require('./importMaterialForVue')
const ImportJestForVue = require('./importJestForVue')
const ImportMochaForVue = require('./importMochaForVue')





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
  "ImportEslintForReact":[InitIbagReact],
  "ImportBootstrapForReact":[InitIbagReact],
  "ImportAntDesignForReact":[InitIbagReact],
  "ImportMaterialForReact":[InitIbagReact],
  "ImportJestForReact":[InitIbagReact],


  "InitIbagVue":[],
  "ImportVueRouter":[InitIbagVue],
  "ImportBabelForVue":[InitIbagVue],
  "ImportEslintForVue":[InitIbagVue],
  "ImportVuex":[InitIbagVue],
  "ImportBootstrapForVue":[InitIbagVue],
  "ImportAntDesignForVue":[InitIbagVue],
  "ImportMaterialForVue":[InitIbagVue],
  "ImportJestForVue":[InitIbagVue],
  "ImportMochaForVue":[InitIbagVue]
}
