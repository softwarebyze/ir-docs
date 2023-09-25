"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[8638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Filesystem"},i=void 0,s={unversionedId:"newgun/Toolbox/toolbox-filesystem",id:"newgun/Toolbox/toolbox-filesystem",title:"Filesystem",description:"A set of functions & values to work with files and directories. The majority of these functions come",source:"@site/docs/newgun/Toolbox/toolbox-filesystem.md",sourceDirName:"newgun/Toolbox",slug:"/newgun/Toolbox/toolbox-filesystem",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-filesystem",draft:!1,tags:[],version:"current",frontMatter:{title:"Filesystem"},sidebar:"newgun",previous:{title:"Config",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-config"},next:{title:"http",permalink:"/ir-docs/docs/newgun/Toolbox/toolbox-http"}},l={},p=[{value:"separator",id:"separator",level:2},{value:"eol",id:"eol",level:2},{value:"homedir",id:"homedir",level:2},{value:"subdirectories",id:"subdirectories",level:2},{value:"append",id:"append",level:2},{value:"chmodSync",id:"chmodsync",level:2},{value:"copy",id:"copy",level:2},{value:"cwd",id:"cwd",level:2},{value:"dir",id:"dir",level:2},{value:"exists",id:"exists",level:2},{value:"file",id:"file",level:2},{value:"find",id:"find",level:2},{value:"inspect",id:"inspect",level:2},{value:"inspectTree",id:"inspecttree",level:2},{value:"list",id:"list",level:2},{value:"move",id:"move",level:2},{value:"path",id:"path",level:2},{value:"read",id:"read",level:2},{value:"remove",id:"remove",level:2},{value:"rename",id:"rename",level:2},{value:"resolve",id:"resolve",level:2},{value:"symlink",id:"symlink",level:2},{value:"write",id:"write",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A set of functions & values to work with files and directories. The majority of these functions come\nstraight from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack"},"fs-jetpack"),", a fantastic API for working with the\nfile system. All jetpack-based functions have an equivalent ",(0,n.kt)("inlineCode",{parentName:"p"},"*Async")," version if you need it."),(0,n.kt)("p",null,"You can access these tools on the Gluegun toolbox, via ",(0,n.kt)("inlineCode",{parentName:"p"},"const { filesystem } = require('gluegun')"),", or directly via ",(0,n.kt)("inlineCode",{parentName:"p"},"const { filesystem } = require('gluegun/filesystem')"),"."),(0,n.kt)("h2",{id:"separator"},"separator"),(0,n.kt)("p",null,"This value is the path separator ",(0,n.kt)("inlineCode",{parentName:"p"},"\\")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," depending on the OS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"toolbox.filesystem.separator // '/' on posix but '\\' on windows\n")),(0,n.kt)("h2",{id:"eol"},"eol"),(0,n.kt)("p",null,"This value is the end of line byte sequence."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"toolbox.filesystem.eol // '\\n' on posix but '\\r\\n' on windows\n")),(0,n.kt)("h2",{id:"homedir"},"homedir"),(0,n.kt)("p",null,"This function retrieves the path to the home directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"toolbox.filesystem.homedir() // '/Users/jh' on my macOS machine\n")),(0,n.kt)("h2",{id:"subdirectories"},"subdirectories"),(0,n.kt)("p",null,"Finds the immediate subdirectories in a given directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"toolbox.filesystem.subdirectories(`~/Desktop`) // []\n")),(0,n.kt)("h2",{id:"append"},"append"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#appendpath-data-options"},"Appends")," data to the end of a file."),(0,n.kt)("h2",{id:"chmodsync"},"chmodSync"),(0,n.kt)("p",null,"Changes directory ownership. See more in the ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode"},"fs documentation"),"."),(0,n.kt)("h2",{id:"copy"},"copy"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#copyfrom-to-options"},"Copies")," a file or a directory."),(0,n.kt)("h2",{id:"cwd"},"cwd"),(0,n.kt)("p",null,"Gets the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#createreadstreampath-options"},"current working directory"),"."),(0,n.kt)("h2",{id:"dir"},"dir"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#dirpath-criteria"},"Ensures a directory exists")," and creates a new jetpack\ninstance with it's ",(0,n.kt)("inlineCode",{parentName:"p"},"cwd")," pointing there."),(0,n.kt)("h2",{id:"exists"},"exists"),(0,n.kt)("p",null,"Checks to see if file or directory ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#existspath"},"exists"),"."),(0,n.kt)("h2",{id:"file"},"file"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#filepath-criteria"},"Ensures a file exists"),"."),(0,n.kt)("h2",{id:"find"},"find"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#findpath-searchoptions"},"Finds")," files or directories."),(0,n.kt)("h2",{id:"inspect"},"inspect"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#inspectpath-options"},"Grabs information")," about a file or directory."),(0,n.kt)("h2",{id:"inspecttree"},"inspectTree"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#inspecttreepath-options"},"Grabs nested information")," about a set of files or directories."),(0,n.kt)("h2",{id:"list"},"list"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#listpath"},"Gets a directory listing"),", like ",(0,n.kt)("inlineCode",{parentName:"p"},"ls"),"."),(0,n.kt)("h2",{id:"move"},"move"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#movefrom-to"},"Moves")," files and directories."),(0,n.kt)("h2",{id:"path"},"path"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#pathparts"},"Grabs path parts")," as a string."),(0,n.kt)("h2",{id:"read"},"read"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#readpath-returnas"},"Reads")," the contents of a file as a string or JSON."),(0,n.kt)("h2",{id:"remove"},"remove"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#removepath"},"Deletes")," a file or directory."),(0,n.kt)("h2",{id:"rename"},"rename"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#renamepath-newname"},"Renames")," a file or directory."),(0,n.kt)("h2",{id:"resolve"},"resolve"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths"},"Resolves")," a sequence of paths or path segments into an absolute path."),(0,n.kt)("h2",{id:"symlink"},"symlink"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#symlinksymlinkvalue-path"},"Makes a symbolic link")," to a file or directory."),(0,n.kt)("h2",{id:"write"},"write"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/szwacz/fs-jetpack#writepath-data-options"},"Writes")," data to a file."))}u.isMDXComponent=!0}}]);