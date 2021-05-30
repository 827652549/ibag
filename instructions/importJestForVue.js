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
        "describe('computation', () => {\n  it('1+1=?', () => {\n    expect(1+1).toBe(2)\n  })\n})\n",
    },
  ],
];
/**
 * 指令【为vue导入jest】
 */
class ImportJestForVue extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, ["output", createFile]);
      addItemInPackageJson("devDependencies", {
        "@vue/cli-plugin-unit-jest":
          npmPackageVersion["@vue/cli-plugin-unit-jest"],
        "@vue/test-utils": npmPackageVersion["@vue/test-utils"],
      });
      addItemInPackageJson("jest", {
        preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
      });
      addItemInPackageJson("eslintConfig", {
        env: {
          jest: true,
        },
      });
      addItemInPackageJson("scripts", {
        "test:unit": "vue-cli-service test:unit",
      });
    });
  }
}

module.exports = ImportJestForVue;
