#ibag

<img width="180px" src="i_bag.png">

For full documentation, visit 
[http://ibag.1heng.top/#/](http://ibag.1heng.top/#/).

[English](https://github.com/827652549/ibag)
[简体中文](./docs/zh-cn/README.md)

## Overview

ibag, is a visual, fast, and customizable front-end scaffolding！Currently `React` and `Vue` are supported.

## Why ibag

For many front-end developers, after creating a React/Vue project, they need to introduce some other auxiliary libraries, such as ESlint, Mocha, and so on. After installing the dependencies, you also need to create some configuration files or write related scripts according to the corresponding documents. ibag integrates and automates the above processes. Developers can freely check the auxiliary library option on the visual web page according to their needs, and leave the rest to ibag!

### Feature

- Visualization: Has an independent Web UI interface and supports multiple languages.
- Fast: Save a lot of developers the process of frequently installing dependencies and modifying the code.
- Customizable: You can freely choose the dependent libraries you need in the configuration items.
- Compatibility: Supports `Mac OS` and `Windows`.
- Multifunctional: Support UI framework, route, state management tools, unit testing frameworks, end-to-end testing frameworks, code formatting tools, etc.

### Show

<video src="https://1heng-files.oss-cn-beijing.aliyuncs.com/ibag_guide_video.mp4" autoplay controls preload="metadata" style="width: 90%"></video>

### Installation

#### Install global dependencies

ibag needs `gatsby` to run the web page, `concurrently` can show the current running process more clearly.

```
npm i concurrently gatsby -g
```

#### Install ibag

```
npm i ibag -g
```

If the installation is successful, you can use the command `ibag -h` to see the help message.

### Run ibag

Congratulations on the completion of the installation! Start using ibag now!

Executing the following command will pop up a web page, and then follow the guide step by step to build your initial project!

```
cd my-project
ibag init
```

When the "Start Build" button is clicked, an directory named output will be output in the execution directory of the terminal.

Congratulate! You have got your customized initialization project! Then press Ctrl+C or Command+C twice to exit the current two processes.

> If the webpage does not pop up, please manually copy the URL from the terminal to the browser. Some commands will be intercepted by some security software. If a relevant prompt pops up, please allow execution.

!> If you need to run `ibag init` repeatedly, please delete the current output directory as much as possible to ensure the normal execution of ibag to the greatest extent. The author believes that deleting this "dangerous" operation should not be executed by a script program to prevent irreparable losses.

### Start the project you built

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
You can also find other script execution methods in `package.json`. For example, if you choose `eslint`, there will be a code formatting command `lint` in the `script` property.

### License

MIT
