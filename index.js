#! /usr/bin/env node

const path = require('path')

const globalJSON = require('./configs/global.json')

var child_process = require('child_process')
var argv = require('yargs')
  .scriptName("ibag").
  command('init', 'Run serve and open a web page for configuration', function (yargs) {
    console.log('Execution：💤')
    //启动后端服务和web
    console.log('child_process.execSync：',`concurrently --names "Serve,Web" -c "bgBlue.bold,bgMagenta.bold" "node ${path.normalize(__dirname+"/serve/start.js")}" "npm --prefix ${path.normalize(__dirname+"/web/ibag-guide-web")} run serve"`);
    child_process.execSync(
      `concurrently --names "Serve,Web" -c "bgBlue.bold,bgMagenta.bold" "node ${path.normalize(__dirname+"/serve/start.js")}" "npm --prefix ${path.normalize(__dirname+"/web/ibag-guide-web")} run serve"`,{
          stdio: 'inherit',
      })
    console.log("You can now view the web page for configuration in the browser.");
  }).
  command('lst [isLst]', 'Do all dependencies use the latest stable version?', function (yargs) {
    yargs = yargs.demandCommand(1, '❌ You must add true/false after lst.')
    yargs.positional('isLst',{
      type:"boolean",
      default:true
    })
    globalJSON.isAllNpmPackageVersionLatest = yargs.argv._[1] === 'true'
    //初始化global.json为默认配置
    fs.writeFileSync(path.normalize(__dirname + "/configs/global.json"),
      JSON.stringify(globalJSON),
      "utf8");
    console.log('All dependencies will be the latest stable version?',yargs.argv._[1]);
  }).
  usage(`
 _   _                     
(_) | |                    
 _  | |__     __ _    __ _ 
| | | '_ \\   / _\` |  / _\` |
| | | |_) | | (_| | | (_| |
|_| |_.__/   \\__,_|  \\__, |
                      __/ |
                     |___/`).
  usage('欢迎使用ibag,一个可视化的、快速的、可定制化的前端脚手架！').
  usage('Welcome to ibag, a visual, fast, and customizable front-end scaffolding!').
  help('h').
  alias('h', 'help').
  alias('v', 'version').
  epilog('copyright 苏一恒').argv
