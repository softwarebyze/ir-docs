"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4544],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},704:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"API"},l="Inside the Gluegun Toolbox",i={unversionedId:"newgun/Toolbox/toolbox-api",id:"newgun/Toolbox/toolbox-api",title:"API",description:'Let\'s explore the inside of the famous Gluegun "Toolbox" (or "Context" as it\'s sometimes called).',source:"@site/docs/newgun/Toolbox/toolbox-api.md",sourceDirName:"newgun/Toolbox",slug:"/newgun/Toolbox/toolbox-api",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-api",draft:!1,tags:[],version:"current",frontMatter:{title:"API"},sidebar:"newgun",next:{title:"Config",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-config"}},s={},p=[{value:"Accessing Tools Directly",id:"accessing-tools-directly",level:2}],u={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inside-the-gluegun-toolbox"},"Inside the Gluegun Toolbox"),(0,a.kt)("p",null,'Let\'s explore the inside of the famous Gluegun "Toolbox" (or "Context" as it\'s sometimes called).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'dostuff',\n  alias: 'd',\n  run: async function (toolbox) {\n    // great! now what?\n  },\n}\n")),(0,a.kt)("p",null,"Here's what's available inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbox")," object you see all over Gluegun."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"provides the..."),(0,a.kt)("th",{parentName:"tr",align:null},"3rd party"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"meta")),(0,a.kt)("td",{parentName:"tr",align:null},"information about the currently running CLI"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:null},"configuration options from the app or plugin"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"filesystem")),(0,a.kt)("td",{parentName:"tr",align:null},"ability to copy, move & delete files & directories"),(0,a.kt)("td",{parentName:"tr",align:null},"fs-jetpack")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"http")),(0,a.kt)("td",{parentName:"tr",align:null},"ability to talk to the web"),(0,a.kt)("td",{parentName:"tr",align:null},"apisauce")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"parameters")),(0,a.kt)("td",{parentName:"tr",align:null},"command line arguments and options"),(0,a.kt)("td",{parentName:"tr",align:null},"yargs-parser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"patching")),(0,a.kt)("td",{parentName:"tr",align:null},"manipulating file contents easily"),(0,a.kt)("td",{parentName:"tr",align:null},"fs-jetpack")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"print")),(0,a.kt)("td",{parentName:"tr",align:null},"tools to print output to the command line"),(0,a.kt)("td",{parentName:"tr",align:null},"colors, ora")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"prompt")),(0,a.kt)("td",{parentName:"tr",align:null},"tools to acquire extra command line user input"),(0,a.kt)("td",{parentName:"tr",align:null},"enquirer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"semver")),(0,a.kt)("td",{parentName:"tr",align:null},"utilities for working with semantic versioning"),(0,a.kt)("td",{parentName:"tr",align:null},"semver")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"strings")),(0,a.kt)("td",{parentName:"tr",align:null},"some string helpers like case conversion, etc."),(0,a.kt)("td",{parentName:"tr",align:null},"lodash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system")),(0,a.kt)("td",{parentName:"tr",align:null},"ability to execute"),(0,a.kt)("td",{parentName:"tr",align:null},"node-which, execa, cross-spawn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"template")),(0,a.kt)("td",{parentName:"tr",align:null},"code generation from templates"),(0,a.kt)("td",{parentName:"tr",align:null},"ejs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"packageManager")),(0,a.kt)("td",{parentName:"tr",align:null},"ability to add or remove packages with Yarn/NPM"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbox"),' has "drawers" full of useful tools for building CLIs. For example, the ',(0,a.kt)("inlineCode",{parentName:"p"},"toolbox.meta.version")," function can be invoked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  name: 'dostuff',\n  alias: 'd',\n  run: async function (toolbox) {\n    // use them like this...\n    toolbox.print.info(toolbox.meta.version())\n\n    // or destructure!\n    const {\n      print: { info },\n      meta: { version },\n    } = toolbox\n    info(version())\n  },\n}\n")),(0,a.kt)("p",null,"To learn more about each tool, explore the rest of the ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbox-*.md")," files in this folder."),(0,a.kt)("h2",{id:"accessing-tools-directly"},"Accessing Tools Directly"),(0,a.kt)("p",null,"You can access almost all of Gluegun's toolbox tools without running a command. This is useful when you'd like to use these tools outside of a CLI context or when doing some really specialized CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { print, filesystem, strings } = require('gluegun')\n// or\nconst { print } = require('gluegun/print')\nconst { filesystem } = require('gluegun/filesystem')\nconst { strings } = require('gluegun/strings')\nconst { packageManager } = require('gluegun/package-manager')\n\nprint.info(`Hey, I'm Gluegun!`)\nfilesystem.dir('/tmp/jamon')\nprint.error(strings.isBlank(''))\n")))}d.isMDXComponent=!0}}]);