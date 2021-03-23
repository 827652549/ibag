const fs = require('fs')
const path = require('path')

const del = require('del');
/**
 * 转化json时，忽略的文件
 * 将目录名或文件名完整写上去，即可忽略
 */
const ignoreFile = [
  'node_modules',
  '.git',
]

/**
 * 将文件目录转化表示为json字符串
 * 原理：通过同步深度遍历读取目录
 *
 * 同时支持相对路径和绝对路径作为参数
 *
 * 这种策略不必考虑目睹体积过大导致文件体积过大的情况，初始化项目本身都很小，这个方面可以做一个妥协。
 */
// function directory2json (filePath) {
//   filePath = path.resolve(filePath)
//   //获取当前的目录名
//   let strs = filePath.substring(filePath.lastIndexOf('/') + 1)
//   //init json
//   const json = [strs]
//   //根据文件路径读取文件，返回文件列表
//   const files = fs.readdirSync(filePath)
//   files.forEach(function (filename) {
//     //忽略的文件
//     if (ignoreFile.includes(filename)){
//       return
//     }
//     //获取当前文件的绝对路径
//     let filedir = path.join(filePath, filename)
//     //根据绝对路径获取文件信息
//     const stats = fs.statSync(filedir)
//     //如果是文件
//     if (stats.isFile()) {
//       json.push({
//         filename: filename.split('.')[0],
//         extension: filename.split('.')[1],
//         context: fs.readFileSync(filedir, 'utf-8'),
//       })
//     } else {
//       json.push(directory2json(filedir))
//     }
//   })
//   return json
// }

// let json = directory2json('../my-app1')

//将json写入配置中
// fs.writeFileSync(__dirname+'/react精简版.json',JSON.stringify(json))

// 根据配置文件，生成目录
// const json = JSON.parse(fs.readFileSync('config.json'))
//
function recovery (dir,json) {
  let dirName = 'defaultName'
  json.forEach((e,index)=>{
    if (Array.isArray(json)&&index===0){
      dirName = dir+'/'+e
      if (!fs.existsSync(dirName)){
        fs.mkdirSync(dirName)
      }
      return
    }
    if (Array.isArray(e)){
      recovery(dirName,e)
    }else {
      fs.writeFile(dirName+'/'+e.filename+'.'+e.extension,e.context,function (err) {
        if (err){
          console.warn(err)
        }else {
          console.log(e.filename+'.'+e.extension+'写入成功')
        }
      })
    }
  })
  console.log(json)
}
// recovery(__dirname,json)



//在react中添加react-router-dom

//一、命令行启动npm i react-router-dom，引入依赖包
//二、修改原React项目文件

/**
 * 引入源目录，进行增删改为新的配置
 * 源目录路径originPath：字符串路径即可
 * 需要删除的文件deleteJson：字符串数组即可
 * 需要增加的文件createJson：使用目前的config.json版本
 * 修改文件changeJson：使用新的json
 */
function modify (originPath,deleteJson,createJson,changeJson){
  // deleteFiles(originPath,deleteJson)
  createFiles(originPath,createJson)
  //todo:createFiles
  //todo:changeFiles
  console.log('function modify Over')
}

/**
 * 删除指定文件和目录
 * @param filePath 指定源目录
 * @param json 表示删除文件的json
 */
function deleteFiles(filePath,json){
  //获取在相对于电脑的绝对路径
    filePath = path.resolve(filePath)
  //获取当前的目录名
  let currPath = filePath.substring(filePath.lastIndexOf('/') + 1)
  if (currPath===json[0]){
    //根据规定的格式，如果json的长度大于1，指定删除该目录的文件
    if (json.length>1){
      for (let i = 1; i < json.length; i++) {
          if (Array.isArray(json[i])){
            deleteFiles(filePath+'/'+json[i][0],json[i])
          }else {
            console.log('delete文件: '+filePath+'/'+json[i].filename+'.'+json[i].extension)
            del.sync([filePath+'/'+json[i].filename+'.'+json[i].extension]);
          }
      }
    }else {
      console.log('delete目录: '+filePath)
      del.sync([filePath]);
    }
      // const files = fs.readdirSync(filePath)
      // files.forEach(function (filename) {
      //   //获取当前文件的绝对路径
      //   let filedir = path.join(filePath, filename)
      //   //根据绝对路径获取文件信息
      //   const stats = fs.statSync(filedir)
      //   //如果是文件
      //   console.log(filedir)
      //   if (stats.isFile()) {
      //     del.sync([filedir]);
      //   }else {
      //     //根据特定的格式，如果json的长度大于1，指定删除该目录的文件
      //     if (json.length>=1){
      //       deleteFiles(filePath,filename)
      //     }else {
      //       del.sync([filedir]);
      //     }
      //   }
      // })

  }else {
    console.warn(`deleteFiles函数的传入路径和表示删除的json配置不符\n${filePath}\n${JSON.stringify(json)}`)
    return
  }
//   //init json
//   const json = [strs]
//   //根据文件路径读取文件，返回文件列表
//   const files = fs.readdirSync(filePath)
//   files.forEach(function (filename) {
//     //忽略的文件
//     if (ignoreFile.includes(filename)){
//       return
//     }
//     //获取当前文件的绝对路径
//     let filedir = path.join(filePath, filename)
//     //根据绝对路径获取文件信息
//     const stats = fs.statSync(filedir)
//     //如果是文件
//     if (stats.isFile()) {
//       json.push({
//         filename: filename.split('.')[0],
//         extension: filename.split('.')[1],
//         context: fs.readFileSync(filedir, 'utf-8'),
//       })
//     } else {
//       json.push(directory2json(filedir))
//     }
//   })
//   return json
}

/**
 * 创建指定的文件和目录
 * @param filePath 指定源
 * @param json 表示添加文件的json
 */
function createFiles(filePath,json){
  //由于recovery的filePath参数和这个意义不一致，所以做个裁切
  let parentPath = filePath.substring(0,filePath.lastIndexOf('/')+1)
  recovery(parentPath,json)
  // recovery()
}
//todo：魔改文件，最核心的逻辑，正则表达式
function changeFiles(){

}
let deleteJson = [
  "my-app1",
  {
    "filename": "README",
    "extension": "md"
  },
  [
    "public",
    {
      "filename": "favicon",
      "extension": "ico"
    }
  ],
  //无附带{}代表删除整个src
  [
    "src"
  ]
]
let createJson = [
  "my-app1",
  {
    "filename": "A",
    "extension": "md",
    "context": "AAA"
  },
  //无附带{}代表创建一个空的src
  [
    "AAAA"
  ]
]

let changeJson = []

modify('./my-app1',deleteJson,createJson,undefined)
