const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const process = require('process')
const child_process = require('child_process')
const open = require('open');

const serveCOnfig = require('./serveConfig.json')



const resetOutput = require("./resetOutput");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
//解决跨域
app.use(cors());

router.post("/start", (ctx, next) => {
  console.log("开始执行，请耐心等待……");
  resetOutput(ctx.request.body);
  ctx.body = "Building Your Project";
  //退出serve
  console.log("serve over");
  process.exit()
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(serveCOnfig.port,()=>{
  console.log("Service started:",`port:${serveCOnfig.port}`);
  // console.log("Service started:",`start http://localhost:${serveCOnfig.port}`);
});
console.log("ibag服务启动");

/**
 * 根据config输出到output中
 *
 */
function resetDirOutput () {

}
