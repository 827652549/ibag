require('module-alias/register')//注册module-alias
const fs = require('fs')
/**
 * 指令的基类
 */
class _instruction {
  dependenciesLists = []
  constructor () {}
  /**
   * 依赖关系的调用
   * @param list
   */
  dependencies = function (list){
    if (list.length===0){
      return
    }
    list.forEach((instruction)=>{
      console.log('执行依赖',instruction)
      new instruction()
    })
  }
  /**
   * 执行当前指令的逻辑代码
   * @param execFun
   */
  execution = function (execFun) {
    execFun()
    console.log('判断并执行当前指令：',this.constructor.name,'已完成')
  }
  /**
   * 函数的调用者通过run函数进行当前指令的调用
   * @param className 传入
   * @param execFun
   */
  run = function (execFun) {
    //引入haveExeced.json，性能优化，已经执行过的指令不再重复执行。
    let haveExeced = JSON.parse(fs.readFileSync('./haveExeced.json','utf8'))
    if (haveExeced.indexOf(this.constructor.name)!==-1){
      return
    }else {
      haveExeced.push(this.constructor.name)
      console.log(haveExeced)
      fs.writeFileSync('./haveExeced.json',JSON.stringify(haveExeced),'utf8')
      this.dependencies(require('./dependenciesForm.js')[this.constructor.name])
      this.execution(execFun)
    }

  }
}

module.exports = _instruction
