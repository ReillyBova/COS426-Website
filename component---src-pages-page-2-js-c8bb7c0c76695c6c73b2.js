(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(151),o=n(150),s=n(160),c=n(184);t.default=Object(c.a)(Object(i.withStyles)(function(e){return{section:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2."),r.a.createElement("p",null,"This page has been styled using global CSS. This approach could be used to style simple HTML markup, e.g. markup generated by Markdown. Here's an example:"),r.a.createElement("h2",null,"Richard Hamming on Luck"),r.a.createElement("div",null,r.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",r.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),r.a.createElement("blockquote",null,r.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",r.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),r.a.createElement("p",null,"Posted April 09, 2011"),r.a.createElement("section",{className:t.section},r.a.createElement(o.Link,{to:"/"},"Go back to the homepage")))}))},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(146),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(154),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},160:function(e,t,n){"use strict";var a=n(176),r=n(0),i=n.n(r),o=n(151),s=n(150),c=n(4),l=n.n(c),u=n(186),p=n.n(u),d=n(175),m=n(165),h=function(e){var t=e.children,n=e.classes;return i.a.createElement(s.StaticQuery,{query:"2396598932",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{property:"type",content:"website"},{property:"image",content:m.a},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description},{property:"og:type",content:"website"},{property:"og:image",content:m.a}],link:[{rel:"canonical",href:e.site.siteMetadata.siteUrl}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d.a,null),i.a.createElement("div",{className:n.root},t))},data:a})};h.propTypes={children:l.a.node.isRequired,classes:l.a.object.isRequired},t.a=Object(o.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{paddingTop:64},"@media (orientation: portrait)":{paddingTop:72}},t.paddingLeft=2*e.spacing.unit,t.paddingRight=2*e.spacing.unit,t[e.breakpoints.up("sm")]={paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit,paddingTop:80},t)}})(h)},164:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},165:function(e,t,n){"use strict";var a=n(166),r=n.n(a);n.d(t,"a",function(){return r.a})},166:function(e,t,n){e.exports=n.p+"static/princeton-shield-802674e7ecbb54284dbc41e53d0d7e5f.png"},175:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(151),l=n(209),u=n.n(l),p=n(183),d=n.n(p),m=n(210),h=n.n(m),g=n(182),f=n.n(g),y=n(150),v=n(165);function b(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(u.a,{position:"fixed",className:t.appBar,color:"secondary"},i.a.createElement(h.a,null,i.a.createElement(y.Link,{to:"/"},i.a.createElement("img",{src:v.a,style:{margin:"3px",height:"42px"}})),i.a.createElement(f.a,{variant:"h4",color:"inherit",className:t.grow},i.a.createElement(y.Link,{to:"/",style:{color:"white",textDecoration:"none",maxHeight:48,overflow:"hidden",whiteSpace:"nowrap"}},i.a.createElement("span",{style:{fontWeight:"800"}},"COS"),i.a.createElement("span",{style:{fontWeight:"400"}}," 426"))),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/",classes:{root:t.navButton},color:"primary"},"Syllabus"),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/materials",classes:{root:t.navButton},color:"inherit"},"Materials"),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/assignments",classes:{root:t.navButton},color:"inherit"},"Assignments"),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/exercises",classes:{root:t.navButton},color:"inherit"},"Exercises"),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/gallery",classes:{root:t.navButton},color:"inherit"},"Gallery"),i.a.createElement(d.a,{size:"large",component:y.Link,to:"/links",classes:{root:t.navButton},color:"inherit"},"Links"))))}b.propTypes={classes:s.a.object.isRequired};var E=Object(c.withStyles)(function(e){var t;return{root:{flexGrow:1},grow:{flexGrow:1},appBar:{borderStyle:"solid",borderWidth:"0px 0px 4px 0px",borderColor:e.palette.primary.main},navButton:(t={borderRadius:0,fontSize:16},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{height:48},"@media (orientation: portrait)":{height:56}},t[e.breakpoints.up("sm")]={height:64},t)}})(b);n.d(t,"b",function(){return a.a}),n.d(t,"a",function(){return E})},176:function(e){e.exports={data:{site:{siteMetadata:{title:"COS 426: Computer Graphics (2019) | Princeton University",siteUrl:"http://www.cs.princeton.edu/courses/archive/spring19/cos426/",description:"The Princeton University course website for the Spring 2019 term of COS 426: Computer Graphics",keywords:"COS 426, Princeton, Graphics, Computer Science, Spring 2019"}}}}},184:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(151),c=n(220),l=n.n(c),u=n(213),p=n.n(u),d=n(185);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(d.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(p.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(l.a,null),o.a.createElement(e,this.props)))},n}(o.a.Component)}},185:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return c});n(76),n(53),n(77),n(217);var r=n(167),i=n(151),o=Object(i.createMuiTheme)({palette:{primary:{main:"#f58025"},secondary:{main:"#221e20"},contrastThreshold:2},typography:{useNextVariants:!0,fontFamily:"Open Sans, Roboto, Helvetica, Arial, sans-serif",fontWeightLight:400,fontWeightRegular:600,fontWeightMedium:700}});function s(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=s()),a.__INIT_MATERIAL_UI__):s()}}).call(this,n(216),n(72))}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c8bb7c0c76695c6c73b2.js.map