"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(t,e,r){r.r(e);var n=r(433),a=r(439),c=r(861),i=r(687),s=r.n(i),u=r(791),o=r(689),l=r(87),f=r(243),h=r(184);f.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p="8378c884a6341b6bb6a7cfb362550079";function d(){return(d=(0,c.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.Z.get("trending/movie/week?api_key=".concat(p));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}e.default=function(){var t=(0,o.TH)(),e=(0,u.useState)([]),r=(0,a.Z)(e,2),c=r[0],i=r[1],s=(0,u.useState)(""),f=(0,a.Z)(s,2),p=f[0],v=f[1];return(0,u.useEffect)((function(){(function(){return d.apply(this,arguments)})().then((function(t){var e=t.results;t.id;return{requestList:e.map((function(t){return{title:t.title,id:t.id}}))}})).then((function(t){var e=t.requestList;i((0,n.Z)(e))})).catch((function(t){v(t.message)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:"Trending today"}),(0,h.jsx)("ul",{children:c.map((function(e){var r=e.id,n=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"movies/".concat(r),state:{from:t},children:n})},r)}))}),p&&(0,h.jsx)("p",{children:p})]})}}}]);
//# sourceMappingURL=6.e9181fbb.chunk.js.map