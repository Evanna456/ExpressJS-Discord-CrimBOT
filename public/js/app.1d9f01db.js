(function(t){function e(e){for(var r,u,c=e[0],i=e[1],l=e[2],s=0,d=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2b96":function(t,e,n){t.exports=n.p+"img/CrimBOT.3c2d1b33.png"},3482:function(t,e,n){"use strict";n("8a6f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),a=n("58ca"),u=n("5f5b"),c=n("b1e0"),i=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{col:"",lg:"12"}},[n("keep-alive",[n(t.GetNavbar,{tag:"component"})],1)],1)],1)],1),n("router-view")],1)}),l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{id:"navbar",toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{href:"/"}},[n("strong",[t._v("CrimBOT")])]),n("b-navbar-toggle",{staticStyle:{"background-color":"#ffffff"},attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{align:"center"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1)],1)],1)},s=[],d={name:"Navbar",components:{},data:function(){return{}},mounted:function(){},updated:function(){},computed:{},methods:{}},p=d,b=(n("3482"),n("2877")),m=Object(b["a"])(p,f,s,!1,null,"0d861121",null),v=m.exports,g={name:"App",components:{},data:function(){return{}},mounted:function(){},updated:function(){},computed:{GetNavbar:function(){return v}},methods:{}},h=g,y=(n("034f"),Object(b["a"])(h,i,l,!1,null,null,null)),w=y.exports;r["default"].config.devtools=!1,r["default"].config.debug=!1,r["default"].config.silent=!0,r["default"].use(o["a"]),r["default"].use(a["a"]),r["default"].use(u["a"]),r["default"].use(c["a"]),r["default"].config.productionTip=!1;var O=[{path:"/",name:"Index",component:r["default"].component("Index",n("86d6").default)}],_=new o["a"]({mode:"history",routes:O});new r["default"]({router:_,render:function(t){return t(w)}}).$mount("#app")},"611c":function(t,e,n){"use strict";n("99c9")},"85ec":function(t,e,n){},"86d6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{id:"bot-profile-img",cols:"12",align:"center"}},[r("img",{staticClass:"img-resposive",attrs:{id:"round-img",src:n("2b96"),width:"300px",height:"auto",alt:"logo"}})])],1),r("b-row",[r("b-col",{attrs:{id:"bot-profile-name",cols:"12",align:"center"}},[r("h3",[t._v("CrimBOT")])])],1)],1)},o=[],a=n("2b96"),u=n.n(a),c={name:"Index",components:{},metaInfo:{title:"CrimBOT",titleTemplate:"%s"},data:function(){return{CrimBOT:u.a}},mounted:function(){window.scrollTo(0,0)},updated:function(){},computed:{},methods:{}},i=c,l=(n("611c"),n("2877")),f=Object(l["a"])(i,r,o,!1,null,"b2e2f9c6",null);e["default"]=f.exports},"8a6f":function(t,e,n){},"99c9":function(t,e,n){}});
//# sourceMappingURL=app.1d9f01db.js.map