(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0fb00815":"c5f33c64","chunk-350c8842":"0f91eab8","chunk-43acf530":"7fa90fc0","chunk-55c0c330":"ee4c3249"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0fb00815":1,"chunk-350c8842":1,"chunk-43acf530":1,"chunk-55c0c330":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fb00815":"fc5d1c83","chunk-350c8842":"9686e544","chunk-43acf530":"db58c0ad","chunk-55c0c330":"84df10bf"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a6":function(e,t,n){"use strict";n("b637")},"12d4":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"foot_box"}},[n("div",{attrs:{id:"lefty"}},[e._v("Copyright © 2021 Jose G. Monagas")]),n("div",{attrs:{id:"righty"}})])}],o={name:"FooterPage"},i=o,c=(n("4d3b"),n("2877")),u=Object(c["a"])(i,r,a,!1,null,"02388756",null);t["a"]=u.exports},2942:function(e,t,n){"use strict";n("6cfa")},"38ea":function(e,t,n){},"4d3b":function(e,t,n){"use strict";n("38ea")},"54d9":function(e,t,n){e.exports=n.p+"img/head.17ba1f34.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/Benefits"}},[e._v("Benefits")]),e._v(" | "),n("router-link",{attrs:{to:"/Register"}},[e._v("Register")]),e._v(" | "),n("router-link",{attrs:{to:"/Contact"}},[e._v("Contact")]),e._v(" | "),n("router-link",{attrs:{to:"/Resources"}},[e._v("Resources")])],1),n("router-view")],1)},o=[],i=(n("fffd"),n("2877")),c={},u=Object(i["a"])(c,a,o,!1,null,"ddb9693c",null),s=u.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("home-page")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"box1"}},[n("header-page"),e._m(0),n("footer-page")],1)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"box2"}},[n("div",{staticClass:"pads",attrs:{id:"b_left"}},[n("div",{staticClass:"frame"},[n("h3",[e._v("Web Development Learner")])]),n("h4",[e._v("In Order To Qualify")]),n("ul",[n("li",[e._v(" You must be a student enrolled in a web development program in Canada ")]),n("li",[e._v(" You must be of legal age and willing to be subjected to a background check ")]),n("li",[e._v(" You must submit a monthly report of your progress both at your college/university and the assignments given by your tutor ")]),n("li",[n("b",[e._v("Disclaimer:")]),e._v(" This is not a dating site. We cannot guarantee that a tutor will accept your candidacy. We do not hire participants ")])])]),n("div",{staticClass:"pads",attrs:{id:"b_right"}},[n("div",{staticClass:"frame"},[n("h3",[e._v("Web Development Tutor")])]),n("h4",[e._v("In Order To Qualify")]),n("ul",[n("li",[e._v(" You must be currently a professional in web development in Canada ")]),n("li",[e._v(" You must be of legal age and willing to be subjected to a background check ")]),n("li",[e._v(" You must submit a monthly report of your student's progress and the assignments given by you ")]),n("li",[n("b",[e._v("Disclaimer:")]),e._v(" This is not a dating site. We cannot guarantee that a student will accept your candidacy. We do not hire participants ")])])])])}],v=n("e9c6"),m=n("12d4"),b={name:"HomePage",components:{HeaderPage:v["a"],FooterPage:m["a"]}},g=b,_=(n("01a6"),Object(i["a"])(g,p,h,!1,null,"0622e841",null)),y=_.exports,k={name:"Home",components:{HomePage:y}},w=k,C=Object(i["a"])(w,f,d,!1,null,null,null),O=C.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:O},{path:"/Benefits",name:"Benefits",component:function(){return n.e("chunk-55c0c330").then(n.bind(null,"1027"))}},{path:"/Register",name:"Register",component:function(){return n.e("chunk-0fb00815").then(n.bind(null,"73cf"))}},{path:"/Contact",name:"Contact",component:function(){return n.e("chunk-43acf530").then(n.bind(null,"b8fa"))}},{path:"/Resources",name:"Resources",component:function(){return n.e("chunk-350c8842").then(n.bind(null,"93b9"))}}],x=new l["a"]({routes:j}),E=x;r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(s)}}).$mount("#app")},"6cfa":function(e,t,n){},b637:function(e,t,n){},c5e2:function(e,t,n){},e9c6:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"head_box"}},[r("img",{staticClass:"images",attrs:{alt:"Web Development Match",src:n("54d9")}}),r("div",{attrs:{id:"sub_box"}},[r("div",{staticClass:"light1",attrs:{id:"one"}},[e._v(" Acquire or Master Web Development Skills ")]),r("div",{staticClass:"light2",attrs:{id:"two"}},[e._v("Pay No Fees for Registration or Tuition")])])])}],o={name:"HeaderPage"},i=o,c=(n("2942"),n("2877")),u=Object(c["a"])(i,r,a,!1,null,"5427b243",null);t["a"]=u.exports},fffd:function(e,t,n){"use strict";n("c5e2")}});
//# sourceMappingURL=app.0de15537.js.map