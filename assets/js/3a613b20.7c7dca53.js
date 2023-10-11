"use strict";(self.webpackChunkir_docs=self.webpackChunkir_docs||[]).push([[6165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||d[c]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<a;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(7462),i=(n(7294),n(3905));const a={},r="Making a Movie CLI",l={unversionedId:"gluegun/ir-docs/tutorials/making-a-movie-cli",id:"gluegun/ir-docs/tutorials/making-a-movie-cli",title:"Making a Movie CLI",description:"You can see the latest version of the result of this tutorial on Github at https://github.com/infinitered/tutorial-movie!",source:"@site/docs/gluegun/ir-docs/tutorials/making-a-movie-cli.md",sourceDirName:"gluegun/ir-docs/tutorials",slug:"/gluegun/ir-docs/tutorials/making-a-movie-cli",permalink:"/docs/gluegun/ir-docs/tutorials/making-a-movie-cli",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Gluegun",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Making a plugin for your Gluegun-powered CLI",permalink:"/docs/gluegun/ir-docs/tutorials/making-a-plugin"}},s={},m=[{value:"Generate a new CLI",id:"generate-a-new-cli",level:2},{value:"Connect to IMDB&#39;s API",id:"connect-to-imdbs-api",level:2},{value:"Create an extension",id:"create-an-extension",level:2},{value:"Create a command",id:"create-a-command",level:2},{value:"Save the API key",id:"save-the-api-key",level:2},{value:"Add another command",id:"add-another-command",level:2},{value:"Additional Exercises",id:"additional-exercises",level:2},{value:"Notes",id:"notes",level:2}],u={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-a-movie-cli"},"Making a Movie CLI"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You can see the latest version of the result of this tutorial on Github at ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/infinitered/tutorial-movie"},"https://github.com/infinitered/tutorial-movie"),"!")),(0,i.kt)("p",null,"In this tutorial, we'll make a Gluegun-powered command-line interface called ",(0,i.kt)("inlineCode",{parentName:"p"},"movie"),". Before doing this tutorial, make sure you've followed the installation instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/gluegun/ir-docs/getting-started"},"Getting Started"),". We will also be using ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," in this tutorial rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," if you want."),(0,i.kt)("h2",{id:"generate-a-new-cli"},"Generate a new CLI"),(0,i.kt)("p",null,"At your terminal prompt, run the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ gluegun new movie --typescript\n\nGenerated movie CLI.\n\nNext:\n  $ cd movie\n  $ yarn link\n  $ movie\n\n$ cd movie\n$ yarn link\n$ movie --help\n\nmovie version 0.0.1\n\n  version (v)    -\n  help (h)       -\n  generate (g)   -\n  movie          -\n")),(0,i.kt)("p",null,"At this point, open the folder in your editor. You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1479215/36636025-dd2d7c94-1972-11e8-9a5b-344a97f6ddf3.png",alt:"image of editor with movie CLI source"})),(0,i.kt)("h2",{id:"connect-to-imdbs-api"},"Connect to IMDB's API"),(0,i.kt)("p",null,"We want to hook into IMDB's API to find information about movies and actors. Luckily, there's a nice little ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/worr/node-imdb-api"},"NPM package")," for that!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add imdb-api\n")),(0,i.kt)("p",null,"In order to use the API, you'll need an API key. We are not going to hard-code our API key into the CLI source. Instead, we'll ask the user for an API key and then store it locally."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You can get a free API key (with a 1,000/day limit) ",(0,i.kt)("a",{parentName:"em",href:"http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct"},"here from OMDB"),". Don't forget to click the link in the email to activate it!")),(0,i.kt)("h2",{id:"create-an-extension"},"Create an extension"),(0,i.kt)("p",null,"In your CLI's ",(0,i.kt)("inlineCode",{parentName:"p"},"src/extensions")," folder, make a new file, called ",(0,i.kt)("inlineCode",{parentName:"p"},"imdb-extension.ts"),". Here's the source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// in src/extensions/imdb-extension.ts\nimport { GluegunToolbox } from 'gluegun'\nimport * as imdb from 'imdb-api'\n\nmodule.exports = (toolbox: GluegunToolbox) => {\n  // grab the prompt tool from our toolbox\n  const { prompt } = toolbox\n\n  // get a movie\n  async function getMovie(name: string): Promise<imdb.Movie | null> {\n    const result = await prompt.ask({\n      type: 'input',\n      name: 'key',\n      message: 'API Key>',\n    })\n\n    if (result.key) return imdb.get({ name }, { apiKey: result.key, timeout: 30000 })\n  }\n\n  // attach our tools to the toolbox\n  toolbox.imdb = { getMovie }\n}\n")),(0,i.kt)("p",null,"The source is commented, so read through it. We define the ",(0,i.kt)("inlineCode",{parentName:"p"},"getMovie")," function in the extension and then attach a new object to the toolbox that will contain the function (and any future ones we make). This will be available to any commands we make."),(0,i.kt)("h2",{id:"create-a-command"},"Create a command"),(0,i.kt)("p",null,"Now that we have the tools, let's build a command. We want to be able to search for a movie and display information about it, something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ movie search "The Road"\n')),(0,i.kt)("p",null,"If they don't provide the movie title, we'll prompt them for it. We'll also prompt them for the API key."),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands/search.ts")," and put the following contents into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GluegunToolbox } from 'gluegun'\n\nmodule.exports = {\n  name: 'search',\n  alias: ['s'],\n  description: 'Searches for and displays information about a movie',\n  run: async (toolbox: GluegunToolbox) => {\n    // retrieve the tools from the toolbox that we will need\n    const { parameters, print, prompt, imdb } = toolbox\n\n    // check if there's a name provided on the command line first\n    let name = parameters.first\n\n    // if not, let's prompt the user for one and then assign that to `name`\n    if (!name) {\n      const result = await prompt.ask({\n        type: 'input',\n        name: 'name',\n        message: 'What movie?',\n      })\n      if (result && result.name) name = result.name\n    }\n\n    // if they didn't provide one, we error out\n    if (!name) {\n      print.error('No movie name specified!')\n      return\n    }\n\n    // now retrieve the info from IMDB\n    const movie = await imdb.getMovie(name)\n    if (!movie) {\n      print.error(`Couldn't find that movie, sorry!`)\n      return\n    }\n\n    // success! We have movie info. Print it out on the screen\n    print.debug(movie)\n  },\n}\n")),(0,i.kt)("p",null,"The command is well commented, so read through those to see what we're doing. Notice that we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"imdb.getMovie")," function that we created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"imdb-extension.ts")," extension prior to this."),(0,i.kt)("p",null,"Run it on the command line and search for a movie. You'll notice that the extension asks for an API key -- enter the one you got from OMDB there."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u276f movie search                                                                                                        \u2731\n? What movie? The Room\nAPI KEY>  <ENTER YOUR API KEY HERE>\n")),(0,i.kt)("p",null,"If you did it right, you should get something like the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"vvv -----[ DEBUG ]----- vvv\nMovie {\n  title: 'The Room',\n  _year_data: '2003',\n  year: 2003,\n  rated: 'R',\n  released: 2004-03-03T08:00:00.000Z,\n  runtime: '99 min',\n  genres: 'Drama',\n  director: 'Tommy Wiseau',\n  writer: 'Tommy Wiseau',\n  actors: 'Tommy Wiseau, Greg Sestero, Juliette Danielle, Philip Haldiman',\n  plot: 'In San Francisco, we follow Johnny, a man who has a girlfriend, Lisa, and also his best friend, Mark. Lisa has been cheating on Johnny with Mark and Johnny doesn\\'t know! Will Johnny ever find out? Will Mark still be Johnny\\'s best friend?',\n  languages: 'English',\n  country: 'USA',\n  awards: '1 win.',\n  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MTU1MzgwOV5BMl5BanBnXkFtZTcwNjM1MTAwMQ@@._V1_SX300.jpg',\n  ratings:\n   [ { Source: 'Internet Movie Database', Value: '3.6/10' },\n     { Source: 'Rotten Tomatoes', Value: '26%' },\n     { Source: 'Metacritic', Value: '9/100' } ],\n  metascore: '9',\n  rating: '3.6',\n  votes: '56,264',\n  imdbid: 'tt0368226',\n  type: 'movie',\n  dvd: '17 Dec 2005',\n  boxoffice: 'N/A',\n  production: 'Chloe Productions',\n  website: 'http://theroommovie.com/',\n  response: 'True',\n  series: false,\n  imdburl: 'https://www.imdb.com/title/tt0368226' }\n^^^ -----[ DEBUG ]----- ^^^\n")),(0,i.kt)("p",null,"Success!"),(0,i.kt)("h2",{id:"save-the-api-key"},"Save the API key"),(0,i.kt)("p",null,"We don't want to ask the user for an API key every time. So, if it's a valid API key, we want to save it to the user's filesystem and retrieve it on every load."),(0,i.kt)("p",null,"We also don't want to be asking for user input in our ",(0,i.kt)("em",{parentName:"p"},"extension"),". That's the role of the ",(0,i.kt)("em",{parentName:"p"},"command"),". (Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/gluegun/ir-docs/guides/architecture"},"Guide: Architecting Your Gluegun CLI"),".)"),(0,i.kt)("p",null,"Let's go back to our IMDB extension and add a few tools. Here's the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GluegunToolbox } from 'gluegun'\nimport * as imdb from 'imdb-api'\n\nmodule.exports = (toolbox: GluegunToolbox) => {\n  const { filesystem } = toolbox\n\n  // location of the movie config file\n  const MOVIE_CONFIG = `${filesystem.homedir()}/.movie`\n\n  // memoize the API key once we retrieve it\n  let imdbKey: string | false = false\n\n  // get the API key\n  async function getApiKey(): Promise<string | false> {\n    // if we've already retrieved it, return that\n    if (imdbKey) return imdbKey\n\n    // get it from the config file?\n    imdbKey = await readApiKey()\n\n    // return the key\n    return imdbKey\n  }\n\n  // read an existing API key from the `MOVIE_CONFIG` file, defined above\n  async function readApiKey(): Promise<string | false> {\n    return filesystem.exists(MOVIE_CONFIG) && filesystem.readAsync(MOVIE_CONFIG)\n  }\n\n  // save a new API key to the `MOVIE_CONFIG` file\n  async function saveApiKey(key): Promise<void> {\n    return filesystem.writeAsync(MOVIE_CONFIG, key)\n  }\n\n  // get a movie\n  async function getMovie(name: string): Promise<imdb.Movie | null> {\n    const key = await getApiKey()\n    if (key) return imdb.get({ name }, { apiKey: key, timeout: 30000 })\n  }\n\n  // attach our tools to the toolbox\n  toolbox.imdb = { getApiKey, saveApiKey, getMovie }\n}\n")),(0,i.kt)("p",null,"We've added a few functions as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"MOVIE_CONFIG")," file. We're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"filesystem")," tool from Gluegun."),(0,i.kt)("p",null,"Also update your command to ask for the API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GluegunToolbox } from 'gluegun'\nconst API_MESSAGE = `\nBefore using the movie CLI, you'll need an API key from OMDB.\nGo here: http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct\nOnce you have your API key, enter it below.\nAPI KEY>`\n\nmodule.exports = {\n  name: 'search',\n  alias: ['s'],\n  description: 'Searches for and displays information about a movie',\n  run: async (toolbox: GluegunToolbox) => {\n    // retrieve the tools from the toolbox that we will need\n    const { parameters, print, prompt, imdb } = toolbox\n\n    // check if there's a name provided on the command line first\n    let name = parameters.first\n\n    // if not, let's prompt the user for one and then assign that to `name`\n    if (!name) {\n      const result = await prompt.ask({\n        type: 'input',\n        name: 'name',\n        message: 'What movie?',\n      })\n      if (result && result.name) name = result.name\n    }\n\n    // if they didn't provide one, we error out\n    if (!name) {\n      print.error('No movie name specified!')\n      return\n    }\n\n    // check if we have an IMDB API key\n    if ((await imdb.getApiKey()) === false) {\n      // didn't find an API key. let's ask the user for one\n      const result = await prompt.ask({\n        type: 'input',\n        name: 'key',\n        message: API_MESSAGE,\n      })\n\n      // if we received one, save it\n      if (result && result.key) {\n        imdb.saveApiKey(result.key)\n      } else {\n        // no API key, exit\n        return\n      }\n    }\n\n    // now retrieve the info from IMDB\n    const movie = await imdb.getMovie(name)\n    if (!movie) {\n      print.error(`Couldn't find that movie, sorry!`)\n      return\n    }\n\n    // success! We have movie info. Print it out on the screen\n    print.debug(movie)\n  },\n}\n")),(0,i.kt)("p",null,"Running it again will ask for our API key. Subsequent runs won't ask for it anymore, and you should see a ",(0,i.kt)("inlineCode",{parentName:"p"},".movie")," file in your home folder that contains your API key."),(0,i.kt)("h2",{id:"add-another-command"},"Add another command"),(0,i.kt)("p",null,"We want to be able to reset the API key if we need to. Let's create another command for ",(0,i.kt)("inlineCode",{parentName:"p"},"movie api reset"),", located at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/commands/api/reset.ts"),". Add this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GluegunToolbox } from 'gluegun'\nconst CONFIRM_MESSAGE = 'Are you sure you want to reset the IMDB API key?'\n\nmodule.exports = {\n  name: 'reset',\n  run: async (toolbox: GluegunToolbox) => {\n    // retrieve the tools from the toolbox that we will need\n    const { prompt, print, imdb } = toolbox\n\n    // confirmation, because this is destructive\n    if (await prompt.confirm(CONFIRM_MESSAGE)) {\n      // delete the API key\n      await imdb.resetApiKey()\n      print.info('Successfully deleted IMDB API key.')\n    }\n  },\n}\n")),(0,i.kt)("p",null,"We also need to update the imdb extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/extensions/imdb-extension.ts\n\n  // omitted a lot of code ...\n\n  // reset the API key\n  async function resetApiKey(): Promise<void> {\n    await filesystem.removeAsync(MOVIE_CONFIG)\n  }\n\n  // attach our tools to the toolbox\n  toolbox.imdb = { getApiKey, saveApiKey, getMovie, resetApiKey }\n}\n")),(0,i.kt)("p",null,"At the command line, run ",(0,i.kt)("inlineCode",{parentName:"p"},"movie api reset")," and you should see the prompt to delete the key."),(0,i.kt)("h2",{id:"additional-exercises"},"Additional Exercises"),(0,i.kt)("p",null,"As additional exercises, try doing these things with your new CLI:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show a customized help screen with ",(0,i.kt)("inlineCode",{parentName:"li"},"movie help"),". (Hint: add a ",(0,i.kt)("inlineCode",{parentName:"li"},"src/commands/help.ts")," and remove the ",(0,i.kt)("inlineCode",{parentName:"li"},".help()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/cli.ts"),")"),(0,i.kt)("li",{parentName:"ol"},"Show nicer output from the ",(0,i.kt)("inlineCode",{parentName:"li"},"search.js")," command. (Hint: replace ",(0,i.kt)("inlineCode",{parentName:"li"},"print.debug(movie)")," with a table using ",(0,i.kt)("inlineCode",{parentName:"li"},"print.table()"),")"),(0,i.kt)("li",{parentName:"ol"},"Add the ability to search for actors, not just movie titles")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The architecture of the above CLI works, but as it grows, you'll want to start organizing it a little better. Read ",(0,i.kt)("a",{parentName:"li",href:"/docs/gluegun/ir-docs/guides/architecture"},"Guide: Architecting Your Gluegun CLI")," to learn more.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Questions? Jump in our ",(0,i.kt)("a",{parentName:"em",href:"http://community.infinite.red"},"Infinite Red Community Slack")," in the #gluegun channel and ask away!")))}d.isMDXComponent=!0}}]);