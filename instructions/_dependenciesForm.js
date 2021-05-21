//定义了所有命令的依赖关系
const CreateDirPage = require('./createDirPage')
const CreateDirRouter = require('./createDirRouter')
const InitIbagReact = require('./initIbagReact')
const CreatePageA = require('./createPageA')
const CreatePageB = require('./createPageB')
const CreatePageC = require('./createPageC')
const CreatePage404ForReact = require('./createPage404ForReact')
const ImportReactRouterDom = require('./importReactRouterDom')
const ImportReactRedux = require('./importReactRedux')
const ImportReduxThunk = require('./importReduxThunk')
const ImportReduxSaga = require('./importReduxSaga')
const ImportReduxImmutable = require('./importReduxImmutable')
const ImportEslintForReact = require('./importEslintForReact')
const ImportBootstrapForReact = require('./importBootstrapForReact')
const ImportAntDesignForReact = require('./importAntDesignForReact')
const ImportMaterialForReact = require('./importMaterialForReact')
const ImportJestForReact = require('./importJestForReact')
const ImportMochaForReact = require('./importMochaForReact')
const ImportAxiosForReact = require('./importAxiosForReact')

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
const ImportAxiosForVue = require('./importAxiosForVue')
const CreatePage404ForVue = require('./createPage404ForVue')


const ImportLodash = require('./importLodash')
const ImportCypress = require('./importCypress')
const ImportNightWatch = require('./importNightWatch')





//依赖关系，属性名代表源指令，值代表依赖指令，如果需要执行源指令，需要执行依赖指令
module.exports = {
  "_instruction":[],
  "InitIbagReact":[],
  "CreateDirPage":[InitIbagReact],
  "CreateDirRouter":[CreateDirPage],
  "CreatePageA":[CreateDirPage],
  "CreatePageB":[CreateDirPage],
  "CreatePageC":[CreateDirPage],
  "CreatePage404ForReact":[ImportReactRouterDom],
  "ImportReactRouterDom":[CreateDirRouter,CreatePageA,CreatePageB,CreatePageC],
  "ImportReactRedux":[ImportReactRouterDom],
  "ImportReduxThunk":[ImportReactRedux],
  "ImportReduxSaga":[ImportReactRedux],
  "ImportReduxImmutable":[ImportReactRedux],
  "ImportEslintForReact":[InitIbagReact],
  "ImportBootstrapForReact":[InitIbagReact],
  "ImportAntDesignForReact":[InitIbagReact],
  "ImportMaterialForReact":[InitIbagReact],
  "ImportJestForReact":[InitIbagReact],
  "ImportMochaForReact":[InitIbagReact],
  "ImportAxiosForReact":[InitIbagReact],


  "InitIbagVue":[],
  "ImportVueRouter":[InitIbagVue],
  "CreatePage404ForVue":[ImportVueRouter],
  "ImportBabelForVue":[InitIbagVue],
  "ImportEslintForVue":[InitIbagVue],
  "ImportVuex":[InitIbagVue],
  "ImportBootstrapForVue":[InitIbagVue],
  "ImportAntDesignForVue":[InitIbagVue],
  "ImportMaterialForVue":[InitIbagVue],
  "ImportJestForVue":[InitIbagVue],
  "ImportMochaForVue":[InitIbagVue],
  "ImportAxiosForVue":[InitIbagVue],

  "ImportLodash":[],
  "ImportCypress":[],
  "ImportNightWatch":[]
}
