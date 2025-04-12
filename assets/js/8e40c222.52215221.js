"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[4425],{8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>i});var n=o(6540);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}},8858:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/migrating_worlds","title":"Migrating Worlds","description":"Sometimes you may want to migrate your worlds from one loader to another.\\\\","source":"@site/docs_asp/api/migrating_worlds.md","sourceDirName":"api","slug":"/api/migrating_worlds","permalink":"/docs/asp/api/migrating_worlds","draft":false,"unlisted":false,"editUrl":"https://github.com/InfernalSuite/homepage/tree/main/docs_asp/api/migrating_worlds.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Importing Worlds","permalink":"/docs/asp/api/importing_worlds"},"next":{"title":"Common issues","permalink":"/docs/asp/api/common_issues"}}');var t=o(4848),a=o(8453);const s={sidebar_position:8},i="Migrating Worlds",d={},l=[];function c(e){const r={br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"migrating-worlds",children:"Migrating Worlds"})}),"\n",(0,t.jsxs)(r.p,{children:["Sometimes you may want to migrate your worlds from one loader to another.",(0,t.jsx)(r.br,{}),"\n","This can be done by using the ",(0,t.jsx)(r.code,{children:"migrateWorld"})," method in the ",(0,t.jsx)(r.code,{children:"AdvancedSlimePaperAPI"})," class.",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Remember: this is an I/O operation and should be done asynchronously."})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'SlimeLoader currentLoader = ...;\nSlimeLoader newLoader = ...;\nString worldName = "world";\n\n/*\n * worldName - the name of the world to migrate\n * currentLoader - the loader where the world is currently stored\n * newLoader - the loader where the world will be stored after migration       \n */\nasp.migrateWorld(worldName, currentLoader, newLoader);\n'})})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);