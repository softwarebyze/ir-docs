"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[9521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Networking"},i="Networking",l={unversionedId:"reactotron/plugins/networking",id:"reactotron/plugins/networking",title:"Networking",description:"The networking plugin is reactotron-react-native which allows you to track all XMLHttpRequests in React Native.",source:"@site/docs/reactotron/plugins/networking.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/networking",permalink:"/reactotron/plugins/networking",draft:!1,tags:[],version:"current",frontMatter:{title:"Networking"},sidebar:"Reactotron",previous:{title:"Mobx State Tree",permalink:"/reactotron/plugins/mst"},next:{title:"Open In Editor",permalink:"/reactotron/plugins/open-in-editor"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2}],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networking"},"Networking"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"networking")," plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},"reactotron-react-native")," which allows you to track all XMLHttpRequests in React Native."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"networking")," plugin, you need to add the additional plugin on the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron, { networking } from "reactotron-react-native";\n')),(0,o.kt)("p",null,"Next, add it as a plugin to Reactotron."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Reactotron.configure()\n  .use(networking()) // <--- here we go!\n  .connect();\n")),(0,o.kt)("p",null,"And you're done! Now you can see your XMLHttpRequests in Reactotron."),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"networking()")," also accepts an object with two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignoreContentTypes"),": a regular expression which, when matched against the ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header, will prevent the data from being displayed in Reactotron. You typically want to do this for images (which is the default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignoreUrls"),": a regular expression which, when matched against the URL of the XHR, will prevent the request from being tracked in Reactotron. Can be useful for ignoring noisy logging requests.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"networking({\n  ignoreContentTypes: /^(image)\\/.*$/i,\n  ignoreUrls: /\\/(logs|symbolicate)$/,\n});\n")))}g.isMDXComponent=!0}}]);