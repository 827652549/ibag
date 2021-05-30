require("module-alias/register"); //注册module-alias
const { modify } = require("@/core/config-transform");
const {
  addStringContext,
  addFirstLineContext,
} = require("@/core/context-handle");

/**
 * 指令【为vue创建页面404】
 * 注意，该指令依赖vue-router
 */
class CreatePage404ForVue extends require("./_instruction") {
  constructor(props) {
    super(props);
    this.run(function () {
      modify(null, [
        "output",
        [
          "src",
          [
            "pages",
            [
              "404",
              {
                filename: "index",
                extension: "vue",
                context:
                  "<template>\n  <div>\n    <h1>404</h1>\n  </div>\n</template>\n",
              },
            ],
          ],
        ],
      ]);
      addStringContext(
        "../output/src/router/index.js",
        `{
    path: '/b',
    name: 'B',
    component: () => import('../pages/B'),
  }`,
        `right`,
        `,
  {
    path: '/*',
    name: '404',
    component: () => import('../pages/404'),
  }`
      );
    });
  }
}
module.exports = CreatePage404ForVue;
