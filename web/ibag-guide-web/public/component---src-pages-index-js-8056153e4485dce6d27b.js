(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678,521,429,906,933],{6633:function(e,t,n){e.exports=n(2465)},3344:function(e,t,n){"use strict";var r=n(1599),o=n(7202),a=n(116),i=n(8710),s=n(3656),c=n(2306),u=n(778),l=n(1191);e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+h)}var g=s(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};o(t,n,a),m=null}},m.onabort=function(){m&&(n(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){n(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in m&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),n(e),m=null)})),f||(f=null),m.send(f)}))}},2465:function(e,t,n){"use strict";var r=n(1599),o=n(6013),a=n(2234),i=n(5469);function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=s(n(8943));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(6114),c.CancelToken=n(4396),c.isCancel=n(7458),c.all=function(e){return Promise.all(e)},c.spread=n(2744),c.isAxiosError=n(6683),e.exports=c,e.exports.default=c},6114:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4396:function(e,t,n){"use strict";var r=n(6114);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,n){"use strict";var r=n(1599),o=n(8710),a=n(5950),i=n(4126),s=n(5469);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},5950:function(e,t,n){"use strict";var r=n(1599);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3656:function(e,t,n){"use strict";var r=n(789),o=n(7020);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},1191:function(e,t,n){"use strict";var r=n(7822);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},4126:function(e,t,n){"use strict";var r=n(1599),o=n(7989),a=n(7458),i=n(8943);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7822:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5469:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(a).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},7202:function(e,t,n){"use strict";var r=n(1191);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},7989:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},8943:function(e,t,n){"use strict";var r=n(1599),o=n(4188),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=n(3344)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8710:function(e,t,n){"use strict";var r=n(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6683:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},778:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},4188:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2306:function(e,t,n){"use strict";var r=n(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1599:function(e,t,n){"use strict";var r=n(6013),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},9848:function(e){e.exports=[{name:"React",description:{zh:"用于构建用户界面的JS库",en:"react is a js lib"},module:"InitIbagReact",logo:"",instructions:[{type:{zh:"UI库",en:"UI lib"},isRadio:!0,items:[{name:"ant design",logo:"",module:"ImportAntDesignForReact",description:{zh:"UI设计语言和React UI库",en:"A UI Design Language and React UI library"}},{name:"material",logo:"",module:"ImportMaterialForReact",description:{zh:"Material-UI是一个简单且可自定义的组件库，用于构建更快，更美观，更易于访问的React应用程序",en:"Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications"}},{name:"bootstrap",logo:"",module:"ImportBootstrapForReact",description:{zh:"最受欢迎的HTML，CSS和JavaScript框架，用于在网络上开发响应式，移动优先项目",en:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web"}}]},{type:{zh:"路由",en:"router"},isRadio:!0,items:[{name:"react-router-dom",logo:"",module:"ImportReactRouterDom",description:{zh:"React常用路由库",en:"DOM bindings for React Router"}}]},{type:{zh:"状态管理工具",en:"Predictable state container"},isRadio:!0,items:[{name:"redux",logo:"",module:"ImportReactRedux",description:{zh:"JavaScript应用程序的可预测状态容器",en:"Predictable state container for JavaScript apps"}}]},{type:{zh:"Redux中间件",en:"Redux Middleware"},isRadio:!0,items:[{name:"redux-thunk",logo:"",module:"ImportReduxThunk",description:{zh:"Redux的中间件",en:"Thunk middleware for Redux"}},{name:"redux-saga",logo:"",module:"ImportReduxSaga",description:{zh:"Redux应用程序的替代副作用模型",en:"An alternative side effect model for Redux apps"}}]},{type:{zh:"单元测试框架",en:"Unit Testing Framework"},isRadio:!0,items:[{name:"mocha",logo:"",module:"ImportMochaForReact",description:{zh:"用于node.js和浏览器的简单，灵活，有趣的javascript测试框架",en:"simple, flexible, fun javascript test framework for node.js & the browser"}},{name:"jest",logo:"",module:"ImportJestForReact",description:{zh:"令人愉快的JavaScript测试",en:"Delightful JavaScript Testing"}}]},{type:{zh:"端到端测试框架",en:"E2E Testing Framework"},isRadio:!0,items:[{name:"Cypress",logo:"",module:"ImportCypress",description:{zh:"对浏览器中运行的所有内容进行快速，轻松和可靠的测试",en:"Fast, easy and reliable testing for anything that runs in a browser"}},{name:"NightWatch",logo:"",module:"ImportNightWatch",description:{zh:"对浏览器中运行的所有内容进行快速，轻松和可靠的测试",en:"Fast, easy and reliable testing for anything that runs in a browser"}}]},{type:{zh:"其他",en:"others"},isRadio:!1,items:[{name:"immutable",logo:"",module:"ImportReduxImmutable",description:{zh:"Javascript的不可变的持久数据集合，其提高效率和简单性",en:"Immutable persistent data collections for Javascript which increase efficiency and simplicity"}},{name:"eslint",logo:"",module:"ImportEslintForReact",description:{zh:"查找并修复JavaScript代码中的问题",en:"Find and fix problems in your JavaScript code"}},{name:"lodash",logo:"",module:"ImportLodash",description:{zh:"一个现代的JavaScript实用程序库，提供模块化，性能和附加功能",en:"A modern JavaScript utility library delivering modularity, performance, & extras"}},{name:"axios",logo:"",module:"ImportAxiosForReact",description:{zh:"基于Promise的HTTP客户端，用于浏览器和node.js",en:"Promise based HTTP client for the browser and node.js"}},{name:"config page 404",logo:"",module:"CreatePage404ForReact",description:{zh:"配置404页面",en:"config page 404"}}]}]},{name:"Vue",description:{zh:"Vue.js是一个渐进的，可逐步采用的JavaScript框架，用于在Web上构建UI。",en:"Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web"},module:"InitIbagVue",logo:"",instructions:[{type:{zh:"UI库",en:"UI lib"},isRadio:!0,items:[{name:"ant design",logo:"",module:"ImportAntDesignForVue",description:{zh:"UI设计语言和React UI库",en:"A UI Design Language and React UI library"}},{name:"material",logo:"",module:"ImportMaterialForVue",description:{zh:"Material-UI是一个简单且可自定义的组件库，用于构建更快，更美观，更易于访问的React应用程序",en:"Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications"}},{name:"bootstrap",logo:"",module:"ImportBootstrapForVue",description:{zh:"最受欢迎的HTML，CSS和JavaScript框架，用于在网络上开发响应式，移动优先项目",en:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web"}}]},{type:{zh:"路由",en:"router"},isRadio:!0,items:[{name:"vue-router",logo:"",module:"ImportVueRouter",description:{zh:"Vue.js的官方路由器",en:"The official router for Vue.js"}}]},{type:{zh:"状态管理工具",en:"Predictable state container"},isRadio:!0,items:[{name:"vuex",logo:"",module:"ImportVuex",description:{zh:"Vue.js的集中式状态管理",en:"Centralized State Management for Vue.js"}}]},{type:{zh:"单元测试框架",en:"Unit Testing Framework"},isRadio:!0,items:[{name:"mocha",logo:"",module:"ImportMochaForVue",description:{zh:"用于node.js和浏览器的简单，灵活，有趣的javascript测试框架",en:"simple, flexible, fun javascript test framework for node.js & the browser"}},{name:"jest",logo:"",module:"ImportJestForVue",description:{zh:"令人愉快的JavaScript测试",en:"Delightful JavaScript Testing"}}]},{type:{zh:"端到端测试框架",en:"E2E Testing Framework"},isRadio:!0,items:[{name:"Cypress",logo:"",module:"ImportCypress",description:{zh:"对浏览器中运行的所有内容进行快速，轻松和可靠的测试",en:"Fast, easy and reliable testing for anything that runs in a browser"}},{name:"NightWatch",logo:"",module:"ImportNightWatch",description:{zh:"对浏览器中运行的所有内容进行快速，轻松和可靠的测试",en:"Fast, easy and reliable testing for anything that runs in a browser"}}]},{type:{zh:"其他",en:"others"},isRadio:!1,items:[{name:"babel",logo:"",module:"ImportBabelForVue",description:{zh:"Babel是用于编写下一代JavaScript的编译器",en:"Babel is a compiler for writing next generation JavaScript"}},{name:"eslint",logo:"",module:"ImportEslintForVue",description:{zh:"查找并修复JavaScript代码中的问题",en:"Find and fix problems in your JavaScript code"}},{name:"lodash",logo:"",module:"ImportLodash",description:{zh:"一个现代的JavaScript实用程序库，提供模块化，性能和附加功能",en:"A modern JavaScript utility library delivering modularity, performance, & extras"}},{name:"axios",logo:"",module:"ImportAxiosForVue",description:{zh:"基于Promise的HTTP客户端，用于浏览器和node.js",en:"Promise based HTTP client for the browser and node.js"}},{name:"config page 404",logo:"",module:"CreatePage404ForVue",description:{zh:"配置404页面",en:"config page 404"}}]}]}]},7704:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(6633),a=n.n(o),i=n(9419),s=n(8396),c=n(6343),u=n(3152),l=n(9848),f=n.n(l),d={type:"",instructions:[],instructionsName:[],extends:{name:"",description:"",author:"",license:""}};t.default=function(){var e=(0,r.useState)(f())[0],t=e.map((function(e){return e.name})),n=(0,r.useState)(t)[0],o=(0,r.useState)(),l=o[0],m=o[1],p=(0,r.useState)(d),h=p[0],g=p[1],b=(0,r.useState)(1),v=b[0],y=b[1],x=(0,r.useState)("en"),E=x[0],w=x[1];return r.createElement("div",{className:"absolute w-full h-full"},r.createElement("span",{className:"absolute left-1/2 top-10 font-mono text-4xl transform -translate-x-1/2 -translate-y-1/2"},"ibag"),r.createElement("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 bg-gray-200 rounded-xl shadow"}),r.createElement("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3 w-7/12 h-3/5 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-300 shadow rounded-xl"}),r.createElement("div",{className:"overflow-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 p-9 pb-0 bg-opacity-0 border-opacity-0 rounded-xl"},1===v?r.createElement(i.default,{data:n,lang:E,onClick:function(t){var n;console.log("step1 ckick"),d.type=t,e.forEach((function(e){e.name===t&&(n=e)})),m(n),y(2),console.log("跳转到页面2")}}):null,2===v?r.createElement(s.default,{data:l,lang:E,onClick:function(e){d.instructions=e.map((function(e){return e.instruction})),d.instructionsName=e.map((function(e){return e.name}))}}):null,3===v?r.createElement(c.default,{lang:E,onClick:function(e){d.extends=e,g(d)}}):null,4===v?r.createElement(u.default,{data:h,lang:E,onClick:function(){console.log(d),a().post("http://localhost:2077/start",d).then((function(e){console.log("web触发",e)})).catch((function(e){console.log(e)}))}}):null),r.createElement("div",{className:"absolute top-1/2 transform -translate-y-1/2 p-3 text-9xl text-gray-400 cursor-pointer hover:text-gray-800",onClick:function(){v>1&&y(v-1)}},"<"),r.createElement("div",{className:"absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-9xl text-gray-400 cursor-pointer hover:text-gray-800",onClick:function(){if(1===v)return void alert("Please select a framework.");v<4&&y(v+1)}},">"),r.createElement("div",{className:"absolute top-0 right-0 p-1 text-xl text-gray-400 cursor-pointer"},r.createElement("select",{onChange:function(e){w(e.target.value)}},r.createElement("option",{value:"en"},"English"),r.createElement("option",{value:"zh"},"简体中文"))))}},9419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7294),o=function(){var e=(0,r.useRef)();return(0,r.useEffect)((function(){var t=e.current.getContext("2d");t.strokeStyle="#5dde30",t.shadowColor="rgba(60,60,60,0.6)",t.shadowOffsetX=3,t.shadowOffsetY=3,t.shadowBlur=4,t.lineWidth=10,t.lineCap="round",t.beginPath(),t.moveTo(10.5,35),t.quadraticCurveTo(25.8,35,30.6,45.5),t.quadraticCurveTo(45,94,55.5,50.5),t.quadraticCurveTo(70,20.5,95,5.5),t.stroke()})),r.createElement("canvas",{ref:e,width:110,height:80,className:"absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3 opacity-0 group-hover:opacity-100 "})},a=(n(9499),function(e){var t=e.onClick,n=e.data,a=void 0===n?[]:n,i=e.lang;return r.createElement(r.Fragment,null,r.createElement("h1",{className:"font-mono text-2xl"},{en:"Step1: What project do you want to build？",zh:"第一步: 您要搭建一个什么项目？"}[i]),r.createElement("div",{className:" h-5/6 flex justify-around flex-wrap content-around "},a.map((function(e){return r.createElement("div",{key:e,className:"group relative h-1/3 w-2/5 bg-center bg-no-repeat bg-contain rounded-3xl cursor-pointer border-2 border-black shadow hover:shadow-inner",id:e,onClick:function(e){return s(e)}},r.createElement("span",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-mono"},e),r.createElement(o,null))}))));function s(e){t(e.currentTarget.id)}})},8396:function(e,t,n){"use strict";n.r(t);var r=n(7294);t.default=function(e){var t=e.onClick,n=e.data,o=void 0===n?[]:n,a=e.lang,i=(0,r.useRef)();return(0,r.useEffect)((function(){console.log("props")}),[e.data]),r.createElement(r.Fragment,null,r.createElement("h1",{className:"font-mono text-2xl"},{zh:"第二步: 选择您的拓展工具。",en:"Step2: Choose your extends tools."}[a]),r.createElement("div",{ref:i},o.instructions&&o.instructions.map((function(e){return r.createElement("div",{key:e.type[a],className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},e.type[a],":"),r.createElement("div",null,e.items.map((function(t){return r.createElement("label",{className:"m-4",title:t.description[a],key:t.module},r.createElement("input",{type:e.isRadio?"radio":"checkbox",name:e.type[a],"data-instruction":t.module,"data-instruction-name":t.name,className:"m-0.5",onChange:s}),t.name)}))))}))));function s(e){t(Array.from(i.current.querySelectorAll("input:checked")).map((function(e){return{instruction:e.dataset.instruction,name:e.dataset.instructionName}})))}}},6343:function(e,t,n){"use strict";n.r(t);var r=n(7294);t.default=function(e){var t={name:"",description:"",author:"",license:""},n=(0,r.useState)([{zh:"项目名",en:"name"},{zh:"描述",en:"description"},{zh:"作者",en:"author"},{zh:"许可证",en:"license"}])[0],o=e.onClick,a=e.lang;return r.createElement(r.Fragment,null,r.createElement("h1",{className:"font-mono text-2xl"},{zh:"第三步: 其他配置.",en:"Step3: Other configuration."}[a]),r.createElement("div",{className:"text-xl font-mono"},n.map((function(e){return r.createElement("div",{className:"m-6",key:e[a]},r.createElement("label",{className:"m-4"},r.createElement("span",{className:"inline-block w-1/5 transform translate-y-2"},e[a],":"),r.createElement("input",{type:"text",className:"m-0.5 bg-transparent outline-none border-b-2 border-black w-3/5",onChange:i,name:e.en})))}))));function i(e){t[e.target.name]=e.target.value,o(t)}}},3152:function(e,t,n){"use strict";n.r(t);var r=n(7294);t.default=function(e){var t=e.onClick,n=e.data,o=e.lang,a={title:{zh:"第四步: 预生成配置。",en:"Step4: Pre-build configuration."},go:{zh:"开始生成",en:"Start Build"}},i=(0,r.useState)([{zh:"项目类型",en:"Project Type"},{zh:"拓展工具",en:"Extends Tools"},{zh:"项目名",en:"Project Name"},{zh:"描述",en:"Description"},{zh:"作者",en:"Author"},{zh:"许可证",en:"License"}])[0];return r.createElement(r.Fragment,null,r.createElement("h1",{className:"font-mono text-2xl"},a.title[o]),r.createElement("div",{className:"text-xl font-mono"},r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[0][o],"："),r.createElement("label",null,n.type)),r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[1][o],"："),r.createElement("label",null,n.instructionsName.map((function(e){return r.createElement("label",{className:"m-2 inline-block\tborder-b-2 border-current",key:e},e)})))),r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[2][o],"："),r.createElement("label",{className:"m-2"},n.extends.name)),r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[3][o],"："),r.createElement("label",{className:"m-2"},n.extends.description)),r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[4][o],"："),r.createElement("label",{className:"m-2"},n.extends.author)),r.createElement("div",{className:"text-xl font-mono"},r.createElement("span",{className:"font-semibold"},i[5][o],"："),r.createElement("label",{className:"m-2"},n.extends.license)),r.createElement("div",{className:"text-xl font-mono flex justify-center"},r.createElement("button",{className:"w-2/5 h-12 bg-center bg-no-repeat bg-contain rounded-3xl cursor-pointer border-2 border-black shadow outline-none focus:outline-none hover:shadow-inner hover:bg-black hover:bg-opacity-10",onClick:function(){t()}},a.go[o]))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8056153e4485dce6d27b.js.map