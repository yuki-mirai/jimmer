"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2278],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),m=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},c=function(e){var a=m(e.components);return r.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=n,f=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return t?r.createElement(f,u(u({ref:a},c),{},{components:t})):r.createElement(f,u({ref:a},c))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var m=2;m<o;m++)u[m]=t[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35097:function(e,a,t){t.d(a,{V:function(){return o}});var r=t(1588),n=t(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const u=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);a.Z=u},47167:function(e,a,t){const r=t(67294).createContext(void 0);a.Z=r},15704:function(e,a,t){function r({props:e,states:a,muiFormControl:t}){return a.reduce(((a,r)=>(a[r]=e[r],t&&void 0===e[r]&&(a[r]=t[r]),a)),{})}t.d(a,{Z:function(){return r}})},74423:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(67294),n=t(47167);function o(){return r.useContext(n.Z)}},15861:function(e,a,t){t.d(a,{Z:function(){return b}});var r=t(80102),n=t(83117),o=t(67294),u=t(93680),l=t(39707),i=t(94780),m=t(90948),c=t(71657),s=t(98216),d=t(1588),p=t(34867);function f(e){return(0,p.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(85893);const k=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],C=(0,m.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a[`align${(0,s.Z)(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((({theme:e,ownerState:a})=>(0,n.Z)({margin:0},a.variant&&e.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},h={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=o.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTypography"}),o=(e=>h[e]||e)(t.color),m=(0,l.Z)((0,n.Z)({},t,{color:o})),{align:d="inherit",className:p,component:b,gutterBottom:g=!1,noWrap:y=!1,paragraph:E=!1,variant:J="body1",variantMapping:O=w}=m,N=(0,r.Z)(m,k),Z=(0,n.Z)({},m,{align:d,color:o,className:p,component:b,gutterBottom:g,noWrap:y,paragraph:E,variant:J,variantMapping:O}),D=b||(E?"p":O[J]||w[J])||"span",x=(e=>{const{align:a,gutterBottom:t,noWrap:r,paragraph:n,variant:o,classes:u}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,s.Z)(a)}`,t&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,i.Z)(l,f,u)})(Z);return(0,v.jsx)(C,(0,n.Z)({as:D,ref:a,ownerState:Z,className:(0,u.Z)(x.root,p)},N))}))},72021:function(e,a,t){t.d(a,{Z:function(){return n}});var r=t(67294);var n=function({controlled:e,default:a,name:t,state:n="value"}){const{current:o}=r.useRef(void 0!==e),[u,l]=r.useState(a);return[o?e:u,r.useCallback((e=>{o||l(e)}),[])]}},39707:function(e,a,t){t.d(a,{Z:function(){return i}});var r=t(83117),n=t(80102),o=t(59766),u=t(44920);const l=["sx"];function i(e){const{sx:a}=e,t=(0,n.Z)(e,l),{systemProps:i,otherProps:m}=(e=>{var a,t;const r={systemProps:{},otherProps:{}},n=null!=(a=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?a:u.Z;return Object.keys(e).forEach((a=>{n[a]?r.systemProps[a]=e[a]:r.otherProps[a]=e[a]})),r})(t);let c;return c=Array.isArray(a)?[i,...a]:"function"==typeof a?(...e)=>{const t=a(...e);return(0,o.P)(t)?(0,r.Z)({},i,t):i}:(0,r.Z)({},i,a),(0,r.Z)({},m,{sx:c})}},10209:function(e,a,t){function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.Z=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},85162:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(67294),n=t(34334),o="tabItem_Ymn6";function u(e){var a=e.children,t=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,u),hidden:t},a)}},65488:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(83117),n=t(67294),o=t(34334),u=t(72389),l=t(67392),i=t(7094),m=t(12466),c="tabList__CuJ",s="tabItem_LNqP";function d(e){var a,t,u=e.lazy,d=e.block,p=e.defaultValue,f=e.values,v=e.groupId,k=e.className,C=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:C.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,l.l)(w,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(a=null!=p?p:null==(t=C.find((function(e){return e.props.default})))?void 0:t.props.value)?a:C[0].props.value;if(null!==b&&!w.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.U)(),y=g.tabGroupChoices,E=g.setTabGroupChoices,J=(0,n.useState)(b),O=J[0],N=J[1],Z=[],D=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=y[v];null!=x&&x!==O&&w.some((function(e){return e.value===x}))&&N(x)}var P=function(e){var a=e.currentTarget,t=Z.indexOf(a),r=w[t].value;r!==O&&(D(a),N(r),null!=v&&E(v,String(r)))},B=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r,n=Z.indexOf(e.currentTarget)+1;t=null!=(r=Z[n])?r:Z[0];break;case"ArrowLeft":var o,u=Z.indexOf(e.currentTarget)-1;t=null!=(o=Z[u])?o:Z[Z.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},w.map((function(e){var a=e.value,t=e.label,u=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:function(e){return Z.push(e)},onKeyDown:B,onFocus:P,onClick:P},u,{className:(0,o.Z)("tabs__item",s,null==u?void 0:u.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),u?(0,n.cloneElement)(C.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},C.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}function p(e){var a=(0,u.Z)();return n.createElement(d,(0,r.Z)({key:String(a)},e))}},32360:function(e,a,t){t.d(a,{L:function(){return k}});var r=t(67294),n=t(63012),o=t(7906),u=t(295),l=t(53252),i=t(53184),m=t(53816),c=t(65488),s=t(85162),d=t(53457),p=t(50480),f=t(85071),v=t(67720),k=function(e){var a=e.type,t=e.locale,n=(0,r.useState)("OPS"!==a),o=n[0],u=n[1],l=(0,r.useCallback)((function(e,a){u(a)}),[]);return r.createElement(c.Z,{groupId:"chart-mode"},r.createElement(s.Z,{value:"chart",label:"zh"===t?"\u56fe\u8868":"Chart",default:!0},"OPS"===a&&r.createElement(r.Fragment,null,r.createElement(d.Z,null,r.createElement(p.Z,{control:r.createElement(f.Z,{value:o,onChange:l}),label:"zh"===t?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),r.createElement(v.Z,null)),"OPS"==a?r.createElement(C,{rows:y,scale:h,showJdbc:o}):r.createElement(C,{rows:E,scale:b,showJdbc:o})),r.createElement(s.Z,{value:"data",label:"zh"===t?"\u6570\u636e":"Data"},"OPS"===a?r.createElement(w,{rows:O,valueTitle:"Ops/s"}):r.createElement(w,{rows:N,valueTitle:"Time(\u03bcs)"})))},C=function(e){var a=e.rows,t=e.scale,o=e.showJdbc;return r.createElement(n.Chart,{filter:o?void 0:{framework:function(e){return!e.startsWith("JDBC")}},height:400,padding:"auto",data:a,scale:t,autoFit:!0},r.createElement(n.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),r.createElement(n.Axis,{name:"value",title:!0}),r.createElement(n.Legend,{position:"left"}),r.createElement(n.Tooltip,{shared:!0}),r.createElement(n.Interaction,{type:"active-region"}))},w=function(e){var a=e.rows,t=e.valueTitle;return r.createElement(o.Z,null,r.createElement(i.Z,null,r.createElement(m.Z,null,r.createElement(l.Z,null,"Framework"),r.createElement(l.Z,null,"Data count"),r.createElement(l.Z,null,t))),r.createElement(u.Z,null,a.map((function(e){return r.createElement(m.Z,{key:e.framework+"-"+e.dataCount},r.createElement(l.Z,null,e.framework),r.createElement(l.Z,null,e.dataCount),r.createElement(l.Z,null,e.value))}))))},h={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},b={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},g=[{framework:"JDBC(ColIndex)",dataCount:"10",value:668548},{framework:"JDBC(ColIndex)",dataCount:"20",value:485607},{framework:"JDBC(ColIndex)",dataCount:"50",value:260938},{framework:"JDBC(ColIndex)",dataCount:"100",value:133789},{framework:"JDBC(ColIndex)",dataCount:"200",value:71362},{framework:"JDBC(ColIndex)",dataCount:"500",value:32131},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16088},{framework:"JDBC(ColName)",dataCount:"10",value:340571},{framework:"JDBC(ColName)",dataCount:"20",value:239359},{framework:"JDBC(ColName)",dataCount:"50",value:128565},{framework:"JDBC(ColName)",dataCount:"100",value:70058},{framework:"JDBC(ColName)",dataCount:"200",value:38895},{framework:"JDBC(ColName)",dataCount:"500",value:16152},{framework:"JDBC(ColName)",dataCount:"1000",value:8172},{framework:"Jimmer(Java)",dataCount:"10",value:348417},{framework:"Jimmer(Java)",dataCount:"20",value:251418},{framework:"Jimmer(Java)",dataCount:"50",value:135241},{framework:"Jimmer(Java)",dataCount:"100",value:78190},{framework:"Jimmer(Java)",dataCount:"200",value:41688},{framework:"Jimmer(Java)",dataCount:"500",value:17355},{framework:"Jimmer(Java)",dataCount:"1000",value:8815},{framework:"Jimmer(Kotlin)",dataCount:"10",value:339465},{framework:"Jimmer(Kotlin)",dataCount:"20",value:245564},{framework:"Jimmer(Kotlin)",dataCount:"50",value:133790},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74563},{framework:"Jimmer(Kotlin)",dataCount:"200",value:39329},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16647},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:8717},{framework:"EasyQuery",dataCount:"10",value:225383},{framework:"EasyQuery",dataCount:"20",value:144832},{framework:"EasyQuery",dataCount:"50",value:76663},{framework:"EasyQuery",dataCount:"100",value:39687},{framework:"EasyQuery",dataCount:"200",value:20858},{framework:"EasyQuery",dataCount:"500",value:8452},{framework:"EasyQuery",dataCount:"1000",value:4511},{framework:"MyBatis",dataCount:"10",value:75843},{framework:"MyBatis",dataCount:"20",value:43330},{framework:"MyBatis",dataCount:"50",value:19353},{framework:"MyBatis",dataCount:"100",value:10430},{framework:"MyBatis",dataCount:"200",value:5273},{framework:"MyBatis",dataCount:"500",value:2099},{framework:"MyBatis",dataCount:"1000",value:1070},{framework:"Exposed",dataCount:"10",value:92778},{framework:"Exposed",dataCount:"20",value:61642},{framework:"Exposed",dataCount:"50",value:30785},{framework:"Exposed",dataCount:"100",value:16518},{framework:"Exposed",dataCount:"200",value:9050},{framework:"Exposed",dataCount:"500",value:3831},{framework:"Exposed",dataCount:"1000",value:1950},{framework:"JPA(Hibernate)",dataCount:"10",value:102253},{framework:"JPA(Hibernate)",dataCount:"20",value:59467},{framework:"JPA(Hibernate)",dataCount:"50",value:26257},{framework:"JPA(Hibernate)",dataCount:"100",value:13539},{framework:"JPA(Hibernate)",dataCount:"200",value:6977},{framework:"JPA(Hibernate)",dataCount:"500",value:2791},{framework:"JPA(Hibernate)",dataCount:"1000",value:1396},{framework:"JPA(EclipseLink)",dataCount:"10",value:64726},{framework:"JPA(EclipseLink)",dataCount:"20",value:33448},{framework:"JPA(EclipseLink)",dataCount:"50",value:13420},{framework:"JPA(EclipseLink)",dataCount:"100",value:6473},{framework:"JPA(EclipseLink)",dataCount:"200",value:3378},{framework:"JPA(EclipseLink)",dataCount:"500",value:1362},{framework:"JPA(EclipseLink)",dataCount:"1000",value:667},{framework:"JOOQ",dataCount:"10",value:68624},{framework:"JOOQ",dataCount:"20",value:35257},{framework:"JOOQ",dataCount:"50",value:15514},{framework:"JOOQ",dataCount:"100",value:7871},{framework:"JOOQ",dataCount:"200",value:4856},{framework:"JOOQ",dataCount:"500",value:1895},{framework:"JOOQ",dataCount:"1000",value:879},{framework:"Nutz",dataCount:"10",value:70429},{framework:"Nutz",dataCount:"20",value:38999},{framework:"Nutz",dataCount:"50",value:17200},{framework:"Nutz",dataCount:"100",value:8268},{framework:"Nutz",dataCount:"200",value:4629},{framework:"Nutz",dataCount:"500",value:1859},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:47800},{framework:"ObjectiveSQL",dataCount:"20",value:30930},{framework:"ObjectiveSQL",dataCount:"50",value:13229},{framework:"ObjectiveSQL",dataCount:"100",value:6633},{framework:"ObjectiveSQL",dataCount:"200",value:3289},{framework:"ObjectiveSQL",dataCount:"500",value:1338},{framework:"ObjectiveSQL",dataCount:"1000",value:617},{framework:"Spring Data JDBC",dataCount:"10",value:20647},{framework:"Spring Data JDBC",dataCount:"20",value:10672},{framework:"Spring Data JDBC",dataCount:"50",value:4452},{framework:"Spring Data JDBC",dataCount:"100",value:2032},{framework:"Spring Data JDBC",dataCount:"200",value:1084},{framework:"Spring Data JDBC",dataCount:"500",value:460},{framework:"Spring Data JDBC",dataCount:"1000",value:233},{framework:"Ktorm",dataCount:"10",value:18816},{framework:"Ktorm",dataCount:"20",value:10157},{framework:"Ktorm",dataCount:"50",value:4185},{framework:"Ktorm",dataCount:"100",value:2137},{framework:"Ktorm",dataCount:"200",value:1036},{framework:"Ktorm",dataCount:"500",value:361},{framework:"Ktorm",dataCount:"1000",value:229}],y=g.map((function(e){return Object.assign({},e,{value:Math.round(e.value)})})),E=g.map((function(e){return Object.assign({},e,{value:Math.round(1e6/e.value)})}));function J(e,a){return parseInt(e.dataCount)-parseInt(a.dataCount)}var O=y.sort(J),N=E.sort(J)},45198:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(83117),n=t(80102),o=(t(67294),t(3905)),u=t(32360),l=["components"],i={sidebar_position:5,title:"Benchmark"},m=void 0,c={unversionedId:"benchmark",id:"benchmark",title:"Benchmark",description:"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801\u5728\u6b64\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/jimmer/zh/docs/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Benchmark"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u5217\u8868",permalink:"/jimmer/zh/docs/intro"},next:{title:"jimmer-core(Old)",permalink:"/jimmer/zh/docs/jimmer-core/"}},s={},d=[{value:"\u62a5\u544a",id:"\u62a5\u544a",level:2},{value:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",level:3},{value:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",level:3},{value:"\u5b9e\u73b0\u539f\u5219",id:"\u5b9e\u73b0\u539f\u5219",level:2},{value:"\u4ef7\u503c",id:"\u4ef7\u503c",level:2}],p={toc:d};function f(e){var a=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"\u5728\u6b64"),"\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"\u62a5\u544a"},"\u62a5\u544a"),(0,o.kt)("h3",{id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"},"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570\u3002")),(0,o.kt)(u.L,{type:"OPS",locale:"zh",mdxType:"Benchmark"}),(0,o.kt)("h3",{id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"},"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6(\u5fae\u79d2)\u3002")),(0,o.kt)(u.L,{type:"TIME",locale:"zh",mdxType:"Benchmark"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7531\u4e8eSpring\u79fb\u9664\u4e86\u5bf9OpenJPA\u7684\u652f\u6301\uff0c\u672c\u57fa\u51c6\u6d4b\u8bd5\u4e0d\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)"))),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u539f\u5219"},"\u5b9e\u73b0\u539f\u5219"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u7981\u7528\u7f13\u5b58")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u5173\u95ed\u65e5\u5fd7")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u6bcf\u6b21\u90fd\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5/\u4f1a\u8bdd\uff0c\u4e0d\u505a\u5171\u4eab\uff1b\u9760\u8fde\u63a5\u6c60\u4fdd\u8bc1\u6027\u80fd\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u63a5\u5165Spring\u7684\u8fde\u63a5\u7ba1\u7406\u673a\u5236\u3002\u56e0\u4e0d\u540c\u6846\u67b6API\u4e0d\u540c\uff0c\u5b9e\u73b0\u65b9\u6cd5\u7565\u6709\u4e0d\u540c\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils"),"\u7684getConnection\u548creleaseConnection"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,o.kt)("p",{parentName:"li"},"\u4f46\u6700\u7ec8\u6548\u679c\u90fd\u4e00\u6837")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528\u4e8b\u52a1"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Exposed"),"\u6bd4\u8f83\u7279\u6b8a\uff0c\u5176API\u5f3a\u5236\u8981\u6c42\u4e8b\u52a1\uff0c\u7ed9\u4e88\u5047\u7684\u5b9e\u73b0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5d4c\u5165\u7684H2\u5185\u6570\u636e\u5e93\uff0c\u5c3d\u53ef\u80fd\u538b\u7f29\u6570\u636e\u5e93\u7684\u6d88\u8017\uff0c\u51f8\u663eORM\u672c\u8eab\u7684\u6027\u80fd\uff0c\u5373\u6620\u5c04\u7684\u6027\u80fd\u3002"))),(0,o.kt)("h2",{id:"\u4ef7\u503c"},"\u4ef7\u503c"),(0,o.kt)("p",null,"\u4e00\u79cd\u5e38\u89c1\u7684\u89c2\u70b9\uff1aORM\u672c\u8eab\u7684\u6027\u80fd\u4e0d\u91cd\u8981\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u5e76\u975e\u6709\u5185\u5d4c\u5185\u5b58\u6570\u636e\u5e93\uff0c\u6240\u4ee5ORM\u672c\u8eab\u8017\u65f6\u76f8\u5bf9\u4e8e\u6570\u636e\u5e93\u8017\u65f6\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,o.kt)("p",null,"\u53cd\u9a73\uff1aJava19\u53d1\u5e03\u540e\uff0c\u652f\u6301\u865a\u62df\u7ebf\u7a0b\u3002ORM\u80fd\u5c3d\u5feb\u5b8c\u6210\u6620\u5c04\uff0c\u53ef\u4ee5\u8ba9JVM\u53bb\u8c03\u5ea6\u66f4\u591a\u7684\u865a\u62df\u7ebf\u7a0b\u3002"))}f.isMDXComponent=!0}}]);