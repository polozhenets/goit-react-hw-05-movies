"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[354],{4126:function(e,t,n){var r=n(1087),a=n(184);t.Z=function(e){var t=e.movies,n=e.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,a.jsx)("h3",{children:c})})},t)}))})})}},1575:function(e,t,n){n.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},3354:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(9439),a=n(7689),c=n(2791),u=n(1087),o="Searchbar_searchForm__t5lAY",i="Searchbar_searchInput__iwZ1h",s="Searchbar_searchButton__GsylI",f=n(184),l=function(e){var t=e.onSearch,n=(0,c.useState)(""),a=(0,r.Z)(n,2),u=a[0],l=a[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===u.trim()&&alert("Enter the film title"),t(u),l("")},className:o,children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(e){l(e.target.value.toLowerCase())},className:i}),(0,f.jsx)("button",{type:"submit",className:s,children:"Search"})]})})},h=n(1207),p=n(4126),d=n(5700),v=n(1575),g=function(){var e=(0,u.lr)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,c.useState)([]),s=(0,r.Z)(i,2),g=s[0],m=s[1],x=(0,c.useState)(""),_=(0,r.Z)(x,2),w=_[0],S=_[1],y=(0,c.useState)(!1),b=(0,r.Z)(y,2),j=b[0],Z=b[1],k=(0,a.TH)(),U=n.get("query");return(0,c.useEffect)((function(){if(U){Z(!0),(0,h.Hq)(U).then((function(e){e.length||alert("No movies found!"),m(e)})).catch((function(e){S("Ooops. Something went wrong..."),console.log(e)})).finally(Z(!1))}}),[U]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(v.Z,{text:"Movie Search"}),j&&"Loading ...",w&&(0,f.jsx)("div",{children:w}),(0,f.jsx)(l,{onSearch:function(e){o({query:"".concat(e)})}}),g&&(0,f.jsx)(p.Z,{movies:g,prevLocation:k})]})})}},1207:function(e,t,n){n.d(t,{Hq:function(){return v},XT:function(){return d},fU:function(){return m},l2:function(){return g},sv:function(){return x}});var r=n(5861),a=n(4687),c=n.n(a),u=n(4569),o=n.n(u),i="e744dd987f832ad945563dbad49387aa";o().defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",f="/search/movie",l="/movie",h="/credits",p="/reviews",d=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,o().get("".concat(s,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o().get("".concat(f,"?api_key=").concat(i,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(l,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t).concat(h,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o().get("/movie/".concat(t).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=354.16b413a0.chunk.js.map