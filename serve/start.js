const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require("koa-bodyparser");

const resetOutput  = require('./resetOutput')

const app = new Koa();
const router = new Router()

app.use(bodyParser());
//解决跨域
app.use(cors())

router.post('/start',(ctx,next)=>{
  console.log('开始执行，请耐心等待……');
  resetOutput(ctx.request.body)
  ctx.body = 'Building Your Project'
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(2077)
console.log('ibag服务启动');

/**
 * 根据config输出到output中
 *
 */
function resetDirOutput () {

}
