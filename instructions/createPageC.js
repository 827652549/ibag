/**
 * 指令【在page目录下创建页面C】
 */
class CreatePageC extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      //todo 创建PageC的逻辑

    })
  }
}
module.exports = CreatePageC
