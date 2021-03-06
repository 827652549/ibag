## 介绍

ibag是一个可视化的、快速的、可定制化的前端脚手架！目前已支持`React`和`Vue`。

## 为什么要用ibag

对于很多前端开发者，创建一个React/Vue项目后，需要引入一些其他辅助库，如ESlint、Mocha等等，在安装完依赖后，还需要根据相应地文档创建某些配置文件或写相关脚本等等，ibag将以上的流程整合自动化起来，开发者可以自由地根据自己的需求，在可视化的Web页面上勾选辅助库的选项，剩下的就交给ibag吧！

### 特性

- 可视化：拥有一个独立的Web UI界面，且支持多语言。
- 快速的：大量节省开发者频繁安装依赖和修改代码的过程。
- 可定制化的：在配置项中可自由地选择自己需要的依赖库。
- 兼容性：支持`Mac OS`、`Windows`系统。
- 多功能：支持引入UI库、路由、状态管理工具、单元测试框架、端到端测试框架、代码格式化工具等。

### 演示

<video src="https://1heng-files.oss-cn-beijing.aliyuncs.com/ibag_guide_video.mp4" autoplay controls preload="metadata" style="width: 90%"></video>

### 安装

#### 安装全局依赖

ibag需要`gatsby`运行Web页，`concurrently`可以更清晰地显示当前的运行过程。

```
npm i concurrently gatsby -g
```

#### 安装ibag

```
npm i ibag -g
```

如果安装成功，可以通过命令`ibag -h`看到提示信息。

### 使用

恭喜安装完成！现在开始使用ibag吧！

执行下面的命令会弹出一个网页，然后按照跟着引导一步步构建你的初始化项目吧！

```
cd my-project
ibag init
```

当点击"开始生成"按钮后，终端的执行目录下会输出一个"output"目录。

祝贺！你已经得到了您定制的初始化项目了！然后按Ctrl+C或Command+C两次退出当前的两个进程。

> 如果网页没有弹出来，请手动从终端中复制URL到浏览器中,某些命令会被一些安全软件拦截，如果弹出相关提示请允许执行。

!> 如果需要重复运行`ibag init`，尽可能请先删除当前的output目录，能够最大程度保证ibag正常执行。作者认为，删除这种"危险"的操作，不应该由脚本程序进行执行，以防止造成不可挽回的损失。

### 启动您构建的项目

react
```
cd output
npm i
npm run start
```

vue
```
cd output
npm i
npm run serve
```

你也可以在`package.json`里找到其他脚本的执行方式。例如，如果你选装了`eslint`，则`script`属性里会有一个代码格式化的命令`lint`。

### 协议

MIT
