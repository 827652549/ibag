#! /usr/bin/env node
// let CountMD = require('./countMD')
require('concurrently');

var child_process = require('child_process')
var argv = require('yargs').
  command('init', 'Run serve and open a web page for configuration', function (yargs) {
    console.log('Execution：💤')
    //启动后端服务和web
    child_process.execSync(
      "npx concurrently --names \"Serve,Web\" -c \"bgBlue.bold,bgMagenta.bold\" \"node "+__dirname+"/serve/start.js\" \"npm --prefix "+__dirname+"/web/ibag-guide-web run serve -o\"",{
          stdio: 'inherit',
      })
    console.log("You can now view the web page for configuration in the browser.");
  }).
  usage(`                                                                
██╗ ██████╗   █████╗   ██████╗ 🎒
██║ ██╔══██╗ ██╔══██╗ ██╔════╝ 
██║ ██████╔╝ ███████║ ██║  ███╗
██║ ██╔══██╗ ██╔══██║ ██║   ██║
██║ ██████╔╝ ██║  ██║ ╚██████╔╝
╚═╝ ╚═════╝  ╚═╝  ╚═╝  ╚═════╝
`).
  usage('👏欢迎使用ibag,一个可视化的、快速的、可定制化的前端脚手架！').
  usage('Welcome to ibag, a visual, fast, and customizable front-end scaffolding!').
  help('h').
  alias('h', 'help').
  epilog('copyright 🌀苏一恒').argv
