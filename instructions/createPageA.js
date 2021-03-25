require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')

/**
 * 指令【在page目录下创建页面A】
 */
class CreatePageA extends require('./_instruction') {
  //通过类名，获取到该指令依赖列表文件中到依赖指令
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null, [
        'output', [
          'src',
          [
            'pages',
            [
              'A',
              {
                'filename': 'index',
                'extension': 'js',
                'context': `function A() {
  return (
    <div>
      page A
    </div>
  );
}

export default A;
`,
              },
            ],

          ],
        ],

      ])
    })
  }
}

module.exports = CreatePageA
