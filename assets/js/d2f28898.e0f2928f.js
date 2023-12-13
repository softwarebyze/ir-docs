"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:888},i="Tips and Tricks",l={unversionedId:"reactotron/tips",id:"reactotron/tips",title:"Tips and Tricks",description:"Clearing Reactotron",source:"@site/docs/reactotron/tips.md",sourceDirName:"reactotron",slug:"/reactotron/tips",permalink:"/reactotron/tips",draft:!1,tags:[],version:"current",sidebarPosition:888,frontMatter:{sidebar_position:888},sidebar:"Reactotron",previous:{title:"Global Errors",permalink:"/reactotron/plugins/track-global-errors"},next:{title:"Troubleshooting",permalink:"/reactotron/troubleshooting"}},s={},c=[{value:"Clearing Reactotron",id:"clearing-reactotron",level:3},{value:"Running In Production",id:"running-in-production",level:3},{value:"React Native",id:"react-native",level:4},{value:"React JS",id:"react-js",level:4},{value:"Piggybacking on Console",id:"piggybacking-on-console",level:3},{value:"Fancy Console Magic \ud83c\udfa9 \u2728",id:"fancy-console-magic--",level:3},{value:"Redux and Immutable data",id:"redux-and-immutable-data",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,o.kt)("h3",{id:"clearing-reactotron"},"Clearing Reactotron"),(0,o.kt)("p",null,"You can clear Reactotron by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"clear()"),"."),(0,o.kt)("p",null,"For example, let's say in React Native you want to clear the logs everytime you start up? Add this to your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactotronConfig.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Reactotron.clear()\n")),(0,o.kt)("h3",{id:"running-in-production"},"Running In Production"),(0,o.kt)("p",null,"Don't... said the stranger on the Internet pretending he knows what's best for you."),(0,o.kt)("p",null,"Please install ",(0,o.kt)("inlineCode",{parentName:"p"},"reactotron-react-native"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reactotron-react-js"),", and others with ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-dev")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"--save"),"."),(0,o.kt)("h4",{id:"react-native"},"React Native"),(0,o.kt)("p",null,"For React Native apps, there's several good reasons."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Battery life. WebSockets will drain the battery as the connection stays open."),(0,o.kt)("li",{parentName:"ol"},"Privacy. Your app might store stuff in state that the user realize... like social tokens."),(0,o.kt)("li",{parentName:"ol"},"Security. You can literally remote control parts of the app. Yikes!")),(0,o.kt)("p",null,"Surround your Reactotron activities with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (__DEV__) {\n  // ZAP!\n}\n")),(0,o.kt)("p",null,"This means you'll need to be careful to use ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," in ES6 are hoisted!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flip Flop Alert!")," Technically it's possible just to NPM ",(0,o.kt)("inlineCode",{parentName:"p"},"--save"),". Maybe you want to do some debugging on a production build on a local device? That's cool. Just please, don't ship without conditionally shutting off ",(0,o.kt)("inlineCode",{parentName:"p"},"Reactotron.connect()"),". <3"),(0,o.kt)("h4",{id:"react-js"},"React JS"),(0,o.kt)("p",null,"For web sites, well... CORS browser security will pretty much shut you down anyway."),(0,o.kt)("p",null,"If you're running ReactJS and webpack, anything inside ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," expressions will get nuked in production builds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'if (process.env.NODE_ENV !== "production") {\n  // ZAP!\n}\n')),(0,o.kt)("h3",{id:"piggybacking-on-console"},"Piggybacking on Console"),(0,o.kt)("p",null,"In ES6, you must import Reactotron at the top of your file before using it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Reactotron from \"reactotron-react-native\"\n// or import Reactotron from 'reactotron-react'\n")),(0,o.kt)("p",null,"And later on in your file, you type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Reactotron.log("something really interesting happened")\n')),(0,o.kt)("p",null,"You can cut out the top step by attaching to the ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," object in your ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactotronConfig.js")," file (or wherever you setup)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// horrible, but useful hack.... oh come on, don't look at me like that... it's JavaScript :|\nconsole.tron = Reactotron\n")),(0,o.kt)("p",null,"Now, anywhere in your app if you want to log something?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.tron.log("Sweet Freedom!")\n')),(0,o.kt)("h3",{id:"fancy-console-magic--"},"Fancy Console Magic \ud83c\udfa9 \u2728"),(0,o.kt)("p",null,"You can add an important indicator light by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"logImportant"),". ",(0,o.kt)("em",{parentName:"p"},"E.g.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// or Reactotron.log\nconsole.tron.logImportant("I am important")\n')),(0,o.kt)("p",null,"Additionally, you can access a more advanced message and indicator with ",(0,o.kt)("inlineCode",{parentName:"p"},"display"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// or Reactotron.display\nconsole.tron.display({\n  name: "Tacos",\n  value: { a: 1, b: [1, 2, 3] },\n  preview: "when you click here, it might surprise you!",\n  important: true,\n  image: "http://placekitten.com/g/400/400",\n})\n')),(0,o.kt)("h2",{id:"redux-and-immutable-data"},"Redux and Immutable data"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"/reactotron/plugins/redux"},"reactotron-redux"),"\nand an immutable library such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rtfeldman/seamless-immutable"},"seamless-immutable")," you need to make sure you transform your state back into an immutable object when using State Snapshots."),(0,o.kt)("p",null,"To do so you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onRestore")," callback like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  .use(reactotronRedux({\n    // Fires when Reactotron uploads a new copy of the state tree.\n    onRestore: state => Immutable(state)\n  }))\n")),(0,o.kt)("p",null,"However if only some of your reducers are immutable and the rest are mutable you can selectively transform\nthe state like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  .use(reactotronRedux({\n    // Fires when Reactotron uploads a new copy of the state tree.\n    onRestore: state => {\n      return { ...Immutable(state), nav: state.nav }\n    }\n  }))\n")),(0,o.kt)("p",null,"This will ",(0,o.kt)("inlineCode",{parentName:"p"},"nav")," mutable. Note this is what you want to do when using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-community/react-navigation/blob/master/docs/guides/Redux-Integration.md"},"react-navigation's default reducer"),"."))}d.isMDXComponent=!0}}]);