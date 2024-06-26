"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[3383],{9134:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=n(4848),i=n(8453);const t={sidebar_position:7},s="Importing Worlds",d={id:"api/importing_worlds",title:"Importing Worlds",description:"The ASP API provides a way to import Minecraft worlds (in the anvil format) into slime worlds.\\",source:"@site/docs_asp/api/importing_worlds.md",sourceDirName:"api",slug:"/api/importing_worlds",permalink:"/docs/asp/api/importing_worlds",draft:!1,unlisted:!1,editUrl:"https://github.com/InfernalSuite/homepage/tree/main/docs_asp/api/importing_worlds.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Saving Worlds",permalink:"/docs/asp/api/saving_worlds"},next:{title:"Migrating Worlds",permalink:"/docs/asp/api/migrating_worlds"}},l={},a=[{value:"Reading the World",id:"reading-the-world",level:2},{value:"Saving the World",id:"saving-the-world",level:2},{value:"Loading the World",id:"loading-the-world",level:2}];function h(e){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"importing-worlds",children:"Importing Worlds"}),"\n",(0,r.jsxs)(o.p,{children:["The ASP API provides a way to import Minecraft worlds (in the anvil format) into slime worlds.",(0,r.jsx)(o.br,{}),"\n","This is useful if you have a world that you want to use with the ASP API, but it is not a slime world yet.",(0,r.jsx)(o.br,{}),"\n","Similar to loading worlds, this process is split into multiple stages:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Importing the world from the anvil format to the slime format (can be done asynchronously)"}),"\n",(0,r.jsx)(o.li,{children:"Saving the world into the loader (must be done asynchronously)"}),"\n",(0,r.jsx)(o.li,{children:"Loading the world into the server (must be done synchronously)"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"reading-the-world",children:"Reading the World"}),"\n",(0,r.jsxs)(o.p,{children:["Firstly, we need to read the world from the anvil format into memory and deserialize it.",(0,r.jsx)(o.br,{}),"\n","To read an anvil world, you need to use the ",(0,r.jsx)(o.code,{children:"readVanillaWorld"})," method in the ",(0,r.jsx)(o.code,{children:"AdvancedSlimePaperAPI"})," class.",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.strong,{children:"Remember: this is an I/O operation and should be done asynchronously."})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:'/*\n * new File(".") - the directory where the world is located\n * "world" - the name of the world to read\n * loader - the loader where the world will be stored when saved, or null if it is read-only\n */ \nSlimeWorld world = asp.readVanillaWorld(new File("."), "world", loader);\n// Now we have a deserialized -in-memory- representation of the world\n'})}),"\n",(0,r.jsx)(o.h2,{id:"saving-the-world",children:"Saving the World"}),"\n",(0,r.jsxs)(o.p,{children:["After we have read the world from the anvil format, we can now save it into the loader (assuming we supplied one in the previous step).",(0,r.jsx)(o.br,{}),"\n","To save a world, you need to use the ",(0,r.jsx)(o.code,{children:"saveWorld"})," method in the ",(0,r.jsx)(o.code,{children:"AdvancedSlimePaperAPI"})," class.",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.strong,{children:"Remember: this is an I/O operation and should be done asynchronously."})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"/*\n * world - the deserialized world to save, obtained from the previous step\n */\nasp.saveWorld(world);\n"})}),"\n",(0,r.jsx)(o.h2,{id:"loading-the-world",children:"Loading the World"}),"\n",(0,r.jsxs)(o.p,{children:["After we have saved the world into the loader, we can now load it into the server.",(0,r.jsx)(o.br,{}),"\n","This process is the same as in the ",(0,r.jsx)(o.a,{href:"loading_worlds#loading-the-world",children:"Loading Worlds"})," page."]})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>d});var r=n(6540);const i={},t=r.createContext(i);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);