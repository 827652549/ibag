const CreatePageA = require('./createPageA')
const CreatePageB = require('./createPageB')

//测试，要看到依赖项的依次调用

new CreatePageA()
new CreatePageB()
