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
 * 指令【为vue导入axios】
 */
class ImportAxiosForVue extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      addItemInPackageJson("dependencies", {
        axios: npmPackageVersion["axios"],
        "vue-axios": npmPackageVersion["vue-axios"],
      });
      addFirstLineContext(
        "../output/src/main.js",
        `import axios from 'axios'
import VueAxios from 'vue-axios'\n`
      );
      addStringContext(
        "../output/src/main.js",
        `new Vue({`,
        "left",
        "Vue.use(VueAxios,axios)\n"
      );
    });
  }
}

module.exports = ImportAxiosForVue;
