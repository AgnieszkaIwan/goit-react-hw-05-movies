"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{888:function(e,i,s){s.r(i),s.d(i,{default:function(){return p}});var t=s(861),a=s(439),r=s(757),n=s.n(r),c=s(791),o=s(243),l=s(689),v=s(87),d="MovieDetails_backButton__ilGfB",h="MovieDetails_movieDetails__EqwEX",_="MovieDetails_moviePoster__M1O9z",u="MovieDetails_movieInfo__XAfDM",m="MovieDetails_additionalInfo__qmwMY",f="MovieDetails_infoLink__7701A",x="MovieDetails_activeLink__yHly6",j=s(184),p=function(){var e=(0,l.UO)().movieId,i=(0,c.useState)(null),s=(0,a.Z)(i,2),r=s[0],p=s[1];if((0,c.useEffect)((function(){var i=function(){var i=(0,t.Z)(n().mark((function i(){var s;return n().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=c7e16231292b385d81e462e67776cee3"));case 3:s=i.sent,p(s.data),i.next=10;break;case 7:i.prev=7,i.t0=i.catch(0),console.error("Error fetching movie details:",i.t0);case 10:case"end":return i.stop()}}),i,null,[[0,7]])})));return function(){return i.apply(this,arguments)}}();i()}),[e]),!r)return(0,j.jsx)("div",{children:"Loading..."});var w="https://image.tmdb.org/t/p/w500".concat(r.poster_path);return(0,j.jsxs)("div",{children:[(0,j.jsx)("header",{children:(0,j.jsx)("nav",{children:(0,j.jsx)(v.rU,{to:"/",children:(0,j.jsx)("button",{className:d,children:"\u2190 Go back"})})})}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("div",{className:_,children:(0,j.jsx)("img",{src:w,alt:r.title})}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsxs)("h2",{children:[r.title," (",r.release_date.substring(0,4),")"]}),(0,j.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:r.overview}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)(v.OL,{to:"/movies/".concat(e,"/cast"),className:f,activeclassname:x,children:"Cast"}),(0,j.jsx)(v.OL,{to:"/movies/".concat(e,"/reviews"),className:f,activeclassname:x,children:"Reviews"})]}),(0,j.jsx)(l.j3,{})]})]})]})}}}]);
//# sourceMappingURL=888.fe58055f.chunk.js.map