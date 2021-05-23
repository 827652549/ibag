
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/junking/WebstormProjects/ibag-temp/web/ibag-guide-web/src/pages/index.js")),
  "component---src-pages-step-1-js": preferDefault(require("/Users/junking/WebstormProjects/ibag-temp/web/ibag-guide-web/src/pages/step1.js")),
  "component---src-pages-step-2-js": preferDefault(require("/Users/junking/WebstormProjects/ibag-temp/web/ibag-guide-web/src/pages/step2.js")),
  "component---src-pages-step-3-js": preferDefault(require("/Users/junking/WebstormProjects/ibag-temp/web/ibag-guide-web/src/pages/step3.js")),
  "component---src-pages-step-4-js": preferDefault(require("/Users/junking/WebstormProjects/ibag-temp/web/ibag-guide-web/src/pages/step4.js"))
}

