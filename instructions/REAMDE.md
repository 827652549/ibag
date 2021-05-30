# 指令

每个步骤都是一个指令，某些指令间存在依赖关系，比如指令【在 Page 目录创建一个页面】依赖于指令【创建 Page】

dependenciedForm 是各依赖指令的列表

\_instruction.js 是每个指令对象的基类

其他的 js 文件皆是继承了\_instruction 来实现指令的功能，通过 run 函数传入一个函数，函数体内执行你要执行的指令逻辑

如果你想要创添加新的指令，直接继承\_instruction 并调用 run 方法即可。
