"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Benchmarking"},i="Benchmarking",c={unversionedId:"reactotron/plugins/benchmark",id:"reactotron/plugins/benchmark",title:"Benchmarking",description:"If you have a function that you believe is slow, you can benchmark it to find any bottlenecks like this:",source:"@site/docs/reactotron/plugins/benchmark.md",sourceDirName:"reactotron/plugins",slug:"/reactotron/plugins/benchmark",permalink:"/reactotron/plugins/benchmark",draft:!1,tags:[],version:"current",frontMatter:{title:"Benchmarking"},sidebar:"Reactotron",previous:{title:"AsyncStorage",permalink:"/reactotron/plugins/async-storage"},next:{title:"Mobx State Tree",permalink:"/reactotron/plugins/mst"}},s={},l=[{value:"Usage",id:"usage",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"benchmarking"},"Benchmarking"),(0,o.kt)("p",null,"If you have a function that you believe is slow, you can benchmark it to find any bottlenecks like this:"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Reactotron from "reactotron-react-native"\n\nfunction slowFunction() {\n  const bench = Reactotron.benchmark("slow function benchmark")\n\n  // Code that does thing A\n  bench.step("Thing A")\n\n  // Code that does thing B\n  bench.step("Thing B")\n\n  // Code that does thing C\n  bench.stop("Thing C")\n}\n')),(0,o.kt)("p",null,"Note that the last call is to ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"step"),"! This is important, otherwise the benchmark results won't display in Reactotron."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"slowFunction")," is invoked, Reactotron should show something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Benchmarking Output",src:n(3997).Z,width:"1212",height:"412"})),(0,o.kt)("p",null,"Tips: Time bar ",(0,o.kt)("inlineCode",{parentName:"p"},"Thing B")," is the code execution time from ",(0,o.kt)("inlineCode",{parentName:"p"},'bench.step("Thing A")')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'bench.step("Thing B")'),"."))}m.isMDXComponent=!0},3997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/benchmark-output-ccaa1e1817aaa02a08e099e744f99a14.png"}}]);