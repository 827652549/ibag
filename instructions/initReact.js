/**
 * 指令【创建create-react-app的初始项目】
 * //暂未用到该命令，考虑到如果ibag的使用者需要用到官方脚手架，那就没必要再通过ibag进行中转。ibag开发后期在考虑是否删除。
 */
class InitReact extends require("./_instruction") {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor(props) {
    super(props);
    this.run(function () {});
  }
}
module.exports = InitReact;
