(this.webpackJsonpskattjakt=this.webpackJsonpskattjakt||[]).push([[0],[,,,,,,,,,,function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var t=c(0),l=c(1),s=c.n(l),r=c(3),i=c.n(r),a=(c(10),c(4));c(11);function o(e){var n=e.label,c=e.numberString,l=e.answer,s=e.highlighted,r=e.length,i=Array.from({length:r}).map((function(e,n){var t;return null!==(t=c[n])&&void 0!==t?t:"-"})),a=l===c;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"number-display ".concat(a?"number-display--correct":""," ").concat(s?"number-display--highlighted":""),children:[Object(t.jsx)("div",{className:"number-display__label",children:n}),Object(t.jsx)("div",{className:"number-display__container",children:i.map((function(e){return Object(t.jsx)("span",{className:"number-display__digit",children:e})}))})]})})}c(12);function u(e){var n=e.onClick,c=e.onDelete;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("button",{className:"cell",onClick:function(){return n(1)},children:"1"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(2)},children:"2"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(3)},children:"3"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("button",{className:"cell",onClick:function(){return n(4)},children:"4"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(5)},children:"5"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(6)},children:"6"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("button",{className:"cell",onClick:function(){return n(7)},children:"7"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(8)},children:"8"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return n(9)},children:"9"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("button",{className:"cell",onClick:function(){return n(0)},children:"0"}),Object(t.jsx)("button",{className:"cell",onClick:function(){return c()},children:"<"})]})]})}c(13);var d=function(){for(var e=s.a.useState(""),n=Object(a.a)(e,2),c=n[0],l=n[1],r=new URL(window.location).searchParams,i=r.get("code")||"9257148270093361",d=i.length,j=d-d%4,b=i.slice(0,j),h=Math.floor(j/4),m=r.get("revealText")||"Koden till kassask\xe5pet \xe4r",f=r.get("revealCode")||"16 08 12",x=[],O=0;O<h;O++)x.push(c.slice(4*O,4+4*O));for(var g=[],v=0;v<h;v++)g.push(b.slice(4*v,4+4*v));var N=x.map((function(e,n){return Object(t.jsx)(o,{label:"Kod ".concat(n+1),length:4,numberString:x[n],answer:g[n],highlighted:c.length>4*n&&c.length<4*n+4})}));return Object(t.jsx)("div",{className:"App",children:c!==b?Object(t.jsxs)("div",{className:"safe centered",children:[Object(t.jsx)("div",{className:"safe__codes centered",children:N}),Object(t.jsx)("div",{className:"safe__keypad centered",children:Object(t.jsx)(u,{onClick:function(e){c.length<j&&l((function(n){return n.concat(String(e))}))},onDelete:function(){l((function(e){return e.slice(0,e.length-1)}))}})})]}):Object(t.jsx)("div",{className:"hint",alt:"hint",children:Object(t.jsxs)("span",{className:"reveal__code",children:[m,Object(t.jsx)("br",{}),f]})})})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(n){var c=n.getCLS,t=n.getFID,l=n.getFCP,s=n.getLCP,r=n.getTTFB;c(e),t(e),l(e),s(e),r(e)}))};i.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(d,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.c738d614.chunk.js.map