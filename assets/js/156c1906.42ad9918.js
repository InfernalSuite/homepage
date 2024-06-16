"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[7944],{5193:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>_,contentTitle:()=>S,default:()=>E,frontMatter:()=>I,metadata:()=>V,toc:()=>T});var t=n(4848),l=n(8453),a=n(6540),s=n(4164),i=n(3104),u=n(6347),o=n(205),d=n(7485),c=n(1682),p=n(679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:l}}=e;return{value:r,label:n,attributes:t,default:l}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function b(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const t=(0,u.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,d.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,l=f(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[u,d]=m({queryString:n,groupId:t}),[c,h]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,l]=(0,p.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),x=(()=>{const e=u??c;return b({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var v=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:r,block:n,selectedValue:l,selectValue:a,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const r=e.currentTarget,n=o.indexOf(r),t=u[n].value;t!==l&&(d(r),a(t))},p=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:u.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>o.push(e),onKeyDown:p,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":l===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=x(e);return(0,t.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,t.jsx)(w,{...r,...e}),(0,t.jsx)(g,{...r,...e})]})}function k(e){const r=(0,v.A)();return(0,t.jsx)(y,{...e,children:h(e.children)},String(r))}const P={tabItem:"tabItem_Ymn6"};function D(e){let{children:r,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(P.tabItem,l),hidden:n,children:r})}const I={sidebar_position:2},S="Setup",V={id:"setup",title:"Setup",description:"1. Install Java",source:"@site/docs_asp/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/asp/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/InfernalSuite/homepage/tree/main/docs_asp/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/asp/"},next:{title:"Examples",permalink:"/docs/asp/API/examples"}},_={},T=[{value:"Paper:",id:"paper",level:3},{value:"Pufferfish",id:"pufferfish",level:3},{value:"Purpur",id:"purpur",level:3},{value:"Paper:",id:"paper-1",level:3},{value:"Pufferfish",id:"pufferfish-1",level:3},{value:"Purpur",id:"purpur-1",level:3},{value:"Paper:",id:"paper-2",level:3},{value:"Pufferfish",id:"pufferfish-2",level:3},{value:"Purpur",id:"purpur-2",level:3}];function A(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Install Java"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Windows"}),": ",(0,t.jsx)(r.a,{href:"https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.3%2B9/OpenJDK21U-jdk_x64_windows_hotspot_21.0.3_9.msi",children:"Adoptium JDK-21"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Ubuntu/Debian"}),":"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade && sudo apt install temurin-21-jdk\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Download Advanced Slime Paper / Pufferfish / Purpur"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(k,{children:[(0,t.jsxs)(D,{value:"main",label:"Main",default:!0,children:[(0,t.jsx)(r.p,{children:"Tested and ready for Production"}),(0,t.jsx)(r.h3,{id:"paper",children:"Paper:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"pufferfish",children:"Pufferfish"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"purpur",children:"Purpur"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})})]}),(0,t.jsxs)(D,{value:"develop",label:"Develop",children:[(0,t.jsxs)(r.p,{children:["Was merged from Upstream with our newest Patches and is ",(0,t.jsx)(r.strong,{children:"BARELY"})," tested"]}),(0,t.jsx)(r.h3,{id:"paper-1",children:"Paper:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"pufferfish-1",children:"Pufferfish"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"purpur-1",children:"Purpur"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})})]}),(0,t.jsxs)(D,{value:"upstream",label:"Upstream",children:[(0,t.jsxs)(r.p,{children:["Has the newest Patches from the original fork but is ",(0,t.jsx)(r.strong,{children:"NOT"})," tested"]}),(0,t.jsx)(r.h3,{id:"paper-2",children:"Paper:"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"pufferfish-2",children:"Pufferfish"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})}),(0,t.jsx)(r.h3,{id:"purpur-2",children:"Purpur"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Downloadlinks will be added later\n"})})]})]}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"Copy the Server files into your Minecraft-Server Folder"}),"\n",(0,t.jsxs)(r.li,{children:["Copy the Plugin into your ",(0,t.jsx)(r.code,{children:"/plugins"})," Folder"]}),"\n",(0,t.jsx)(r.li,{children:"Start your Server as you would normally do!"}),"\n"]})]})}function E(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(A,{...e})}):A(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(6540);const l={},a=t.createContext(l);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);