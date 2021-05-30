require("module-alias/register"); //注册module-alias
const { modify } = require("@/core/config-transform");

/**
 * 指令【创建目录page】
 */
class CreateDirPage extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, ["output", ["src", ["pages"]]]);
    });
  }
}

module.exports = CreateDirPage;
