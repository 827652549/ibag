### 项目结构

```
.
├── LICENSE //协议
├── README.md 
├── output //默认的输出文件夹
├── package-lock.json
├── package.json
├── index.js //yargs的cli入口
├── docs //官方文档
├── configs //配置相关
│   ├── README.MD
│   ├── global.json //全局配置，global.json
│   └── npmPackageVersion.js //npm依赖包稳定版的版本号
├── core //抽离的核心函数
│   ├── config-transform.js //用于配置文件和目录修改的相关函数
│   └── context-handle.js //修改文件内容的相关函数
├── instructions //封装好的指令集
│   ├── REAMDE.md
│   ├── _dependenciesForm.js //指令的依赖关系
│   ├── _haveExeced.json //临时文件，捕捉已执行的指令
│   ├── _instruction.js //指令的基类
│   ├── createDirPage.js //以下都是各个指令
│   ├── ...
├── serve //服务端，接受web的请求，执行脚本代码
│   ├── resetOutput.js //封装的处理函数模块
│   ├── serveConfig.json //服务端相关配置文件
│   └── start.js //服务器入口
└── web
    └── ibag-guide-web //配置web页代码，使用gatsby编写
        ├── tailwind.config.js //tailwind的配置文件
        ├── public //gatsby build执行后的输出目录
        ├── src //web页的react代码
        └── ...
```

### ibag执行过程

> 简单概括：执行系统命令，触发本地的前端和服务端启动程序。前端根据用户选择将定制内容发送到服务端，后端监听前端的请求，根据定制内容调用相应的"指令"，所有的"指令"都是ibag已在内部实现的"自动化完善代码"的脚本，最后将输出文件拷贝到用户执行目录下。

根目录下的`./index.js`是用yargs实现的cli入口。核心是通过调用node子进程模块执行命令。

当`ibag init`启动时，会触发`concurrently command1 command2`（这里的command1、2是代指，方面下面的描述），`concurrently`能够方便地异步显示两个命令的log信息。`command1`是通过`node`启动`./serve/start.js`的服务端，listen在`./serve/serveConfig.json`相应的端口值。`command2`是通过`npm run`启动`./web/ibag-guide-web`的Web端的导航配置页，由`gatsby serve`启动。

对于`command2`的Web前端导航配置页，是用`gatsby`开发的，在`./package.json`包含了一系列脚本，`develop`是开发环境下执行，其中`build`是打包当前代码，之后用`serve`运行打包之后的代码。在`./web/ibag-guide-web/src`中是核心的前端代码，主要是用`react`编写，并且使用了`tailwindcss`这种新型的`CSS`逻辑，所以你看不到`CSS`文件和`<style>`标签。`./web/ibag-guide-web/src/pages/index.js`是入口文件，通过`&&`控制四个过程页面的切换。组件间通过props和回调函数进行数据通信。网页的数据基础源自于静态的`./web/ibag-guide-web/config/rely.js`，这是我专门设计的一个JSON结构，方便数据导入和未来迭代时进行补充。当用户点击发送请求的按钮后，则会触发服务端的逻辑。

对于`command1`的服务端，`./serve/start.js`是通过`koa`来封装，通过`koa2-cors`解决跨域问题。服务端监听9000端口的`post("/start")`请求，并将请求体的内容传入到`./serve/restOutput.js`中。

对于`./serve/restOutput.js`，应用全局配置`./configs/global.json`，然后将所有的指令集`./instructions`导入到一个`map`实例中，并根据前端到请求项依次调用对应到指令，指令会将输出文件和目录写入到`./output`中，最后再调用系统命令将`./output`拷贝到用户执行位置下。至此，serve任务完成。

其中，关于指令集`./instructions`目录，`./instructions/_instruction.js`是所有指令的基类，通过run函数进行执行指令，指令间具有依赖关系，通过`./instructions/_dependenciesForm.js`来进行判断，并通过`./instructions/_haveExeced.json`记录已执行的指令以便不再重复执行。对于每一个指令，都继承了`./instructions/_instruction.js`并调用run函数。我将这些模块统一称为"指令"，指令里会有选择地执行`./core`下的两个函数集，主要是为了方便处理目录结构和文件内容。

最后，`./docs`是使用文档，通过Markdown语法写内容，根据`docsify`的页面结构编写，其中`./docs/zh-cn`是中文，根目录下的`.md`是英文，`docsify`会自动判断语言，并在`docsify serve docs`的时候生成静态页面。`./docs`目录被允许直接挂载到阿里云OSS上进行静态部署，这就生成了在线版的使用文档。
