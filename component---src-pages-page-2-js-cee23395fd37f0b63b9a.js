(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(159),o=n(158),s=n(163),c=n(181);t.default=Object(c.a)(Object(i.withStyles)(function(e){return{section:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2."),r.a.createElement("p",null,"This page has been styled using global CSS. This approach could be used to style simple HTML markup, e.g. markup generated by Markdown. Here's an example:"),r.a.createElement("h2",null,"Richard Hamming on Luck"),r.a.createElement("div",null,r.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",r.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),r.a.createElement("blockquote",null,r.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",r.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),r.a.createElement("p",null,"Posted April 09, 2011"),r.a.createElement("section",{className:t.section},r.a.createElement(o.Link,{to:"/"},"Go back to the homepage")))}))},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(148),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(161),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},163:function(e,t,n){"use strict";var a=n(182),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(194),l=n.n(c),u=n(158),d=n(159),p=n(172),m=n(167),h=function(e){var t=e.children,n=e.classes;return i.a.createElement(u.StaticQuery,{query:"2396598932",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{property:"type",content:"website"},{property:"image",content:m.a},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description},{property:"og:type",content:"website"},{property:"og:image",content:m.a}],link:[{rel:"canonical",href:e.site.siteMetadata.siteUrl}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p.a,null),i.a.createElement("div",{className:n.root},t))},data:a})};h.propTypes={children:s.a.node.isRequired,classes:s.a.object.isRequired},t.a=Object(d.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{paddingTop:64},"@media (orientation: portrait)":{paddingTop:72}},t.paddingLeft=2*e.spacing.unit,t.paddingRight=2*e.spacing.unit,t[e.breakpoints.up("sm")]={paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit,paddingTop:80},t)}})(h)},166:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,n){"use strict";var a=n(168),r=n.n(a);n.d(t,"a",function(){return r.a})},168:function(e,t,n){e.exports=n.p+"static/princeton-shield-802674e7ecbb54284dbc41e53d0d7e5f.png"},172:function(e,t,n){"use strict";var a=n(163),r=n(7),i=n.n(r),o=n(52),s=n.n(o),c=n(0),l=n.n(c),u=n(4),d=n.n(u),p=n(158),m=n(159),h=n(217),g=n.n(h),f=n(219),y=n.n(f),E=n(178),b=n.n(E),v=n(224),w=n.n(v),k=n(220),C=n.n(k),x=n(221),S=n.n(x),R=n(167),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={anchorEl:null},n.handleMenu=n.handleMenu.bind(s()(s()(n))),n.handleClose=n.handleClose.bind(s()(s()(n))),n}i()(t,e);var n=t.prototype;return n.handleMenu=function(e){this.setState({anchorEl:e.currentTarget})},n.handleClose=function(){this.setState({anchorEl:null})},n.render=function(){var e=this.props.classes,t=this.state.anchorEl,n=Boolean(t);return l.a.createElement("div",{className:e.grow},l.a.createElement(g.a,{position:"fixed",className:e.appBar,color:"secondary"},l.a.createElement(y.a,null,l.a.createElement(p.Link,{to:"/"},l.a.createElement("img",{src:R.a,style:{margin:"3px",height:"42px"}})),l.a.createElement(b.a,{variant:"h4",color:"inherit",className:e.grow},l.a.createElement(p.Link,{to:"/",style:{color:"white",textDecoration:"none",maxHeight:48,overflow:"hidden",whiteSpace:"nowrap"}},l.a.createElement("span",{style:{fontWeight:"800"}},"COS"),l.a.createElement("span",{style:{fontWeight:"400"}}," 426"))),l.a.createElement(L,{to:"/",exact:!0},"Syllabus"),l.a.createElement(L,{to:"/materials"},"Materials"),l.a.createElement(L,{to:"/assignments"},"Assignments"),l.a.createElement(L,{to:"/exercises"},"Exercises"),l.a.createElement(L,{to:"/gallery"},"Gallery"),l.a.createElement(L,{to:"/links"},"Links"),l.a.createElement("div",null,l.a.createElement(C.a,{"aria-owns":n?"menu-appbar":void 0,"aria-haspopup":"true",className:e.menuButton,onClick:this.handleMenu,color:"inherit"},l.a.createElement(S.a,null)),l.a.createElement(w.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleClose},l.a.createElement(G,{to:"/",exact:!0,onClick:this.handleClose},"Syllabus"),l.a.createElement(G,{to:"/materials",onClick:this.handleClose},"Materials"),l.a.createElement(G,{to:"/assignments",onClick:this.handleClose},"Assignments"),l.a.createElement(G,{to:"/exercises",onClick:this.handleClose},"Exercises"),l.a.createElement(G,{to:"/gallery",onClick:this.handleClose},"Gallery"),l.a.createElement(G,{to:"/links",onClick:this.handleClose},"Links"))))))},t}(l.a.Component);T.propTypes={classes:d.a.object.isRequired};var M=Object(m.withStyles)(function(e){var t,n;return{grow:{flexGrow:1},appBar:{borderStyle:"solid",borderWidth:"0px 0px 4px 0px",borderColor:e.palette.primary.main},navButton:(t={borderRadius:0,fontSize:16},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{height:48},"@media (orientation: portrait)":{height:56}},t[e.breakpoints.up("sm")]={height:64},t),menuButton:(n={},n[e.breakpoints.up("md")]={display:"none"},n["&:hover"]={backgroundColor:"#282828"},n)}})(T),q=n(180),N=n.n(q),_=(n(73),function(e,t){return!(!window||!t||window.location.pathname!==e)||!(!window||t||!window.location.pathname.match(e))});function j(e){var t=e.classes,n=e.to,a=e.exact,r=e.children,i=_(n||"/",a);return l.a.createElement(N.a,{size:"large",component:p.Link,to:n||"/",className:i?"active":"",classes:{root:t.root},color:i?"primary":"inherit"},r)}j.propTypes={classes:d.a.object.isRequired,to:d.a.string.isRequired};var L=Object(m.withStyles)(function(e){var t;return{root:(t={borderRadius:0,fontSize:16},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{height:48},"@media (orientation: portrait)":{height:56}},t[e.breakpoints.up("sm")]={height:64},t[e.breakpoints.down("sm")]={display:"none"},t["&:hover:not(.active)"]={backgroundColor:"#282828"},t)}})(j),O=n(232),P=n.n(O);function I(e){var t=e.classes,n=e.onClick,a=e.to,r=e.exact,i=e.children,o=_(a||"/",r);return l.a.createElement(P.a,{component:p.Link,to:a||"/",onClick:n,className:o?"active":"",classes:{root:t.root}},i)}I.propTypes={classes:d.a.object.isRequired,to:d.a.string.isRequired,onClick:d.a.func.isRequired};var G=Object(m.withStyles)(function(e){return{root:{"&:focus:not(:hover)":{backgroundColor:"#ffffff"},"&.active":{color:e.palette.primary.main}}}})(I);n.d(t,"b",function(){return a.a}),n.d(t,"a",function(){return M}),n.d(t,"c",function(){return L}),n.d(t,"d",function(){return G})},181:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(159),c=n(240),l=n.n(c),u=n(233),d=n.n(u),p=n(193);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(p.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(l.a,null),o.a.createElement(e,this.props)))},n}(o.a.Component)}},182:function(e){e.exports={data:{site:{siteMetadata:{title:"COS 426: Computer Graphics (2019) | Princeton University",siteUrl:"http://www.cs.princeton.edu/courses/archive/spring19/cos426/",description:"The Princeton University course website for the Spring 2019 term of COS 426: Computer Graphics",keywords:"COS 426, Princeton, Graphics, Computer Science, Spring 2019"}}}}},193:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return c});n(77),n(53),n(78),n(237);var r=n(170),i=n(159),o=Object(i.createMuiTheme)({palette:{primary:{main:"#f58025"},secondary:{main:"#221e20"},contrastThreshold:2},typography:{useNextVariants:!0,fontFamily:"Open Sans, Roboto, Helvetica, Arial, sans-serif",fontWeightLight:400,fontWeightRegular:600,fontWeightMedium:700}});function s(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=s()),a.__INIT_MATERIAL_UI__):s()}}).call(this,n(236),n(72))}}]);
//# sourceMappingURL=component---src-pages-page-2-js-cee23395fd37f0b63b9a.js.map