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

const createFile = [
  "test",
  {
    filename: "test",
    extension: "js",
    context:
      "const expect = require('chai').expect;\n\ndescribe('computation', function() {\n  it('1+1=2', function() {\n    expect(1+1).to.be.equal(2);\n  });\n});\n",
  },
];
/**
 * 指令【为react导入mocha】
 */
class ImportMochaForReact extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, ["output", createFile]);
      addItemInPackageJson("devDependencies", {
        mocha: npmPackageVersion["mocha"],
        chai: npmPackageVersion["chai"],
      });
      addItemInPackageJson("eslintConfig", {
        env: {
          mocha: true,
        },
      });
      addItemInPackageJson("scripts", {
        test: "./node_modules/mocha/bin/mocha --recursive",
      });
    });
  }
}

module.exports = ImportMochaForReact;
