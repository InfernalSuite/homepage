"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1906],{2699:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var n=r(4848),t=r(8453);const d={sidebar_position:5},i="Loading Worlds",s={id:"api/loading_worlds",title:"Loading Worlds",description:"After we have obtained an instance of a SlimeLoader in the previous section, we can now use it to load worlds.\\",source:"@site/docs_asp/api/loading_worlds.md",sourceDirName:"api",slug:"/api/loading_worlds",permalink:"/docs/asp/api/loading_worlds",draft:!1,unlisted:!1,editUrl:"https://github.com/InfernalSuite/homepage/tree/main/docs_asp/api/loading_worlds.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/docs/asp/api/properties"},next:{title:"Saving Worlds",permalink:"/docs/asp/api/saving_worlds"}},a={},l=[{value:"Reading the World",id:"reading-the-world",level:2},{value:"Loading the World",id:"loading-the-world",level:2}];function h(e){const o={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"loading-worlds",children:"Loading Worlds"}),"\n",(0,n.jsxs)(o.p,{children:["After we have obtained an instance of a ",(0,n.jsx)(o.code,{children:"SlimeLoader"})," in the previous section, we can now use it to load worlds.",(0,n.jsx)(o.br,{}),"\n","Unlike the old SWM API, this process is split into two stages:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Reading the world from the loader (can be done asynchronously)"}),"\n",(0,n.jsx)(o.li,{children:"Loading the world into the server (must be done synchronously)"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"reading-the-world",children:"Reading the World"}),"\n",(0,n.jsxs)(o.p,{children:["Firstly we need to read the world from the ",(0,n.jsx)(o.code,{children:"SlimeLoader"})," into memory and deserialize it.",(0,n.jsx)(o.br,{}),"\n","This can be done by calling the ",(0,n.jsx)(o.code,{children:"readWorld"})," method in the ",(0,n.jsx)(o.code,{children:"AdvancedSlimePaperAPI"})," class.",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.strong,{children:"Remember: this is an I/O operation and should be done asynchronously."})]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'/*\n * loader - the loader to read the world from\n * "world" - the name of the world to read\n * false - whether this world will be read-only\n * new SlimePropertyMap() - the properties to apply to the world\n */\nSlimeWorld world = asp.readWorld(loader, "world", false, new SlimePropertyMap());\n// Now we have a deserialized -in-memory- representation of the world\n'})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.em,{children:["What's the ",(0,n.jsx)(o.code,{children:"SlimePropertyMap"})," for? Check out the ",(0,n.jsx)(o.a,{href:"properties",children:"Properties"})," page to learn more."]})}),"\n",(0,n.jsx)(o.h2,{id:"loading-the-world",children:"Loading the World"}),"\n",(0,n.jsxs)(o.p,{children:["After we have read the world from the loader, we can now load it into the server.",(0,n.jsx)(o.br,{}),"\n","This can be done by calling the ",(0,n.jsx)(o.code,{children:"loadWorld"})," method in the ",(0,n.jsx)(o.code,{children:"AdvancedSlimePaperAPI"})," class.",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.strong,{children:"Remember: we are directly interacting with the server meaning this must be done synchronously."})]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:"/*\n * world - the deserialized world to load, obtained from the previous step\n * true - whether to call the bukkit org.bukkit.event.world.WorldLoadEvent\n */\nSlimeWorld mirror = asp.loadWorld(world, true);\n// Now the world is loaded into the server and can be interacted with\n"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.em,{children:["What's the ",(0,n.jsx)(o.code,{children:"mirror"}),"? It's a unique instance of the loaded world."]})}),"\n",(0,n.jsxs)(o.p,{children:["Fantastic! You have now successfully loaded a world into the server.",(0,n.jsx)(o.br,{}),"\n","You can try to teleport to it, interact with it, or do whatever you want with it."]})]})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>s});var n=r(6540);const t={},d=n.createContext(t);function i(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);