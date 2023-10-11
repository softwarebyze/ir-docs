"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:200},l="Getting Started",i={unversionedId:"gluegun/ir-docs/getting-started",id:"gluegun/ir-docs/getting-started",title:"Getting Started",description:"The fastest way to get started is to use the built-in Gluegun CLI (very meta!) to generate it.",source:"@site/docs/gluegun/ir-docs/getting-started.md",sourceDirName:"gluegun/ir-docs",slug:"/gluegun/ir-docs/getting-started",permalink:"/docs/gluegun/ir-docs/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"Gluegun",previous:{title:"Gluegun <small>2.0</small>",permalink:"/docs/gluegun/ir-docs/"},next:{title:"Runtime",permalink:"/docs/gluegun/ir-docs/runtime"}},u={},s=[{value:"Creating a new Gluegun-powered CLI",id:"creating-a-new-gluegun-powered-cli",level:2},{value:"Linking your CLI so you can access it",id:"linking-your-cli-so-you-can-access-it",level:2},{value:"Creating your first command",id:"creating-your-first-command",level:2},{value:"Creating your first extension",id:"creating-your-first-extension",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The fastest way to get started is to use the built-in Gluegun CLI (very meta!) to generate it."),(0,r.kt)("h2",{id:"creating-a-new-gluegun-powered-cli"},"Creating a new Gluegun-powered CLI"),(0,r.kt)("p",null,"Gluegun works on macOS, Linux, and Windows 10. First, ensure you have Node installed and that you can access it (minimum version 7.6):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ node --version\n")),(0,r.kt)("p",null,"We will also be using ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," in this guide rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),". You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," if you want."),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"gluegun")," globally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ yarn global add gluegun\n")),(0,r.kt)("p",null,"Next, navigate to the folder you'd like to create your CLI in and generate it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ gluegun new mycli\n")),(0,r.kt)("p",null,"Gluegun will ask if you want to use TypeScript or modern JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Which language would you like to use? (Use arrow keys)\n  TypeScript - Gives you a build pipeline out of the box (default)\n  Modern JavaScript - Node 8.2+ and ES2016+ (https://node.green/)\n")),(0,r.kt)("p",null,"You can also pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"--typescript")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--javascript")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-j")," for short) to bypass the prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ gluegun new mycli -t\n$ gluegun new mycli -j\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: We recommend TypeScript, but you don't have to use it! Gluegun works great with modern JavaScript.")),(0,r.kt)("h2",{id:"linking-your-cli-so-you-can-access-it"},"Linking your CLI so you can access it"),(0,r.kt)("p",null,"Navigate to the new ",(0,r.kt)("inlineCode",{parentName:"p"},"mycli")," folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn link")," to have it available globally on your command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd mycli\n$ yarn link\n$ mycli --help\n")),(0,r.kt)("h2",{id:"creating-your-first-command"},"Creating your first command"),(0,r.kt)("p",null,"Your Gluegun-powered CLI isn't very useful without a command! In your CLI, create a new JS file in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/commands")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.js"),". In that file, add this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/commands/hello.js\nmodule.exports = {\n  run: async (toolbox) => {\n    toolbox.print.info('Hello, world!')\n  },\n}\n")),(0,r.kt)("p",null,"For TypeScript, it's not much different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/commands/hello.ts\nimport { GluegunToolbox } from 'gluegun'\nmodule.exports = {\n  run: async (toolbox: GluegunToolbox) => {\n    toolbox.print.info('Hello, world!')\n  },\n}\n")),(0,r.kt)("p",null,"Now run your command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mycli hello\nHello, world!\n")),(0,r.kt)("p",null,"Yay!"),(0,r.kt)("h2",{id:"creating-your-first-extension"},"Creating your first extension"),(0,r.kt)("p",null,"You can add more tools into the ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbox")," for ",(0,r.kt)("em",{parentName:"p"},"all")," of your commands to use by creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"extension"),". In your ",(0,r.kt)("inlineCode",{parentName:"p"},"mycli")," folder, add a new file in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/extensions")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-extension.js"),". (It doesn't ",(0,r.kt)("em",{parentName:"p"},"have")," to end in ",(0,r.kt)("inlineCode",{parentName:"p"},"-extension"),", but that's a convention.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/extensions/hello-extension.js\nmodule.exports = async (toolbox) => {\n  toolbox.hello = () => {\n    toolbox.print.info('Hello from an extension!')\n  }\n}\n")),(0,r.kt)("p",null,"Or TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/extensions/hello-extension.ts\nimport { GluegunToolbox } from 'gluegun'\nmodule.exports = async (toolbox: GluegunToolbox) => {\n  toolbox.hello = () => {\n    toolbox.print.info('Hello from an extension!')\n  }\n}\n")),(0,r.kt)("p",null,"Then, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," command, use that function instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/commands/hello.js\nmodule.exports = {\n  run: (toolbox) => {\n    const { hello } = toolbox\n\n    hello()\n  },\n}\n")),(0,r.kt)("p",null,"When you run the command, this time it'll use the extension's output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mycli hello\nHello from an extension!\n")),(0,r.kt)("p",null,"Note that we sometimes call the ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbox")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunContext"),". That's just another word for the same thing."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"There are ",(0,r.kt)("em",{parentName:"p"},"many")," more tools in the toolbox than just ",(0,r.kt)("inlineCode",{parentName:"p"},"print.info"),". You can generate from a template, manipulate files, hit API endpoints via HTTP, access parameters, run system commands, ask for user input, and much more. Explore the ",(0,r.kt)("a",{parentName:"p",href:"/docs/gluegun/ir-docs/toolbox-api/"},"API docs")," in this folder to learn more or follow a tutorial like ",(0,r.kt)("a",{parentName:"p",href:"../tutorials/making-a-movie-cli"},"Making a Movie CLI"),"."))}d.isMDXComponent=!0}}]);