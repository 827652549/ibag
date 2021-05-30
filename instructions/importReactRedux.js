require("module-alias/register"); //注册module-alias
const { modify } = require("@/core/config-transform");
const {
  spliceStringContext,
  addStringContext,
  addFirstLineContext,
  addItemInPackageJson,
} = require("@/core/context-handle");
const npmPackageVersion = require("@/configs/npmPackageVersion");

const addDirGlobalStore = [
  "store",
  {
    filename: "index",
    extension: "js",
    context:
      "import {createStore,applyMiddleware} from 'redux';\nimport { composeWithDevTools } from 'redux-devtools-extension';\nimport reducer from './reducer';\nconst store= createStore(reducer,composeWithDevTools(\n  applyMiddleware()\n));\n\nexport default store;\n",
  },
  {
    filename: "reducer",
    extension: "js",
    context:
      "import {reducer as ReducerA} from '../pages/A/store';\nimport {reducer as ReducerB} from '../pages/B/store';\nimport {reducer as ReducerC} from '../pages/C/store';\nimport {combineReducers} from 'redux';\n\nexport default combineReducers({\n  ReducerA,\n  ReducerB,\n  ReducerC\n});\n",
  },
];
/**
 * 指令【导入React-redux】
 * 顺便引入redux，redux-devtools-extension
 * 整理代码结构，并使store跟随组件目录，组织统一的store
 */
class ImportReactRedux extends require("./_instruction") {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor(props) {
    super(props);
    this.run(function () {
      //增加全局store
      modify(null, ["output", ["src", addDirGlobalStore]]);
      //修改A的index.js和store
      ChangeFileABC("A");
      //修改B的index.js和store
      ChangeFileABC("B");
      //修改C的index.js和store
      ChangeFileABC("C");

      //修改index
      addFirstLineContext(
        "../output/src/router/index.js",
        `import { Provider } from 'react-redux'
import store from '../store'\n`
      );

      addStringContext(
        "../output/src/router/index.js",
        `<BrowserRouter basename="/">`,
        `left`,
        `<Provider store={store}>
      `
      );
      addStringContext(
        "../output/src/router/index.js",
        `</BrowserRouter>`,
        `right`,
        `
</Provider>
`
      );
      addItemInPackageJson("dependencies", {
        redux: npmPackageVersion["redux"],
        "react-redux": npmPackageVersion["react-redux"],
        "redux-devtools-extension":
          npmPackageVersion["redux-devtools-extension"],
      });
    });
  }
}

/**
 * 修改组件A、B、C的index.js和创建子store目录
 * @{string} component
 * @constructor
 */
function ChangeFileABC(component) {
  //需要添加A、B、C的store目录
  const addDirStore = [
    "store",
    {
      filename: "actionCreators",
      extension: "js",
      context:
        "import * as constants from './constants';\n\n//action1\nexport const changeNum1 = (num) => ({\n    type: constants.CHANGE_NUM_1,\n    num1:num\n});\n\n//action2\nexport const changeNum2 = (num) => ({\n  type: constants.CHANGE_NUM_2,\n  num2:num\n});\n\n",
    },
    {
      filename: "constants",
      extension: "js",
      context:
        "export const CHANGE_NUM_1 = Symbol()\nexport const CHANGE_NUM_2 = Symbol()\n",
    },
    {
      filename: "index",
      extension: "js",
      context:
        "import reducer from './reducer';\nimport * as constants from './constants';\nimport * as actionCreators from './actionCreators'\n\nexport {reducer,constants,actionCreators};",
    },
    {
      filename: "reducer",
      extension: "js",
      context:
        "import * as constants from './constants'\nconst defaultState = {\n  num1: 0,\n  num2: 0,\n}\n\nconst reducer = (state = defaultState, action) => {\n  let newState = state\n  switch (action.type) {\n    case constants.CHANGE_NUM_1:\n      newState.num1 = action.num1\n      break\n    case constants.CHANGE_NUM_2:\n      newState.num2 = action.num2\n      break\n    default:\n      return state\n  }\n  return newState\n}\nexport default reducer\n",
    },
  ];

  //创建A的store目录及文件
  modify(null, ["output", ["src", ["pages", [component, addDirStore]]]]);
  addFirstLineContext(
    `../output/src/pages/${component}/index.js`,
    `import {useEffect} from 'react'
import {actionCreators} from './store'
import {connect} from "react-redux";\n`
  );
  addStringContext(
    `../output/src/pages/${component}/index.js`,
    `function ${component}(props) {`,
    `right`,
    `
      useEffect(()=>{
    const { handleChangeNum1,handleChangeNum2} = props;
    handleChangeNum1(1)
    handleChangeNum2(2)
  })`
  );

  spliceStringContext(
    `../output/src/pages/${component}/index.js`,
    `export default ${component};`,
    `const mapStateToProps = (state) => {
  return {
   name:state.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeNum1(num) {
      const action = actionCreators.changeNum1(num);
      dispatch(action);
    },
    handleChangeNum2(num) {
      const action = actionCreators.changeNum2(num);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(${component});`
  );
}

module.exports = ImportReactRedux;
