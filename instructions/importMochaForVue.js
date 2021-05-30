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
  "tests",
  [
    "unit",
    {
      filename: "example",
      extension: "spec.js",
      context:
        "import { expect } from 'chai'\ndescribe('computation', () => {\n  it('1+1=?', () => {\n    expect(1+1).to.be.a('number',2)\n  })\n})\n",
    },
  ],
];
/**
 * 指令【为vue导入mocha】
 */
class ImportMochaForVue extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, ["output", createFile]);
      addItemInPackageJson("devDependencies", {
        "@vue/cli-plugin-unit-mocha":
          npmPackageVersion["@vue/cli-plugin-unit-mocha"],
        "@vue/test-utils": npmPackageVersion["@vue/test-utils"],
        chai: npmPackageVersion["chai"],
      });
      addItemInPackageJson("eslintConfig", {
        env: {
          mocha: true,
        },
      });
      addItemInPackageJson("scripts", {
        "test:unit": "vue-cli-service test:unit",
      });
    });
  }
}

module.exports = ImportMochaForVue;
