module.exports = [
  {
    name: "React",
    description: {
      zh: "用于构建用户界面的JS库",
      en: "react is a js lib",
    },
    module: "InitIbagReact",
    logo: "",
    instructions: [
      {
        type: {
          zh: "UI库",
          en: "UI lib",
        },
        //单选还是多选
        isRadio: true,
        items: [
          {
            name: "ant design",
            logo: "",
            module: "ImportAntDesignForReact",
            description: {
              zh: "UI设计语言和React UI库",
              en: "A UI Design Language and React UI library",
            },
          },
          {
            name: "material",
            logo: "",
            module: "ImportMaterialForReact",
            description: {
              zh:
                "Material-UI是一个简单且可自定义的组件库，用于构建更快，更美观，更易于访问的React应用程序",
              en:
                "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications",
            },
          },
          {
            name: "bootstrap",
            logo: "",
            module: "ImportBootstrapForReact",
            description: {
              zh:
                "最受欢迎的HTML，CSS和JavaScript框架，用于在网络上开发响应式，移动优先项目",
              en:
                "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web",
            },
          },
        ],
      },
      {
        type: {
          zh: "路由",
          en: "router",
        },
        isRadio: true,
        items: [
          {
            name: "react-router-dom",
            logo: "",
            module: "ImportReactRouterDom",
            description: {
              zh: "React常用路由库",
              en: "DOM bindings for React Router",
            },
          },
        ],
      },
      {
        type: {
          zh: "状态管理工具",
          en: "Predictable state container",
        },
        isRadio: true,
        items: [
          {
            name: "redux",
            logo: "",
            module: "ImportReactRedux",
            description: {
              zh: "JavaScript应用程序的可预测状态容器",
              en: "Predictable state container for JavaScript apps",
            },
          },
        ],
      },
      {
        type: {
          zh: "Redux中间件",
          en: "Redux Middleware",
        },
        isRadio: true,
        items: [
          {
            name: "redux-thunk",
            logo: "",
            module: "ImportReduxThunk",
            description: {
              zh: "Redux的中间件",
              en: "Thunk middleware for Redux",
            },
          },
          {
            name: "redux-saga",
            logo: "",
            module: "ImportReduxSaga",
            description: {
              zh: "Redux应用程序的替代副作用模型",
              en: "An alternative side effect model for Redux apps",
            },
          },
        ],
      },
      {
        type: {
          zh: "单元测试框架",
          en: "Unit Testing Framework",
        },
        isRadio: true,
        items: [
          {
            name: "mocha",
            logo: "",
            module: "ImportMochaForReact",
            description: {
              zh: "用于node.js和浏览器的简单，灵活，有趣的javascript测试框架",
              en:
                "simple, flexible, fun javascript test framework for node.js & the browser",
            },
          },
          {
            name: "jest",
            logo: "",
            module: "ImportJestForReact",
            description: {
              zh: "令人愉快的JavaScript测试",
              en: "Delightful JavaScript Testing",
            },
          },
        ],
      },
      {
        type: {
          zh: "端到端测试框架",
          en: "E2E Testing Framework",
        },
        isRadio: true,
        items: [
          {
            name: "Cypress",
            logo: "",
            module: "ImportCypress",
            description: {
              zh: "对浏览器中运行的所有内容进行快速，轻松和可靠的测试",
              en:
                "Fast, easy and reliable testing for anything that runs in a browser",
            },
          },
          {
            name: "NightWatch",
            logo: "",
            module: "ImportNightWatch",
            description: {
              zh: "对浏览器中运行的所有内容进行快速，轻松和可靠的测试",
              en:
                "Fast, easy and reliable testing for anything that runs in a browser",
            },
          },
        ],
      },
      {
        type: {
          zh: "其他",
          en: "others",
        },
        isRadio: false,
        items: [
          {
            name: "immutable",
            logo: "",
            module: "ImportReduxImmutable",
            description: {
              zh: "Javascript的不可变的持久数据集合，其提高效率和简单性",
              en:
                "Immutable persistent data collections for Javascript which increase efficiency and simplicity",
            },
          },
          {
            name: "eslint",
            logo: "",
            module: "ImportEslintForReact",
            description: {
              zh: "查找并修复JavaScript代码中的问题",
              en: "Find and fix problems in your JavaScript code",
            },
          },
          {
            name: "lodash",
            logo: "",
            module: "ImportLodash",
            description: {
              zh: "一个现代的JavaScript实用程序库，提供模块化，性能和附加功能",
              en:
                "A modern JavaScript utility library delivering modularity, performance, & extras",
            },
          },
          {
            name: "axios",
            logo: "",
            module: "ImportAxiosForReact",
            description: {
              zh: "基于Promise的HTTP客户端，用于浏览器和node.js",
              en: "Promise based HTTP client for the browser and node.js",
            },
          },
          {
            name: "config page 404",
            logo: "",
            module: "CreatePage404ForReact",
            description: {
              zh: "配置404页面",
              en: "config page 404",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Vue",
    description: {
      zh: "Vue.js是一个渐进的，可逐步采用的JavaScript框架，用于在Web上构建UI。",
      en:
        "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web",
    },
    module: "InitIbagVue",
    logo: "",
    instructions: [
      {
        type: {
          zh: "UI库",
          en: "UI lib",
        },
        //单选还是多选
        isRadio: true,
        items: [
          {
            name: "ant design",
            logo: "",
            module: "ImportAntDesignForVue",
            description: {
              zh: "UI设计语言和React UI库",
              en: "A UI Design Language and React UI library",
            },
          },
          {
            name: "material",
            logo: "",
            module: "ImportMaterialForVue",
            description: {
              zh:
                "Material-UI是一个简单且可自定义的组件库，用于构建更快，更美观，更易于访问的React应用程序",
              en:
                "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications",
            },
          },
          {
            name: "bootstrap",
            logo: "",
            module: "ImportBootstrapForVue",
            description: {
              zh:
                "最受欢迎的HTML，CSS和JavaScript框架，用于在网络上开发响应式，移动优先项目",
              en:
                "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web",
            },
          },
        ],
      },
      {
        type: {
          zh: "路由",
          en: "router",
        },
        isRadio: true,
        items: [
          {
            name: "vue-router",
            logo: "",
            module: "ImportVueRouter",
            description: {
              zh: "Vue.js的官方路由器",
              en: "The official router for Vue.js",
            },
          },
        ],
      },
      {
        type: {
          zh: "状态管理工具",
          en: "Predictable state container",
        },
        isRadio: true,
        items: [
          {
            name: "vuex",
            logo: "",
            module: "ImportVuex",
            description: {
              zh: "Vue.js的集中式状态管理",
              en: "Centralized State Management for Vue.js",
            },
          },
        ],
      },
      {
        type: {
          zh: "单元测试框架",
          en: "Unit Testing Framework",
        },
        isRadio: true,
        items: [
          {
            name: "mocha",
            logo: "",
            module: "ImportMochaForVue",
            description: {
              zh: "用于node.js和浏览器的简单，灵活，有趣的javascript测试框架",
              en:
                "simple, flexible, fun javascript test framework for node.js & the browser",
            },
          },
          {
            name: "jest",
            logo: "",
            module: "ImportJestForVue",
            description: {
              zh: "令人愉快的JavaScript测试",
              en: "Delightful JavaScript Testing",
            },
          },
        ],
      },
      {
        type: {
          zh: "端到端测试框架",
          en: "E2E Testing Framework",
        },
        isRadio: true,
        items: [
          {
            name: "Cypress",
            logo: "",
            module: "ImportCypress",
            description: {
              zh: "对浏览器中运行的所有内容进行快速，轻松和可靠的测试",
              en:
                "Fast, easy and reliable testing for anything that runs in a browser",
            },
          },
          {
            name: "NightWatch",
            logo: "",
            module: "ImportNightWatch",
            description: {
              zh: "对浏览器中运行的所有内容进行快速，轻松和可靠的测试",
              en:
                "Fast, easy and reliable testing for anything that runs in a browser",
            },
          },
        ],
      },
      {
        type: {
          zh: "其他",
          en: "others",
        },
        isRadio: false,
        items: [
          {
            name: "babel",
            logo: "",
            module: "ImportBabelForVue",
            description: {
              zh: "Babel是用于编写下一代JavaScript的编译器",
              en: "Babel is a compiler for writing next generation JavaScript",
            },
          },
          {
            name: "eslint",
            logo: "",
            module: "ImportEslintForVue",
            description: {
              zh: "查找并修复JavaScript代码中的问题",
              en: "Find and fix problems in your JavaScript code",
            },
          },
          {
            name: "lodash",
            logo: "",
            module: "ImportLodash",
            description: {
              zh: "一个现代的JavaScript实用程序库，提供模块化，性能和附加功能",
              en:
                "A modern JavaScript utility library delivering modularity, performance, & extras",
            },
          },
          {
            name: "axios",
            logo: "",
            module: "ImportAxiosForVue",
            description: {
              zh: "基于Promise的HTTP客户端，用于浏览器和node.js",
              en: "Promise based HTTP client for the browser and node.js",
            },
          },
          {
            name: "config page 404",
            logo: "",
            module: "CreatePage404ForVue",
            description: {
              zh: "配置404页面",
              en: "config page 404",
            },
          },
        ],
      },
    ],
  },
]
