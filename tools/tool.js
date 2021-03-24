require('module-alias/register')//注册module-alias
const fs = require('fs')

const {recovery,directory2json,deleteFiles,createFiles,modify} = require('@/core/config-transform')

// let json = directory2json('../my-app1')

//将json写入配置中
// fs.writeFileSync(__dirname+'/react精简版.json',JSON.stringify(json))

// 根据配置文件，生成目录
//
const json = JSON.parse(fs.readFileSync('config.json'))

recovery(__dirname,json)

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
let changeJson = {
  "filename": "A",
  "extension": "md",
  change:{
    replace:{

    },
    add:{

    },
    delete:{

    }
  }
}

modify('./my-app1',null,createJson,undefined)
