"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Gluegun",s={unversionedId:"gluegun/README",id:"gluegun/README",title:"Gluegun",description:"gluegun",source:"@site/docs/gluegun/README.md",sourceDirName:"gluegun",slug:"/gluegun/",permalink:"/ir-docs/docs/gluegun/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gluegun",next:{title:"Contributing",permalink:"/ir-docs/docs/gluegun/contributing"}},l={},p=[{value:"Community CLIs and Plugins",id:"community-clis-and-plugins",level:2},{value:"Sponsors",id:"sponsors",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gluegun"},"Gluegun"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1479215/50237287-5a23e380-0371-11e9-89ea-85b41cd25217.jpg",alt:"gluegun"})),(0,a.kt)("p",null,"Gluegun is a delightful toolkit for building Node-based command-line interfaces (CLIs) in TypeScript or modern JavaScript, with support for:"),(0,a.kt)("p",null,"\ud83c\udf2f ",(0,a.kt)("em",{parentName:"p"},"parameters")," - command-line arguments and options\n\ud83c\udf9b ",(0,a.kt)("em",{parentName:"p"},"template")," - generating files from templates\n\ud83d\uddc4 ",(0,a.kt)("em",{parentName:"p"},"patching")," - manipulating file contents\n\ud83d\udcbe ",(0,a.kt)("em",{parentName:"p"},"filesystem")," - moving files and directories around\n\u2692 ",(0,a.kt)("em",{parentName:"p"},"system")," - executing other command-line scripts\n\ud83c\udf85 ",(0,a.kt)("em",{parentName:"p"},"http")," - interacting with API servers\n\ud83d\udece ",(0,a.kt)("em",{parentName:"p"},"prompt")," - auto-complete prompts\n\ud83d\udc83 ",(0,a.kt)("em",{parentName:"p"},"print")," - printing pretty colors and tables\n\ud83d\udc69\u200d\u2708\ufe0f ",(0,a.kt)("em",{parentName:"p"},"semver")," - working with semantic versioning\n\ud83c\udfbb ",(0,a.kt)("em",{parentName:"p"},"strings")," - manipulating strings & template data\n\ud83d\udce6 ",(0,a.kt)("em",{parentName:"p"},"packageManager")," - installing NPM packages with Yarn or NPM"),(0,a.kt)("p",null,"In addition, ",(0,a.kt)("inlineCode",{parentName:"p"},"gluegun")," supports expanding your CLI's ecosystem with a robust set of easy-to-write plugins and extensions."),(0,a.kt)("h1",{id:"why-use-gluegun"},"Why use Gluegun?"),(0,a.kt)("p",null,"You might want to use Gluegun if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to build a CLI app"),(0,a.kt)("li",{parentName:"ul"},"You want to have powerful tools at your fingertips"),(0,a.kt)("li",{parentName:"ul"},"And you don't want to give up flexibility at the same time")),(0,a.kt)("p",null,"If so ... welcome!"),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"gluegun")," CLI like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# spin up your new CLI\nnpx gluegun new movies\n\n# choose TypeScript or Modern JavaScript\n# now jump into the source\ncd movies\n\n# and link your new executable\nyarn link\n\n# and run it!\nmovies help\n")),(0,a.kt)("p",null,"You should see your new CLI help. Open the folder in your favorite editor and start building your CLI!"),(0,a.kt)("h1",{id:"code"},"Code"),(0,a.kt)("p",null,"Let's start with what a ",(0,a.kt)("inlineCode",{parentName:"p"},"gluegun")," CLI looks like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// in movie/src/cli.[js|ts]...\n\n// ready\nconst { build } = require('gluegun')\n\n// aim\nconst movieCLI = build('movie')\n  .src(`${__dirname}/src`)\n  .plugins('node_modules', { matching: 'movie-*' })\n  .help()\n  .version()\n  .defaultCommand()\n  .create()\n\n// fire!\nmovieCLI.run()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Commands")),(0,a.kt)("p",null,"Commands are simple objects that provide a name, optional aliases, and a function to run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// in movie/src/commands/foo.js\nmodule.exports = {\n  name: 'foo',\n  alias: 'f',\n  run: async function (toolbox) {\n    // gluegun provides all these features and more!\n    const { system, print, filesystem, strings } = toolbox\n\n    // ...and be the CLI you wish to see in the world\n    const awesome = strings.trim(await system.run('whoami'))\n    const moreAwesome = strings.kebabCase(`${awesome} and a keyboard`)\n    const contents = `\ud83d\udea8 Warning! ${moreAwesome} coming thru! \ud83d\udea8`\n    const home = process.env['HOME']\n    filesystem.write(`${home}/realtalk.json`, { contents })\n\n    print.info(`${print.checkmark} Citius`)\n    print.warning(`${print.checkmark} Altius`)\n    print.success(`${print.checkmark} Fortius`)\n  },\n}\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/ir-docs/docs/gluegun/toolbox-api"},"toolbox api docs")," for more details on what you can do."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/ir-docs/docs/gluegun/runtime"},"runtime docs")," for more details on building your own CLI and join us in the #gluegun channel of the Infinite Red Community Slack (",(0,a.kt)("a",{parentName:"p",href:"http://community.infinite.red"},"community.infinite.red"),") to get friendly help!"),(0,a.kt)("h1",{id:"who-is-using-this"},"Who Is Using This?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinitered/ignite"},"Ignite CLI")," - React Native CLI and starter kit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinitered/solidarity"},"Solidarity")," - audits your system dependencies so you can develop in peace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aws-amplify/amplify-cli"},"AWS Amplify CLI")," - A CLI toolchain for simplifying serverless web and mobile development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SaraVieira/fiddly"},"Sara Vieira's Fiddly")," - Create beautiful and simple HTML pages from your Readme.md files - ",(0,a.kt)("a",{parentName:"li",href:"https://fiddly.netlify.com"},"https://fiddly.netlify.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/graphprotocol/graph-cli"},"Graph CLI")," - CLI for building and managing subgraphs that index data from Ethereum and IPFS - ",(0,a.kt)("a",{parentName:"li",href:"https://thegraph.com/explorer"},"https://thegraph.com/explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowfrogdev/Vts"},"Vts")," - Vanilla TypeScript library starter CLI tool")),(0,a.kt)("h1",{id:"whats-under-the-hood"},"What's under the hood?"),(0,a.kt)("p",null,"We've assembled an ",(0,a.kt)("em",{parentName:"p"},"all-star cast")," of libraries to help you build your CLI."),(0,a.kt)("p",null,"\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mde/ejs"},"ejs")," for templating\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/node-semver"},"semver")," for version investigations\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack"},"fs-jetpack")," for the filesystem\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yargs/yargs-parser"},"yargs-parser"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/enquirer/enquirer"},"enquirer"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Marak/colors.js"},"colors"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/ora"},"ora")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cli-table/cli-table3"},"cli-table3")," for the command line\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mzabriskie/axios"},"axios")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinitered/apisauce"},"apisauce")," for web & apis\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/davidtheclark/cosmiconfig"},"cosmiconfig")," for flexible configuration\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IndigoUnited/node-cross-spawn"},"cross-spawn")," for running sub-commands\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/execa"},"execa")," for running more sub-commands\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/node-which"},"node-which")," for finding executables\n\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blakeembrey/pluralize"},"pluralize")," for manipulating strings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js 12.0+")," is required."),(0,a.kt)("h2",{id:"community-clis-and-plugins"},"Community CLIs and Plugins"),(0,a.kt)("p",null,"Here are a few community CLIs based on Gluegun plus some plugins you can use. Is yours missing? Send a PR to add it!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lenneTech/gluegun-menu"},"Gluegun-Menu")," - A command menu for Gluegun-based CLIs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lenneTech/cli-starter"},"Gluegun CLI-Starter")," - A CLI Starter for your next Gluegun CLI project")),(0,a.kt)("h2",{id:"sponsors"},"Sponsors"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinitered/gluegun"},"Gluegun")," is sponsored by ",(0,a.kt)("a",{parentName:"p",href:"https://infinite.red/"},"Infinite Red"),", a premium custom mobile app and web design and development agency. We are a team of designers and developers distributed across the USA and based near Portland, Oregon. Our specialties are UI/UX design, React and React Native, Node, and more. Email ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@infinite.red"},"hello@infinite.red")," if you'd like to talk about your project!"))}c.isMDXComponent=!0}}]);