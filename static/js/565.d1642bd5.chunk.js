"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[565],{628:function(n,t,e){e.d(t,{n:function(){return r}});var r="https://image.tmdb.org/t/p/w500"},83:function(n,t,e){e.d(t,{Hx:function(){return p},Mc:function(){return f},SU:function(){return s},uV:function(){return l}});var r=e(861),a=e(757),c=e.n(a),i=e(44),o=i.ZP.create({baseURL:"http://185.233.118.244:8080/user",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}),u="3290f7c502e8a1167263be702b28bdfc",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={month:"03",type:"done",year:2023},console.log("fetchPopularMovies"),n.next=4,o.get("/api/finances/",{params:t});case 4:return e=n.sent,console.log(e.data),n.abrupt("return",e.data.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={signal:e.signal},n.next=3,i.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(u),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={signal:e.signal},n.next=3,i.ZP.get("movie/".concat(t,"/credits?api_key=").concat(u),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={signal:e.signal},n.next=3,i.ZP.get("movie/".concat(t,"?api_key=").concat(u),r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},565:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i=e(885),o=e(791),u=e(689),s=e(628),p=e(562),l=e.n(p),f=e(83),d=e(168),h=e(444),v=h.ZP.img(r||(r=(0,d.Z)(["\n   width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    background-repeat: no-repeat;\n    \n    background-size: cover;\n"]))),g=h.ZP.div(a||(a=(0,d.Z)(["\n     display: flex;\n    align-items: center;\n    > h3 {\n    margin-left: 20px;\n}\n> p {\ntext-align: left;\n}\n"]))),x=h.ZP.div(c||(c=(0,d.Z)(["\nmargin-top: 50px;\nborder: 1px solid grey;\npadding: 10px;\nborder-radius: 5px;\n"]))),m=e(184);var b=function(){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var n=new AbortController;return f.Hx(a,n).then((function(n){return r(n.results)})).catch((function(n){l().Notify.failure("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(n.message),{position:"top-center",autoClose:2e3})})),function(){n.abort()}}),[a]),(null===e||void 0===e?void 0:e.length)>0?(0,m.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content,a=n.author_details.avatar_path;return(0,m.jsx)("li",{children:(0,m.jsxs)(x,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(v,{src:"https"===(null===a||void 0===a?void 0:a.slice(1,6))?a.slice(1,a.length):"".concat(s.n).concat(a),alt:e}),(0,m.jsx)("h3",{children:e})]}),(0,m.jsx)("p",{children:r})]})},t)}))}):(0,m.jsx)("div",{children:"No reviews"})}}}]);
//# sourceMappingURL=565.d1642bd5.chunk.js.map