const fs = require("fs");
const path = require("path");
const del = require("del");

/**
 * 转化json时，忽略的文件
 * 将目录名或文件名完整写上去，即可忽略
 */
const ignoreFile = ["node_modules", ".git"];

//从某个配置文件中展开目录
function recovery(dir, json) {
  let dirName = "defaultName";
  json.forEach((e, index) => {
    if (Array.isArray(json) && index === 0) {
      dirName = path.normalize(dir + e);
      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
      }
      return;
    }
    if (Array.isArray(e)) {
      // console.log(path.normalize(dirName)+path.normalize('/'),e[0]);
      recovery(path.normalize(dirName) + path.normalize("/"), e);
    } else {
      fs.writeFileSync(
        path.normalize(dirName + "/" + e.filename + "." + e.extension),
        e.context
      );
    }
  });
}

/**
 * 将文件目录转化表示为json字符串
 * 原理：通过同步深度遍历读取目录
 *
 * 同时支持相对路径和绝对路径作为参数
 *
 * 这种策略不必考虑目睹体积过大导致文件体积过大的情况，初始化项目本身都很小，这个方面可以做一个妥协。
 */
function directory2json(filePath) {
  filePath = path.resolve(filePath);
  //获取当前的目录名
  let strs = filePath.substring(filePath.lastIndexOf(path.normalize("/")) + 1);
  //init json
  const json = [strs];
  //根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  files.forEach(function (filename) {
    //忽略的文件
    if (ignoreFile.includes(filename)) {
      return;
    }
    //获取当前文件的绝对路径
    let filedir = path.join(filePath, filename);
    //根据绝对路径获取文件信息
    const stats = fs.statSync(filedir);
    //如果是文件
    if (stats.isFile()) {
      const name = filename.split(".")[0];
      json.push({
        filename: name,
        extension: filename.substring(filename.indexOf(name) + name.length + 1),
        context: fs.readFileSync(filedir, "utf-8"),
      });
    } else {
      json.push(directory2json(filedir));
    }
  });
  return json;
}

/**
 * 删除指定文件和目录
 * @param filePath 指定源目录
 * @param json 表示删除文件的json
 */
function deleteFiles(filePath, json) {
  //获取在相对于电脑的绝对路径
  filePath = path.resolve(filePath);
  //获取当前的目录名
  let currPath = filePath.substring(
    filePath.lastIndexOf(path.normalize("/")) + 1
  );
  if (currPath === json[0]) {
    //根据规定的格式，如果json的长度大于1，指定删除该目录的文件
    if (json.length > 1) {
      for (let i = 1; i < json.length; i++) {
        if (Array.isArray(json[i])) {
          deleteFiles(path.normalize(filePath + "/" + json[i][0]), json[i]);
        } else {
          // console.log('delete文件: '+filePath+'/'+json[i].filename+'.'+json[i].extension)
          del.sync(
            [
              path.normalize(
                filePath + "/" + json[i].filename + "." + json[i].extension
              ),
            ],
            { force: true }
          );
        }
      }
    } else {
      // console.log('delete目录: '+filePath)
      del.sync([filePath], { force: true });
    }
  } else {
    console.warn(
      `deleteFiles函数的传入路径和表示删除的json配置不符\n${filePath}\n${JSON.stringify(
        json
      )}`
    );
    return;
  }
}

/**
 * 创建指定的文件和目录
 * @param filePath 指定源
 * @param json 表示添加文件的json
 */
function createFiles(filePath, json) {
  //由于recovery的filePath参数和这个意义不一致，所以做个裁切
  let parentPath = filePath.substring(
    0,
    filePath.lastIndexOf(path.normalize("/")) + 1
  );
  recovery(parentPath, json);
}

function changeFiles() {}

/**
 * 引入源目录，进行增删改为新的配置
 * 需要删除的文件deleteJson：字符串数组即可
 * 需要增加的文件createJson：使用目前的config.json版本
 * 修改文件changeJson：使用新的json
 * 源目录路径originPath：字符串路径即可
 */
function modify(
  deleteJson,
  createJson,
  changeJson,
  originPath = path.normalize(__dirname + "/../output")
) {
  if (deleteJson) {
    deleteFiles(originPath, deleteJson);
  }
  if (createJson) {
    createFiles(originPath, createJson);
  }
  if (changeJson) {
    changeFiles(originPath, createJson);
  }
}

module.exports = {
  recovery,
  directory2json,
  deleteFiles,
  createFiles,
  modify,
  changeFiles,
};
