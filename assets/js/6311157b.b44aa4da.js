"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[4488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="patching",l={unversionedId:"gluegun/ir-docs/toolbox-api/patching",id:"gluegun/ir-docs/toolbox-api/patching",title:"patching",description:"Tools to help adjust the contents of text files.",source:"@site/docs/gluegun/ir-docs/toolbox-api/patching.md",sourceDirName:"gluegun/ir-docs/toolbox-api",slug:"/gluegun/ir-docs/toolbox-api/patching",permalink:"/docs/gluegun/ir-docs/toolbox-api/patching",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"parameters",permalink:"/docs/gluegun/ir-docs/toolbox-api/parameters"},next:{title:"print",permalink:"/docs/gluegun/ir-docs/toolbox-api/print"}},p={},c=[{value:"exists",id:"exists",level:2},{value:"update",id:"update",level:2},{value:"append",id:"append",level:2},{value:"prepend",id:"prepend",level:2},{value:"replace",id:"replace",level:2},{value:"patch",id:"patch",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patching"},"patching"),(0,o.kt)("p",null,"Tools to help adjust the contents of text files."),(0,o.kt)("p",null,"You can access these tools on the Gluegun toolbox, via ",(0,o.kt)("inlineCode",{parentName:"p"},"const { patching } = require('gluegun')"),", or directly via ",(0,o.kt)("inlineCode",{parentName:"p"},"const { patching } = require('gluegun/patching')"),"."),(0,o.kt)("h2",{id:"exists"},"exists"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Reads in a file and checks whether it's content matches a string or regular expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Case sensitive string match\nconst barbExists = await toolbox.patching.exists('config.txt', 'Barb')\n\n// Short form regex\nconst barbExists = await toolbox.patching.exists('config.txt', /Barb/)\n\n// Regex Object\nconst barbExists = await toolbox.patching.exists('config.txt', new Regex(/Barb/, 'i'))\n")),(0,o.kt)("h2",{id:"update"},"update"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Updates a given file by reading it in and then taking the result of the provided callback and writing it back to the config file."),(0,o.kt)("p",null,"If the file ends in ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),", it'll be read in as an object. Return the updated object to have it written back to the config."),(0,o.kt)("p",null,"If the file doesn't end in ",(0,o.kt)("inlineCode",{parentName:"p"},".json"),", you'll receive a string. Return an updated string to write back to the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.patching.update('config.json', (config) => {\n  config.key = 'new value'\n  return config\n})\n\nawait toolbox.patching.update('config.txt', (data) => {\n  return data.replace('Jamon', 'Boss')\n})\n")),(0,o.kt)("h2",{id:"append"},"append"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Appends a string to the given file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.patching.append('config.txt', 'Append this string\\n')\n")),(0,o.kt)("h2",{id:"prepend"},"prepend"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Prepends a string to the given file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.patching.prepend('config.txt', 'Prepend this string\\n')\n")),(0,o.kt)("h2",{id:"replace"},"replace"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Replaces a string in a given file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.patching.replace('config.txt', 'Remove this string\\n', 'Replace with this string\\n')\n")),(0,o.kt)("h2",{id:"patch"},"patch"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"async")," function.")),(0,o.kt)("p",null,"Allows inserting next to, deleting, and replacing strings or regular expression in a given file. If ",(0,o.kt)("inlineCode",{parentName:"p"},"insert")," is already present in the file, it won't change the file, unless you also pass through ",(0,o.kt)("inlineCode",{parentName:"p"},"force: true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await toolbox.patching.patch('config.txt', { insert: 'Jamon', before: 'Something else' })\nawait toolbox.patching.patch('config.txt', { insert: 'Jamon', after: 'Something else' })\nawait toolbox.patching.patch('config.txt', { insert: 'Jamon', replace: 'Something else' })\nawait toolbox.patching.patch('config.txt', { insert: 'Jamon', replace: 'Something else', force: true })\nawait toolbox.patching.patch('config.txt', { delete: 'Something' })\nawait toolbox.patching.patch('config.txt', { insert: 'Jamon', after: new RegExp('some regexp') })\nawait toolbox.patching.patch(\n  'config.txt',\n  { insert: 'Jamon', after: 'Something else' },\n  { insert: 'Jamon', before: 'Something else' },\n)\n")))}g.isMDXComponent=!0}}]);