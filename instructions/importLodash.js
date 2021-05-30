require("module-alias/register"); //注册module-alias
const fs = require("fs"); //注册module-alias
const { modify } = require("@/core/config-transform");
const {
  spliceStringContext,
  addStringContext,
  addFirstLineContext,
  addItemInPackageJson,
} = require("@/core/context-handle");
const npmPackageVersion = require("@/configs/npmPackageVersion");

/**
 * 指令【导入lodash】
 */
class ImportLodash extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      addItemInPackageJson("dependencies", {
        lodash: npmPackageVersion["lodash"],
      });
    });
  }
}

module.exports = ImportLodash;
