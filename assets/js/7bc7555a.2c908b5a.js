"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[2410],{8453:(e,o,s)=>{s.d(o,{R:()=>t,x:()=>a});var n=s(6540);const i={},r=n.createContext(i);function t(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:o},e.children)}},9654:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/common_issues","title":"Common issues","description":"Zip file closed/similar errors when shutting down or reloading","source":"@site/docs_asp/api/common_issues.md","sourceDirName":"api","slug":"/api/common_issues","permalink":"/docs/asp/api/common_issues","draft":false,"unlisted":false,"editUrl":"https://github.com/InfernalSuite/homepage/tree/main/docs_asp/api/common_issues.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Migrating Worlds","permalink":"/docs/asp/api/migrating_worlds"},"next":{"title":"Slime World Plugin","permalink":"/docs/asp/swp/"}}');var i=s(4848),r=s(8453);const t={},a="Common issues",l={},d=[{value:"Zip file closed/similar errors when shutting down or reloading",id:"zip-file-closedsimilar-errors-when-shutting-down-or-reloading",level:2}];function c(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"common-issues",children:"Common issues"})}),"\n",(0,i.jsx)(o.h2,{id:"zip-file-closedsimilar-errors-when-shutting-down-or-reloading",children:"Zip file closed/similar errors when shutting down or reloading"}),"\n",(0,i.jsxs)(o.p,{children:["Every plugin interacting with the api should unload (and optionally save all) all worlds loaded by the plugin during ",(0,i.jsx)(o.code,{children:"JavaPlugin#onDisable()"}),". Failing to do so can cause errors."]}),"\n",(0,i.jsxs)(o.p,{children:["Ideally, users should use the blocking ",(0,i.jsx)(o.code,{children:"AdvancedSlimePaperAPI#saveWorld(SlimeWorld)"})," API to save the world and unload the\nworld using ",(0,i.jsx)(o.code,{children:"Bukkit.unloadWorld(world.getName(), false)"}),'. The "save" boolean parameter in ',(0,i.jsx)(o.code,{children:"Bukkit#unloadWorld(String, boolean)"}),"\ncan be safely set to false as you should have saved the world with ",(0,i.jsx)(o.code,{children:"AdvancedSlimePaperAPI#saveWorld(SlimeWorld)"})," already."]}),"\n",(0,i.jsx)(o.admonition,{type:"warning",children:(0,i.jsxs)(o.p,{children:["You should try to avoid using ",(0,i.jsx)(o.code,{children:"Bukkit.unloadWorld(world.getName(), true)"}),' with "save" set to true DURING onDisable(), as it saves the world asynchronously and might not complete before the classloader closes. You can safely unload the worlds outside onDisable() this way, though.']})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);