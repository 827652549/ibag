require('module-alias/register')//注册module-alias
const fs = require('fs')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const createFile = [
  "output",
  [
    "cypress",
    [
      "fixtures",
      {
        "filename": "example",
        "extension": "json",
        "context": "{\n  \"name\": \"Using fixtures to represent data\",\n  \"email\": \"hello@cypress.io\",\n  \"body\": \"Fixtures are a great way to mock data for responses to routes\"\n}\n"
      },
      {
        "filename": "profile",
        "extension": "json",
        "context": "{\n  \"id\": 8739,\n  \"name\": \"Jane\",\n  \"email\": \"jane@example.com\"\n}"
      },
      {
        "filename": "users",
        "extension": "json",
        "context": "[\n  {\n    \"id\": 1,\n    \"name\": \"Leanne Graham\",\n    \"username\": \"Bret\",\n    \"email\": \"Sincere@april.biz\",\n    \"address\": {\n      \"street\": \"Kulas Light\",\n      \"suite\": \"Apt. 556\",\n      \"city\": \"Gwenborough\",\n      \"zipcode\": \"92998-3874\",\n      \"geo\": {\n        \"lat\": \"-37.3159\",\n        \"lng\": \"81.1496\"\n      }\n    },\n    \"phone\": \"1-770-736-8031 x56442\",\n    \"website\": \"hildegard.org\",\n    \"company\": {\n      \"name\": \"Romaguera-Crona\",\n      \"catchPhrase\": \"Multi-layered client-server neural-net\",\n      \"bs\": \"harness real-time e-markets\"\n    }\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Ervin Howell\",\n    \"username\": \"Antonette\",\n    \"email\": \"Shanna@melissa.tv\",\n    \"address\": {\n      \"street\": \"Victor Plains\",\n      \"suite\": \"Suite 879\",\n      \"city\": \"Wisokyburgh\",\n      \"zipcode\": \"90566-7771\",\n      \"geo\": {\n        \"lat\": \"-43.9509\",\n        \"lng\": \"-34.4618\"\n      }\n    },\n    \"phone\": \"010-692-6593 x09125\",\n    \"website\": \"anastasia.net\",\n    \"company\": {\n      \"name\": \"Deckow-Crist\",\n      \"catchPhrase\": \"Proactive didactic contingency\",\n      \"bs\": \"synergize scalable supply-chains\"\n    }\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Clementine Bauch\",\n    \"username\": \"Samantha\",\n    \"email\": \"Nathan@yesenia.net\",\n    \"address\": {\n      \"street\": \"Douglas Extension\",\n      \"suite\": \"Suite 847\",\n      \"city\": \"McKenziehaven\",\n      \"zipcode\": \"59590-4157\",\n      \"geo\": {\n        \"lat\": \"-68.6102\",\n        \"lng\": \"-47.0653\"\n      }\n    },\n    \"phone\": \"1-463-123-4447\",\n    \"website\": \"ramiro.info\",\n    \"company\": {\n      \"name\": \"Romaguera-Jacobson\",\n      \"catchPhrase\": \"Face to face bifurcated interface\",\n      \"bs\": \"e-enable strategic applications\"\n    }\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Patricia Lebsack\",\n    \"username\": \"Karianne\",\n    \"email\": \"Julianne.OConner@kory.org\",\n    \"address\": {\n      \"street\": \"Hoeger Mall\",\n      \"suite\": \"Apt. 692\",\n      \"city\": \"South Elvis\",\n      \"zipcode\": \"53919-4257\",\n      \"geo\": {\n        \"lat\": \"29.4572\",\n        \"lng\": \"-164.2990\"\n      }\n    },\n    \"phone\": \"493-170-9623 x156\",\n    \"website\": \"kale.biz\",\n    \"company\": {\n      \"name\": \"Robel-Corkery\",\n      \"catchPhrase\": \"Multi-tiered zero tolerance productivity\",\n      \"bs\": \"transition cutting-edge web services\"\n    }\n  },\n  {\n    \"id\": 5,\n    \"name\": \"Chelsey Dietrich\",\n    \"username\": \"Kamren\",\n    \"email\": \"Lucio_Hettinger@annie.ca\",\n    \"address\": {\n      \"street\": \"Skiles Walks\",\n      \"suite\": \"Suite 351\",\n      \"city\": \"Roscoeview\",\n      \"zipcode\": \"33263\",\n      \"geo\": {\n        \"lat\": \"-31.8129\",\n        \"lng\": \"62.5342\"\n      }\n    },\n    \"phone\": \"(254)954-1289\",\n    \"website\": \"demarco.info\",\n    \"company\": {\n      \"name\": \"Keebler LLC\",\n      \"catchPhrase\": \"User-centric fault-tolerant solution\",\n      \"bs\": \"revolutionize end-to-end systems\"\n    }\n  },\n  {\n    \"id\": 6,\n    \"name\": \"Mrs. Dennis Schulist\",\n    \"username\": \"Leopoldo_Corkery\",\n    \"email\": \"Karley_Dach@jasper.info\",\n    \"address\": {\n      \"street\": \"Norberto Crossing\",\n      \"suite\": \"Apt. 950\",\n      \"city\": \"South Christy\",\n      \"zipcode\": \"23505-1337\",\n      \"geo\": {\n        \"lat\": \"-71.4197\",\n        \"lng\": \"71.7478\"\n      }\n    },\n    \"phone\": \"1-477-935-8478 x6430\",\n    \"website\": \"ola.org\",\n    \"company\": {\n      \"name\": \"Considine-Lockman\",\n      \"catchPhrase\": \"Synchronised bottom-line interface\",\n      \"bs\": \"e-enable innovative applications\"\n    }\n  },\n  {\n    \"id\": 7,\n    \"name\": \"Kurtis Weissnat\",\n    \"username\": \"Elwyn.Skiles\",\n    \"email\": \"Telly.Hoeger@billy.biz\",\n    \"address\": {\n      \"street\": \"Rex Trail\",\n      \"suite\": \"Suite 280\",\n      \"city\": \"Howemouth\",\n      \"zipcode\": \"58804-1099\",\n      \"geo\": {\n        \"lat\": \"24.8918\",\n        \"lng\": \"21.8984\"\n      }\n    },\n    \"phone\": \"210.067.6132\",\n    \"website\": \"elvis.io\",\n    \"company\": {\n      \"name\": \"Johns Group\",\n      \"catchPhrase\": \"Configurable multimedia task-force\",\n      \"bs\": \"generate enterprise e-tailers\"\n    }\n  },\n  {\n    \"id\": 8,\n    \"name\": \"Nicholas Runolfsdottir V\",\n    \"username\": \"Maxime_Nienow\",\n    \"email\": \"Sherwood@rosamond.me\",\n    \"address\": {\n      \"street\": \"Ellsworth Summit\",\n      \"suite\": \"Suite 729\",\n      \"city\": \"Aliyaview\",\n      \"zipcode\": \"45169\",\n      \"geo\": {\n        \"lat\": \"-14.3990\",\n        \"lng\": \"-120.7677\"\n      }\n    },\n    \"phone\": \"586.493.6943 x140\",\n    \"website\": \"jacynthe.com\",\n    \"company\": {\n      \"name\": \"Abernathy Group\",\n      \"catchPhrase\": \"Implemented secondary concept\",\n      \"bs\": \"e-enable extensible e-tailers\"\n    }\n  },\n  {\n    \"id\": 9,\n    \"name\": \"Glenna Reichert\",\n    \"username\": \"Delphine\",\n    \"email\": \"Chaim_McDermott@dana.io\",\n    \"address\": {\n      \"street\": \"Dayna Park\",\n      \"suite\": \"Suite 449\",\n      \"city\": \"Bartholomebury\",\n      \"zipcode\": \"76495-3109\",\n      \"geo\": {\n        \"lat\": \"24.6463\",\n        \"lng\": \"-168.8889\"\n      }\n    },\n    \"phone\": \"(775)976-6794 x41206\",\n    \"website\": \"conrad.com\",\n    \"company\": {\n      \"name\": \"Yost and Sons\",\n      \"catchPhrase\": \"Switchable contextually-based project\",\n      \"bs\": \"aggregate real-time technologies\"\n    }\n  },\n  {\n    \"id\": 10,\n    \"name\": \"Clementina DuBuque\",\n    \"username\": \"Moriah.Stanton\",\n    \"email\": \"Rey.Padberg@karina.biz\",\n    \"address\": {\n      \"street\": \"Kattie Turnpike\",\n      \"suite\": \"Suite 198\",\n      \"city\": \"Lebsackbury\",\n      \"zipcode\": \"31428-2261\",\n      \"geo\": {\n        \"lat\": \"-38.2386\",\n        \"lng\": \"57.2232\"\n      }\n    },\n    \"phone\": \"024-648-3804\",\n    \"website\": \"ambrose.net\",\n    \"company\": {\n      \"name\": \"Hoeger LLC\",\n      \"catchPhrase\": \"Centralized empowering task-force\",\n      \"bs\": \"target end-to-end models\"\n    }\n  }\n]"
      }
    ],
    [
      "integration",
      {
        "filename": "ibag",
        "extension": "spec.js",
        "context": "describe ('Cypress Test', () => {\n  it ('Visit ibag', () => {\n    cy.visit ('/ibag');\n  });\n});\n"
      }
    ],
    [
      "plugins",
      {
        "filename": "index",
        "extension": "js",
        "context": "/// <reference types=\"cypress\" />\n// ***********************************************************\n// This example plugins/index.js can be used to load plugins\n//\n// You can change the location of this file or turn off loading\n// the plugins file with the 'pluginsFile' configuration option.\n//\n// You can read more here:\n// https://on.cypress.io/plugins-guide\n// ***********************************************************\n\n// This function is called when a project is opened or re-opened (e.g. due to\n// the project's config changing)\n\n/**\n * @type {Cypress.PluginConfig}\n */\n// eslint-disable-next-line no-unused-vars\nmodule.exports = (on, config) => {\n  // `on` is used to hook into various events Cypress emits\n  // `config` is the resolved Cypress config\n}\n"
      }
    ],
    [
      "support",
      {
        "filename": "commands",
        "extension": "js",
        "context": "// ***********************************************\n// This example commands.js shows you how to\n// create various custom commands and overwrite\n// existing commands.\n//\n// For more comprehensive examples of custom\n// commands please read more here:\n// https://on.cypress.io/custom-commands\n// ***********************************************\n//\n//\n// -- This is a parent command --\n// Cypress.Commands.add('login', (email, password) => { ... })\n//\n//\n// -- This is a child command --\n// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })\n//\n//\n// -- This is a dual command --\n// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })\n//\n//\n// -- This will overwrite an existing command --\n// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })\n"
      },
      {
        "filename": "index",
        "extension": "js",
        "context": "// ***********************************************************\n// This example support/index.js is processed and\n// loaded automatically before your test files.\n//\n// This is a great place to put global configuration and\n// behavior that modifies Cypress.\n//\n// You can change the location of this file or turn off\n// automatically serving support files with the\n// 'supportFile' configuration option.\n//\n// You can read more here:\n// https://on.cypress.io/configuration\n// ***********************************************************\n\n// Import commands.js using ES2015 syntax:\nimport './commands'\n\n// Alternatively you can use CommonJS syntax:\n// require('./commands')\n"
      }
    ]
  ],
  {
    "filename": "cypress",
    "extension": "json",
    "context": "{\n  \"baseUrl\": \"https://github.com/827652549\"\n}\n"
  },
]
/**
 * 指令【导入cypress】
 */
class ImportCypress extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null,createFile)
      addItemInPackageJson(
        'devDependencies',
        {
          "cypress": npmPackageVersion["cypress"]
        }
      )
      addItemInPackageJson(
        'scripts',
        {
          "e2e": "node_modules/.bin/cypress open"
        }
      )

    })
  }
}


module.exports = ImportCypress
