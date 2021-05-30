require("module-alias/register"); //注册module-alias
const {
  addStringContext,
  addFirstLineContext,
  addItemInPackageJson,
} = require("@/core/context-handle");
const npmPackageVersion = require("@/configs/npmPackageVersion");

/**
 * 指令【导入redux-thunk中间件】
 * 依赖redux
 */
class ImportReduxThunk extends require("./_instruction") {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor(props) {
    super(props);
    this.run(function () {
      addFirstLineContext(
        "../output/src/store/index.js",
        "import thunk from 'redux-thunk';\n"
      );
      addStringContext(
        "../output/src/store/index.js",
        "applyMiddleware(",
        "right",
        "thunk,"
      );
      addItemInPackageJson("dependencies", {
        "redux-thunk": npmPackageVersion["redux-thunk"],
      });
    });
  }
}

module.exports = ImportReduxThunk;
