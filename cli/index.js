#! /usr/bin/env node
// let CountMD = require('./countMD')
const concurrently = require('concurrently');

var child_process = require('child_process')
var argv = require('yargs').
  command('check', 'Check the development environment of ibag', function (yargs) {
    console.log('Execution：💤')
    //todo:检查node的安装情况

    // console.log('npm config set registry https://registry.npmjs.org')
    // child_process.execSync(
    //   'npm config set registry https://registry.npmjs.org')
    // console.log('✅ 将npm源更改为：官方npm源📁')
  }).
  // command('init', 'Run serve and open a web page for configuration', function (yargs) {
  //   console.log('执行命令：💤')
  //   // console.log('npm config set registry https://registry.npm.taobao.org')
  //   // child_process.execSync(
  //   //   'npm config set registry https://registry.npm.taobao.org')
  //   // console.log('✅ 将npm源更改为：淘宝源🍑')
  // }).
  command('init', 'Run serve and open a web page for configuration', function (yargs) {
    console.log('Execution：💤')
    //启动后端服务和web
    child_process.execSync(
      'npm run init',{
          stdio: 'inherit',
          cwd:'../'
      })
    //
    // const cwd = process.cwd()
    // concurrently([
    //   '',
    //   { command: 'node '+cwd+'/../serve/start.js', name: 'server' },
    //   { command: 'npm --prefix ../web/ibag-guide-web run serve', name: 'web'},
    //   // { command: 'watch', name: 'watch', cwd: path.resolve(__dirname, 'scripts/watchers')}
    // ], {
    //   prefix: 'name',
    //   // cwd: path.resolve(__dirname, 'scripts'),
    // }).then();

    console.log("You can now view the web page for configuration in the browser.");


    //todo:可选加入-o参数

    // yargs = yargs.demandCommand(1, '❌ 你必须在publish后面加上新版本号，如X.X.X')
    // console.log('npm config set registry https://registry.npmjs.org')
    // child_process.execSync(
    //   'npm config set registry https://registry.npmjs.org')
    // console.log('npm version ' + yargs.argv._[1])
    // child_process.execSync('npm version ' + yargs.argv._[1])
    // console.log('npm publish')
    // child_process.execSync('npm publish')
    // console.log('npm config set registry https://registry.npm.taobao.org')
    // child_process.execSync(
    //   'npm config set registry https://registry.npm.taobao.org')
    // console.log('✅ 发布成功！🎉')
  }).
  // command('docs', '启动docsify', function (yargs) {
  //   console.log('执行命令：💤')
  //   console.log('docsify serve docs')
  //   child_process.execSync('docsify serve docs', { stdio: 'inherit' })
  //   console.log('✅ docsify启动成功！ 🚗')
  // }).
  // command('push', '提交主分支到远程仓库', function (yargs) {
  //   yargs = yargs.demandCommand(1, '❌ 你必须在push后面加上commit说明')
  //   console.log('执行命令：💤')
  //   console.log('git add .')
  //   child_process.execSync('git add .')
  //   console.log('git commit -m ' + yargs.argv._[1] + ' .')
  //   child_process.execSync('git commit -m "' + yargs.argv._[1] + '" .')
  //   console.log('git push -u origin master')
  //   child_process.execSync('git push -u origin master')
  //   console.log('✅ git push 成功 🚗')
  // }).
  // command('count', '统计Markdown文字字数（后可以跟上需要统计的目录绝对路径，或直接省略或.以遍历整个相对目录）', function (yargs) {
  //   console.log('执行命令：💤')
  //   let currPath
  //   if (yargs.argv._[1] === '.' || yargs.argv._[1] === undefined) {
  //     currPath = child_process.execSync('pwd').toString('utf8').trim()
  //   } else {
  //     currPath = yargs.argv._[1]
  //   }
  //   CountMD(currPath)
  // }).
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
