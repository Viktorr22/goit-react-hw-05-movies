"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{597:function(t,e,r){r.r(e);var n=r(433),a=r(439),c=r(791),u=r(689),i=r(707),o=r(184);e.default=function(){var t=(0,u.UO)().movieId,e=(0,c.useState)([]),r=(0,a.Z)(e,2),s=r[0],p=r[1],f=(0,c.useState)(""),h=(0,a.Z)(f,2),l=h[0],v=h[1];return(0,c.useEffect)((function(){(0,i.AX)(t).then((function(t){return{actorList:t.cast.map((function(t){return{profile_path:t.profile_path,original_name:t.original_name,character:t.character,id:t.id}}))}})).then((function(t){var e=t.actorList;p((0,n.Z)(e))})).catch((function(t){v(t.message)}))}),[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ul",{children:s.map((function(t){var e=t.profile_path,r=t.original_name,n=t.character,a=t.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:(0,i.Qk)(e),alt:r,width:120}),(0,o.jsx)("p",{children:r}),(0,o.jsx)("p",{children:n})]},a)}))}),l&&(0,o.jsx)("p",{children:l})]})}},707:function(t,e,r){r.d(e,{AX:function(){return m},ED:function(){return d},DF:function(){return _},Y5:function(){return f},vw:function(){return l},Qk:function(){return p}});var n=r(861),a=r(687),c=r.n(a),u=r(243),i=r.p+"static/media/defaultImage.ab669e596e5c9a35c2d2.jpg";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="8378c884a6341b6bb6a7cfb362550079",s=i,p=function(t){return t?"https://image.tmdb.org/t/p/w200/"+t:s};function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r,n,a,i,s,p,f,h,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,n=r.data,a=n.genres,i=n.id,s=n.title,p=n.poster_path,f=n.overview,h=n.release_date,l=n.vote_average,t.abrupt("return",{genres:a,id:i,title:s,poster_path:p,overview:f,release_date:h,vote_average:l});case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/week?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _(t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=414.f0f25a6c.chunk.js.map