"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[805],{740:function(t,e,r){r.r(e);var n=r(433),a=r(439),c=r(87),u=r(689),i=r(791),o=r(707),s=r(184);e.default=function(){var t,e=(0,i.useState)(""),r=(0,a.Z)(e,2),p=r[0],f=r[1],l=(0,i.useState)(""),h=(0,a.Z)(l,2),v=h[0],d=h[1],w=(0,i.useState)([]),m=(0,a.Z)(w,2),g=m[0],y=m[1],x=(0,c.lr)(),b=(0,a.Z)(x,2),k=b[0],_=b[1],Z=null!==(t=k.get("query"))&&void 0!==t?t:"",j=(0,u.TH)(),E=function(t){t&&(0,o.vw)(t).then((function(t){return{requestList:t.results.map((function(t){return{original_title:t.original_title,id:t.id}}))}})).then((function(t){var e=t.requestList;y((0,n.Z)(e))})).catch((function(t){d(t.message)}))};(0,i.useEffect)((function(){E(Z)}),[Z]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==p.trim()?(E(p),_({query:p}),f("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},children:[(0,s.jsx)("input",{type:"text",value:p,onChange:function(t){var e=t.target.value;if(""===e)return f("");f(e)}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:g.map((function(t){var e=t.id,r=t.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"".concat(e),state:{from:j},children:r})},e)}))}),v&&(0,s.jsx)("p",{children:v})]})}},707:function(t,e,r){r.d(e,{AX:function(){return m},ED:function(){return d},DF:function(){return y},Y5:function(){return f},vw:function(){return h},Qk:function(){return p}});var n=r(861),a=r(687),c=r.n(a),u=r(243),i=r.p+"static/media/defaultImage.ab669e596e5c9a35c2d2.jpg";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="8378c884a6341b6bb6a7cfb362550079",s=i,p=function(t){return t?"https://image.tmdb.org/t/p/w200/"+t:s};function f(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function t(e){var r,n,a,i,s,p,f,l,h;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,n=r.data,a=n.genres,i=n.id,s=n.title,p=n.poster_path,f=n.overview,l=n.release_date,h=n.vote_average,t.abrupt("return",{genres:a,id:i,title:s,poster_path:p,overview:f,release_date:l,vote_average:h});case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/week?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=805.7761d9a4.chunk.js.map