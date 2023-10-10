"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="Introduction",o={unversionedId:"react-native-mlkit/index",id:"react-native-mlkit/index",title:"Introduction",description:"react-native-mlkit is an native module for Expo and React Native that lets you use",source:"@site/docs/react-native-mlkit/index.md",sourceDirName:"react-native-mlkit",slug:"/react-native-mlkit/",permalink:"/docs/react-native-mlkit/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"React Native MLKit",next:{title:"Running the Example App",permalink:"/docs/category/running-the-example-app"}},c={},u=[{value:"Available Modules",id:"available-modules",level:2},{value:"Installation",id:"installation",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why is each module a separate package?",id:"why-is-each-module-a-separate-package",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native-mlkit")," is an native module for Expo and React Native that lets you use\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit"},"MLKit")," library in your Expo app."),(0,r.kt)("h2",{id:"available-modules"},"Available Modules"),(0,r.kt)("p",null,"Currently the following modules are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./face-detection"},"Face Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./object-detection"},"Object Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./image-labeling"},"Image Labeling"))),(0,r.kt)("p",null,"We will be adding more modules in the future, and especially welcome PRs that add support for new MLKit libraries! Check\nout the contributing guide for more information on how to contribute."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Each module is published as a separate npm package. For specific installation instructions for a particular module check\nthe followig pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./face-detection"},"Face Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./object-detection"},"Object Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./image-labeling"},"Image Labeling"))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"why-is-each-module-a-separate-package"},"Why is each module a separate package?"),(0,r.kt)("p",null,"Because the bundled TFLite modules are quite large, and we want to give you the option to only include the modules you\nneed.\nLogic and classes shared by all the types have been extracted into ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-mlkit-core"),", to reduce code\nduplication."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);