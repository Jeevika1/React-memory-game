(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(8),n=c.n(i),r=c(28),s=c(16),o=c(21),l=c(10),b=c(67),u=c(64),m=c(65),d=c(66),j=c(23),p=c.n(j),h=c.p+"static/media/Alpha.5f594f64.png",O=(c(37),c(3)),g=function(e){var t=e.onClick,c=e.card,a=e.index,i=e.isInactive,n=e.isFlipped,r=e.isDisabled;return Object(O.jsxs)("div",{className:p()("card",{"is-flipped":n,"is-inactive":i}),onClick:function(){!n&&!r&&t(a)},children:[Object(O.jsx)("div",{className:"card-face card-font-face",children:Object(O.jsx)("img",{src:h,alt:"alpha"})}),Object(O.jsx)("div",{className:"card-face card-back-face",children:Object(O.jsx)("img",{src:c.src,alt:"alpha"})})]})},f=(c(39),[{type:"A",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/A.png"},{type:"B",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/B.png"},{type:"C",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/C.png"},{type:"D",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/D.png"},{type:"E",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/E.png"},{type:"F",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/F.png"},{type:"G",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/G.png"},{type:"H",src:"https://github.com/Jeevika1/React-memory-game/blob/main/public/H.png"}]);function v(e){for(var t=e.length;t>0;t--){var c=Math.floor(Math.random()*t),a=t-1,i=e[a];e[a]=e[c],e[c]=i}return e}function y(){var e=Object(a.useState)(v.bind(null,f.concat(f))),t=Object(l.a)(e,2),c=t[0],i=(t[1],Object(a.useState)([])),n=Object(l.a)(i,2),j=n[0],p=n[1],h=Object(a.useState)({}),y=Object(l.a)(h,2),x=y[0],S=y[1],k=Object(a.useState)(!1),N=Object(l.a)(k,2),I=N[0],J=N[1],w=Object(a.useState)(0),R=Object(l.a)(w,2),T=R[0],E=R[1],B=Object(a.useState)(!1),C=Object(l.a)(B,2),D=C[0],F=C[1],A=Object(a.useState)(JSON.parse(localStorage.getItem("bestScore"))||Number.POSITIVE_INFINITY),M=Object(l.a)(A,2),Y=M[0],H=M[1],P=Object(a.useRef)(null),G=function(){var e=Object(l.a)(j,2),t=e[0],a=e[1];if(J(!1),c[t].type===c[a].type)return S((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c[t].type,!0))})),void p([]);P.current=setTimeout((function(){p([])}),500)},V=function(e){1===j.length?(p((function(t){return[].concat(Object(r.a)(t),[e])})),E((function(e){return e+1})),J(!0)):(clearTimeout(P.current),p([e]))};Object(a.useEffect)((function(){var e=null;return 2===j.length&&(e=setTimeout(G,300)),function(){clearTimeout(e)}}),[j]),Object(a.useEffect)((function(){!function(){if(Object.keys(x).length===f.length){F(!0);var e=Math.min(T,Y);H(e),localStorage.setItem("bestScore",e)}}()}),[x]);var q=function(e){return j.includes(e)};window.onbeforeunload=function(e){var t=e||window.event;return t.preventDefault(),t&&(t.returnValue=""),""};var K=function(e){return Boolean(x[e.type])};return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h3",{children:"Play the Flip card game"}),Object(O.jsx)("div",{children:"Select two cards with same content consequtively to make them vanish"})]}),Object(O.jsx)("div",{className:"container",children:c.map((function(e,t){return Object(O.jsx)(g,{card:e,index:t,isDisabled:I,isInactive:K(e),isFlipped:q(t),onClick:V},t)}))}),Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"score",children:[Object(O.jsxs)("div",{className:"moves",children:[Object(O.jsx)("span",{className:"bold",children:"ATTEMPTS:"})," ",T]}),localStorage.getItem("bestScore")&&Object(O.jsxs)("div",{className:"high-score",children:[Object(O.jsx)("span",{className:"bold",children:"Best Score:"})," ",Y]})]})}),Object(O.jsxs)(b.a,{open:D,disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(u.a,{id:"alert-dialog-title",children:"Hurray!!! You completed the challenge"}),Object(O.jsx)(m.a,{children:Object(O.jsxs)(d.a,{id:"alert-dialog-description",children:["You completed the game in ",T," moves. Your best score is"," ",Y," moves."]})})]})]})}var x=document.getElementById("root");n.a.render(Object(O.jsx)(a.StrictMode,{children:Object(O.jsx)(y,{})}),x)}},[[44,1,2]]]);
//# sourceMappingURL=main.86d9da17.chunk.js.map