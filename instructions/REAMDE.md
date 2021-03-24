# 指令

每个步骤都是一个指令，某些指令间存在依赖关系，比如指令【在Page目录创建一个页面】依赖于指令【创建Page】

dependenciedForm是各依赖指令的列表


_instruction.js是每个指令对象的基类

其他的js文件皆是继承了_instruction来实现指令的功能，通过run函数传入一个函数，函数体内执行你要执行的指令逻辑


如果你想要创添加新的指令，直接继承_instruction并调用run方法即可。
