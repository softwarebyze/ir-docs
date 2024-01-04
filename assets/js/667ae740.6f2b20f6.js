"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[1797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(i,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:31},l="Button",s={unversionedId:"ignite-cli/boilerplate/components/Button",id:"ignite-cli/boilerplate/components/Button",title:"Button",description:"The Button component is a wrapper around the Pressable component. Any prop that can be passed to Pressable can be passed to Button and it will be forwarded. Button renders a button with given text in a Text component or children. It allows you to specify the preset style of the button, you can override both the Pressable and Text styles.",source:"@site/docs/ignite-cli/boilerplate/components/Button.md",sourceDirName:"ignite-cli/boilerplate/components",slug:"/ignite-cli/boilerplate/components/Button",permalink:"/ignite-cli/boilerplate/components/Button",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"Ignite",previous:{title:"AutoImage",permalink:"/ignite-cli/boilerplate/components/AutoImage"},next:{title:"Card",permalink:"/ignite-cli/boilerplate/components/Card"}},i={},p=[{value:"Props",id:"props",level:2},{value:"<code>text</code>",id:"text",level:3},{value:"<code>tx</code>",id:"tx",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"<code>preset</code>",id:"preset",level:3},{value:"<code>textStyle</code>",id:"textstyle",level:3},{value:"<code>pressedTextStyle</code>",id:"pressedtextstyle",level:3},{value:"<code>disabledTextStyle</code>",id:"disabledtextstyle",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>pressedStyle</code>",id:"pressedstyle",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>LeftAccessory</code> and <code>RightAccessory</code>",id:"leftaccessory-and-rightaccessory",level:3},{value:"<code>disabled</code>",id:"disabled",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"button"},"Button"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," component is a wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},(0,r.kt)("inlineCode",{parentName:"a"},"Pressable"))," component. Any prop that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," and it will be forwarded. ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," renders a button with given text in a ",(0,r.kt)("a",{parentName:"p",href:"/ignite-cli/boilerplate/components/Text"},(0,r.kt)("inlineCode",{parentName:"a"},"Text"))," component or children. It allows you to specify the preset style of the button, you can override both the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," styles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button\n  text="Click It"\n  tx="button.clickIt"\n  preset="default"\n  onPress={() => Alert.alert("pressed")}\n  style={[{ paddingVertical: 100 }, { borderRadius: 0 }]}\n  pressedStyle={[{ backgroundColor: "red" }, { borderRadius: 0 }]}\n  textStyle={[{ fontSize: 20 }, { color: "#a511dc" }]}\n  pressedTextStyle={[{ fontSize: 20 }, { color: "#a51111" }]}\n  RightAccessory={(props) => <Icon icon="check" />}\n  LeftAccessory={(props) => <Icon icon="close" />}\n/>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"text"},(0,r.kt)("inlineCode",{parentName:"h3"},"text")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," prop is required if ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," are not provided. This is the text to be rendered in the button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button text="Click me" />\n')),(0,r.kt)("h3",{id:"tx"},(0,r.kt)("inlineCode",{parentName:"h3"},"tx")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," prop is required if ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," are not provided. This is the translation key to be used to translate the text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button tx="button.clickMe" />\n')),(0,r.kt)("h3",{id:"children"},(0,r.kt)("inlineCode",{parentName:"h3"},"children")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop is required if no ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," prop is passed. This is the content to be rendered in the button in place of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Button>\n  <Text>Click me</Text>\n</Button>\n")),(0,r.kt)("h3",{id:"preset"},(0,r.kt)("inlineCode",{parentName:"h3"},"preset")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," prop is optional. This is the preset style of the button. It can be one of the following built-in options: ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filled"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button preset="default" tx="button.clickMe" />\n')),(0,r.kt)("p",null,"To make a custom preset, add a key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$viewPresets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$textPresets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$pressedViewPresets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$pressedTextPresets")," objects in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/components/Button.tsx")," and then pass the name of the preset to the ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const $viewPresets = {\n  // ...\n  danger: [$baseViewStyle, { backgroundColor: colors.palette.angry500 }] as StyleProp<ViewStyle>,\n}\n\nconst $textPresets: Record<Presets, StyleProp<TextStyle>> = {\n  // ...\n  danger: [$baseTextStyle, { color: colors.palette.angry500 }] as StyleProp<TextStyle>,\n}\n\nconst $pressedViewPresets: Record<Presets, StyleProp<ViewStyle>> = {\n  // ...\n  danger: { backgroundColor: colors.palette.angry500 },\n}\n\nconst $pressedTextPresets: Record<Presets, StyleProp<TextStyle>> = {\n  angry: { opacity: 0.7 },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button preset="danger" text="Delete" />\n')),(0,r.kt)("h3",{id:"textstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"textStyle")," prop is optional. This can be used to style text in the button. Values passed here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button textStyle={{ fontSize: 20, color: "#a511dc" }} />\n')),(0,r.kt)("h3",{id:"pressedtextstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"pressedTextStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pressedTextStyle")," prop is optional. This can be used to style text in the button when it is pressed. Values passed here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button pressedTextStyle={{ fontSize: 20, color: "#a51111" }} />\n')),(0,r.kt)("h3",{id:"disabledtextstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledTextStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"disabledTextStyle")," prop is optional. It can be used to style text in the button when the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop is set. Values here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button disabled disabledTextStyle={{ fontSize: 20, color: "#000000" }} />\n')),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop is optional. This can be used to style the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),". Values passed here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Button style={{ paddingVertical: 20, borderRadius: 10 }}>\n")),(0,r.kt)("h3",{id:"pressedstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"pressedStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pressedStyle")," prop is optional. This can be used to style the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," when it is pressed. Values passed here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button pressedStyle={{ backgroundColor: "red" }} />\n')),(0,r.kt)("h3",{id:"disabledstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"disabledStyle")," prop is optional. This can be used to style the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," component of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," when the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop is truthy. Values passed here will override anything set in the preset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Button disabledStyle={{ opacity: 0.5 }} />\n")),(0,r.kt)("h3",{id:"leftaccessory-and-rightaccessory"},(0,r.kt)("inlineCode",{parentName:"h3"},"LeftAccessory")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"RightAccessory")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftAccessory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RightAccessory")," props are optional. They can be used to render an accessory on the left or right side of the button. It can be a React component or a function that returns a React component. The accessory component will receive the pressed state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"pressableState")," prop, so you can make a custom accessory component render differently when pressed. Additionally, you can utilize the default accessory styles via the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button\n  LeftAccessory={(props) => (\n    <Icon containerStyle={props.style} size={props.pressableState.pressed ? 50 : 40} icon="check" />\n  )}\n/>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button\n  RightAccessory={(props) => (\n    <Icon containerStyle={props.style} size={props.pressableState.pressed ? 50 : 40} icon="check" />\n  )}\n/>\n')),(0,r.kt)("p",null,"If the accessories flicker when some prop or state changes, you can memoize the accessory with ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button\n  LeftAccessory={useMemo(\n    () =>\n      function LeftIcon(props: ButtonAccessoryProps) {\n        return <Icon icon={props.pressableState.pressed ? "view" : "hidden"} />\n      },\n    [],\n  )}\n/>\n')),(0,r.kt)("h3",{id:"disabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop is optional. It gets passed to the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," component. When truthy, it will ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable#disabled"},"disable the press behavior on the pressable"),". It will also update the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/0.72/touchablewithoutfeedback#accessibilitystate"},(0,r.kt)("inlineCode",{parentName:"a"},"accessibilityState"))," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pressable")," when set."),(0,r.kt)("p",null,"This prop will be passed down to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftAccessory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RightAccessory")," components, if they exist, and will cause the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabledStyle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"disabledTextStyle")," props to be used, if they have been set."))}u.isMDXComponent=!0}}]);