const fs = require('fs')
const merge = require('lodash/merge')

/**
 * 基于context修改匹配字符串的第一个文本
 * @{string} contextPtah 目标contextPtah
 * @param str 锚点字符串
 * @param text
 */
function spliceStringContext (contextPtah, str, text) {
  let context = fs.readFileSync(contextPtah, 'utf8')
  context = context.replace(str, text)
  fs.writeFileSync(contextPtah, context, 'utf8')
}

/**
 * 修改fun内容，将text添加进函数体中
 * 备注：函数ibag皆用function模式，所以皆为funciton的函数逻辑
 * @param contextPtah
 * @param funName
 * @param text
 */
function spliceFunctionContext (contextPtah, funName, text) {

}

/**
 * 删除context中第一个string
 * @param contextPtah
 * @param str
 */
function deleteStringContext (contextPtah, str) {

}

/**
 * 删除context中的指定函数
 * @param context
 * @param funName 被删除的函数名
 */
function deleteFunctionContext (contextPtah, funName) {

}

/**
 * 在指定锚点字符串处添加内容
 * @param context
 * @param target
 * @param direction 字符串「left、right」
 * @param text
 */
function addStringContext (contextPtah, target, direction, text) {
  let context = fs.readFileSync(contextPtah, 'utf8')
  let resultStr
  if (direction === 'left') {
    resultStr = text + target
  } else {
    resultStr = target + text
  }
  context = context.replace(target, resultStr)
  fs.writeFileSync(contextPtah, context, 'utf8')

}

/**
 * 在首行内添加内容
 */
function addFirstLineContext (contextPtah, text) {
  let context = fs.readFileSync(contextPtah, 'utf8')
    context = text + context
    fs.writeFileSync(contextPtah, context, 'utf8')
}

/**
 * 在../output/package.json中添加项
 * currkey可以是dependence，
 * obj是{react:^1.0.0}
 */
function addItemInPackageJson (currKey,obj) {
  let json = JSON.parse(fs.readFileSync('../output/package.json','utf8'))
  json[currKey] = merge(json[currKey] || {},obj)
  fs.writeFileSync('../output/package.json',JSON.stringify(json),'utf8')
}

/**
 * 在package.json中删除项
 */
function deleteItemInPackageJson (key) {

}

module.exports = {
  spliceStringContext,
  spliceFunctionContext,
  deleteStringContext,
  deleteFunctionContext,
  addStringContext,
  addFirstLineContext,
  addItemInPackageJson
}
