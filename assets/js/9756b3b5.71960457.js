"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[9316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Template"},l=void 0,p={unversionedId:"newgun/Toolbox/toolbox-template",id:"newgun/Toolbox/toolbox-template",title:"Template",description:"Features for generating files based on a template. You can access these tools on the Gluegun toolbox.",source:"@site/docs/newgun/Toolbox/toolbox-template.md",sourceDirName:"newgun/Toolbox",slug:"/newgun/Toolbox/toolbox-template",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-template",draft:!1,tags:[],version:"current",frontMatter:{title:"Template"},sidebar:"newgun",previous:{title:"System",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-system"},next:{title:"Tutorials",permalink:"/ir-docs/docs/category/tutorials"}},i={},u=[{value:"generate",id:"generate",level:2},{value:"example",id:"example",level:4}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Features for generating files based on a template. You can access these tools on the Gluegun toolbox."),(0,a.kt)("h2",{id:"generate"},"generate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is an ",(0,a.kt)("strong",{parentName:"p"},"async")," function.")),(0,a.kt)("p",null,"Generates a new file based on a template."),(0,a.kt)("h4",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function(toolbox) {\n  const name = toolbox.parameters.first\n\n  await toolbox.template.generate({\n    template: 'component.ejf',\n    target: `app/components/${name}-view.js`,\n    props: { name },\n  })\n}\n")),(0,a.kt)("p",null,"In the EJS template, you will use the props object to get the data defined previously. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ejs"},"<title><%= props.name %></title>\n")),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"generate()")," will always overwrite the target if given. Make sure to prompt your users if that's\nthe behaviour you're after."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"option"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"template")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"path to the EJS template"),(0,a.kt)("td",{parentName:"tr",align:null},"relative from plugin's ",(0,a.kt)("inlineCode",{parentName:"td"},"templates")," directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"path to create the file"),(0,a.kt)("td",{parentName:"tr",align:null},"relative from user's working directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"props")),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"more data to render in your template"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"directory")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"where to find templates"),(0,a.kt)("td",{parentName:"tr",align:null},"an absolute path (optional)")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"generate()")," returns the string that was generated in case you didn't want to render to a target."))}c.isMDXComponent=!0}}]);