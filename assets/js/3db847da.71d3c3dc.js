"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Global Errors"},l="Track Global Errors",i={unversionedId:"reactotron/plugins/track-global-errors",id:"reactotron/plugins/track-global-errors",title:"Global Errors",description:"The goal of this plugin is to ensure all errors are thrown over to Reactotron for display.",source:"@site/docs/reactotron/plugins/track-global-errors.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/track-global-errors",permalink:"/reactotron/plugins/track-global-errors",draft:!1,tags:[],version:"current",frontMatter:{title:"Global Errors"},sidebar:"Reactotron",previous:{title:"Storybook",permalink:"/reactotron/plugins/storybook"},next:{title:"Global Logs",permalink:"/reactotron/plugins/track-global-logs"}},s={},c=[{value:"Options",id:"options",level:2},{value:"React JS Source Maps",id:"react-js-source-maps",level:3},{value:"React JS",id:"react-js",level:3},{value:"React Native",id:"react-native",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"track-global-errors"},"Track Global Errors"),(0,n.kt)("p",null,"The goal of this plugin is to ensure all errors are thrown over to Reactotron for display.\nBoth ",(0,n.kt)("inlineCode",{parentName:"p"},"reactotron-react-native")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"reactotron-react-js")," ship with this plugin."),(0,n.kt)("h1",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To use the ",(0,n.kt)("inlineCode",{parentName:"p"},"trackGlobalErrors")," plugin, add the additional plugin on the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron, { trackGlobalErrors } from "reactotron-react-native";\n')),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron, { trackGlobalErrors } from "reactotron-react-js";\n')),(0,n.kt)("p",null,"Next, add it as a plugin to Reactotron."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Reactotron.configure()\n  .use(trackGlobalErrors()) // <--- here we go!\n  .connect();\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"Veto is function that allows you to select frames you would like to leave out of the stack trace."),(0,n.kt)("p",null,"For example, on React Native, you'd like to leave off any frames sourced from React Native itself"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'Reactotron.configure()\n  .use(\n    trackGlobalErrors({\n      veto: (frame) =>\n        frame.fileName.indexOf("/node_modules/react-native/") >= 0,\n    })\n  )\n  .connect();\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"veto")," is a function that takes an ",(0,n.kt)("inlineCode",{parentName:"p"},"object")," and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," = ditch it. ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," = keep it."),(0,n.kt)("p",null,"The frame object passed into ",(0,n.kt)("inlineCode",{parentName:"p"},"veto")," has these properties."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"functionName:  the name of the function or null if an anonymous function\nlineNumber:    the line number of the error\ncolumnNumber:  the column number of the error\nfileName:      the name of the file\n")),(0,n.kt)("h3",{id:"react-js-source-maps"},"React JS Source Maps"),(0,n.kt)("p",null,"Source maps for projects in webpack need to have the ",(0,n.kt)("inlineCode",{parentName:"p"},"devtool")," set to ",(0,n.kt)("inlineCode",{parentName:"p"},"source-map"),". On ",(0,n.kt)("inlineCode",{parentName:"p"},"create-react-app")," based apps, they use ",(0,n.kt)("inlineCode",{parentName:"p"},"eval"),", so this will not work. You will have to switch your development webpack configuration to support this."),(0,n.kt)("p",null,"You also have the option to not do source map lookups, but still pass errors along by going into offline mode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Reactotron.configure()\n  .use(\n    trackGlobalErrors({\n      offline: true,\n    })\n  )\n  .connect();\n")),(0,n.kt)("h1",{id:"how-it-works-internally"},"How It Works Internally"),(0,n.kt)("h3",{id:"react-js"},"React JS"),(0,n.kt)("p",null,"It hijacks the browser's ",(0,n.kt)("inlineCode",{parentName:"p"},"window.onerror")," event, immediately calling the previous ",(0,n.kt)("inlineCode",{parentName:"p"},"onerror"),", then attempts to resolve the source of the errors via a source-map lookup. If successful, it throws a message over to Reactotron."),(0,n.kt)("h3",{id:"react-native"},"React Native"),(0,n.kt)("p",null,"On React Native, it hooks ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeModules.LogBox.addException"),". This is an internal method that React Native uses internally to report errors to LogBox. It always calls the original function so it won't break anything internally. Your Red Box will still show."),(0,n.kt)("p",null,"Because we're hooking a Facebook internal function, this is a bit fragile. We'll stay on top of any React Native upgrades that might cause problems should the API change."))}m.isMDXComponent=!0}}]);