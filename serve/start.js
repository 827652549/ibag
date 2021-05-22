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
