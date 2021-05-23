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
// app.use(cors());

app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
})

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
