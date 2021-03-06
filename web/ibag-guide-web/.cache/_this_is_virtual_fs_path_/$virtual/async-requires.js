// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-step-1-js": () => import("./../../../src/pages/step1.js" /* webpackChunkName: "component---src-pages-step-1-js" */),
  "component---src-pages-step-2-js": () => import("./../../../src/pages/step2.js" /* webpackChunkName: "component---src-pages-step-2-js" */),
  "component---src-pages-step-3-js": () => import("./../../../src/pages/step3.js" /* webpackChunkName: "component---src-pages-step-3-js" */),
  "component---src-pages-step-4-js": () => import("./../../../src/pages/step4.js" /* webpackChunkName: "component---src-pages-step-4-js" */)
}

