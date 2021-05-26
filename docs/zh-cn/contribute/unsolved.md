1. 在Linux上运行失败，暂未定位问题。
2. 在Win系统中，如果window账号名涵盖空格，则C盘目录结构中也会包含带空格的字符串，所以__dirname中也会包含空格，代入到children_process.execSync()中就会判断错误。
3. 添加全局命令ibag lst true/false，兼容版本和稳定版本。兼容版本是指在ibag发布时通过测试的各内置依赖包版本。
4. win系统上某些终端的中文或emoji乱码问题。
