"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{83:function(n,t,e){e.d(t,{Hx:function(){return s},Mc:function(){return d},SU:function(){return o},Y5:function(){return f},uV:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="3290f7c502e8a1167263be702b28bdfc",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},215:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return h},default:function(){return v}});var r,a,c=e(885),u=e(791),i=e(168),o=e(444),s=e(731),p=(0,o.ZP)(s.rU)(r||(r=(0,i.Z)(["\n  display: block;\n  margin: auto;\n  color: #000;\n  font-size: 1.2rem;\n  text-decoration: none;\n  &:hover {\n    color: orangered;\n  }\n"]))),f=o.ZP.ul(a||(a=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 15px;\n  background-color: antiquewhite;\n  @media screen and (min-width: 380px) {\n    .List {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .List {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    .List {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n"]))),d=e(83),l=e(938),m=e(184),h=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];if((0,u.useEffect)((function(){d.SU().then((function(n){return r(n)}))}),[]),e)return console.log(e),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{children:"Trending now"}),(0,m.jsx)(f,{children:e.map((function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.state;return(0,m.jsxs)(p,{to:"/movies/".concat(t),state:a,children:[(0,m.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):l,alt:e}),(0,m.jsx)("h3",{children:e})]})}))})]})},v=h},938:function(n,t,e){n.exports=e.p+"static/media/portrait_placeholder.e52a5c9f8189bd50b306.png"}}]);
//# sourceMappingURL=215.34525e51.chunk.js.map