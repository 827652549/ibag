require("module-alias/register"); //注册module-alias
const { modify } = require("@/core/config-transform");
const {
  spliceStringContext,
  addStringContext,
  addFirstLineContext,
  addItemInPackageJson,
} = require("@/core/context-handle");
const npmPackageVersion = require("@/configs/npmPackageVersion");

/**
 * 指令【为react导入antd】
 */
class ImportAntDesignForReact extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      addItemInPackageJson("dependencies", {
        antd: npmPackageVersion["antd"],
      });
      addFirstLineContext(
        "../output/src/index.js",
        `import 'antd/dist/antd.css'\n`
      );
      addFirstLineContext(
        "../output/src/App.js",
        `import { Spin } from 'antd'\n`
      );
      spliceStringContext(
        "../output/src/App.js",
        "ibag",
        `ibag <Spin size='large'/>`
      );
    });
  }
}

module.exports = ImportAntDesignForReact;
