"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(e,t,r){r.r(t);var n=r(861),c=r(439),a=r(757),i=r.n(a),s=r(791),u=r(243),o=r(87),h=r(184);t.default=function(){var e=(0,s.useState)(""),t=(0,c.Z)(e,2),r=t[0],a=t[1],l=(0,s.useState)([]),v=(0,c.Z)(l,2),p=v[0],d=v[1],f=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=c7e16231292b385d81e462e67776cee3&query=".concat(r));case 3:t=e.sent,d(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Search Movies"}),(0,h.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}}),(0,h.jsx)("button",{onClick:f,children:"Search"}),(0,h.jsx)("ul",{children:p.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.e89a3d2b.chunk.js.map