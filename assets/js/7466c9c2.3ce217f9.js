"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(r),y=o,m=f["".concat(l,".").concat(y)]||f[y]||s[y]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const c={sidebar_position:6,title:"Export Client API"},i=void 0,a={unversionedId:"query/object-fetcher/fetch-by",id:"query/object-fetcher/fetch-by",title:"Export Client API",description:"\u5f97\u76ca\u4e8eJimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u8bbe\u8ba1\uff0c\u5bf9\u8c61\u6293\u53d6\u5668\u4e5f\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u8fd9\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u597d\u5904\u3002",source:"@site/docs/query/object-fetcher/fetch-by.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/fetch-by",permalink:"/jimmer/docs/query/object-fetcher/fetch-by",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/object-fetcher/fetch-by.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Export Client API"},sidebar:"tutorialSidebar",previous:{title:"View properties",permalink:"/jimmer/docs/query/object-fetcher/view"},next:{title:"DTO query",permalink:"/jimmer/docs/query/object-fetcher/dto"}},l={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f97\u76ca\u4e8eJimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u8bbe\u8ba1\uff0c\u5bf9\u8c61\u6293\u53d6\u5668\u4e5f\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u8fd9\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u597d\u5904\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u53ef\u4ee5\u5c06\u5bf9\u8c61\u6293\u53d6\u5668\u653e\u7f6e\u5728\u4efb\u610f\u4f4d\u7f6e\u800c\u4e0d\u7528\u62c5\u5fc3\u591a\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728controller\u5c42\u4e66\u5199\u5bf9\u8c61\u6293\u53d6\u5668\uff0c\u7136\u540e\u5c06\u53c2\u6570\u6216\u8fd4\u56de\u503c\u7528@FetchBy\u8fdb\u884c\u4fee\u9970\uff0c\u5728\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u524d\u7aefzip\u5305\u4e0b\u8f7d\u540e"),(0,o.kt)("p",null,"\u89e3\u538b\u5373\u53ef\u5f97\u5230\u540e\u7aef\u8bf7\u6c42\u53c2\u6570\u4e0e\u8fd4\u56de\u53c2\u6570\uff0c\u53ef\u4ee5\u51cf\u5c11\u5927\u91cf\u6838\u5bf9\u6587\u6863\u548c\u624b\u52a8\u4e66\u5199\u91cd\u590d\u8bf7\u6c42\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"\u5177\u4f53\u793a\u4f8b\u8bf7\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"../../spring/client"},"Spring\u7bc7/\u524d\u540e\u7aef\u514d\u5bf9\u63a5")))}s.isMDXComponent=!0}}]);