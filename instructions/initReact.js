/**
 * 指令【创建create-react-app的初始项目】
 */
class InitReact extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      //todo 创建InitReact的逻辑
    })
  }
}
module.exports = InitReact
