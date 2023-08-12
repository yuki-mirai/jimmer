"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[868],{31536:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(80102),l=n(83117),o=n(67294),r=n(10209),i=n(59766),u=n(94780),p=n(34867);const c=(0,n(70182).ZP)();var m=n(65149),d=n(39707),s=n(66500),k=n(95408),v=n(98700),g=n(85893);const N=["component","direction","spacing","divider","children","className","useFlexGap"],h=(0,s.Z)(),b=c("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:h})}function Z(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,l)=>(e.push(a),l<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${l}`})),e)),[])}const I=({ownerState:e,theme:t})=>{let n=(0,l.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,v.hB)(t),l=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,k.P$)({values:e.direction,base:l}),r=(0,k.P$)({values:e.spacing,base:l});"object"==typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const a=t>0?o[n[t-1]]:"column";o[e]=a}}));const u=(t,n)=>{return e.useFlexGap?{gap:(0,v.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${l=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[l]}`]:(0,v.NA)(a,t)}};var l};n=(0,i.Z)(n,(0,k.k9)({theme:t},r,u))}return n=(0,k.dt)(t.breakpoints,n),n};var E=n(90948),f=n(71657);const T=function(e={}){const{createStyledComponent:t=b,useThemeProps:n=y,componentName:i="MuiStack"}=e,c=t(I),m=o.forwardRef((function(e,t){const o=n(e),m=(0,d.Z)(o),{component:s="div",direction:k="column",spacing:v=0,divider:h,children:b,className:y,useFlexGap:I=!1}=m,E=(0,a.Z)(m,N),f={direction:k,spacing:v,useFlexGap:I},T=(0,u.Z)({root:["root"]},(e=>(0,p.Z)(i,e)),{});return(0,g.jsx)(c,(0,l.Z)({as:s,ownerState:f,ref:t,className:(0,r.Z)(T.root,y)},E,{children:h?Z(b,h):b}))}));return m}({createStyledComponent:(0,E.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,f.Z)({props:e,name:"MuiStack"})}),C=T},86153:(e,t,n)=>{n.d(t,{_:()=>x});var a=n(67294),l=n(87357),o=n(83321),r=n(61903),i=n(23599),u=n(86886),p=n(67720),c=n(90629),m=n(7906),d=n(295),s=n(53252),k=n(72882),v=n(53184),g=n(53816),N=n(24661),h=n(96540),b=n(93946),y=n(41733),Z=n(50657),I=n(31425),E=n(6514),f=n(58951),T=n(37645),C=n(52263),P=n(59457);const x=(0,a.memo)((()=>{const{i18n:e}=(0,C.Z)(),t=(0,a.useMemo)((()=>"zh"==e.currentLocale||"zh_cn"==e.currentLocale||"zh_CN"==e.currentLocale),[e.currentLocale]),n=(0,a.useMemo)((()=>B),[t]),x=(0,a.useMemo)((()=>{const e=new Map;for(const t of n)e.set(t.id,t);return e}),[n]),_=(0,a.useMemo)((()=>("zh"==e.currentLocale||"zh_cn"==e.currentLocale||e.currentLocale,D)),[e.currentLocale]),w=(0,a.useMemo)((()=>{const e=new Map;for(const t of _)e.set(t.id,t);return e}),[_]),[j,S]=(0,P.x)((()=>({userId:1,province:x.get(1).province,city:x.get(1).city,address:x.get(1).address,items:[{__rowId:1,productId:1,name:w.get(1).name,quantity:2},{__rowId:2,productId:10,name:w.get(10).name,quantity:1}]}))),M=(0,a.useMemo)((()=>Math.max(...j.items.map((e=>e.__rowId)))+1),[j]),L=(0,a.useCallback)((e=>{const t=x.get(parseInt(e.target.value));void 0!==t&&S((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[S,x]),R=(0,a.useCallback)((e=>{S((t=>{t.province=e.target.value}))}),[S]),q=(0,a.useCallback)((e=>{S((t=>{t.city=e.target.value}))}),[S]),A=(0,a.useCallback)((e=>{S((t=>{t.address=e.target.value}))}),[S]),J=(0,a.useCallback)(((e,t)=>{S((n=>{for(const a of n.items)if(a.__rowId===t){a.productId=parseInt(e.target.value),O(n);break}}))}),[S]),z=(0,a.useCallback)(((e,t)=>{S((n=>{for(const a of n.items)if(a.__rowId===t){a.quantity=parseInt(e.target.value),O(n);break}}))}),[S]),U=(0,a.useCallback)((e=>{S((t=>{for(let n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[S]),F=(0,a.useCallback)((()=>{S((e=>{e.items.push({__rowId:M,quantity:1})}))}),[S,M]),[G,K]=(0,a.useState)(!1),W=(0,a.useCallback)((()=>{K(!0)}),[]),$=(0,a.useCallback)((()=>{K(!1)}),[]);return a.createElement(c.Z,{elevation:3,style:{padding:"1.5rem"}},a.createElement(l.Z,{component:"form",noValidate:!0,autoComplete:"off"},a.createElement(u.ZP,{container:!0,spacing:2},a.createElement(u.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,select:!0,label:"\u8d2d\u4e70\u4eba",value:j.userId,onChange:L},n.map((e=>a.createElement(i.Z,{key:e.id,value:e.id},e.nickName))))),a.createElement(u.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:"\u7701\u4efd",value:j.province,onChange:R})),a.createElement(u.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:"\u57ce\u5e02",value:j.city,onChange:q})),a.createElement(u.ZP,{item:!0,xs:12},a.createElement(r.Z,{fullWidth:!0,label:"\u5730\u5740",value:j.address,onChange:A})),a.createElement(u.ZP,{item:!0,xs:12},a.createElement(p.Z,{textAlign:"left"},"\u8ba2\u5355\u660e\u7ec6"),a.createElement(k.Z,{component:c.Z},a.createElement(m.Z,{size:"small"},a.createElement(v.Z,null,a.createElement(g.Z,null,a.createElement(s.Z,null,"\u5546\u54c1"),a.createElement(s.Z,null,"\u6570\u91cf"),a.createElement(s.Z,null,"\u5355\u4ef7"),a.createElement(s.Z,null,"\u660e\u7ec6\u4ef7"),a.createElement(s.Z,null,"\u5220\u9664"))),a.createElement(d.Z,null,j.items.map((e=>{const t=void 0!==e.productId?w.get(e.productId):void 0;return a.createElement(g.Z,{key:e.__rowId},a.createElement(s.Z,null,a.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{J(t,e.__rowId)}},_.map((e=>a.createElement(i.Z,{key:e.id,value:e.id},e.name))))),a.createElement(s.Z,null,a.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{z(t,e.__rowId)}})),a.createElement(s.Z,null,null==t?void 0:t.price),a.createElement(s.Z,null,void 0!==t&&t.price*e.quantity),a.createElement(s.Z,null,a.createElement(b.Z,{onClick:()=>U(e.__rowId)},a.createElement(y.Z,null))))}))),a.createElement(N.Z,null,a.createElement(g.Z,null,a.createElement(s.Z,{colSpan:5},a.createElement(o.Z,{variant:"outlined",onClick:F},a.createElement(h.Z,null),"\u6dfb\u52a0"))))))),a.createElement(u.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",j.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>w.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),a.createElement(u.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"contained",onClick:W},"\u63d0\u4ea4")))),a.createElement(Z.Z,{open:G,onClose:$},a.createElement(T.Z,null,t?"\u4fe1\u606f":"Info"),a.createElement(E.Z,null,a.createElement(f.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),a.createElement(I.Z,null,a.createElement(o.Z,{onClick:$},"\u5173\u95ed"))))})),B=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],D=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}];function O(e){const t=e.items,n=new Map;for(let a=0;a<t.length;a++){const e=t[a];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(a--,1);continue}if(void 0===e.productId)continue;const l=n.get(e.productId);void 0===l?n.set(e.productId,e):(l.quantity+=e.quantity,t.splice(a--,1))}}},20036:(e,t,n)=>{n.d(t,{k:()=>h});var a=n(52263),l=n(94054),o=n(33841),r=n(23599),i=n(90629),u=n(43246),p=n(31536),c=n(61903),m=n(50657),d=n(37645),s=n(6514),k=n(31425),v=n(58951),g=n(83321),N=n(67294);const h=(0,N.memo)((()=>{const[e,t]=(0,N.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,N.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),h=(0,N.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),b=(0,N.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),y=(0,N.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),Z=(0,N.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:I}=(0,a.Z)(),E=(0,N.useMemo)((()=>"zh"==I.currentLocale||"zh_cn"==I.currentLocale||"zh_CN"==I.currentLocale),[I.currentLocale]),[f,T]=(0,N.useState)(!1),C=(0,N.useCallback)((()=>{T(!0)}),[]),P=(0,N.useCallback)((()=>{T(!1)}),[]);return N.createElement(i.Z,{elevation:3,style:{padding:"1.5rem",width:500}},N.createElement(p.Z,{spacing:2},N.createElement("h1",null,"Book Form"),N.createElement(c.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),N.createElement(c.Z,{label:"Edition",type:"number",value:e.edition,onChange:h}),N.createElement(c.Z,{label:"Price",type:"number",value:e.price,onChange:b}),N.createElement(l.Z,{fullWidth:!0},N.createElement(o.Z,{id:"store-select-label"},"Store"),N.createElement(u.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:y},N.createElement(r.Z,{value:-1},"--NONE--"),N.createElement(r.Z,{value:1},"O'REILLY"),N.createElement(r.Z,{value:2},"MANNING"))),N.createElement(l.Z,{fullWidth:!0},N.createElement(o.Z,{id:"author-multi-select-label"},"Authors"),N.createElement(u.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:Z},N.createElement(r.Z,{value:1},"Eve Procello"),N.createElement(r.Z,{value:2},"Alex Banks"),N.createElement(r.Z,{value:3},"Dan Vanderkam"),N.createElement(r.Z,{value:4},"Boris Cherny"),N.createElement(r.Z,{value:5},"Samer Buna"))),N.createElement(l.Z,null,N.createElement(g.Z,{onClick:C,variant:"contained"},"\u63d0\u4ea4"))),N.createElement(m.Z,{open:f,onClose:P},N.createElement(d.Z,null,E?"\u4fe1\u606f":"Info"),N.createElement(s.Z,null,N.createElement(v.Z,null,E?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),N.createElement(k.Z,null,N.createElement(g.Z,{onClick:P},"\u5173\u95ed"))))}))},32102:(e,t,n)=>{n.d(t,{s:()=>v});var a=n(83117),l=n(67294),o=n(42293),r=n(50657),i=n(6514),u=n(54776),p=n(10155),c=n(15861),m=n(93946),d=n(9137),s=n(61274),k=n(50594);const v=(0,l.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,onClose:u,children:v}=e;const[N,h]=(0,l.useState)(n),b=(0,l.useCallback)((()=>{h((e=>!e))}),[]);return l.createElement(r.Z,{open:t,onClose:u,fullScreen:N,TransitionComponent:g,maxWidth:"md"},l.createElement(o.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(c.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:b,style:{color:"white"}},N?l.createElement(s.Z,null):l.createElement(d.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:u,style:{color:"white"}},l.createElement(k.Z,null)))),l.createElement(i.Z,null,v))})),g=l.forwardRef((function(e,t){return l.createElement(u.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>r});var a=n(67294),l=n(83321),o=n(32102);const r=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:r=t,variant:i="contained",children:u}=e;const[p,c]=(0,a.useState)(!1),m=(0,a.useCallback)((e=>{c(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),d=(0,a.useCallback)((()=>{c(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:m,variant:i,size:"outlined"==i?"small":"medium"},t),a.createElement(o.s,{open:p,onClose:d,title:r,fullScreen:n},u))}))},92075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),r=n(85162),i=n(20036),u=n(86153),p=n(39511);const c={sidebar_position:3,title:"Use DTO language"},m=void 0,d={unversionedId:"mutation/save-command/input-dto/dto-lang",id:"mutation/save-command/input-dto/dto-lang",title:"Use DTO language",description:"Jimmer\u63d0\u4f9b\u4e86DTO\u8bed\u8a00\u3002",source:"@site/docs/mutation/save-command/input-dto/dto-lang.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/dto-lang",permalink:"/jimmer/docs/mutation/save-command/input-dto/dto-lang",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/input-dto/dto-lang.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Use DTO language"},sidebar:"tutorialSidebar",previous:{title:"Lonely Form",permalink:"/jimmer/docs/mutation/save-command/input-dto/lonely"},next:{title:"Use MapStruct",permalink:"/jimmer/docs/mutation/save-command/input-dto/mapstruct"}},s={},k=[{value:"\u5b9a\u4e49DTO\u7684\u5f62\u72b6",id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6",level:2},{value:"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b",id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],v={toc:k};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86",(0,l.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"DTO\u8bed\u8a00"),"\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bed\u8a00\u5feb\u901f\u5b9a\u4e49\u8981\u4fdd\u5b58\u7684Input DTO\u7684\u5f62\u72b6\uff0c\u7f16\u8bd1\u540e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f8\u5173\u7684Java/Kotlin Input DTO\u7c7b\u5c06\u4f1a\u88ab\u81ea\u52a8\u751f\u6210")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Input DTO\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5f7c\u6b64\u8f6c\u5316\u903b\u8f91\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"))),(0,l.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u7528\u81ea\u52a8\u751f\u6210\u7684Input DTO\u4f5c\u4e3aAPI\u7684\u5165\u53c2\uff0c\u4e00\u884c\u4ee3\u7801\u4fdd\u5b58\u5b83\u5373\u53ef ",(0,l.kt)("em",{parentName:"p"},"(\u5185\u90e8\u903b\u8f91\uff1a\u8c03\u7528\u81ea\u52a8\u751f\u6210\u7684\u8f6c\u5316\u903b\u8f91\u628aInput DTO\u8f6c\u5316\u4e3a\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u518d\u7528\u4fdd\u5b58\u6307\u4ee4\u76f4\u63a5\u4fdd\u5b58)"),"\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u6d88\u9664Input DTO\u7206\u70b8\u5e26\u6765\u7684\u75db\u82e6\u7684\u6700\u9ad8\u6548\u65b9\u6848")),(0,l.kt)("h2",{id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6"},"\u5b9a\u4e49DTO\u7684\u5f62\u72b6"),(0,l.kt)("p",null,"\u672c\u6587\u4fa7\u91cd\u4e8e\u8bb2\u89e3\u5982\u4f55\u67e5\u8be2\u9759\u6001DTO\u7c7b\u578b\uff0c\u5e76\u975e\u7cfb\u7edf\u6027\u4ecb\u7ecdDTO\u8bed\u8a00\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"),"\u4ee5\u4e86\u89e3\u5b8c\u6574\u7684DTO\u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u5047\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u7c7b\u7684\u5168\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"com.yourcompany.yourpoject.model.Book"),"\uff0c\u4f60\u53ef\u4ee5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5728\u5b9e\u4f53\u5b9a\u4e49\u6240\u5728\u9879\u76ee\u4e2d"),"\uff0c\u5efa\u7acb\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u4e0b\uff0c\u6309\u5b9e\u4f53\u7c7b\u578b\u6240\u5904\u7684\u5305\u8def\u5f84\u5efa\u7acb\u5b50\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"com/yourcompany/yourpoject/model"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u6b65\u5efa\u7acb\u7684\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"Book.dto"),"\uff0c\u6587\u4ef6\u5fc5\u987b\u548c\u5b9e\u4f53\u7c7b\u540c\u540d\uff0c\u6269\u5c55\u540d\u5fc5\u987b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"dto"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u8f91\u6b64\u6587\u4ef6\uff0c\u5229\u7528DTO\u8bed\u8a00\uff0c\u5b9a\u4e49Book\u5b9e\u4f53\u7684\u5404\u79cdDTO\u5f62\u72b6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"# highlight-next-line\nBookInput {\n    \n    #allScalars(Book)\n    \n    id(store)\n\n    authors {\n        #allScalars(Author)\n        -id\n    }\n}\n\nSimpleBookInput { ...\u7565... }\n\n...\u7701\u7565\u5176\u4ed6Input DTO\u5f62\u72b6\u5b9a\u4e49...\n")),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u7528\u4f5c\u8f93\u5165\u53c2\u6570\u7684Input DTO\u7684\u5f62\u72b6\u5b9a\u4e49\u5fc5\u987b\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"input"),"\u4fee\u9970\u7b26\u4fee\u9970\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u539f\u56e0\u5df2\u7ecf\u5728",(0,l.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"),"\u4e2d\u6709\u8be6\u7ec6\u7684\u9610\u8ff0\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0")))),(0,l.kt)("h2",{id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b"},"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b"),(0,l.kt)("p",null,"Jimmer\u8d1f\u8d23\u7f16\u8bd1dto\u6587\u4ef6\uff0c\u81ea\u52a8\u751f\u6210\u7b26\u5408\u8fd9\u4e9b\u5f62\u72b6\u7684DTO\u7c7b\u578b\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u8fd8\u6709\u5176\u4ed6Java/Kotlin\u539f\u4ee3\u7801\u6587\u4ef6\u88ab\u4fee\u6539\u4e86\uff0c\u76f4\u63a5\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u53ef\u4ee5\u5bfc\u81f4dto\u6587\u4ef6\u7684\u91cd\u65b0\u7f16\u8bd1"),(0,l.kt)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u6ca1\u6709\u5176\u4ed6Java/Kotlin\u6587\u4ef6\u88ab\u4fee\u6539\uff0c\u7b80\u5355\u5730\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u5e76\u4e0d\u4f1a\u5bfc\u81f4dto\u6587\u4ef6\u88ab\u91cd\u65b0\u7f16\u8bd1\uff0c\u9664\u975e\u663e\u5f0f\u5730rebuild\uff01")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u4e3a\u4f8b\uff0c\u6b64dto\u6587\u4ef6\u88abJimmer\u6210\u529f\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5982\u4e0bDTO\u7c7b\u578b"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"package com.yourcompany.yourpoject.model.dto;\n\nimport com.yourcompany.yourpoject.model.Book;\nimport org.babyfish.jimmer.Input;\n\n@lombok.Data\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<TargetOf_authors> authors; \u2778\n\n    public BookInput(Book book) { \u2779\n        ...\u7565...\n    }\n\n    @Override\n    public Book toEntity() { \u277a\n        ...\u7565...\n    }\n\n    @Data\n    public static class TargetOf_authors {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},'package com.yourcompany.yourpoject.model.dto\n\nimport com.yourcompany.yourpoject.model.Book\nimport org.babyfish.jimmer.Input\n\ndata class BookInput(\n    val id: Long? = null, \u2776\n    val name: String = "", \n    val edition: Int = 0,\n    val price: BigDecimal, \n    val storeId: Long? = null, \u2777\n    val authors: List<TargetOf_authors> = emptyList() \u2778\n): Input<Book> {\n\n    constructor(book: Book) : this(...\u7565...) \u2779\n\n    override fun toEntity(): Book = ...\u7565... \u277a\n\n    data class TargetOf_authors(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    ) {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u5982\u679cid\u88ab\u6307\u5b9a\u4e86\u81ea\u52a8\u751f\u6210\u7b56\u7565\uff0c\u5219id\u4e0d\u662f\u5fc5\u987b\u7684\u3002\u8fd9\u4e5f\u662f\u4fdd\u5b58\u6307\u4ee4\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5177\u4f53\u7ec6\u8282\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../save-mode#%E6%80%BB%E7%BB%93"},"\u4fdd\u5b58\u6a21\u5f0f/\u603b\u7ed3")),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u4e0d\u53ef\u80fd\u4e3anull\uff0c\u9760id\u5c5e\u6027\u7684\u7f3a\u5931 ",(0,l.kt)("em",{parentName:"p"},"(\u5373\uff0c\u4e0d\u8d4b\u503c)")," \u6765\u8868\u8fbe\u5bf9\u8c61\u6ca1\u6709id\u7684\u60c5\u51b5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eInput DTO\u800c\u8a00\uff0c\u9759\u6001\u7684POJO\u7c7b\u578b\u6ca1\u6709\u5c5e\u6027\u7f3a\u5931\u7684\u6982\u5ff5\uff0c\u9760null\u6765\u8868\u8fbe\u6ca1\u6709id\u7684\u60c5\u51b5\u3002"))),(0,l.kt)("p",{parentName:"admonition"},"\u4e8c\u8005\u770b\u4f3c\u77db\u76fe\uff0c\u4f46\u5176\u5b9e\u53ef\u4ee5\u7b80\u5355\u5730\u5904\u7406\uff1a\u5982\u679cInput DTO\u7684id\u4e3anull\uff0c\u8f6c\u5316\u540e\u7684\u5b9e\u4f53\u5bf9\u8c61\u65e0id ",(0,l.kt)("em",{parentName:"p"},"(\u867d\u7136id\u4e0d\u5141\u8bb8\u88ab\u8d4b\u4e3anull\uff0c\u4f46\u52a8\u6001\u5bf9\u8c61\u53ef\u4ee5\u4e0d\u5bf9\u5c5e\u6027\u8d4b\u503c)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,l.kt)(p.b,{buttonText:"\u77ed\u5173\u8054",variant:"text",mdxType:"ViewMore"},(0,l.kt)(i.k,{mdxType:"ShortAssociation"})),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u4e00\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002\u5176\u4e2d\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,l.kt)(p.b,{buttonText:"\u957f\u5173\u8054",variant:"text",mdxType:"ViewMore"},(0,l.kt)(u._,{mdxType:"LongAssociation"})),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u8fc7\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\uff0c\n\u5173\u8054\u5bf9\u8c61\u7684\u7c7b\u578b\u4e5f\u88ab\u5185\u5d4c\u7684InputDTO\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.TargetOf_authors"),"\u56fa\u5316\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2779 \u5c06\u52a8\u6001\u5b9e\u4f53\u8f6c\u5316\u4e3a\u9759\u6001InputDTO")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u277a \u5c06\u9759\u6001InputDTO\u8f6c\u5316\u4e3a\u52a8\u6001\u5b9e\u4f53"))),(0,l.kt)("h2",{id:"http-api"},"HTTP API"),(0,l.kt)("p",null,"DTO\u8bed\u8a00\u751f\u6210\u4e86\u76f8\u5bf9\u5b8c\u5907\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5bf9\u5916\u66b4\u9732\u4fdd\u5b58\u6570\u636e\u7684HTTP API"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // highlight-next-line\n    bookRepository.save(input);\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // highlight-next-line\n    bookRepository.save(input)\n}\n')))),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"save(input)"),"\u5176\u5b9e\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"save(input.toEntity())"),"\u7684\u7b80\u5199\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5e38\u5e38\u9762\u4e34\u4e00\u4e2a\u5b9e\u9645\u7684\u95ee\u9898\uff0c\u5b9e\u4f53\u7684\u5c5e\u6027\u53ef\u80fd\u975e\u5e38\u591a\uff0c\u800c\u4e14"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11"))),(0,l.kt)("p",null,"\u6211\u4eec\u4e00\u81f4\u7528\u4f5c\u4f8b\u5b50\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u7b49\u5b9e\u4f53\u5c5e\u6027\u5f88\u5c11\uff0c\u4e0d\u65b9\u4fbf\u6f14\u793a\uff0c\u56e0\u6b64\uff0c\u6211\u865a\u6784\u4e00\u4e2a\u5c5e\u6027\u8f83\u591a\u7684\u5b9e\u4f53\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Product"),"\u3002"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Product.java"',title:'"Product.java"'},"@Entity\npublic interface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Product.kt"',title:'"Product.kt"'},"@Entity\ninterface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9488\u5bf9\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProductInput"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9488\u5bf9\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateProductInput")))),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Product.dto"),"\u7684\u4ee3\u7801\u770b\u8d77\u6765\u5e94\u8be5\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"input CreateProductInput {\n    ...\u8f83\u591a\u5c5e\u6027\uff0c\u7565...\n}\n\ninput UpdateProductInput {\n    ...\u8f83\u5c11\u5c5e\u6027\uff0c\u7565...\n}\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProductInput"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateProductInput"),"\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u5982\u4e0b\u4e24\u4e2aHTTP API"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")\npublic void updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody input: CreateProductInput\n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")\nfun updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n}\n')))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7531\u6b64\u53ef\u89c1\uff0c\u65e0\u8bba\u9879\u76ee\u7684\u4e1a\u52a1\u7279\u8272\u51b3\u5b9a\u9700\u8981\u4e3a\u540c\u4e00\u5b9e\u4f53\u5b9a\u4e49\u591a\u5c11\u4e86\u4e0d\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Input DTO"),"\u7c7b\u578b\u3002\u6700\u7ec8\u90fd\u662f\u5229\u7528DTO\u8bed\u8a00\u5feb\u901f\u751f\u6210Input DTO\u7c7b\u578b\u548c\u76f8\u5173\u6570\u636e\u8f6c\u5316\u903b\u8f91\uff0c\u7136\u540e\u7528\u4e00\u884c\u4ee3\u7801\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u5373\u53ef\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u54ea\u6015\u9879\u76ee\u7684\u4e1a\u52a1\u66f4\u590d\u6742\u4e00\u4e9b\uff0c\u6bd4\u5982\u4e0d\u540c\u8eab\u4efd\u7684\u4eba\u53ef\u4ee5\u7f16\u8f91\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u4e0d\u540c\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u65ad\u5957\u7528\u6b64\u6a21\u5f0f\u8f7b\u677e\u5e94\u5bf9\u3002")))}g.isMDXComponent=!0}}]);