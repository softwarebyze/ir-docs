"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"gluegun/toolbox-package-manager",id:"gluegun/toolbox-package-manager",title:"toolbox-package-manager",description:"Provides an API for intelligently running commands in yarn or npm depending on which is installed.",source:"@site/docs/gluegun/toolbox-package-manager.md",sourceDirName:"gluegun",slug:"/gluegun/toolbox-package-manager",permalink:"/ir-docs/docs/gluegun/toolbox-package-manager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gluegun",previous:{title:"toolbox-meta",permalink:"/ir-docs/docs/gluegun/toolbox-meta"},next:{title:"Parameters",permalink:"/ir-docs/docs/gluegun/toolbox-parameters"}},c={},s=[{value:"hasYarn",id:"hasyarn",level:2},{value:"add (async)",id:"add-async",level:2},{value:"remove (async)",id:"remove-async",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides an API for intelligently running commands in yarn or npm depending on which is installed."),(0,r.kt)("h2",{id:"hasyarn"},"hasYarn"),(0,r.kt)("p",null,"Whether the current system has yarn installed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"toolbox.packageManager.hasYarn() // true\n")),(0,r.kt)("h2",{id:"add-async"},"add (async)"),(0,r.kt)("p",null,"Adds a package using yarn or npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.packageManager.add('infinite_red', {\n  dev: true,\n  dryRun: false,\n  force: 'npm', //remove this to have the system determine which\n})\n")),(0,r.kt)("p",null,"Will return an object similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  success: true,\n  command: 'npm install --save-dev infinite_red',\n  stdout: ''\n}\n")),(0,r.kt)("p",null,"You can also use an array with the package names you want to install to add it all at once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.packageManager.add(['infinite_red', 'infinite_blue'], {\n  dev: true,\n  dryRun: false,\n")),(0,r.kt)("h2",{id:"remove-async"},"remove (async)"),(0,r.kt)("p",null,"Removes a package using yarn or npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.packageManager.remove('infinite_red', {\n  dryRun: false,\n  force: 'npm', //remove this to have the system determine which\n})\n")),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function, you can also use an array to remove multiple packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.packageManager.remove(['infinite_red', 'infinite_blue'], {\n  dryRun: false,\n})\n")))}d.isMDXComponent=!0}}]);