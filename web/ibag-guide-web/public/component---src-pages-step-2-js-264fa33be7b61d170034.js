(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[429],{8396:function(e,t,n){"use strict";n.r(t);var a=n(7294);t.default=function(e){var t=e.onClick,n=e.data,r=e.lang,l=(0,a.useRef)();return a.createElement(a.Fragment,null,a.createElement("h1",{className:"font-mono text-2xl"},{zh:"第二步: 选择您的拓展工具。",en:"Step2: Choose your extends tools."}[r]),a.createElement("div",{ref:l},n.instructions&&n.instructions.map((function(e){return a.createElement("div",{key:e.type[r],className:"text-xl font-mono"},a.createElement("span",{className:"font-semibold"},e.type[r],":"),a.createElement("div",null,e.items.map((function(t){return a.createElement("label",{className:"m-4",title:t.description[r],key:t.module},a.createElement("input",{type:e.isRadio?"radio":"checkbox",name:e.type[r],"data-instruction":t.module,"data-instruction-name":t.name,className:"m-0.5",onChange:o}),t.name)}))))}))));function o(e){t(Array.from(l.current.querySelectorAll("input:checked")).map((function(e){return{instruction:e.dataset.instruction,name:e.dataset.instructionName}})))}}}}]);
//# sourceMappingURL=component---src-pages-step-2-js-264fa33be7b61d170034.js.map