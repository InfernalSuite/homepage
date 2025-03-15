"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[8277],{4234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"migrating","title":"Migrating from SWM","description":"Since version 1.21.0, the plugin (formerly SlimeWorldManager) has been decoupled from the server (ASP) and is now known as the Slime World Plugin (SWP).","source":"@site/asp_versioned_docs/version-3.0.0/migrating.md","sourceDirName":".","slug":"/migrating","permalink":"/docs/asp/3.0.0/migrating","draft":false,"unlisted":false,"editUrl":"https://github.com/InfernalSuite/homepage/tree/main/asp_versioned_docs/version-3.0.0/migrating.md","tags":[],"version":"3.0.0","sidebarPosition":99,"frontMatter":{"sidebar_position":99},"sidebar":"tutorialSidebar","previous":{"title":"FAQ","permalink":"/docs/asp/3.0.0/faq"}}');var s=t(4848),o=t(8453);const i={sidebar_position:99},a="Migrating from SWM",h={},d=[{value:"Migrating the API",id:"migrating-the-api",level:2},{value:"What does this mean for me?",id:"what-does-this-mean-for-me",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"migrating-from-swm",children:"Migrating from SWM"})}),"\n",(0,s.jsx)(n.p,{children:"Since version 1.21.0, the plugin (formerly SlimeWorldManager) has been decoupled from the server (ASP) and is now known as the Slime World Plugin (SWP)."}),"\n",(0,s.jsxs)(n.p,{children:["This means, that now the plugin is no longer required to use the API, as the API is provided by the server itself.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsxs)(n.strong,{children:["If you want to keep the commands and features that the plugin provided, you can install the ",(0,s.jsx)(n.a,{href:"swp/installation",children:"Slime World Plugin"})," on your server."]})]}),"\n",(0,s.jsx)(n.h2,{id:"migrating-the-api",children:"Migrating the API"}),"\n",(0,s.jsxs)(n.p,{children:["The API has undergone rework and the main API class has been renamed from ",(0,s.jsx)(n.code,{children:"SlimePlugin"})," to ",(0,s.jsx)(n.code,{children:"AdvancedSlimePaperAPI"}),".\nPlease note that ",(0,s.jsx)(n.strong,{children:"the locking system has been removed"}),", you now have to handle locking the worlds yourself."]}),"\n",(0,s.jsx)(n.h3,{id:"what-does-this-mean-for-me",children:"What does this mean for me?"}),"\n",(0,s.jsxs)(n.p,{children:["If you were using the SWM API before, you will probably have to change most of the parts of your code that interact with the API.\nI suggest you ",(0,s.jsxs)(n.strong,{children:["take a look at the ",(0,s.jsx)(n.a,{href:"/docs/asp/3.0.0/api/using",children:"Using the API"})," page"]})," to see how you can use the new API.",(0,s.jsx)(n.br,{}),"\n","Pay close attention to the javadocs in the ",(0,s.jsx)(n.code,{children:"AdvancedSlimePaperAPI"})," class, as it can help you to understand the differences between the old and the new API."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["If you have any questions, feel free to ask in the ",(0,s.jsx)(n.a,{href:"https://discord.infernalsuite.com/",children:"Discord"}),"."]})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);