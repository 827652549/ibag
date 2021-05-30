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
 * 指令【为vue导入material UI】
 */
class ImportMaterialForVue extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      addItemInPackageJson("dependencies", {
        "vue-material": npmPackageVersion["vue-material"],
      });
      addFirstLineContext(
        "../output/src/main.js",
        `import vueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'\n`
      );
      addStringContext(
        "../output/src/main.js",
        "new Vue({",
        "left",
        `Vue.use(vueMaterial)\n`
      );
      //当App.js里有欢迎时，引入bootstrap（router会改变目录结构）
      spliceStringContext(
        "../output/src/App.vue",
        "ibag",
        `<md-avatar class="md-avatar-icon md-large md-accent">
    <md-ripple>ibag</md-ripple>
  </md-avatar>`
      );
      //当output/src/pages/Home/index.vue时，引入bootstrap
      if (fs.existsSync("../output/src/pages/Home/index.vue")) {
        spliceStringContext(
          "../output/src/pages/Home/index.vue",
          "ibag",
          `<md-avatar class="md-avatar-icon md-large md-accent">
    <md-ripple>ibag</md-ripple>
  </md-avatar>`
        );
      }
    });
  }
}

module.exports = ImportMaterialForVue;
