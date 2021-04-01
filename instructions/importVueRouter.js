require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { addStringContext,addFirstLineContext } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const createJson = [
  "src",
  {
    "filename": "App",
    "extension": "vue",
    "context": "<template>\n  <router-view/>\n</template>\n\n"
  },
  [
    "pages",
    [
      "A",
      {
        "filename": "index",
        "extension": "vue",
        "context": "<template>\n  <div class=\"a\">\n    <h1>This is A page</h1>\n  </div>\n</template>\n"
      }
    ],
    [
      "B",
      {
        "filename": "index",
        "extension": "vue",
        "context": "<template>\n  <div class=\"b\">\n    <h1>This is B page</h1>\n  </div>\n</template>\n"
      }
    ],
    [
      "Home",
      {
        "filename": "index",
        "extension": "vue",
        "context": "<template>\n  <div id=\"app\">\n    Welcome to ibag\n    <div id=\"nav\">\n      <p>goto page\n        <router-link to=\"/a\">A</router-link>\n      </p>\n      <p>goto page\n        <router-link to=\"/b\">B</router-link>\n      </p>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  margin-top: 200px;\n  color: rgb(90, 88, 88);\n  font-size: 40px;\n}\n</style>\n"
      }
    ]
  ],
  [
    "router",
    {
      "filename": "index",
      "extension": "js",
      "context": "import Vue from 'vue'\nimport VueRouter from 'vue-router'\n\nVue.use(VueRouter)\n\nconst routes = [\n  {\n    path: '/',\n    name: 'Home',\n    component: () => import('../pages/Home'),\n  },\n  {\n    path: '/a',\n    name: 'A',\n    component: () => import('../pages/A'),\n  },\n  {\n    path: '/b',\n    name: 'B',\n    component: () => import('../pages/B'),\n  },\n]\n\nconst router = new VueRouter({\n  mode: 'history',\n  base: process.env.BASE_URL,\n  routes,\n})\n\nexport default router\n"
    }
  ]
]
/**
 * 指令【导入vue-router】
 */
class ImportVueRouter extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      modify([
        'output',
        [
          'src',
          {
            "filename": "App",
            "extension": "vue"
          }
        ]
      ], [
        'output', createJson,
      ])
      addFirstLineContext(
        '../output/src/main.js',
        `import router from './router'\n`
      )
      addStringContext(
        '../output/src/main.js',
        `new Vue({`,
        'right',
        `\n\trouter,`
      )
      addStringContext(
          '../output/package.json',
          `"dependencies": {`,
          'right',
          `\n\t"vue-router": "${npmPackageVersion['vue-router']}",`
      )
      addStringContext(
        '../output/package.json',
        `"devDependencies": {`,
        'right',
        `\n\t"@vue/cli-plugin-router": "${npmPackageVersion['@vue/cli-plugin-router']}",`
      )
    })
  }
}

module.exports = ImportVueRouter
