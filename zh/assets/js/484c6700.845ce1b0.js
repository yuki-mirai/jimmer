"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9896],{93946:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(80102),l=t(83117),r=t(67294),o=t(93680),i=t(94780),s=t(41796),p=t(90948),d=t(71657),m=t(74976),u=t(98216),c=t(1588),b=t(34867);function k(e){return(0,b.Z)("MuiIconButton",e)}const N=(0,c.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=t(85893);const g=["edge","children","className","color","disabled","disableFocusRipple","size"],I=(0,p.ZP)(m.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"default"!==t.color&&n[`color${(0,u.Z)(t.color)}`],t.edge&&n[`edge${(0,u.Z)(t.edge)}`],n[`size${(0,u.Z)(t.size)}`]]}})((({theme:e,ownerState:n})=>(0,l.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})),(({theme:e,ownerState:n})=>{var t;const a=null==(t=(e.vars||e).palette)?void 0:t[n.color];return(0,l.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,l.Z)({color:null==a?void 0:a.main},!n.disableRipple&&{"&:hover":(0,l.Z)({},a&&{backgroundColor:e.vars?`rgba(${a.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(a.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${N.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),h=r.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:s,className:p,color:m="default",disabled:c=!1,disableFocusRipple:b=!1,size:N="medium"}=t,h=(0,a.Z)(t,g),f=(0,l.Z)({},t,{edge:r,color:m,disabled:c,disableFocusRipple:b,size:N}),y=(e=>{const{classes:n,disabled:t,color:a,edge:l,size:r}=e,o={root:["root",t&&"disabled","default"!==a&&`color${(0,u.Z)(a)}`,l&&`edge${(0,u.Z)(l)}`,`size${(0,u.Z)(r)}`]};return(0,i.Z)(o,k,n)})(f);return(0,v.jsx)(I,(0,l.Z)({className:(0,o.Z)(y.root,p),centerRipple:!0,focusRipple:!b,disabled:c,ref:n,ownerState:f},h,{children:s}))}))},90629:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(80102),l=t(83117),r=t(67294),o=t(93680),i=t(94780),s=t(41796),p=t(90948);const d=e=>{let n;return n=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(n/100).toFixed(2)};var m=t(71657),u=t(1588),c=t(34867);function b(e){return(0,c.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var k=t(85893);const N=["className","component","elevation","square","variant"],v=(0,p.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n[`elevation${t.elevation}`]]}})((({theme:e,ownerState:n})=>{var t;return(0,l.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!n.square&&{borderRadius:e.shape.borderRadius},"outlined"===n.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===n.variant&&(0,l.Z)({boxShadow:(e.vars||e).shadows[n.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",d(n.elevation))}, ${(0,s.Fq)("#fff",d(n.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[n.elevation]}))})),g=r.forwardRef((function(e,n){const t=(0,m.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:p=1,square:d=!1,variant:u="elevation"}=t,c=(0,a.Z)(t,N),g=(0,l.Z)({},t,{component:s,elevation:p,square:d,variant:u}),I=(e=>{const{square:n,elevation:t,variant:a,classes:l}=e,r={root:["root",a,!n&&"rounded","elevation"===a&&`elevation${t}`]};return(0,i.Z)(r,b,l)})(g);return(0,k.jsx)(v,(0,l.Z)({as:s,ownerState:g,className:(0,o.Z)(I.root,r),ref:n},c))}))},2734:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(79718),l=t(90247),r=t(10606);function o(){const e=(0,a.Z)(l.Z);return e[r.Z]||e}},39707:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(83117),l=t(80102),r=t(59766),o=t(44920);const i=["sx"];function s(e){const{sx:n}=e,t=(0,l.Z)(e,i),{systemProps:s,otherProps:p}=(e=>{var n,t;const a={systemProps:{},otherProps:{}},l=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:o.Z;return Object.keys(e).forEach((n=>{l[n]?a.systemProps[n]=e[n]:a.otherProps[n]=e[n]})),a})(t);let d;return d=Array.isArray(n)?[s,...n]:"function"==typeof n?(...e)=>{const t=n(...e);return(0,r.P)(t)?(0,a.Z)({},s,t):s}:(0,a.Z)({},s,n),(0,a.Z)({},p,{sx:d})}},32102:(e,n,t)=>{t.d(n,{s:()=>k});var a=t(83117),l=t(67294),r=t(42293),o=t(50657),i=t(6514),s=t(54776),p=t(10155),d=t(15861),m=t(93946),u=t(9137),c=t(61274),b=t(50594);const k=(0,l.memo)((e=>{let{open:n,fullScreen:t=!1,title:a,onClose:s,children:k}=e;const[v,g]=(0,l.useState)(t),I=(0,l.useCallback)((()=>{g((e=>!e))}),[]);return l.createElement(o.Z,{open:n,onClose:s,fullScreen:v,TransitionComponent:N,maxWidth:"md"},l.createElement(r.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(d.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:I,style:{color:"white"}},v?l.createElement(c.Z,null):l.createElement(u.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:s,style:{color:"white"}},l.createElement(b.Z,null)))),l.createElement(i.Z,null,k))})),N=l.forwardRef((function(e,n){return l.createElement(s.Z,(0,a.Z)({direction:"up",ref:n},e))}))},39511:(e,n,t)=>{t.d(n,{b:()=>o});var a=t(67294),l=t(83321),r=t(32102);const o=(0,a.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:o=n,variant:i="contained",children:s}=e;const[p,d]=(0,a.useState)(!1),m=(0,a.useCallback)((e=>{d(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),u=(0,a.useCallback)((()=>{d(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:m,variant:i,size:"outlined"==i?"small":"medium"},n),a.createElement(r.s,{open:p,onClose:u,title:o,fullScreen:t},s))}))},37177:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(83117),l=(t(67294),t(3905)),r=t(87918),o=t(67720);const i={toc:[]};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76ee\u524d\u5176\u4ed6\u64cd\u4f5cSQL\u7684\u6280\u672f\u65b9\u6848\uff0c\u65e0\u8bbaORM\u8fd8\u662f\u975eORM\uff0c\u90fd\u6709\u5b58\u5728\u4e00\u4e2a\u7a7a\u767d\u9886\u57df\uff1a\u53ea\u8003\u8651\u5230\u4e86\u52a8\u6001",(0,l.kt)("inlineCode",{parentName:"p"},"where"),"\uff0c\u6ca1\u6709\u8003\u8651",(0,l.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001join"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u5b9a\u4e49\uff1a\u5982\u679c\u67d0\u4e9b\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u9488\u5bf9\u5176\u4ed6\u8868\u800c\u975e\u5f53\u524d\u8868\u3002\u8fd9\u610f\u5473\u7740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6761\u4ef6\u6ee1\u8db3\u65f6\uff1a\u5148\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5230\u5176\u4ed6\u8868\uff0c\u518d\u5bf9join\u5f97\u5230\u7684\u8868\u6dfb\u52a0\u52a8\u6001where\u6761\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff1a\u4e0d\u80fd\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5176\u4ed6\u8868"))),(0,l.kt)(o.Z,{mdxType:"Divider"},(0,l.kt)(r.Z,{label:"\u573a\u666f-1",mdxType:"Chip"})),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u7b2c\u4e00\u4e2a\u573a\u666f\uff0c\u8fd9\u91cc\u7528\u9762\u5411\u539f\u751fSQL\u7684MyBatis\u4e3a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis Mapper\u63a5\u53e3"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    );\n}\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\uff0c\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u80fd\u4e3anull\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u3002"),(0,l.kt)("p",{parentName:"li"},"\u540e\u9762\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\uff0c\u5176\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u65bd\u52a0\u5728\u5f53\u524d\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK"),"\u4e0a\uff0c\u800c\u662f\u65bd\u52a0\u5728\u7236\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE\u4e0a"),"\u3002\n\u5373\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u975enull\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),"\u8868\u7684JOIN\uff0c\u8fd9\u79cd\u7531\u53c2\u6570\u503c\u52a8\u6001\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u7684\u8868\u8fde\u63a5\uff0c\u5728\u672c\u6587\u4e2d\u88ab\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis\u7684SQL\u6620\u5c04XML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c\u2776\u5c31\u662f\u52a8\u6001JOIN\u3002\u7136\u800c\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\uff0c\u2777\u548c\u2778\u624d\u662f\u76ee\u7684\uff0c\u2776\u662f\u4e3a\u652f\u6301\u2777\u548c\u2778\u800c\u4e0d\u5f97\u4e0d\u505a\u7684\u5de5\u4f5c\uff0c\u5176\u5224\u65ad\u6761\u4ef6\u662f\u4e00\u79cd\u8d1f\u62c5\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u2776\u7684\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"or"),"\uff0c\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7136\u800c\uff0c\u8fd9\u4ec5\u4ec5\u662f\u6700\u7b80\u5355\u7684\u4e24\u8868\u4e4b\u95f4\u52a8\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8e\u66f4\u6df1\u7684\u591a\u8868\u8fde\u63a5\u64cd\u4f5c\u800c\u8a00\uff0c\u52a8\u6001\u8fde\u63a5\u7684\u590d\u6742\u5ea6\u4f1a\u6025\u5267\u4e0a\u5347\uff01")))),(0,l.kt)(o.Z,{mdxType:"Divider"},(0,l.kt)(r.Z,{label:"\u573a\u666f-2",mdxType:"Chip"})),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u7b2c\u4e8c\u4e2a\u573a\u666f\uff0c\u6709\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4e0d\u540c\u4efb\u4f55\u4e1a\u52a1\u8026\u5408\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n    <select id="findAObjects" resultType="somepackage.A">\n        select distinct A.id\n        from A\n        \x3c!-- highlight-start --\x3e\n        <if test="bId != null or cId != null or dId != null or eId != null">\n            inner join B on A.ID = B.A_ID\n        </if>\n        <if test="cId != null or dId != null or eId != null">\n            inner join C on B.ID = C.B_ID\n        </if>\n        <if test="dId != null or eId != null">\n            inner join D on C.ID = D.C_ID\n        </if>\n        <if test="eId != null">\n            inner join E on D.ID = E.D_ID\n        </if>\n        \x3c!-- highlight-end --\x3e\n        <where>\n            <if test="aId != null">\n                and A.ID = #{aId}\n            </if>\n            <if test="bId != null">\n                and B.ID = #{bId}\n            </if>\n            <if test="cId != null">\n                and C.ID = #{cId}\n            </if>\n            <if test="dId != null">\n                and D.ID = #{dId}\n            </if>\n            <if test="eId != null">\n                and E.ID = #{eId}\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u903b\u8f91\u5f88\u7b80\u5355\uff0cA\u3001B\u3001C\u3001D\u548cE\u8fd9\u4e94\u5f20\u8868\u5f62\u6210\u4e86\u4e00\u4e2aJOIN\u94fe\uff0c\u6bcf\u5f20\u8868\u90fd\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u6240\u89c1\uff0c\u52a8\u6001JOIN\u7684\u590d\u6742\u5ea6\u5df2\u7ecf\u53d8\u5f97\u4e0d\u53ef\u63a5\u53d7\u4e86\u3002"))}s.isMDXComponent=!0},33387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var a=t(83117),l=(t(67294),t(3905)),r=t(37177),o=t(65488),i=t(85162),s=t(39511);const p={sidebar_position:3,title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5"},d=void 0,m={unversionedId:"query/dynamic-join/merge",id:"query/dynamic-join/merge",title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/merge.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/merge",permalink:"/jimmer/zh/docs/query/dynamic-join/merge",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/dynamic-join/merge.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84",permalink:"/jimmer/zh/docs/query/dynamic-join/chain-style"},next:{title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5",permalink:"/jimmer/zh/docs/query/dynamic-join/optimization"}},u={},c=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5408\u5e76\u89c4\u5219",id:"\u5408\u5e76\u89c4\u5219",level:2}],b={toc:c};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"./"},"\u52a8\u6001\u8fde\u63a5\u4ecb\u7ecd"),"\u4e2d\uff0c\u6211\u4eec\u8bba\u8ff0\u4e86\u76ee\u524d\u6280\u672f\u65b9\u6848\u5b58\u5728\u95ee\u9898\uff0c\u5e76\u7b80\u8981\u4ecb\u7ecd\u4e86Jimmer\u4e2d\u52a8\u6001JOIN\u7684\u7f16\u7a0b\u98ce\u683c\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)(s.b,{buttonText:"\u76ee\u524d\u6280\u672f\u65b9\u6848\u5b58\u5728\u95ee\u9898",mdxType:"ViewMore"},(0,l.kt)(r.ZP,{mdxType:"DynamicJoinProblem"})),"\u4e2d\uff0c\u6211\u4eec\u5217\u4e3e\u4e86\u4e24\u4e2a\u573a\u666f\uff0c\u672c\u6587\u8ba8\u8bba\u662f\u5426\u5982\u4f55\u89e3\u51b3\u8fd9\u4e24\u4e2a\u573a\u666f\u7684\u95ee\u9898\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u95ee\u9898\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u554a\uff0c\u672c\u6587\u6f14\u793a\u7b2c\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u89e3\u51b3\u573a\u666f1\u7684\u95ee\u9898"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    BookTable table = BookTable.$;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null,\n            () -> book.name().like(name)\n        )\n        .whereIf(\n            storeName != null,\n            () -> table\n                .store() \u2776\n                .name()\n                .like(storeName)\n        )\n        .whereIf(\n            storeWebsite != null,\n            () -> table\n                .store() \u2777\n                .website()\n                .like(storeWebsite)\n        )\n        .select(book)\n        .execute();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    name: String? = null,\n    storeName: String? = null,\n    storeWebsite: String? = null\n): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            name?.let {\n                where(table.name like it)\n            }\n            storeName?.let {\n                where(\n                    table\n                        .store \u2776\n                        .name like it\n                )\n            }\n            storeWebsite?.let {\n                where(\n                    table\n                        .store \u2777\n                        .website like it\n                )\n            }\n            select(table)\n        }\n        .execute()\n")))),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u662f\u4e00\u4e2a\u5178\u578b\u7684\u52a8\u6001\u67e5\u8be2\uff0c\u4e09\u4e2a\u67e5\u8be2\u53c2\u6570\u90fd\u5141\u8bb8\u4e3anull\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u4ecd\u7136\u4e3anull\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u65f6\uff0c\u2776\u548c\u2777\u4e24\u5904\u7684\u4ee3\u7801\u90fd\u4e0d\u4f1a\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55join\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"storeName"),", \u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u4ecd\u7136\u4e3anull\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u65f6\uff0c\u2776\u5904\u7684\u8fde\u63a5\u751f\u6548\u4f46\u2777\u5904\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6240\u6709\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u90fd\u975enull\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u65f6\uff0c\u2776\u3001\u2777\u4e24\u5904\u7684\u8fde\u63a5\u90fd\u751f\u6548\uff0c\u8fd9\u79cd\u60c5\u51b5\u53eb\u8fde\u63a5\u51b2\u7a81\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u51b2\u7a81\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u95ee\u9898\uff0c\u51b2\u7a81\u7684join\u5bf9\u8c61\u4f1a\u88ab\u5408\u5e76\u6210\u4e00\u4e2ajoin\u5bf9\u8c61\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u91cd\u590d\u7684join\u64cd\u4f5c\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ on \n        tb_1_.STORE_ID = tb_2_.ID \n    /* highlight-end */\nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ? \nand \n    tb_2_.WEBSITE = ?\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u89e3\u51b3\u573a\u666f2\u7684\u95ee\u9898"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> findDistinctIds(\n    @Nullable Long aId,\n    @Nullable Long bId,\n    @Nullable Long cId,\n    @Nullable Long dId,\n    @Nullable Long eId\n) {\n    ATable table = ATable.$;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            aId != null,\n            () -> table.id().like(aId)\n        )\n        .whereIf(\n            bId != null,\n            () -> table.asTableEx().bs().id().like(bId)\n        )\n        .whereIf(\n            cId != null,\n            () -> table.asTableEx().bs().cs().id().like(cId)\n        )\n        .whereIf(\n            dId != null,\n            () -> table.asTableEx().bs().cs().ds().id().like(dId)\n        )\n        .whereIf(\n            eId != null,\n            () -> table.asTableEx().bs().cs().ds().es().id().like(eId)\n        )\n        .select(book.id())\n        .distinct()\n        .execute();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findDistinctIds(\n    aId: Long? = null,\n    bId: Long? = null,\n    cId: Long? = null,\n    dId: Long? = null,\n    eId: Long? = null\n): List<Long> =\n    sqlClient\n        .createQuery(A::class) {\n            aId?.let {\n                where(table.id eq it)\n            }\n            bId?.let {\n                where(table.asTableEx().bs.id eq it)\n            }\n            cId?.let {\n                where(table.asTableEx().bs.cs.id eq it)\n            }\n            dId?.let {\n                where(table.asTableEx().bs.cs.ds.id eq it)\n            }\n            eId?.let {\n                where(table.asTableEx().bs.cs.ds.es.id eq it)\n            }\n            select(table.id)\n        }\n        .distinct()\n        .execute()\n")))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6709\u4e86\u524d\u9762\u7684\u57fa\u7840\uff0c\u8fd9\u91cc\u4e0d\u518d\u9700\u8981\u7f57\u5217\u4e0d\u540c\u7684\u53c2\u6570\u7ec4\u5408\u4e0b\u4f1a\u751f\u6210\u548c\u4f55\u79cdSQL\u3002\u660e\u767d\u65e0\u8bba\u5982\u4f55\u6700\u7ec8SQL\u90fd\u4e0d\u4f1a\u5305\u542b\u91cd\u590d\u7684\u8fde\u63a5\u64cd\u4f5c\u5373\u53ef\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"asTableEx"),"\u662f\u540e\u7eed\u6587\u6863",(0,l.kt)("a",{parentName:"p",href:"./table-ex"},"\u5206\u9875\u5b89\u5168\u6027"),"\u8981\u4ecb\u7ecd\u7684\u6982\u5ff5\u3002\u8fd9\u91cc\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u5b83\u3002")))))),(0,l.kt)("h2",{id:"\u5408\u5e76\u89c4\u5219"},"\u5408\u5e76\u89c4\u5219"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u4e09\u4e2a\u8868\u8fde\u63a5\u8def\u5f84\uff0c\u5206\u522b\u662f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a -> b -> c -> d -> e -> f -> g"),(0,l.kt)("li",{parentName:"ul"},"a -> b -> c -> h -> i -> j"),(0,l.kt)("li",{parentName:"ul"},"a -> x -> y -> z -> a-> b -> c -> d")),(0,l.kt)("p",null,"\u4e3a\u4e86\u6d88\u9664\u51b2\u7a81\uff0cJimmer\u4f1a\u5148\u628a\u8fd9\u4e9b\u8def\u5f84\u4e2d\u7684\u8282\u70b9\u5408\u5e76\u6210\u4e00\u68f5\u6811"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-+-a\n |\n +----+-b\n |    |\n |    \\----+-c \n |         |\n |         +----+-d\n |         |    |\n |         |    \\----+-e\n |         |         |\n |         |         \\----+-f\n |         |              |\n |         |              \\------g\n |         |\n |         \\----+-h\n |              |\n |              \\----+-i\n |                   |\n |                   \\------j\n |\n \\----+-x\n      |\n      \\----+-y\n           |\n           \\----+-z\n                |\n                \\----+-a\n                     |\n                     \\----+-b\n                          |\n                          \\----+-c\n                               |\n                               \\------d\n")),(0,l.kt)("p",null,"\u7136\u540e\u6839\u636e\u8fd9\u68f5\u6811\u6765\u751f\u6210\u6700\u7ec8SQL\u4e2d\u7684join\u5b50\u53e5\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u9700\u8981\u8bf4\u660e\u7684\u89c4\u5219\uff0c\u5c31\u662f\u8fde\u63a5\u65b9\u5f0f\u3002\u521b\u5efajoin\u5bf9\u8c61\u7684\u65b9\u6cd5\u5177\u5907\u53c2\u6570\uff0c\u4ee5\u6307\u5b9a\u8fde\u63a5\u65b9\u5f0f\uff0c\u6bd4\u5982\uff0c\u5de6\u8fde\u63a5\uff1a"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"book.store(JoinType.LEFT)\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"book.`store?`\n")))),(0,l.kt)("p",null,"\u8fde\u63a5\u65b9\u5f0f\u5408\u5e76\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u751f\u51b2\u7a81\u7684join\u8282\u70b9\u7684\u8fde\u63a5\u65b9\u5f0f\u5168\u90e8\u4e00\u6837\uff0c\u5408\u5e76\u540e\u8fde\u63a5\u65b9\u5f0f\u4e0d\u53d8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u5408\u5e76\u540e\u4e00\u5b9a\u662f\u5185\u8fde\u63a5\u3002")))}k.isMDXComponent=!0}}]);