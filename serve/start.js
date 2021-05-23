const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const process = require('process')
const child_process = require('child_process')
const open = require('open');
const port = require('../serve/serveConfig.json').port

const serveCOnfig = require('./serveConfig.json')



const resetOutput = require("./resetOutput");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
//解决跨域
app.use(cors());

router.post("/start", (ctx, next) => {
  //todo:9000从外界导入
  ctx.set("Access-Control-Allow-Origin", "http://localhost:9000")
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  console.log("ibag running……");
  resetOutput(ctx.request.body);
  ctx.body = "Building Your Project";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(serveCOnfig.port,()=>{
  console.log("Service started:",`port:${serveCOnfig.port}`);
});
console.log("ibag serve has started");

/**
 * 根据config输出到output中
 *
 */
function resetDirOutput () {

}
