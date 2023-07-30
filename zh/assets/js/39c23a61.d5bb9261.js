"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[211],{32102:(e,n,t)=>{t.d(n,{s:()=>N});var a=t(83117),l=t(67294),i=t(42293),o=t(50657),r=t(6514),m=t(54776),p=t(10155),s=t(15861),b=t(93946),k=t(9137),u=t(61274),d=t(50594);const N=(0,l.memo)((e=>{let{open:n,fullScreen:t=!1,title:a,onClose:m,children:N}=e;const[g,h]=(0,l.useState)(t),T=(0,l.useCallback)((()=>{h((e=>!e))}),[]);return l.createElement(o.Z,{open:n,onClose:m,fullScreen:g,TransitionComponent:c,maxWidth:"md"},l.createElement(i.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(s.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(b.Z,{onClick:T,style:{color:"white"}},g?l.createElement(u.Z,null):l.createElement(k.Z,null)),l.createElement(b.Z,{"aria-label":"close",onClick:m,style:{color:"white"}},l.createElement(d.Z,null)))),l.createElement(r.Z,null,N))})),c=l.forwardRef((function(e,n){return l.createElement(m.Z,(0,a.Z)({direction:"up",ref:n},e))}))},39511:(e,n,t)=>{t.d(n,{b:()=>o});var a=t(67294),l=t(83321),i=t(32102);const o=(0,a.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:o=n,variant:r="contained",children:m}=e;const[p,s]=(0,a.useState)(!1),b=(0,a.useCallback)((e=>{s(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),k=(0,a.useCallback)((()=>{s(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:b,variant:r,size:"outlined"==r?"small":"medium"},n),a.createElement(i.s,{open:p,onClose:k,title:o,fullScreen:t},m))}))},37537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>p,default:()=>d,frontMatter:()=>m,metadata:()=>s,toc:()=>k});var a=t(83117),l=(t(67294),t(3905)),i=t(39511),o=t(65488),r=t(85162);const m={sidebar_position:5,title:"\u5206\u9875\u5b89\u5168\u6027"},p=void 0,s={unversionedId:"query/dynamic-join/table-ex",id:"query/dynamic-join/table-ex",title:"\u5206\u9875\u5b89\u5168\u6027",description:"\u5206\u9875\u5b89\u5168\u6027\u662f\u4e3a\u5206\u9875\u8bbe\u8ba1\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8868\u8fde\u63a5\u529f\u80fd\u4e3a\u5176\u63d0\u4f9b\u5e95\u5c42\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/table-ex.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/table-ex",permalink:"/jimmer/zh/docs/query/dynamic-join/table-ex",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/dynamic-join/table-ex.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5206\u9875\u5b89\u5168\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5",permalink:"/jimmer/zh/docs/query/dynamic-join/optimization"},next:{title:"\u5f31\u8fde\u63a5",permalink:"/jimmer/zh/docs/query/dynamic-join/weak-join"}},b={},k=[{value:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",level:2},{value:"\u96c6\u5408JOIN\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c",id:"\u96c6\u5408join\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c",level:3},{value:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3",id:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3",level:3},{value:"Table\u548cTableEx",id:"table\u548ctableex",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801",level:3},{value:"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",level:3},{value:"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u5b50\u67e5\u8be2",id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u5b50\u67e5\u8be2",level:3},{value:"asTableEx",id:"astableex",level:2}],u={toc:k};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5206\u9875\u5b89\u5168\u6027\u662f\u4e3a\u5206\u9875\u8bbe\u8ba1\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8868\u8fde\u63a5\u529f\u80fd\u4e3a\u5176\u63d0\u4f9b\u5e95\u5c42\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898"},"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u5148\u4ecb\u7ecd\u4e24\u79cd\u5173\u8054\u5c5e\u6027\uff0c\u5f15\u7528\u5173\u8054\u548c\u96c6\u5408\u5173\u8054\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u88ab",(0,l.kt)("inlineCode",{parentName:"li"},"@OneToOne"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"@ManyToOne"),"\u4fee\u9970\u7684\u5173\u8054\u5c5e\u6027\uff0c\u79f0\u4e3a\u5f15\u7528\u5173\u8054"),(0,l.kt)("li",{parentName:"ul"},"\u88ab",(0,l.kt)("inlineCode",{parentName:"li"},"@OneToMany"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"@ManyToMany"),"\u4fee\u9970\u7684\u5173\u8054\u5c5e\u6027\uff0c\u79f0\u4e3a\u96c6\u5408\u5173\u8054")),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003\u4f8b\u5b50, "),(0,l.kt)(i.b,{buttonText:"\u5173\u8054\u5206\u7c7b\u7684\u4f8b\u5b50",mdxType:"ViewMore"},(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u8fd9\u4e2a\u5b9e\u4f53\u5b9a\u4e49"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport javax.validation.constraints.Null;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    // highlight-next-line\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    val authors: List<Author>\n}\n')))),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u88ab",(0,l.kt)("inlineCode",{parentName:"li"},"@ManyToOne"),"\u4fee\u9970\uff0c\u662f\u4e00\u4e2a\u5f15\u7528\u5173\u8054"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u88ab",(0,l.kt)("inlineCode",{parentName:"li"},"@ManyToMany\u4fee\u9970"),"\uff0c\u662f\u4e00\u4e2a\u96c6\u5408\u5173\u8054"))),(0,l.kt)("h3",{id:"\u96c6\u5408join\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c"},"\u96c6\u5408JOIN\u5bfc\u81f4\u91cd\u590d\u67e5\u8be2\u7ed3\u679c"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u628a\u5f53\u524d\u88ab\u67e5\u8be2\u7684\u7b2c\u4e00\u5f20\u8868\u6240\u5bf9\u5e94\u7684\u5b9e\u4f53\u5bf9\u8c61\u79f0\u4e3a\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u5f15\u7528\u5173\u8054\u548c\u96c6\u5408\u5173\u8054\u4e4b\u95f4\u6709\u5982\u4e0b\u5dee\u5f02\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u5f15\u7528\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4e0d\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    b.id as root_id,\n    b.name as root_name,\n    s.id as associated_id,\n    s.name as associated_name \nfrom book b\ninner join book_store s\n    on b.store_id = s.id\nwhere b.id = 1;\n")),(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u6ca1\u6709\u51fa\u73b0\u91cd\u590d"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"root_id"),(0,l.kt)("th",{parentName:"tr",align:null},"root_name"),(0,l.kt)("th",{parentName:"tr",align:null},"associated_id"),(0,l.kt)("th",{parentName:"tr",align:null},"associated_name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Learning GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"O'REILLY"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u96c6\u5408\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    b.id as root_id,\n    b.name as root_name,\n    a.id as associated_id,\n    a.first_name as associated_first_name,\n    a.last_name as associated_last_name \nfrom book b\ninner join book_author_mapping m\n    on b.id = m.book_id\ninner join author a\n    on m.author_id = a.id\nwhere b.id = 1;\n")),(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u6709\u53ef\u80fd\u51fa\u73b0\u91cd\u590d\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"root_id"),(0,l.kt)("th",{parentName:"tr",align:null},"root_name"),(0,l.kt)("th",{parentName:"tr",align:null},"associated_id"),(0,l.kt)("th",{parentName:"tr",align:null},"associated_first_name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Learning GraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Eve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Learning GaphhQL"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Alex")))))),(0,l.kt)("h3",{id:"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3"},"\u67e5\u8be2\u7ed3\u679c\u91cd\u590d\u7684\u5371\u5bb3"),(0,l.kt)("p",null,"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\u4f1a\u5bfc\u81f4\u91cd\u590d\u6570\u636e\uff0c\u8fdb\u800c\u5f15\u53d1\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5f00\u53d1\u8005\u5fd8\u8bb0\u53bb\u91cd\uff0c\u5c31\u4f1a\u5f15\u5165bug\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5373\u4fbf\u5f00\u53d1\u8005\u6ca1\u6709\u5fd8\u8bb0\u53bb\u91cd\uff0c\u5728\u5ba2\u6237\u7aef\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.LinkedHashSet"),"\u8fdb\u884c\u53bb\u91cd\uff0c\u4e5f\u5e76\u975e\u4e00\u4e2a\u597d\u7684\u9009\u62e9\u3002\n\u56e0\u4e3a\u4e8b\u540e\u7684\u53bb\u91cd\u64cd\u4f5c\u4e5f\u4e0d\u80fd\u6539\u53d8\u6570\u636e\u5e93\u8fd4\u56de\u7684\u539f\u59cb\u7ed3\u679c\u5305\u542b\u91cd\u590d\u6570\u636e\u65e2\u5b9a\u4e8b\u5b9e\uff0c\u4e14\u4f1a\u6d88\u8017\u989d\u5916\u7684\u7f51\u7edc\u4f20\u8f93\u548cJVM\u5904\u7406\u6570\u636e\u7684\u6210\u672c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u5bf9\u5206\u9875\u67e5\u8be2\u4e0d\u53cb\u597d"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5728SQL\u5c42\u9762\u5bf9table join\u8fde\u63a5\u7ed3\u679c\u8fdb\u884c\u5206\u9875\uff0c\u5f80\u5f80\u4e0d\u662f\u4eba\u4eec\u6240\u9700\uff1b\u66f4\u591a\u7684\u573a\u666f\u4e0b\uff0c\u4eba\u4eec\u5e0c\u671b\u5206\u9875\u64cd\u4f5c\u88ab\u5e94\u7528\u5728\u805a\u5408\u6839\u5bf9\u8c61\u4e0a\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4ee5Hibernate\u4e3a\u4f8b\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cHibernate\u4e0d\u5f97\u4e0d\u653e\u5f03SQL\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\uff0c\u800c\u91c7\u7528\u5185\u5b58\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\u3002\u8fd9\u6837\u505a\u6027\u80fd\u975e\u5e38\u4f4e\u4e0b\uff0c\u4e3a\u4e86\u5f15\u8d77\u5f00\u53d1\u4eba\u5458\u7684\u91cd\u89c6\uff0cHibernate\u4f1a\u5728\u65e5\u5fd7\u4e2d\u8fdb\u884c\u544a\u8b66\u3002\u5982\u679c\u8bfb\u8005\u4f60\u6709Hibernate\u4f7f\u7528\u7ecf\u9a8c\uff0c\u76f8\u4fe1\u4e0b\u9762\u8fd9\u6761\u65e5\u5fd7\u4f1a\u8ba9\u4f60\u611f\u5230\u975e\u5e38\u5934\u75bc\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html"},"firstResult/maxResults specified with collection fetch; applying in memory")),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0cJimmer\u7684\u53e6\u5916\u4e00\u4e2a\u529f\u80fd",(0,l.kt)("a",{parentName:"p",href:"../object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\uff0c\u5e76\u4e0d\u662f\u57fa\u4e8etable join\u6765\u5b9e\u73b0\u5bf9\u96c6\u5408\u5173\u8054\u5c5e\u6027\u8fdb\u884cfetch\u7684\uff0c\u6545\u800c\u65e0\u6b64\u95ee\u9898\uff0c\u8bf7\u653e\u5fc3\u4f7f\u7528\u3002")))),(0,l.kt)("p",null,"\u7531\u4e8eSQL\u652f\u6301\u5b50\u67e5\u8be2\uff0c\u6211\u4eec\u628a\u6700\u5916\u5c42\u7684\u67e5\u8be2\u79f0\u4e3a\u9876\u5c42\u67e5\u8be2\u3002\u7efc\u4e0a\uff0c\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u7684\u7f3a\u70b9\u975e\u5e38\u660e\u663e\uff0c\u4f46\u4e0d\u53ef\u5426\u8ba4\uff0c\u5728\u5b50\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u4ecd\u7136\u6709\u5ba2\u89c2\u7684\u4ef7\u503c\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0cJimmer\u7684SQL DSL\u6709\u8fd9\u6837\u7684\u7279\u8272"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728",(0,l.kt)("strong",{parentName:"li"},"\u9876\u7ea7"),"\u67e5\u8be2\u4e2d\u9700\u8981\u88ab\u7981\u6b62\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u4e2d\u4ecd\u7136\u53ef\u7528\u3002"))),(0,l.kt)("h2",{id:"table\u548ctableex"},"Table\u548cTableEx"),(0,l.kt)("p",null,"\u5728Jimmer\u7684SQL DSL\u4e2d\uff0c\u5b58\u5728\u4e24\u79cd\u8868\u5bf9\u8c61\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Table<E>"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx<E>"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Table"),(0,l.kt)("p",{parentName:"li"},"\u7279\u70b9\uff1a\u53ea\u80fd\u901a\u8fc7\u5f15\u7528\u5173\u8054\u8fdb\u884cjoin\uff0c\u65e0\u6cd5\u901a\u8fc7\u96c6\u5408\u5173\u8054\u5c5e\u6027\u8fdb\u884cjoin"),(0,l.kt)("p",{parentName:"li"},"Java\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.ast.table.Table","<","E",">"),(0,l.kt)("p",{parentName:"li"},"Kotlin\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.kt.ast.table.KTable","<","E",">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"TableEx"),(0,l.kt)("p",{parentName:"li"},"\u7279\u70b9\uff1a\u53ef\u4ee5\u901a\u8fc7\u4efb\u4f55\u5173\u8054\u5c5e\u6027\u8fdb\u884cjoin"),(0,l.kt)("p",{parentName:"li"},"Java\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.ast.table.TableEx","<","E",">"),(0,l.kt)("p",{parentName:"li"},"Kotlin\u7c7b\u578b\uff1aorg.babyfish.jimmer.sql.kt.ast.table.KTableEx","<","E",">"))),(0,l.kt)("h3",{id:"\u751f\u6210\u7684\u4ee3\u7801"},"\u751f\u6210\u7684\u4ee3\u7801"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u5f3a\u7c7b\u578b\u7684SQL DSL\uff0cJimmer\u4f7f\u7528Annotation processor(Java)\u6216KSP(kotlin)\uff0c\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u5b9e\u4f53\u63a5\u53e3\u751f\u6210SQL DSL\u76f8\u5173\u7684\u6e90\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u8fd8\u662f\u4ee5\u6587\u7ae0\u5f00\u5934\u7684Book\u5b9e\u4f53\u63a5\u53e3\u4e3a\u4f8b\uff0c\u5982\u4e0b\u4e24\u4e2a\u7c7b\u578b\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Generated java code"',title:'"Generated',java:!0,'code"':!0},'/* \n * BookTable.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<Long> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n\n/* \n * BookTableEx.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Generated kotlin code"',title:'"Generated',kotlin:!0,'code"':!0},'package org.babyfish.jimmer.example.kt.sql.model\n\nimport java.math.BigDecimal\nimport org.babyfish.jimmer.sql.ast.Selection\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNonNullPropExpression\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KTableEx\n\n/* \n * Extension for Table<Book>\n */\npublic val KTable<Book>.id: KNullablePropExpression<Long>\n    get() = get("id")\n\npublic val KNonNullTable<Book>.id: KNonNullPropExpression<Long>\n    get() = get("id")\n\npublic val KTable<Book>.name: KNullablePropExpression<String>\n    get() = get("name")\n\npublic val KNonNullTable<Book>.name: KNonNullPropExpression<String>\n    get() = get("name")\n\npublic val KTable<Book>.edition: KNullablePropExpression<Int>\n    get() = get("edition")\n\npublic val KNonNullTable<Book>.edition: KNonNullPropExpression<Int>\n    get() = get("edition")\n\npublic val KTable<Book>.price: KNullablePropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNonNullTable<Book>.price: KNonNullPropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNullableTable<Book>.store: KNullableTable<BookStore>\n    get() = join("store")\n\npublic val KNonNullTable<Book>.store: KNonNullTable<BookStore>\n    get() = join("store")\n\npublic val KTable<Book>.`store?`: KNullableTable<BookStore>\n    get() = outerJoin("store")\n\n/* \n * Extension for TableEx<Book>\n */\n\npublic val KNullableTableEx<Book>.authors: KNullableTableEx<Author>\n    get() = join("authors")\n\npublic val KNonNullTableEx<Book>.authors: KNonNullTableEx<Author>\n    get() = join("authors")\n\npublic val KTableEx<Book>.`authors?`: KNullableTableEx<Author>\n    get() = outerJoin("authors")\n')))),(0,l.kt)("p",null,"\u89c2\u5bdf\u8fd9\u4e24\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\uff0c\u4e0d\u96be\u770b\u51fa"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BookTableEx"),"\u7ee7\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"BookTable"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BookTable"),"\u4e0d\u652f\u6301\u96c6\u5408\u5173\u8054\uff0c\u4f46\u652f\u6301\u666e\u901a\u5b57\u6bb5\u548c\u5f15\u7528\u5173\u8054(\u672c\u4f8b\u4e2d\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"store"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BookTableEx"),"\u589e\u52a0\u4e86\u5bf9\u96c6\u5408\u5173\u8054\u7684\u652f\u6301\uff08\u672c\u4f8b\u4e2d\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"authors"),"\uff09\u3002")),(0,l.kt)("p",null,"\u56e0\u6b64jimmer-sql\u7684API\u9075\u5faa\u5982\u4e0b\u7684\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u67e5\u8be2\u53ea\u80fd\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"Table"),"\u521b\u5efa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u65e2\u53ef\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"Table"),"\u521b\u5efa\uff0c\u4e5f\u53ef\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"TableEx"),"\u521b\u5efa\u3002")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4ee5\u9876\u5c42\u67e5\u8be2\u548c\u5b50\u67e5\u8be2\u4e3a\u4f8b\uff0c\u505a\u5bf9\u6bd4\u6027\u793a\u8303\u3002"),(0,l.kt)("h3",{id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2"},"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u4f60\u7684\u4ee3\u7801\u770b\u8d77\u6765\u5982\u6b64"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table\n            // highlight-next-line\n            .name() // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n            .eq("Book Name")\n    )\n    .where(\n        table\n            // highlight-next-line\n            .store() // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n            .name()\n            .eq("Store Name")\n    )\n    /* \n     * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"table.authors()"\uff0c\u56e0\u4e3aauthors()\n     * \u65b9\u6cd5\u88ab\u5b9a\u4e49\u5728\u4e86BookTableEx\u4e2d\uff0c\u800c\u975eBookTable\u4e2d\u3002\n     * \n     * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n     */\n    .select(table)\n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .name // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n                eq "Book Name"\n        )\n        where(\n            table\n                // highlight-next-line\n                .store // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n                .name\n                eq "Store Name"\n        )\n        /* \n         * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"table.authors"\uff0c\u56e0\u4e3a\u6269\u5c55\u5c5e\u6027authors\n         * \u88ab\u5b9a\u4e49\u4e3aTableEx<Book>\u5b9a\u4e49\uff0c\u800c\u975eTable<Book>\u3002\n         * \n         * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n         */\n        select(table)\n    }\n    .execute()\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java: ",(0,l.kt)("inlineCode",{parentName:"p"},"createQuery"),"\u7684\u53c2\u6570\u7531\u7528\u6237\u6307\u5b9a\uff0c\u53ea\u80fd\u6307\u5b9a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Table"),"\u7c7b\u578b\uff0c\u5982\u679c\u6307\u5b9a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx"),"\u7c7b\u578b\uff0c\u62a5\u9519")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin: ",(0,l.kt)("inlineCode",{parentName:"p"},"createQuery"),"\u81ea\u52a8\u521b\u5efa\u8868\u5bf9\u8c61\uff0clamba\u4e2d\u7684\u81ea\u52a8\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"table"),"\u7684\u7c7b\u578b\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Table"),"\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx"))))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n")),(0,l.kt)("h3",{id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u5b50\u67e5\u8be2"},"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u5b50\u67e5\u8be2"),(0,l.kt)("p",null,"\u548c\u9876\u7ea7\u67e5\u8be2\u4e0d\u540c\uff0c\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u5141\u8bb8\u4f7f\u7528TableEx\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u548c\u4e0a\u9762\u8ba8\u8bba\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u4e00\u6837\uff0c\u4e5f\u662f\u4e00\u4e2a\u591a\u5bf9\u591a\u5173\u8054\u3002"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\n// `author`\u4e3a\u5b50\u67e5\u8be2\u6240\u7528\uff0c\u91c7\u7528TableEx\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(sqlClient\n        // highlight-next-line\n        .createSubQuery(author)\n        .where(\n            author\n                // `author`\u662fTableEx\uff0c\n                // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                // highlight-next-line\n                .books()\n                .eq(table),\n\n            author.firstName().eq("Alex")\n        )\n        .exists()\n    )\n    .select(table)\n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n\n        // \u5728\u7236\u67e5\u8be2\u4e2d`table`\u8868\u793a`Table<Book>`\n        \n        where(\n            exists(\n                // highlight-next-line\n                wildSubQuery(Author::class) {\n\n                    // \u5728\u5b50\u67e5\u8be2\u4e2d\uff0c`table`\u8868\u793aTableEx<Author>\n                    \n                    where(\n                        table\n                            // \u5b50\u67e5\u8be2\u7684`table`\u662fTableEx\uff0c\n                            // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                            // highlight-next-line\n                            .books eq\n                            parentTable,\n\n                        table.firstName.eq("Alex")\n                    )\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java: ",(0,l.kt)("inlineCode",{parentName:"p"},"createSubQuery"),"\u7684\u53c2\u6570\u7531\u7528\u6237\u6307\u5b9a\uff0c\u4e0d\u5f3a\u5236\u4f46\u5efa\u8bae\u6307\u5b9a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx"),"\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin: ",(0,l.kt)("inlineCode",{parentName:"p"},"wildSubQuery")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216",(0,l.kt)("inlineCode",{parentName:"em"},"subQuery"),")")," \u81ea\u52a8\u521b\u5efa\u8868\u5bf9\u8c61\uff0clamba\u4e2d\u7684\u81ea\u52a8\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"table"),"\u7684\u7c7b\u578b\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx"),"\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"Table"))))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere exists(\n    select 1 \n    from AUTHOR as tb_2_ \n    // highlight-start\n    inner join BOOK_AUTHOR_MAPPING as tb_3_ \n        on tb_2_.ID = tb_3_.AUTHOR_ID \n    // highlight-end\n    where \n        tb_3_.BOOK_ID = tb_1_.ID \n    and \n        tb_2_.FIRST_NAME = ?\n)\n")),(0,l.kt)("h2",{id:"astableex"},"asTableEx"),(0,l.kt)("p",null,"\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\uff0c\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u662f\u5408\u7406\u7684\uff0c\u4f46\u5e76\u975e\u6240\u6709\u60c5\u51b5\u90fd\u5408\u7406\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u7528\u6237\u5e76\u4e0d\u67e5\u8be2\u6574\u4e2a\u5bf9\u8c61\uff0c\u800c\u4e14\u67e5\u8be2\u4e2a\u522b\u5b57\u6bb5\uff0c\u5e76\u4f7f\u7528SQL\u5173\u952e\u5b57",(0,l.kt)("inlineCode",{parentName:"p"},"distinct"),"\u6765\u62b5\u6d88\u5bf9\u96c6\u5408\u5173\u8054join\u6240\u5e26\u6765\u7684\u526f\u4f5c\u7528\u3002\u8fd9\u79cd\u573a\u666f\u662f\u5b8c\u5168\u5408\u7406\u7684\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\u662f\u4e00\u4e2a\u8f6f\u6027\u9650\u5236\uff0c\u800c\u975e\u521a\u6027\u9650\u5236\u3002\u53ef\u4ee5\u8f7b\u677e\u7a81\u7834\u3002"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            .asTableEx() \u2776\n            .authors()\n            .firstName()\n            .ilike("A%")\n    )\n    .select(book.id())\n    .distinct() \u2777\n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                .asTableEx() \u2776\n                .authors\n                .firstName ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct() \u2777\n    .execute()\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4eba\u5458\u5411Jimmer\u8868\u793aTA\u6e05\u695a\u81ea\u5df1\u5728\u5e72\u4ec0\u4e48\uff0c\u8bf7\u6c42Jimmer\u5141\u8bb8TA\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u8fdb\u884c\u8868\u8fde\u63a5")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4eba\u5458\u5bf9\u81ea\u5df1\u7684\u884c\u4e3a\u8d1f\u8d23\uff0c\u5982\u679c\u6b64\u5904\u6709\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u5219\u5e94\u8be5\u662fdistinct\u800c\u4e0d\u5e94\u8be5\u662f\u5206\u9875\u76f8\u5173\u7684\u64cd\u4f5c")))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n")))}d.isMDXComponent=!0}}]);