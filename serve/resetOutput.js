const rimraf = require("rimraf");
const fs = require("fs");

require("module-alias/register");//注册module-alias
const globalConfig = require("../configs/global.json");
const globalConfigInit = require("../configs/_global-init.json");
const { spliceStringContext, addStringContext, addFirstLineContext, addItemInPackageJson } = require(
  "@/core/context-handle");

const ncu = require("npm-check-updates");
// const children_process
const child_process = require("child_process");
const process = require("process");
const path = require("path");

const CreatePageA = require("../instructions/createPageA");
const CreatePageB = require("../instructions/createPageB");
const CreatePageC = require("../instructions/createPageC");
const CreatePage404ForReact = require("../instructions/createPage404ForReact");
const InitIbagReact = require("../instructions/initIbagReact");
const CreateDirPage = require("../instructions/createDirPage");
const CreateDirRouter = require("../instructions/createDirRouter");
const ImportReactRouterDom = require("../instructions/importReactRouterDom");
const ImportReactRedux = require("../instructions/importReactRedux");
const ImportReduxThunk = require("../instructions/importReduxThunk");
const ImportReduxSaga = require("../instructions/importReduxSaga");
const ImportReduxImmutable = require("../instructions/importReduxImmutable");
const ImportEslintForReact = require("../instructions/importEslintForReact");
const ImportBootstrapForReact = require(
  "../instructions/importBootstrapForReact");
const ImportAntDesignForReact = require(
  "../instructions/importAntDesignForReact");
const ImportMaterialForReact = require(
  "../instructions/importMaterialForReact");
const ImportJestForReact = require("../instructions/importJestForReact");
const ImportMochaForReact = require("../instructions/importMochaForReact");
const ImportAxiosForReact = require("../instructions/importAxiosForReact");

const InitIbagVue = require("../instructions/initIbagVue");
const ImportVueRouter = require("../instructions/importVueRouter");
const ImportBabelForVue = require("../instructions/importBabelForVue");
const ImportEslintForVue = require("../instructions/importEslintForVue");
const ImportVuex = require("../instructions/importVuex");
const ImportBootstrapForVue = require("../instructions/importBootstrapForVue");
const ImportAntDesignForVue = require("../instructions/importAntDesignForVue");
const ImportMaterialForVue = require("../instructions/importMaterialForVue");
const ImportJestForVue = require("../instructions/importJestForVue");
const ImportMochaForVue = require("../instructions/importMochaForVue");
const ImportAxiosForVue = require("../instructions/importAxiosForVue");
const CreatePage404ForVue = require("../instructions/createPage404ForVue");

const ImportLodash = require("../instructions/importLodash");
const ImportCypress = require("../instructions/importCypress");
const ImportNightWatch = require("../instructions/importNightWatch");

// 生成某目录：
// require('module-alias/register')//注册module-alias
// const { directory2json } = require('@/core/config-transform')
// let outJson = directory2json('../output/src/pages')
// fs.writeFileSync('./config.json',JSON.stringify(outJson))
// console.log(outJson)


// console.log(child_process.execSync('npm i'))

// addItemInPackageJson('devDependencies',{a:1})

/**
 * 将所有的命令模块依次合并到Set中，供指定调用
 */
const mergeAllInstructions = () => {
  const instructionsMap = new Map();
  //公共
  instructionsMap.set("CreateDirPage", CreateDirPage);

  // React项目
  instructionsMap.set("CreatePageA", CreatePageA);
  instructionsMap.set("CreatePageB", CreatePageB);
  instructionsMap.set("CreatePageC", CreatePageC);
  instructionsMap.set("CreatePage404ForReact", CreatePage404ForReact);
  instructionsMap.set("InitIbagReact", InitIbagReact);
  instructionsMap.set("CreateDirRouter", CreateDirRouter);
  instructionsMap.set("ImportReactRouterDom", ImportReactRouterDom);
  instructionsMap.set("ImportReactRedux", ImportReactRedux);
  instructionsMap.set("ImportReduxThunk", ImportReduxThunk);
  instructionsMap.set("ImportReduxImmutable", ImportReduxImmutable);
  instructionsMap.set("ImportReduxSaga", ImportReduxSaga);
  instructionsMap.set("ImportEslintForReact", ImportEslintForReact);
  instructionsMap.set("ImportBootstrapForReact", ImportBootstrapForReact);
  instructionsMap.set("ImportEslintForReact", ImportEslintForReact);
  instructionsMap.set("ImportAntDesignForReact", ImportAntDesignForReact);
  instructionsMap.set("ImportMaterialForReact", ImportMaterialForReact);
  instructionsMap.set("ImportJestForReact", ImportJestForReact);
  instructionsMap.set("ImportMochaForReact", ImportMochaForReact);
  instructionsMap.set("ImportAxiosForReact", ImportAxiosForReact);
  instructionsMap.set("ImportMochaForReact", ImportMochaForReact);
  instructionsMap.set("ImportMochaForReact", ImportMochaForReact);

  //Vue项目
  instructionsMap.set("InitIbagVue", InitIbagVue);
  instructionsMap.set("ImportVueRouter", ImportVueRouter);
  instructionsMap.set("CreatePage404ForVue", CreatePage404ForVue);
  instructionsMap.set("ImportBabelForVue", ImportBabelForVue);
  instructionsMap.set("ImportEslintForVue", ImportEslintForVue);
  instructionsMap.set("ImportVuex", ImportVuex);
  instructionsMap.set("ImportBootstrapForVue", ImportBootstrapForVue);
  instructionsMap.set("ImportAntDesignForVue", ImportAntDesignForVue);
  instructionsMap.set("ImportMaterialForVue", ImportMaterialForVue);
  instructionsMap.set("ImportJestForVue", ImportJestForVue);
  instructionsMap.set("ImportMochaForVue", ImportMochaForVue);
  instructionsMap.set("ImportAxiosForVue", ImportAxiosForVue);
  instructionsMap.set("ImportLodash", ImportLodash);
  instructionsMap.set("ImportCypress", ImportCypress);
  instructionsMap.set("ImportNightWatch", ImportNightWatch);

  return instructionsMap;
};

/**
 * 将npm依赖包更新到最新版
 * @returns {Promise<void>}
 */
const upgraded = async () => {
  await ncu.run({
    packageFile: path.normalize(__dirname + "/../output/package.json"),
    upgrade: true,
    // Pass any cli option.
    // Defaults:
    jsonUpgraded: true,
    silent: true
  });
};

const run = (globalConfig, fun) => {
  //判断Global到全局*配置
  if (globalConfig.isAllNpmPackageVersionLatest) {
    upgraded().then(fun);
  } else {
    fun();
  }
};

module.exports = function(config) {
  //重置清空output文件夹
  rimraf.sync(path.normalize(__dirname + "/../output"));
  fs.mkdirSync(path.normalize(__dirname + "/../output"));
  fs.writeFileSync(
    path.normalize(__dirname + "/../instructions/_haveExeced.json"),
    JSON.stringify([]),
    "utf8");

  //将拓展配置写入全局配置@/configs/global.json中
  globalConfig.author = config.extends.author;
  globalConfig.description = config.extends.description;
  globalConfig.name = config.extends.name;
  globalConfig.license = config.extends.license;

  fs.writeFileSync(path.normalize(__dirname + "/../configs/global.json"),
    JSON.stringify(globalConfig),
    "utf8");

  const instructionsMap = mergeAllInstructions();

  //根据前端请求依次调用对应的指令
  config.instructions.forEach(e => {
    let currIns = instructionsMap.get(e);
    new currIns();
  });

  child_process.execSync('npm run prettier',{
    cwd:path.normalize(__dirname+"/../")
  })
  console.log('代码已格式化！')
  console.log('Code formatted！')

  //todo：初始化packege.json之后需要做的事情
  run(globalConfig, function() {
    //todo:运行更新完依赖后，需要做的事情：如
    console.log("ibag已为您创建好您的初始化项目。");
    console.log("ibag has created your initialization project.");

    //初始化global.json为默认配置
    fs.writeFileSync(path.normalize(__dirname + "/../configs/global.json"),
      JSON.stringify(globalConfigInit),
      "utf8");
    //执行程序的路径
    let cwd = process.cwd();
    // console.log("执行程序的路径", cwd);

    //先删除已存在的output目录
    rimraf.sync(path.normalize(cwd + "/output"));

    //将output输出到程序执行位置
    switch (process.platform) {
      case "darwin":
      case "linux":
        // //MacOS,IOS etc:
        child_process.execSync(
          // `rm -rf ${cwd+path.normalize('/output')} && cp -R ${path.normalize(__dirname + "/../output")} ${cwd}`,
          // 为了完成替换，删除再拷贝，是最好的形式。但是rm太危险了，以防万一暂不使用
          `cp -R ${path.normalize(__dirname + "/../output")} ${cwd}`,
          {
            stdio: "inherit"
          }
        )
        break;
      case "win32":
        console.log('win32：',`echo d | xcopy ${path.normalize(__dirname + "/../output")} ${path.normalize(cwd+'/output')} /E`);
        //将output输出到程序执行位置
        child_process.execSync(
          `echo d | xcopy ${path.normalize(__dirname + "/../output")} ${path.normalize(cwd+'/output')} /E`,
          {
            stdio: "inherit"
          });
        break;
      default:
        throw new Error("系统判断失败，拷贝命令错误");
    }
    console.log(`请检查${path.normalize(cwd+'/output')}目录，请使用cd进入其中～`);
    console.log(`Please check ${path.normalize(cwd+'/output')}，and cd in it～`);
  });

};
