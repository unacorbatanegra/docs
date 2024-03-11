"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,b=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:8,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},s=void 0,a={unversionedId:"status",id:"status",title:"\ud83d\udc77 Status",description:"Status of the Shorebird project.",source:"@site/docs/status.md",sourceDirName:".",slug:"/status",permalink:"/status",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/status.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},sidebar:"tutorialSidebar",previous:{title:"\u2753 FAQ",permalink:"/faq"},next:{title:"\ud83c\udfdb\ufe0f Architecture",permalink:"/architecture"}},l={},u=[{value:"Stable",id:"stable",level:2},{value:"iOS Beta",id:"ios-beta",level:2},{value:"Common Feature Requests",id:"common-feature-requests",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stable"},"Stable"),(0,i.kt)("p",null,"Shorebird is available on Android and iOS (beta), with many apps shipping\nto the Play Store and App Store."),(0,i.kt)("p",null,'Our guiding principle has been "first, do no harm". It should be\nthe case that using Shorebird is never worse than not using Shorebird.'),(0,i.kt)("p",null,"We're working closely with our early customers and we would love to hear from\nyou. Shorebird operates publicly on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"Discord"),"\nevery day and we welcome your feedback. Filing\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"issues")," works well too."),(0,i.kt)("h2",{id:"ios-beta"},"iOS Beta"),(0,i.kt)("p",null,"Shorebird is currently Beta on iOS. Instructions for using Shorebird on\niOS are available in the ",(0,i.kt)("a",{parentName:"p",href:"/"},"Getting Started")," guide."),(0,i.kt)("p",null,"iOS is currently marked beta because some applications experience a\nslowdown after patching. We expect to resolve this after-patch-slowdown in the\nnext few weeks and ship 1.0 at that time. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/674"},"issue")),(0,i.kt)("h2",{id:"common-feature-requests"},"Common Feature Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Patch signing (hashes are checked for download integrity) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/112"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Asset changes (images, icons, etc.) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/318"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Manual rollbacks (on-device rollback-on-launch-failure already exists) (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/126"},"issue"),")"),(0,i.kt)("li",{parentName:"ul"},"Staged rollout of patches (channels or percentage based) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/110"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Self-hosting or on-premises deployments ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/485"},"issue")),(0,i.kt)("li",{parentName:"ul"},'"Native code" changes (java, kotlin, etc.) -- not planned.')),(0,i.kt)("p",null,"If these, or anything else is blocking your use of Shorebird, please let us know!\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"https://github.com/shorebirdtech/shorebird/issues")))}h.isMDXComponent=!0}}]);