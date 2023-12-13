"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[3321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:90},r="Navigation in Ignite",s={unversionedId:"ignite-cli/concept/Navigation",id:"ignite-cli/concept/Navigation",title:"Navigation in Ignite",description:"We use React Navigation v6 in the current version of Ignite. You'll find any navigators in ./app/navigators, with the AppNavigator.tsx being the primary one.",source:"@site/docs/ignite-cli/concept/Navigation.md",sourceDirName:"ignite-cli/concept",slug:"/ignite-cli/concept/Navigation",permalink:"/ignite-cli/concept/Navigation",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"Ignite",previous:{title:"Styling Ignite apps",permalink:"/ignite-cli/concept/Styling"},next:{title:"Testing Ignite Apps",permalink:"/ignite-cli/concept/Testing"}},l={},c=[{value:"General Structure",id:"general-structure",level:2},{value:"Useful Patterns",id:"useful-patterns",level:2},{value:"Authentication Flow",id:"authentication-flow",level:3},{value:"Tab Navigation",id:"tab-navigation",level:3},{value:"Sidebar Navigation",id:"sidebar-navigation",level:3},{value:"Utility Functions",id:"utility-functions",level:2},{value:"<code>getActiveRouteName</code>",id:"getactiveroutename",level:3},{value:"<code>useBackButtonHandler</code>",id:"usebackbuttonhandler",level:3},{value:"<code>useNavigationPersistence</code>",id:"usenavigationpersistence",level:3},{value:"More Examples",id:"more-examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"navigation-in-ignite"},"Navigation in Ignite"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/getting-started/"},"React Navigation v6")," in the current version of Ignite. You'll find any navigators in ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/navigators"),", with the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator.tsx")," being the primary one."),(0,i.kt)("p",null,"There's also a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationUtilities.tsx")," file which provides some utility functions we find useful in building apps, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"getActiveRouteName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useBackButtonHandler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigationPersistence"),"."),(0,i.kt)("p",null,"There's a provided Ignite CLI generator for creating new navigators. Learn more in the ",(0,i.kt)("a",{parentName:"p",href:"/ignite-cli/concept/Generators#navigator-generator"},"Generator docs"),"."),(0,i.kt)("h2",{id:"general-structure"},"General Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<AppNavigator initialState={initialNavigationState} onStateChange={onNavigationStateChange} />\n")),(0,i.kt)("p",null,"If you open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"app/navigators/AppNavigator.tsx")," up, you'll find the AppNavigator and the AppStack."),(0,i.kt)("p",null,"The AppNavigator is the root navigator for your whole app. It will have the navigation container and wrap the AppStack."),(0,i.kt)("p",null,"The AppStack is a native stack navigator (via ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator"},"React Navigation"),") and contains all the screens and subnavigators of your app."),(0,i.kt)("p",null,"In the case of Ignite's demo code, it is prepared with an example flow for an app requiring authentication. The screens included within the AppStack are dependent on value of ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationStore"),". If in an unauthenticated state, the only screen to be shown will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginScreen"),". Otherwise, that screen is left out of the navigator and the user is presented with the ",(0,i.kt)("inlineCode",{parentName:"p"},"WelcomeScreen")," and screens that fall under the ",(0,i.kt)("inlineCode",{parentName:"p"},"DemoNavigator")),(0,i.kt)("h2",{id:"useful-patterns"},"Useful Patterns"),(0,i.kt)("p",null,"We've found that there are some useful patterns for building navigators in React Native."),(0,i.kt)("h3",{id:"authentication-flow"},"Authentication Flow"),(0,i.kt)("p",null,"We recommend following the guidance of ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/auth-flow/"},"React Navigation's Authentication Flows")," and Ignite comes bootstrapped with this pattern in its demo code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const AppStack = observer(function AppStack() {\n  const {\n    authenticationStore: { isAuthenticated },\n  } = useStores()\n\n  return (\n    <Stack.Navigator\n      screenOptions={{ headerShown: false }}\n      initialRouteName={isAuthenticated ? "Welcome" : "Login"}\n    >\n      {isAuthenticated ? (\n        <>\n          <Stack.Screen name="Welcome" component={WelcomeScreen} />\n          <Stack.Screen name="Demo" component={DemoNavigator} />\n        </>\n      ) : (\n        <>\n          <Stack.Screen name="Login" component={LoginScreen} />\n        </>\n      )}\n    </Stack.Navigator>\n  )\n})\n')),(0,i.kt)("p",null,"The screens included within the AppStack are dependent on value of ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationStore"),". If the user hasn't been authenticated yet, the only screen to be shown will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginScreen"),"."),(0,i.kt)("p",null,"When authenticated, ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginScreen")," is left out of the navigator and the user is presented with the ",(0,i.kt)("inlineCode",{parentName:"p"},"WelcomeScreen")," and screens that fall under the ",(0,i.kt)("inlineCode",{parentName:"p"},"DemoNavigator")),(0,i.kt)("h3",{id:"tab-navigation"},"Tab Navigation"),(0,i.kt)("p",null,"We recommend using the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/tab-based-navigation/"},"React Navigation Tabs")," for tabs."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/navigators/DemoNavigator.tsx")," you'll see the definition of the bottom tab navigator. Here is where you can customize the style and behavior of the tab bar itself, as well as each individual tab."),(0,i.kt)("p",null,"In addition to the user pressing the tab buttons, you may also navigate from tab to tab programmatically via the same familiar navigation API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// currently on the DemoShowroom tab, navigate to the DemoDebug tab\nnavigation.navigate("DemoDebug")\n')),(0,i.kt)("p",null,"Tabs can jump to a single screen (as seen in Ignite's demo code) or another stack navigator comprised of many screens the user could navigate through within the same tab. Let's use a message inbox as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const InboxStack = createNativeStackNavigator()\n\nfunction InboxStackScreen() {\n  return (\n    <InboxStack.Navigator>\n      <InboxStack.Screen name="List" component={ListScreen} />\n      <InboxStack.Screen name="MessageDetails" component={MessageDetailsScreen} />\n    </InboxStack.Navigator>\n  )\n}\n')),(0,i.kt)("p",null,"A tab could be added to the tab navigator as a child component."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<Tab.Screen name="Inbox" component={InboxStackScreen} />')),(0,i.kt)("p",null,"This would initially display the ",(0,i.kt)("inlineCode",{parentName:"p"},"ListScreen")," with all of the messages and if the user happened to press a list item, the app would then navigate to a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageDetailsScreen"),"."),(0,i.kt)("h3",{id:"sidebar-navigation"},"Sidebar Navigation"),(0,i.kt)("p",null,'Ignite comes with an example sidebar navigation, aka "drawer" navigator. It is implemented using the ',(0,i.kt)("inlineCode",{parentName:"p"},"DrawerLayout")," from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/drawer-layout/"},"React Native Gesture Handler"),", a cross-platform replacement for ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/drawerlayoutandroid.html"},"React Native's DrawerLayoutAndroid"),"."),(0,i.kt)("p",null,"The view passed via ",(0,i.kt)("inlineCode",{parentName:"p"},"renderNavigationView")," prop is the content rendered to the side of the screen, which can be pulled in or opened by the toggle button press. Here is where you can render header information (perhaps a company logo or logged in user avatar along with labels), menu items, logout or settings functionality and more."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DrawerLayout")," also allows you to customize the behavior (open/close speed, overlay position), style and even has events to track the progress and states of the drawer transitioning. See more info at the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/drawer-layout/"},"documentation"),"."),(0,i.kt)("h2",{id:"utility-functions"},"Utility Functions"),(0,i.kt)("h3",{id:"getactiveroutename"},(0,i.kt)("inlineCode",{parentName:"h3"},"getActiveRouteName")),(0,i.kt)("p",null,"This helper allows you to fetch the active route name from your navigator. It will recursively dive into nested routers. It takes the current navigation state (via ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.getState()"),") and returns a string."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// nested navigators, 2-deep\nconst NestedStack = () => {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="myScreen" component={MyScreen} />\n    </Stack.Navigator>\n  )\n}\n\nconst AppStack = () => {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="nestedNav" component={NestedStack} />\n    </Stack.Navigator>\n  )\n}\n\n// getActiveRouteName usage\nfunction MyScreen({ navigation }) {\n  const routeName = getActiveRouteName(navigation.getState())\n  // => "myScreen"\n}\n')),(0,i.kt)("h3",{id:"usebackbuttonhandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"useBackButtonHandler")),(0,i.kt)("p",null,'This helper custom hook allows you to easily specify what routes you want to exit the app from, when the "back" button is pressed on Android. It has no effect on iOS.'),(0,i.kt)("p",null,"We recommend using this in your root AppNavigator."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export const AppNavigator = (props) => {\n  // What route names do we allow the back button to exit the app from?\n  const exitRoutes = ["welcome"]\n  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))\n\n  // ...\n}\n')),(0,i.kt)("h3",{id:"usenavigationpersistence"},(0,i.kt)("inlineCode",{parentName:"h3"},"useNavigationPersistence")),(0,i.kt)("p",null,"This helper custom hook persists app navigation state between app loads. This is only enabled in dev by default, but can be enabled in production as well by editing the hook in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationUtilities.tsx"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as storage from "./utils/storage"\n\nfunction App(props: AppProps) {\n  const persistence = useNavigationPersistence(storage, "my-persistence-key")\n  const { initialNavigationState, onNavigationStateChange, isRestored } = persistence\n\n  // wait for the navigation state to restore\n  // `null` will show the background color\n  // can replace with <LoadingScreen /> or similar if you want\n  if (!isRestored) return null\n\n  return (\n    <AppNavigator\n      // initial navigation state is fetched from storage\n      initialState={initialNavigationState}\n      // persist changes to storage\n      onStateChange={onNavigationStateChange}\n    />\n  )\n}\n')),(0,i.kt)("h2",{id:"more-examples"},"More Examples"),(0,i.kt)("p",null,"TODO: Ignite cookbook examples coming soon!"))}d.isMDXComponent=!0}}]);