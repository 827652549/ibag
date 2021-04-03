require('module-alias/register')//注册module-alias
const { modify } = require('@/core/config-transform')
const { spliceStringContext,addStringContext,addFirstLineContext,addItemInPackageJson } = require('@/core/context-handle')
const npmPackageVersion = require('@/configs/npmPackageVersion')

const createFile = [
  "src",
  {
    "filename": "App",
    "extension": "test.js",
    "context": "import { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders string ibag', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/ibag/i);\n  expect(linkElement).toBeInTheDocument();\n});\n"
  },
  {
    "filename": "setupTests",
    "extension": "js",
    "context": "// jest-dom adds custom jest matchers for asserting on DOM nodes.\n// allows you to do things like:\n// expect(element).toHaveTextContent(/react/i)\n// learn more: https://github.com/testing-library/jest-dom\nimport '@testing-library/jest-dom';\n"
  }
]
/**
 * 指令【为react导入jest】
 */
class ImportJestForReact extends require('./_instruction') {
  constructor (props) {
    super(props)
    this.run(function () {
      modify(null,
        [
          'output',
          createFile
        ])
      addItemInPackageJson(
        'devDependencies',
        {
          "@testing-library/jest-dom": npmPackageVersion["@testing-library/jest-dom"],
          "@testing-library/react": npmPackageVersion["@testing-library/react"],
          "@testing-library/user-event": npmPackageVersion["@testing-library/user-event"],
        }
      )
      addItemInPackageJson(
        'scripts',
        {
          "test": "react-scripts test"
        }
      )

    })
  }
}


module.exports = ImportJestForReact
