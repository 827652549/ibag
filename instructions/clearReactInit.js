/**
 * 指令【以create-react-app创建的初始项目，清除杂项】
 */
class ClearReactInit extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      //todo 创建ClearReactInit的逻辑
    })
  }
}
module.exports = ClearReactInit
