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
  "output",
  [
    "e2e",
    {
      filename: "ibag",
      extension: "js",
      context:
        "module.exports = {\n  'visit ibag': function (browser) {\n    browser\n    .url('https://github.com/827652549/ibag')\n    .waitForElementVisible('body', 1000)\n    .pause(3000)\n    .end();\n  }\n};\n",
    },
  ],
  {
    filename: "nightwatch",
    extension: "conf.js",
    context:
      "module.exports = {\n  src_folders: ['e2e'],\n  output_folder: 'e2e-output',\n  custom_assertions_path: [],\n  page_objects_path: '',\n  globals_path: '',\n\n  selenium: {\n    start_process: true,\n    server_path: require('selenium-server').path,\n    host: '127.0.0.1',\n    port: 5555,\n    cli_args: {\n      'webdriver.chrome.driver': require('chromedriver').path\n    }\n  },\n\n  test_settings: {\n    default: {\n      selenium_port: 5555,\n      selenium_host: 'localhost',\n      silent: true,\n      globals: {\n        devServerURL: 'http://localhost:' + (process.env.PORT || 1111)\n      }\n    },\n\n    chrome: {\n      desiredCapabilities: {\n        browserName: 'chrome',\n        javascriptEnabled: true,\n        acceptSslCerts: true\n      }\n    },\n\n    firefox: {\n      desiredCapabilities: {\n        browserName: 'firefox',\n        javascriptEnabled: true,\n        acceptSslCerts: true\n      }\n    }\n  }\n}\n\n",
  },
];
/**
 * 指令【导入nightwatch】
 */
class ImportNightWatch extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, createFile);

      addItemInPackageJson("devDependencies", {
        chromedriver: npmPackageVersion["chromedriver"],
        nightwatch: npmPackageVersion["nightwatch"],
        "selenium-server": npmPackageVersion["selenium-server"],
      });
      addItemInPackageJson("scripts", {
        e2e: "nightwatch --env chrome",
      });
    });
  }
}

module.exports = ImportNightWatch;
