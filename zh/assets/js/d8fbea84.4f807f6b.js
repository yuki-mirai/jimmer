"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:d,groupId:b,className:y}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:v}=(0,s.U)(),[g,T]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=b){const e=_[b];null!=e&&e!==g&&N.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=N[n].value;a!==g&&(I(t),T(a),null!=b&&v(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},y)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":g===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},69497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:2,title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84"},s=void 0,p={unversionedId:"query/dynamic-join/chain-style",id:"query/dynamic-join/chain-style",title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84",description:"Jimmer\u662f\u5982\u4f55\u89e3\u51b3\u52a8\u6001\u8fde\u63a5\u95ee\u9898\u5c06\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8ba8\u8bba\uff0c\u672c\u6587\u5148\u4ecb\u7ecdJimmer\u4e2d\u8868\u8fde\u63a5\u7684\u98ce\u683c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/chain-style.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/chain-style",permalink:"/jimmer/zh/docs/query/dynamic-join/chain-style",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/dynamic-join/chain-style.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84"},sidebar:"tutorialSidebar",previous:{title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898",permalink:"/jimmer/zh/docs/query/dynamic-join/problem"},next:{title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5",permalink:"/jimmer/zh/docs/query/dynamic-join/merge"}},u={},m=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5916\u94fe\u63a5",id:"\u5916\u94fe\u63a5",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u662f\u5982\u4f55\u89e3\u51b3\u52a8\u6001\u8fde\u63a5\u95ee\u9898\u5c06\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8ba8\u8bba\uff0c\u672c\u6587\u5148\u4ecb\u7ecdJimmer\u4e2d\u8868\u8fde\u63a5\u7684\u98ce\u683c\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5bf9\u4e8e\u7406\u8bba\u4e0a\u5b58\u5728\u4f46\u5b9e\u9645\u9879\u76ee\u4e2d\u51e0\u4e4e\u4e0d\u7528\u751a\u81f3\u9700\u8981\u5c0f\u5fc3\u907f\u514d\u7b1b\u5361\u5c14\u4e58\u79ef\uff0cJimmer\u653e\u5f03\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\uff0cJimmer SQL DSL\u5c31\u65e0\u9700\u652f\u6301\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"from"),"\u5b50\u53e5\uff0c\u6240\u6709\u8de8\u8868\u64cd\u4f5c\u5168\u90e8\u7edf\u4e00\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"join"),"\u3002"),(0,r.kt)("p",null,"Jimmer\u4e2d\uff0c\u6240\u6709\u8868\u8fde\u63a5\u7684\u9690\u5f0f\u7684\uff0c\u7531\u4efb\u610f\u6570\u91cf\u5173\u8054\u5c5e\u6027\u8fde\u63a5\u800c\u6210\u8def\u5f84\uff0c\u5373\u88ab\u88ab\u89c6\u4e3a\u591a\u4e2a\u8868\u8fde\u63a5\u3002\u4f8b\u5982"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public List<Book> findBooksByStoreCityName(@Nullable String storeCityName) {\n\n    BookTable table = BookTable.$;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            storeCityName != null && !storeCityName.isEmpty(),\n            // highlight-next-line\n            table.store().city().name().eq(name)\n        )\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .execute();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooksByStoreCityName(name: storeCityName?): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            storeCityName?.takeIf { it.isNotEmpty() }?.let {\n                // highlight-next-line\n                where(table.store.city.name eq it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .execute()\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u5f97\u4ee3\u7801\u4e2d\uff0cJava\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"table.store().city()"),"\u6216Kotlin\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"table.store.city"),"\u5c31\u662f\u5173\u8054\u8def\u5f84\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5173\u8054\u8def\u5f84\u957f\u5ea6\u4e0d\u53d7\u9650\u5236\uff0c\u5176\u4e2d\u7684\u6bcf\u4e2a\u5173\u8054\u5c5e\u6027\u5f15\u7528\u90fd\u5bf9\u5e94\u4e00\u4e2aSQL\u8868\u8fde\u63a5\u64cd\u4f5c\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"from BOOK tb_1_\n// highlight-next-line\ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID\n// highlight-next-line\ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\n\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"findBooksByStoreCityName(null)"),"\u751f\u6210\u7684SQL\u4e3a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'findBooksByStoreCityName("ChengDu")'),"\u751f\u6210\u7684SQL\u4e3a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n// highlight-next-line\ninner join BOOK_STORE tb_2_ // `.store`\n    on tb_1_.STORE_ID = tb_2_.ID\n// highlight-next-line \ninner join CITY tb_3_ // `.city`\n    on tb_2_.CITY_ID = tb_3_.ID\nwhere \n    // `.name eq "ChengDu"`\n    // highlight-next-line \n    tb_3_.NAME = ? /* ChengDu */\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\n')))),(0,r.kt)("h2",{id:"\u5916\u94fe\u63a5"},"\u5916\u94fe\u63a5"),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5173\u8054\u8def\u5f84\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},".store"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},".city"),"\u90fd\u8868\u793a\u5185\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u5f88\u5bb9\u6613\u8868\u8fbe\u5916\u8fde\u63a5\uff0c\u4ee5\u5de6\u5916\u8fde\u63a5\u4e3a\u4f8b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"table.store().city(JoinType.LEFT)\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"table.store.`city?`\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u5145\u5206\u5229\u7528kotlin\u7684\u8bed\u8a00\u4f18\u52bf\u5145\u5206\u4f18\u5316\u5176\u5f00\u53d1\u4f53\u9a8c\uff0cJimmer\u5bf9Java\u548cKotlin\u63d0\u4f9b\u4e0d\u540c\u7684API\uff0c\u4f46\u4e8c\u8005\u672c\u8d28\u76f8\u540c\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5916\u8fde\u63a5\u5374\u662f\u552f\u4e00\u7684\u4f8b\u5916\uff0c\u5bf9\u4e8e\u8fd9\u4e2a\u7ec6\u8282\uff0cJava API\u548cKotlin API\u7684\u884c\u4e3a\u5e76\u4e0d\u4e00\u6837"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java DSL\n\u91c7\u7528JoinType\u8868\u793a\u8fde\u63a5\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"INNER")," ",(0,r.kt)("em",{parentName:"p"},"(\u9ed8\u8ba4)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LEFT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RIGHT"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"FULL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kotlin DSL"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u548c\u5b9e\u4f53\u5c5e\u6027\u540c\u540d\u7684DSL\u5c5e\u6027\u8868\u793a\u5185\u8fde\u63a5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76f8\u6bd4\u4e8e\u5b9e\u4f53\u5c5e\u6027\u540d\u540e\u9762\u591a\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"\u7684DSL\u5c5e\u6027\u8868\u793a\u5de6\u8fde\u63a5"))),(0,r.kt)("p",{parentName:"li"},"\u5373\uff0cKotlin DSL\u4e0d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"RIGHT"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"FULL"),"\uff0c\u8fd9\u79cd\u727a\u7272\u662f\u4ed4\u7ec6\u6743\u8861\u540e\u7684\u7ed3\u679c\uff0c\u76ee\u7684\u4e3a\u4e86\u6362\u53d6\u5728\u5bf9Kotlin\u800c\u8a00\u66f4\u91cd\u8981\u7684\u529f\u80fd\uff1a\u628akotlin\u7684null safety\u548cSQL DSL\u5b8c\u7f8e\u7ed3\u5408\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u7ec6\u8282\u4f1a\u5728",(0,r.kt)("a",{parentName:"p",href:"./kotlin-join"},"Kotlin\u8868\u8fde\u63a5\u7279\u6709\u529f\u80fd"),"\u4e2d\u8be6\u7ec6\u8ba8\u8bba\u3002")))))}d.isMDXComponent=!0}}]);