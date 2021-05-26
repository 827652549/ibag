### Project structure

```
.
├── LICENSE
├── README.md
├── output //default output folder
├── package-lock.json
├── package.json
├── index.js // cli entry of yargs
├── docs //Official documents
├── configs //Configuration related
│ ├── README.MD
│ ├── global.json //Global configuration, global.json
│ └── npmPackageVersion.js //The version number of the stable version of the npm dependency package
├── core //Extracted core function
│ ├── config-transform.js //Related functions for configuration file and directory modification
│ └── context-handle.js //Related functions to modify file content
├── instructions //packaged instruction set
│ ├── REAMDE.md
│ ├── _dependenciesForm.js //Instruction dependency
│ ├── _haveExeced.json //Temporary file to capture executed commands
│ ├── _instruction.js //The base class of instructions
│ ├── createDirPage.js //The following are all commands
│ ├── ...
├── serve //server, accept web requests, execute script code
│ ├── resetOutput.js //encapsulated processing function module
│ ├── serveConfig.json //Server related configuration files
│ └── start.js //Server entrance
└── web
    └── ibag-guide-web //Configure the web page code, written by gatsby
        ├── tailwind.config.js //tailwind configuration file
        ├── public //The output directory after the execution of the gatsby build
        ├── src //react code of web page
        └── ...
```

### Operating principle

> Brief summary: execute system commands to trigger local front-end and server-side startup programs. The front-end sends customized content to the server according to the user's choice, and the back-end listens to the front-end request, and calls the corresponding "instructions" according to the customized content. All "instructions" are scripts of "automation code" that ibag has implemented internally. Finally, copy the output file to the user's execution directory.

The `./index.js` in the root directory is the cli entry implemented with yargs. The core is to execute commands by child_process.

When `ibag init` starts, it will trigger `concurrently command1 command2` (command1 and 2 here refer to the description below), `concurrently` can conveniently display the log information of the two commands asynchronously. `command1` is the server that starts `./serve/start.js` through `node`, and listen is in the corresponding port value of `./serve/serveConfig.json`. `command2` is the web navigation configuration page of `./web/ibag-guide-web` started by `npm run`, which is started by `gatsby serve`.

For the web front-end navigation configuration page of `command2`, it is developed with `gatsby`, which contains a series of scripts in `./package.json`, `develop` is executed in the development environment, and `build` is to build the current code , And then use `serve` to run the built code. In `./web/ibag-guide-web/src` is the core front-end code, which is mainly written in `react` and uses the new type of `CSS` logic of `tailwindcss`, so you can’t find the ` CSS` files and `<style>` tags. `./web/ibag-guide-web/src/pages/index.js` is the entry file, which controls the switching of the four steps pages through `&&`. Data communication is carried out between components through props and callback functions. The data basis of the web page is derived from the static `./web/ibag-guide-web/config/rely.js`, which is a JSON structure I specially designed to facilitate data import and supplement in future iterations. When the user clicks the button to send the request, the logic of the server will be triggered.

For the server of `command1`, `./serve/start.js` is encapsulated by `koa`, and the cross-domain problem is solved by `koa2-cors`. The server listens to the `post("/start")` request on port 9000, and passes the content of the request body to `./serve/restOutput.js`.

For `./serve/restOutput.js`, apply the global configuration `./configs/global.json`, and then import all the instruction sets `./instructions` into a `map` instance, and request items according to the front end Call the corresponding instructions in turn, the instructions will write the output files and directories to `./output`, and finally call the system command to copy `./output` to the user execution location. At this point, the serve task is complete.

Among them, regarding the instruction set `./instructions` directory, `./instructions/_instruction.js` is the base class of all instructions. The instructions are executed through the function named fun, and there are dependencies between instructions, through `./instructions/_dependenciesForm.js `To make judgments, and record the executed instructions through `./instructions/_haveExeced.json` so that they will not be executed repeatedly. For each instruction, it inherits `./instructions/_instruction.js` and calls the run function. I refer to these modules collectively as "instructions", and the two function sets under `./core` are selectively executed in the instructions, mainly for the convenience of processing the directory structure and file content.

Finally, `./docs` is the use of documents, writing content through Markdown grammar, and writing according to the page structure of `docsify`, where `./docs/zh-cn` is Chinese, and `.md` in the root directory is English. `docsify` will automatically determine the language and generate static pages when `docsify serve docs`. The `./docs` directory is allowed to be directly mounted on Alibaba Cloud OSS for static deployment, which generates an online version of the documentation.
