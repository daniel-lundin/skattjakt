(this.webpackJsonpskattjakt=this.webpackJsonpskattjakt||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),l=t(1),s=t.n(l),i=t(3),r=t.n(i),a=(t(10),t(4));t(11);function o(e){var n=e.label,t=e.numberString,l=e.answer,s=e.highlighted,i=e.length,r=Array.from({length:i}).map((function(e,n){var c;return null!==(c=t[n])&&void 0!==c?c:"-"})),a=l===t;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"number-display ".concat(a?"number-display--correct":""," ").concat(s?"number-display--highlighted":""),children:[Object(c.jsx)("div",{className:"number-display__label",children:n}),Object(c.jsx)("div",{className:"number-display__container",children:r.map((function(e){return Object(c.jsx)("span",{className:"number-display__digit",children:e})}))})]})})}t(12);function u(e){var n=e.onClick,t=e.onDelete;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("button",{className:"cell",onClick:function(){return n(1)},children:"1"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(2)},children:"2"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(3)},children:"3"})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("button",{className:"cell",onClick:function(){return n(4)},children:"4"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(5)},children:"5"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(6)},children:"6"})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("button",{className:"cell",onClick:function(){return n(7)},children:"7"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(8)},children:"8"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return n(9)},children:"9"})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("button",{className:"cell",onClick:function(){return n(0)},children:"0"}),Object(c.jsx)("button",{className:"cell",onClick:function(){return t()},children:"<"})]})]})}t(13);var j="9257148270093361";var h=function(){var e=s.a.useState(""),n=Object(a.a)(e,2),t=n[0],l=n[1],i=[t.slice(0,4),t.slice(4,8),t.slice(8,12),t.slice(12,16)],r=i[0],h=i[1],b=i[2],d=i[3],g=[j.slice(0,4),j.slice(4,8),j.slice(8,12),j.slice(12,16)],m=g[0],O=g[1],x=g[2],f=g[3];return Object(c.jsx)("div",{className:"App",children:t!==j?Object(c.jsxs)("div",{className:"safe centered",children:[Object(c.jsxs)("div",{className:"safe__codes centered",children:[Object(c.jsx)(o,{label:"Kod 1",length:4,numberString:r,answer:m,highlighted:t.length<4}),Object(c.jsx)(o,{label:"Kod 2",length:4,numberString:h,answer:O,highlighted:t.length>=4&&t.length<8}),Object(c.jsx)(o,{label:"Kod 3",length:4,numberString:b,answer:x,highlighted:t.length>=8&&t.length<12}),Object(c.jsx)(o,{label:"Kod 4",length:4,numberString:d,answer:f,highlighted:t.length>=12})]}),Object(c.jsx)("div",{className:"safe__keypad centered",children:Object(c.jsx)(u,{onClick:function(e){t.length<16&&l((function(n){return n.concat(String(e))}))},onDelete:function(){l((function(e){return e.slice(0,e.length-1)}))}})})]}):Object(c.jsx)("img",{class:"hint",src:"hint.png",alt:"hint"})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,l=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),l(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.5abbd31e.chunk.js.map