(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("vOnD"),i=a("wx14"),l=a("RD7I"),c=a("cNwE");var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)(e,Object(i.a)({defaultTheme:c.a},t))},s=a("Ff2n"),p=(a("17x9"),a("iuhU")),g=a("H2TA");var u=n.createContext(),b=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,l=void 0===r?"table":r,c=e.padding,d=void 0===c?"default":c,g=e.size,b=void 0===g?"medium":g,h=e.stickyHeader,m=void 0!==h&&h,f=Object(s.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=n.useMemo((function(){return{padding:d,size:b,stickyHeader:m}}),[d,b,m]);return n.createElement(u.Provider,{value:v},n.createElement(l,Object(i.a)({role:"table"===l?null:"table",ref:t,className:Object(p.a)(a.root,o,m&&a.stickyHeader)},f)))})),h=Object(g.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(i.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(b);var m=n.createContext(),f={variant:"body"},v=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,l=void 0===r?"tbody":r,c=Object(s.a)(e,["classes","className","component"]);return n.createElement(m.Provider,{value:f},n.createElement(l,Object(i.a)({className:Object(p.a)(a.root,o),ref:t,role:"tbody"===l?null:"rowgroup"},c)))})),y=Object(g.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(v),x=a("NqtD"),w=a("ye/S"),O=n.forwardRef((function(e,t){var a,o,r=e.align,l=void 0===r?"inherit":r,c=e.classes,d=e.className,g=e.component,b=e.padding,h=e.scope,f=e.size,v=e.sortDirection,y=e.variant,w=Object(s.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=n.useContext(u),j=n.useContext(m),N=j&&"head"===j.variant;g?(o=g,a=N?"columnheader":"cell"):o=N?"th":"td";var k=h;!k&&N&&(k="col");var C=b||(O&&O.padding?O.padding:"default"),R=f||(O&&O.size?O.size:"medium"),_=y||j&&j.variant,E=null;return v&&(E="asc"===v?"ascending":"descending"),n.createElement(o,Object(i.a)({ref:t,className:Object(p.a)(c.root,c[_],d,"inherit"!==l&&c["align".concat(Object(x.a)(l))],"default"!==C&&c["padding".concat(Object(x.a)(C))],"medium"!==R&&c["size".concat(Object(x.a)(R))],"head"===_&&O&&O.stickyHeader&&c.stickyHeader),"aria-sort":E,role:a,scope:k},w))})),j=Object(g.a)((function(e){return{root:Object(i.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(w.d)(Object(w.b)(e.palette.divider,1),.88):Object(w.a)(Object(w.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(O),N={variant:"head"},k=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,l=void 0===r?"thead":r,c=Object(s.a)(e,["classes","className","component"]);return n.createElement(m.Provider,{value:N},n.createElement(l,Object(i.a)({className:Object(p.a)(a.root,o),ref:t,role:"thead"===l?null:"rowgroup"},c)))})),C=Object(g.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(k),R=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,l=void 0===r?"tr":r,c=e.hover,d=void 0!==c&&c,g=e.selected,u=void 0!==g&&g,b=Object(s.a)(e,["classes","className","component","hover","selected"]),h=n.useContext(m);return n.createElement(l,Object(i.a)({ref:t,className:Object(p.a)(a.root,o,h&&{head:a.head,footer:a.footer}[h.variant],d&&a.hover,u&&a.selected),role:"tr"===l?null:"row"},b))})),_=Object(g.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(w.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(R),E=a("kKAo");o.a.createElement,r.b.div.withConfig({displayName:"Boxes__Box",componentId:"vbphm3-0"})(["width:",";height:",";background-color:#FFF;box-shadow:0px 5px 16px rgba(130,130,130,0.16);border-radius:8px;"],(function(e){return e.boxWidth||"104px"}),(function(e){return e.boxHeight||"104px"}));a("YFqc");var z=o.a.createElement,H=r.b.nav.withConfig({displayName:"Navbar__StyledNav",componentId:"sc-3lzdod-0"})(["height:32px;background-color:#f2f2f2;"]),T=r.b.a.withConfig({displayName:"Navbar__StyledLink",componentId:"sc-3lzdod-1"})(["text-decoration:none;"]);function A(){return z(H,null,z(T,{href:"/login"},"Login"),z(T,{href:"/about"},"About"))}var D=o.a.createElement,I=r.b.div.withConfig({displayName:"pages__Container",componentId:"sc-18nt95r-0"})(["width:960px;height:100vh;margin:2rem auto;padding:2rem;background:",";"],(function(e){return e.theme.primary})),S=Object(r.b)(E.a).withConfig({displayName:"pages__StyledPaper",componentId:"sc-18nt95r-1"})(["width:100%;overflow-x:auto;"]),F=d({table:{minWidth:650}});function M(e,t,a,n,o){return{name:e,calories:t,fat:a,carbs:n,protein:o}}var P=[M("Frozen yoghurt",159,6,24,4),M("Ice cream sandwich",237,9,37,4.3),M("Eclair",262,16,24,6),M("Cupcake",305,3.7,67,4.3),M("Gingerbread",356,16,49,3.9)];t.default=function(){var e=F();return D(I,null,D(A,null),D(S,null,D(h,{className:e.table,"aria-label":"simple table"},D(C,null,D(_,null,D(j,null,"Dessert (100g serving)"),D(j,{align:"right"},"Calories"),D(j,{align:"right"},"Fat\xa0(g)"),D(j,{align:"right"},"Carbs\xa0(g)"),D(j,{align:"right"},"Protein\xa0(g)"))),D(y,null,P.map((function(e){return D(_,{key:e.name},D(j,{component:"th",scope:"row"},e.name),D(j,{align:"right"},e.calories),D(j,{align:"right"},e.fat),D(j,{align:"right"},e.carbs),D(j,{align:"right"},e.protein))}))))))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);