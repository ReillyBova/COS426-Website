(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(157),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(164),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var p=a(35);a.d(t,"parsePath",function(){return p.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},164:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},167:function(e,t,a){"use strict";var n=a(221),r=a.n(n);a.d(t,"i",function(){return r.a});var i=a(222),A=a.n(i);a.d(t,"k",function(){return A.a});var o=a(223),c=a.n(o);a.d(t,"f",function(){return c.a});var s=a(224),l=a.n(s);a.d(t,"a",function(){return l.a});var p=a(225),u=a.n(p);a.d(t,"c",function(){return u.a});var m=a(226),d=a.n(m);a.d(t,"d",function(){return d.a});var g=a(227),f=a.n(g);a.d(t,"h",function(){return f.a});var h=a(228),E=a.n(h);a.d(t,"g",function(){return E.a});var x=a(229),S=a.n(x);a.d(t,"j",function(){return S.a});var w=a(230),j=a.n(w);a.d(t,"e",function(){return j.a});var K=a(231),v=a.n(K);a.d(t,"b",function(){return v.a})},181:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),A=a.n(i),o=a(59),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=s},182:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),A=a.n(i),o=a(159),c=a(319),s=a.n(c),l=a(246),p=a.n(l),u=a(286);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(u.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return A.a.createElement(p.a,{generateClassName:this.muiPageContext.generateClassName},A.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},A.a.createElement(s.a,null),A.a.createElement(e,this.props)))},a}(A.a.Component)}},190:function(e,t,a){"use strict";var n=a(321),r=a(0),i=a.n(r),A=a(4),o=a.n(A),c=a(322),s=a.n(c),l=a(158),p=a(159),u=a(194),m=a(167),d=function(e){var t=e.children,a=e.classes;return i.a.createElement(l.StaticQuery,{query:"2396598932",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{property:"type",content:"website"},{property:"image",content:m.i},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:description",content:e.site.siteMetadata.description},{property:"og:type",content:"website"},{property:"og:image",content:m.i}],link:[{rel:"canonical",href:e.site.siteMetadata.siteUrl}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(u.b,null),i.a.createElement("div",{className:a.root},t))},data:n})};d.propTypes={children:o.a.node.isRequired,classes:o.a.object.isRequired},t.a=Object(p.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{paddingTop:64},"@media (orientation: portrait)":{paddingTop:72}},t.paddingLeft=2*e.spacing.unit,t.paddingRight=2*e.spacing.unit,t[e.breakpoints.up("sm")]={paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit,paddingTop:80},t)}})(d)},194:function(e,t,a){"use strict";var n=a(190),r=a(7),i=a.n(r),A=a(0),o=a.n(A),c=a(4),s=a.n(c),l=a(158),p=a(159),u=a(330),m=a.n(u),d=a(333),g=a.n(d),f=a(175),h=a.n(f),E=a(359),x=a.n(E),S=a(232),w=a.n(S),j=a(351),K=a.n(j),v=a(167),T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleMenu=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return i()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.anchorEl,a=Boolean(t);return o.a.createElement("div",{className:e.grow},o.a.createElement(m.a,{position:"fixed",className:e.appBar,color:"secondary"},o.a.createElement(g.a,null,o.a.createElement(l.Link,{to:"/"},o.a.createElement("img",{src:v.i,style:{margin:"3px",height:"42px"}})),o.a.createElement(h.a,{variant:"h4",color:"inherit",className:e.grow},o.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none",maxHeight:48,overflow:"hidden",whiteSpace:"nowrap"}},o.a.createElement("span",{style:{fontWeight:"800"}},"COS"),o.a.createElement("span",{style:{fontWeight:"400"}}," 426"))),o.a.createElement(N,{to:"/",exact:!0},"Overview"),o.a.createElement(N,{to:"/materials"},"Materials"),o.a.createElement(N,{to:"/assignments"},"Assignments"),o.a.createElement(N,{to:"/exercises"},"Exercises"),o.a.createElement(N,{to:"/gallery"},"Gallery"),o.a.createElement(N,{to:"/links"},"Links"),o.a.createElement("div",null,o.a.createElement(w.a,{"aria-owns":a?"menu-appbar":void 0,"aria-haspopup":"true",className:e.menuButton,onClick:this.handleMenu,color:"inherit"},o.a.createElement(K.a,null)),o.a.createElement(x.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},o.a.createElement(F,{to:"/",exact:!0,onClick:this.handleClose},"Overview"),o.a.createElement(F,{to:"/materials",onClick:this.handleClose},"Materials"),o.a.createElement(F,{to:"/assignments",onClick:this.handleClose},"Assignments"),o.a.createElement(F,{to:"/exercises",onClick:this.handleClose},"Exercises"),o.a.createElement(F,{to:"/gallery",onClick:this.handleClose},"Gallery"),o.a.createElement(F,{to:"/links",onClick:this.handleClose},"Links"))))))},t}(o.a.Component);T.propTypes={classes:s.a.object.isRequired};var Q=Object(p.withStyles)(function(e){var t,a;return{grow:{flexGrow:1},appBar:{borderStyle:"solid",borderWidth:"0px 0px 4px 0px",borderColor:e.palette.primary.main},navButton:(t={borderRadius:0,fontSize:16},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{height:48},"@media (orientation: portrait)":{height:56}},t[e.breakpoints.up("sm")]={height:64},t),menuButton:(a={},a[e.breakpoints.up("md")]={display:"none"},a["&:hover"]={backgroundColor:"#282828"},a)}})(T),k=a(180),b=a.n(k),U=(a(78),function(e,t){return"undefined"!=typeof window&&(!(!t||window.location.pathname!==Object(l.withPrefix)(e))||!(t||!window.location.pathname.match("^"+Object(l.withPrefix)(e))))});function B(e){var t=e.classes,a=e.to,n=e.exact,r=e.children,i=U(a||"/",n);return o.a.createElement(b.a,{size:"large",component:l.Link,to:a||"/",className:i?"active":"",classes:{root:t.root},color:i?"primary":"inherit"},r)}B.propTypes={classes:s.a.object.isRequired,to:s.a.string.isRequired};var N=Object(p.withStyles)(function(e){var t;return{root:(t={borderRadius:0,fontSize:16},t[e.breakpoints.down("xs")]={"@media (orientation: landscape)":{height:48},"@media (orientation: portrait)":{height:56}},t[e.breakpoints.up("sm")]={height:64},t[e.breakpoints.down("sm")]={display:"none"},t["&:hover:not(.active)"]={backgroundColor:"#282828"},t)}})(B),P=a(389),y=a.n(P);function R(e){var t=e.classes,a=e.onClick,n=e.to,r=e.exact,i=e.children,A=U(n||"/",r);return o.a.createElement(y.a,{component:l.Link,to:n||"/",onClick:a,className:A?"active":"",classes:{root:t.root}},i)}R.propTypes={classes:s.a.object.isRequired,to:s.a.string.isRequired,onClick:s.a.func.isRequired};var F=Object(p.withStyles)(function(e){return{root:{"&:focus:not(:hover)":{backgroundColor:"#ffffff"},"&.active":{color:e.palette.primary.main}}}})(R),M=(a(394),a(396),a(243)),z=a.n(M),q=a(245),C=a.n(q),H=a(398),D=a.n(H),V=a(244),X=a.n(V),G=a(403),J=a.n(G),I=a(402),Y=a.n(I);function O(e){var t=e.classes,a=e.name,n=e.role,r=e.image,i=e.link,A=e.email,c=e.github,s=e.website;return o.a.createElement(z.a,{className:t.profile},o.a.createElement(D.a,{align:"center"},o.a.createElement(X.a,{className:t.button,href:i,color:"secondary"},o.a.createElement("img",{src:r,alt:a,className:t.profile_pic}))),o.a.createElement(D.a,{className:t.profile_text},o.a.createElement(h.a,{variant:"subtitle1",gutterBottom:!0},a),o.a.createElement(h.a,{variant:"body1"},n)),o.a.createElement(C.a,{disableActionSpacing:!0},A&&o.a.createElement(w.a,{"aria-label":"Email",href:"mailto:"+A},o.a.createElement(Y.a,null)),c&&o.a.createElement(w.a,{"aria-label":"Github",href:c},o.a.createElement(te,null)),s&&o.a.createElement(w.a,{"aria-label":"Website",href:s},o.a.createElement(J.a,null))))}O.propTypes={classes:s.a.object.isRequired,name:s.a.string.isRequired,role:s.a.string.isRequired,image:s.a.string.isRequired,link:s.a.string.isRequired};var W=Object(p.withStyles)(function(){return{profile:{maxWidth:250,height:"100%",margin:"auto"},button:{height:"100%",width:"100%",overflow:"hidden"},profile_pic:{width:"100%","&:hover":{opacity:.8}},profile_text:{paddingTop:0,paddingBottom:0}}})(O),Z=(a(33),a(404)),L=a.n(Z);var _=function(e){return o.a.createElement(L.a,Object.assign({container:!0,spacing:24,justify:"space-around"},e),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Adam Finklestein",role:"Professor",image:v.a,link:"https://www.cs.princeton.edu/~af/",email:"af@princeton.edu",website:"https://www.cs.princeton.edu/~af/"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Austin Le",role:"Graduate TA",image:v.c,link:"http://austinhle.com/",github:"https://github.com/austinhle",email:"austinle@princeton.edu",website:"http://austinhle.com/"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Carlo Rosati",role:"Graduate TA",image:v.d,link:"https://www.cs.princeton.edu/~crosati/",email:"crosati@princeton.edu",website:"https://www.cs.princeton.edu/~crosati/"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Jiaqi Su",role:"Graduate TA",image:v.h,link:"http://www.cs.princeton.edu/~jiaqis/personal-website/index.php",email:"jiaqis@princeton.edu",website:"http://www.cs.princeton.edu/~jiaqis/personal-website/index.php"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Jad Bechara",role:"Undergraduate TA",image:v.g,link:"https://jbechara.github.io/",email:"jbechara@princeton.edu",github:"https://github.com/jbechara",website:"https://jbechara.github.io/"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Reilly Bova",role:"Undergraduate TA",image:v.j,link:"https://www.princeton.edu/search?search=Reilly+Bova#people",email:"rbova@princeton.edu",github:"https://github.com/ReillyBova/"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Daniel Chae",role:"Undergraduate TA",image:v.e,link:"https://www.princeton.edu/search?search=Daniel+Chae#people",email:"dkchae@princeton.edu"})),o.a.createElement(L.a,{item:!0,sm:4,md:3},o.a.createElement(W,{name:"Andrew Wannacott",role:"Undergraduate TA",image:v.b,link:"https://keybase.io/awonnacott",email:"awonnacott@princeton.edu",github:"https://github.com/awonnacott/",website:"https://keybase.io/awonnacott"})))},$=a(235),ee=a.n($);var te=function(e){return o.a.createElement(ee.a,e,o.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))};a.d(t,"c",function(){return n.a}),a.d(t,"b",function(){return Q}),a.d(t,"d",function(){return N}),a.d(t,"e",function(){return F}),a.d(t,"f",function(){return W}),a.d(t,"g",function(){return _}),a.d(t,"a",function(){return te})},221:function(e,t,a){e.exports=a.p+"static/princeton-shield-802674e7ecbb54284dbc41e53d0d7e5f.png"},222:function(e,t,a){e.exports=a.p+"static/textbook-3b1cb542d5df9e3c4af503b34dfb588d.jpg"},223:function(e,t,a){e.exports=a.p+"static/grade-chart-5874e3d33a5bf8b86cdcda06c8e02032.png"},224:function(e,t,a){e.exports=a.p+"static/adamf-697f4dc90d3ee617c973e3ee6de98245.jpg"},225:function(e,t,a){e.exports=a.p+"static/austinl-914201c34ed8d4ffb78820497db5819e.jpg"},226:function(e,t){e.exports="data:image/jpeg;base64,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"},227:function(e,t){e.exports="data:image/jpeg;base64,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"},228:function(e,t,a){e.exports=a.p+"static/jadb-29bd55da369502a5a97b6f3aeeed5c71.jpg"},229:function(e,t,a){e.exports=a.p+"static/reillyb-5f65e60af480b17b2d79af3a834b4f7f.jpg"},230:function(e,t,a){e.exports=a.p+"static/danielc-cf826839bf8e880b3b30d0ec88b583ec.jpg"},231:function(e,t,a){e.exports=a.p+"static/andreww-38e3ca10dc34032058a648da827d7af8.jpg"},286:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return c});a(82),a(54),a(85),a(288);var r=a(169),i=a(159),A=Object(i.createMuiTheme)({palette:{primary:{main:"#f58025"},secondary:{main:"#221e20"},contrastThreshold:2},typography:{useNextVariants:!0,fontFamily:"Open Sans, Roboto, Helvetica, Arial, sans-serif",fontWeightLight:400,fontWeightRegular:600,fontWeightMedium:700,body1:{fontWeight:400}}});function o(){return{theme:A,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=o()),n.__INIT_MATERIAL_UI__):o()}}).call(this,a(287),a(72))},321:function(e){e.exports={data:{site:{siteMetadata:{title:"COS 426: Computer Graphics (2019) | Princeton University",siteUrl:"http://www.cs.princeton.edu/courses/archive/spring19/cos426/",description:"The Princeton University course website for the Spring 2019 term of COS 426: Computer Graphics",keywords:"COS 426, Princeton, Graphics, Computer Science, Spring 2019"}}}}}}]);
//# sourceMappingURL=1-7a649ef1430361e293f6.js.map