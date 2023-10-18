"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[7819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"Getting Started"},l="react-native-mlkit-image-labeling",o={unversionedId:"react-native-mlkit/image-labeling/index",id:"react-native-mlkit/image-labeling/index",title:"Getting Started",description:"This is the introduction to the documentation.",source:"@site/docs/react-native-mlkit/image-labeling/index.md",sourceDirName:"react-native-mlkit/image-labeling",slug:"/react-native-mlkit/image-labeling/",permalink:"/react-native-mlkit/image-labeling/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"React Native MLKit",previous:{title:"Image Labeling",permalink:"/category/image-labeling"},next:{title:"Image Labeler Options",permalink:"/react-native-mlkit/image-labeling/image-labeler-options"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Components &amp; Hooks",id:"components--hooks",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-native-mlkit-image-labeling"},"react-native-mlkit-image-labeling"),(0,i.kt)("p",null,"This is the introduction to the documentation."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"react-native-mlkit-image-labeling")," provides utilities for image classification using ML Kit in React Native\napps. It allows for the classification of images to determine their content, such as identifying if an image is NSFW.\n\u2022"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @infinitered/react-native-mlkit-image-labeling\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Import necessary hooks and types:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  useImageLabeler,\n  ClassificationResult,\n  AssetRecord,\n} from "@infinitered/react-native-mlkit-image-labeling";\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Define your model and options:")),(0,i.kt)("p",null,"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetRecord")," which identifies the model file and set the options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const MODELS: AssetRecord = {\n  nsfw: {\n    model: require("./path/to/model.tflite"),\n    options: {\n      maxResultCount: 5,\n      confidenceThreshold: 0,\n    },\n  },\n};\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Using the image labeler in your component:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Initialize the image labeler for a specific model."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const model = useImageLabeler("nsfw");\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Classify an image by passing its URI."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const classificationResult = await model.classifyImage(image.uri);\n")))),(0,i.kt)("h2",{id:"components--hooks"},"Components & Hooks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"useImageLabeler(modelName: string)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Returns an instance of the image labeler for the specified model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modelName"),": The name of the model as defined in your ",(0,i.kt)("inlineCode",{parentName:"li"},"MODELS")," object."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ClassificationResult")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type definition for the result of the image classification. It includes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),": Label of the classification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"confidence"),": A decimal value between 0 and 1 indicating the confidence level of the classification.")))))))}u.isMDXComponent=!0}}]);