require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const createFileSagasJS = [
  "store",
  {
    "filename": "sagas",
    "extension": "js",
    "context": "import { put, takeEvery } from 'redux-saga/effects'\n\n// worker Saga : 将在 ACTION_TYPE_NAME action 被 dispatch 时调用\nfunction* fetchUser(action) {\n  yield put({type: 'ACTION_TYPE_NAME'})\n}\n\n/*\n  在每个 `ACTION_TYPE_NAME` action 被 dispatch 时调用 fetchUser\n  允许并发（译注：即同时处理多个相同的 action）\n*/\nfunction* mySaga() {\n  yield takeEvery('ACTION_TYPE_NAME', fetchUser);\n}\n\n/*\n  也可以使用 takeLatest\n\n  不允许并发，dispatch 一个 `ACTION_TYPE_NAME` action 时，\n  如果在这之前已经有一个 `ACTION_TYPE_NAME` action 在处理中，\n  那么处理中的 action 会被取消，只会执行当前的\n*/\n// function* mySaga() {\n//   yield takeLatest(\"ACTION_TYPE_NAME\", fetchUser);\n// }\n\nexport default mySaga;\n"
  }
]
/**
 * 指令【导入redux-saga中间件】
 * 依赖redux
 */
class ImportReduxSaga extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      console.log('modify',modify);
      modify(null,[
        'output',
        [
          'src',
          createFileSagasJS
        ]
      ])
      addFirstLineContext(
        '../output/src/store/index.js',
        'import createSagaMiddleware from \'redux-saga\'\n' +
        'import mySaga from \'./sagas\'\n'
      )
      addStringContext(
        '../output/src/store/index.js',
        'const store= createStore',
        'left',
        '// create the saga middleware\n' +
        'const sagaMiddleware = createSagaMiddleware()\n'
      )
      addStringContext(
        '../output/src/store/index.js',
        'applyMiddleware(',
        'right',
        'sagaMiddleware,'
      )
      addStringContext(
        '../output/src/store/index.js',
        'export default store',
        'left',
        '// then run the saga\n' +
        'sagaMiddleware.run(mySaga)\n'
      )
      addItemInPackageJson(
        'dependencies',
        {
          "redux-saga": npmPackageVersion["redux-saga"]
        }
      )
    })
  }
}


module.exports = ImportReduxSaga
