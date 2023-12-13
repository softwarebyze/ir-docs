"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[5808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),h=a,m=s["".concat(p,".").concat(h)]||s[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i="Welcome to the Reactotron Contributing Guide",l={unversionedId:"reactotron/contributing/index",id:"reactotron/contributing/index",title:"Welcome to the Reactotron Contributing Guide",description:"Thank you for investing your time in contributing to our project!",source:"@site/docs/reactotron/contributing/index.md",sourceDirName:"reactotron/contributing",slug:"/reactotron/contributing/",permalink:"/reactotron/contributing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Reactotron",previous:{title:"Troubleshooting",permalink:"/reactotron/troubleshooting"},next:{title:"Architecture",permalink:"/reactotron/contributing/architecture"}},p={},c=[{value:"Step 1: Get the development version of reactotron running",id:"step-1-get-the-development-version-of-reactotron-running",level:3},{value:"Step 2: Create an Ignite react-native app to test your changes",id:"step-2-create-an-ignite-react-native-app-to-test-your-changes",level:3},{value:"Step 3: Making changes to <code>reactotron-app</code>",id:"step-3-making-changes-to-reactotron-app",level:3},{value:"Making changes to other monorepo packages that live in <code>./lib</code>",id:"making-changes-to-other-monorepo-packages-that-live-in-lib",level:3},{value:"Adding a new Reactotron plugin to <code>./lib</code>",id:"adding-a-new-reactotron-plugin-to-lib",level:3},{value:"Prepare for a pull request",id:"prepare-for-a-pull-request",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-the-reactotron-contributing-guide"},"Welcome to the Reactotron Contributing Guide"),(0,a.kt)("p",null,"Thank you for investing your time in contributing to our project!"),(0,a.kt)("p",null,"Please start by reading the other docs in this folder to understand how the monorepo folder structure and plugin architecture work."),(0,a.kt)("h3",{id:"step-1-get-the-development-version-of-reactotron-running"},"Step 1: Get the development version of reactotron running"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork the repo and then clone it to your local machine: ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:YOUR_USER_NAME/reactotron.git")),(0,a.kt)("li",{parentName:"ol"},"Install dependencies: ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")),(0,a.kt)("li",{parentName:"ol"},"Start the ",(0,a.kt)("inlineCode",{parentName:"li"},"reactotron-app")," in development mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,a.kt)("p",null,"You should see the reactotron electron app open on your machine with the development menu open."),(0,a.kt)("h3",{id:"step-2-create-an-ignite-react-native-app-to-test-your-changes"},"Step 2: Create an Ignite react-native app to test your changes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialize a new ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinitered/ignite"},"ignite app")," in the same folder where you cloned the reactotron repo (the two projects should live side-by-side): ",(0,a.kt)("inlineCode",{parentName:"li"},"npx ignite-cli new PizzaApp --yes"),". This new app will already be set up to use reactotron."),(0,a.kt)("li",{parentName:"ol"},"Once this app is done initializing, start it: ",(0,a.kt)("inlineCode",{parentName:"li"},"cd PizzaApp && yarn start"),"."),(0,a.kt)("li",{parentName:"ol"},"Launch the app in the simulator of your choice."),(0,a.kt)("li",{parentName:"ol"},"You should see output in the reactotron app.")),(0,a.kt)("h3",{id:"step-3-making-changes-to-reactotron-app"},"Step 3: Making changes to ",(0,a.kt)("inlineCode",{parentName:"h3"},"reactotron-app")),(0,a.kt)("p",null,"Any changes you make to the main reactotron electron app that lives in ",(0,a.kt)("inlineCode",{parentName:"p"},"./apps/reactotron-app")," will be reflected in the reactotron app that you started in step 1. You may need to kill the app and restart it to see your changes."),(0,a.kt)("p",null,"Remember to reload your Ignited react-native PizzaApp created in step 2 to reconnect the app to reactotron."),(0,a.kt)("h3",{id:"making-changes-to-other-monorepo-packages-that-live-in-lib"},"Making changes to other monorepo packages that live in ",(0,a.kt)("inlineCode",{parentName:"h3"},"./lib")),(0,a.kt)("p",null,"If you make changes to the non-electron app packages in this monorepo like ",(0,a.kt)("inlineCode",{parentName:"p"},"reactotron-react-native")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"reactotron-core-client"),", you will need to build the packages and then link them to your react-native app. Luckily, we have a script that will do this for you. Once you run this script, the Ignite app you made in step 2 should automatically refresh and connect to your locally running reactotron instance."),(0,a.kt)("p",null,"You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," to build all reactotron packages, or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build:watch")," to watch and rebuild changes automatically."),(0,a.kt)("p",null,"Then, to link the packages to your react-native PizzaApp, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx zx scripts/install-workspace-packages-in-target.mjs ~/Code/PizzaApp\n")),(0,a.kt)("p",null,"or if you want to watch for rebuilds and automatically link them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npx nx watch --all -- "npx zx scripts/install-workspace-packages-in-target.mjs ~/Code/PizzaApp"\n')),(0,a.kt)("p",null,"Make sure that the path to your ",(0,a.kt)("inlineCode",{parentName:"p"},"PizzaApp")," is an absolute path and not a relative one (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Code/PizzaApp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"../PizzaApp"),")"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note: you must have already run ",(0,a.kt)("inlineCode",{parentName:"em"},"yarn")," in your ",(0,a.kt)("inlineCode",{parentName:"em"},"PizzaApp")," folder before running this script because is copies over the built js files from each reactotron library into the app's ",(0,a.kt)("inlineCode",{parentName:"em"},"node_modules")," folder."))),(0,a.kt)("h3",{id:"adding-a-new-reactotron-plugin-to-lib"},"Adding a new Reactotron plugin to ",(0,a.kt)("inlineCode",{parentName:"h3"},"./lib")),(0,a.kt)("p",null,"If you have a new plugin to contribute to the Reactotron ecosystem, you can start a new workspace by running the generate plugin script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn generate:plugin my-plugin\n")),(0,a.kt)("p",null,"This will create the necessary directory in ",(0,a.kt)("inlineCode",{parentName:"p"},"./lib")," and get you started with a template. You'll want to implement your configuration and plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"./lib/reactotron-my-plugin/reactotron-my-plugin.ts"),"."),(0,a.kt)("p",null,"Keep in mind this won't add the workspace to ",(0,a.kt)("inlineCode",{parentName:"p"},".circleci/config.yml"),", that must still be done manually when ready."),(0,a.kt)("h3",{id:"prepare-for-a-pull-request"},"Prepare for a pull request"),(0,a.kt)("p",null,"Before you open a pull request, please ensure that the following command runs without errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn build-and-test:local\n")),(0,a.kt)("p",null,"Once you've made your changes and verified your local codebase passes all tests and linters, you'll need to commit them and push them to your fork. Then, you can open a pull request to the main repo."))}d.isMDXComponent=!0}}]);