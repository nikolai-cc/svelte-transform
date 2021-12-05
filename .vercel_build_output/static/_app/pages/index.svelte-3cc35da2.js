import{S as be,i as Ee,s as Le,J as Xe,e as E,t as T,k as P,c as L,a as H,g as S,d as B,n as k,b as _,K as ue,f as Ye,H as s,L as j,M as h,N as _e,O as pe,h as Q,P as Ie,I as ce,Q as Ae,A as Me,R as he,T as de}from"../chunks/vendor-89417c5c.js";const C=(e,l,t=document)=>{t.addEventListener(e,l)},q=(e,l,t=document)=>{t.removeEventListener(e,l)},V=(e,l,t=document)=>{t.dispatchEvent(new CustomEvent(e,{detail:l}))},ye=(e,l)=>{let t=e.offsetTop+l.y,n=e.offsetLeft+l.x+e.offsetWidth,d=e.offsetTop+l.y+e.offsetHeight,o=e.offsetLeft+l.x;return{top:t,right:n,bottom:d,left:o}},we=(e,l,t)=>{let{x:n,y:d}=l,o=e.top-t<d&&d<e.top+t,v=e.right-t<n&&n<e.right+t,g=e.bottom-t<d&&d<e.bottom+t,i=e.left-t<n&&n<e.left+t;return{top:o,right:v,bottom:g,left:i}},ve=(e,l={})=>{let{pos:t={x:0,y:0},handle:n=e,margin:d=15}=l;n=n instanceof Node?n:document.querySelector(n);let o=t,v=f=>{let m=ye(e,t),c=we(m,{x:f.clientX,y:f.clientY},d);Object.values(c).some(Y=>Y===!0)||(o={x:f.clientX,y:f.clientY},C("pointermove",g),C("pointerup",i),V("drag:start",{pos:t},e))},g=f=>{t.x+=f.clientX-o.x,t.y+=f.clientY-o.y,e.style.transform=`translate3d(${t.x}px, ${t.y}px, 0)`,o={x:f.clientX,y:f.clientY},V("drag:delta",{pos:t},e)},i=f=>{q("pointermove",g),q("pointerup",i),V("drag:end",{pos:t},e)},y=()=>{e.style.transform=`translate3d(${t.x}px, ${t.y}px, 0)`};return C("pointerdown",v,n),y(),{update:f=>{t=f.pos||t,y()},destroy:()=>{q("pointerdown",v,n)}}},Ne=(e,l={})=>{let{pos:t={x:0,y:0},size:n={width:e.clientWidth,height:e.clientHeight},handle:d=e,margin:o=15}=l;d=d instanceof Node?d:document.querySelector(d);let v={top:0,right:0,left:0,bottom:0},g={top:!1,right:!1,bottom:!1,left:!1},i={x:0,y:0},y=a=>{v=ye(e,t),g=we(v,{x:a.clientX,y:a.clientY},o),e.style.cursor=Te(g)},f=a=>{!Object.values(g).some(w=>w===!0)||(i={x:a.clientX,y:a.clientY},q("pointermove",y,e),C("pointermove",m),C("pointerup",c),V("resize:start",{pos:t,size:n},e))},m=a=>{g.top&&(n.height+=i.y-a.clientY,t.y-=.5*(i.y-a.clientY),i.y=a.clientY),g.right&&(n.width+=a.clientX-i.x,t.x+=.5*(a.clientX-i.x),i.x=a.clientX),g.bottom&&(n.height+=a.clientY-i.y,t.y+=.5*(a.clientY-i.y),i.y=a.clientY),g.left&&(n.width+=i.x-a.clientX,t.x-=.5*(i.x-a.clientX),i.x=a.clientX),Y(),V("resize:delta",{pos:t,size:n},e)},c=a=>{C("pointermove",y,e),q("pointermove",m),q("pointerup",c),V("resize:end",{pos:t},e)},Y=()=>{e.style.width=n.width+"px",e.style.height=n.height+"px",e.style.transform=`translate(${t.x}px, ${t.y}px)`};return C("pointermove",y,e),C("pointerdown",f,d),Y(),{update:a=>{t=a.pos||t,n=a.size||n,Y()},destroy:()=>{q("pointermove",y,e),q("pointerdown",f,e)}}};let Te=e=>e.top&&e.left||e.bottom&&e.right?"nwse-resize":e.top&&e.right||e.bottom&&e.left?"nesw-resize":e.top||e.bottom?"ns-resize":e.left||e.right?"ew-resize":"default";const ze=(e,l={})=>{let t=ve(e,l),n=Ne(e,l),d=o=>{t.update(o.detail),n.update(o.detail)};return C("drag:delta",d,e),C("resize:delta",d,e),{update:o=>{t.update(o),n.update(o)},destroy:()=>{t.destroy(),n.destroy()}}};function Pe(e){let l,t,n,d,o,v,g,i,y,f,m,c,Y,a,w,G,W,Z,A,x,z,D,$,F,ee,M,te,b,J,le,K,ne,N,p,X,re,fe,oe,me,ge;return Xe(e[16]),{c(){l=E("main"),t=E("article"),n=T(e[0]),d=P(),o=E("aside"),v=T(e[9]),g=P(),i=E("div"),f=P(),m=E("form"),c=E("label"),Y=T(`x:
			`),a=E("input"),G=P(),W=T(e[5]),Z=P(),A=E("label"),x=T(`y:
			`),z=E("input"),$=P(),F=T(e[6]),ee=P(),M=E("label"),te=T(`width:
			`),b=E("input"),le=P(),K=T(e[7]),ne=P(),N=E("label"),p=T(`height:
			`),X=E("input"),fe=P(),oe=T(e[8]),this.h()},l(u){l=L(u,"MAIN",{style:!0,class:!0});var r=H(l);t=L(r,"ARTICLE",{class:!0});var O=H(t);n=S(O,e[0]),O.forEach(B),d=k(r),o=L(r,"ASIDE",{class:!0});var R=H(o);v=S(R,e[9]),R.forEach(B),g=k(r),i=L(r,"DIV",{class:!0}),H(i).forEach(B),f=k(r),m=L(r,"FORM",{class:!0});var I=H(m);c=L(I,"LABEL",{});var U=H(c);Y=S(U,`x:
			`),a=L(U,"INPUT",{type:!0,min:!0,max:!0}),G=k(U),W=S(U,e[5]),U.forEach(B),Z=k(I),A=L(I,"LABEL",{});var ae=H(A);x=S(ae,`y:
			`),z=L(ae,"INPUT",{type:!0,min:!0,max:!0}),$=k(ae),F=S(ae,e[6]),ae.forEach(B),ee=k(I),M=L(I,"LABEL",{});var se=H(M);te=S(se,`width:
			`),b=L(se,"INPUT",{type:!0,min:!0,max:!0}),le=k(se),K=S(se,e[7]),se.forEach(B),ne=k(I),N=L(I,"LABEL",{});var ie=H(N);p=S(ie,`height:
			`),X=L(ie,"INPUT",{type:!0,min:!0,max:!0}),fe=k(ie),oe=S(ie,e[8]),ie.forEach(B),I.forEach(B),r.forEach(B),this.h()},h(){var u,r,O,R;_(t,"class","svelte-tv2mss"),_(o,"class","svelte-tv2mss"),_(i,"class","svelte-tv2mss"),_(a,"type","range"),_(a,"min",0),_(a,"max",w=(u=e[3])!=null?u:1e3),_(z,"type","range"),_(z,"min",0),_(z,"max",D=(r=e[4])!=null?r:1e3),_(b,"type","range"),_(b,"min",0),_(b,"max",J=(O=e[3])!=null?O:1e3),_(X,"type","range"),_(X,"min",0),_(X,"max",re=(R=e[4])!=null?R:1e3),_(m,"class","svelte-tv2mss"),ue(l,"--sx",e[1]+"px"),ue(l,"--sy",e[2]+"px"),_(l,"class","svelte-tv2mss")},m(u,r){Ye(u,l,r),s(l,t),s(t,n),s(l,d),s(l,o),s(o,v),s(l,g),s(l,i),s(l,f),s(l,m),s(m,c),s(c,Y),s(c,a),j(a,e[5]),s(c,G),s(c,W),s(m,Z),s(m,A),s(A,x),s(A,z),j(z,e[6]),s(A,$),s(A,F),s(m,ee),s(m,M),s(M,te),s(M,b),j(b,e[7]),s(M,le),s(M,K),s(m,ne),s(m,N),s(N,p),s(N,X),j(X,e[8]),s(N,fe),s(N,oe),me||(ge=[h(window,"resize",e[16]),_e(ze.call(null,t)),h(t,"drag:start",e[17]),h(t,"drag:delta",e[18]),h(t,"drag:end",e[19]),h(t,"resize:start",e[20]),h(t,"resize:delta",e[21]),h(t,"resize:end",e[22]),_e(ve.call(null,o)),h(o,"drag:start",e[23]),h(o,"drag:delta",e[24]),h(o,"drag:end",e[25]),_e(y=ze.call(null,i,{pos:{x:e[5],y:e[6]},size:{width:e[7],height:e[8]}})),h(i,"resize:delta",e[11]),h(i,"drag:delta",e[11]),h(a,"pointerdown",pe(e[15])),h(a,"change",e[26]),h(a,"input",e[26]),h(z,"pointerdown",pe(e[14])),h(z,"change",e[27]),h(z,"input",e[27]),h(b,"pointerdown",pe(e[13])),h(b,"change",e[28]),h(b,"input",e[28]),h(X,"pointerdown",pe(e[12])),h(X,"change",e[29]),h(X,"input",e[29]),h(l,"mousemove",e[10])],me=!0)},p(u,[r]){var O,R,I,U;r&1&&Q(n,u[0]),r&512&&Q(v,u[9]),y&&Ie(y.update)&&r&480&&y.update.call(null,{pos:{x:u[5],y:u[6]},size:{width:u[7],height:u[8]}}),r&8&&w!==(w=(O=u[3])!=null?O:1e3)&&_(a,"max",w),r&32&&j(a,u[5]),r&32&&Q(W,u[5]),r&16&&D!==(D=(R=u[4])!=null?R:1e3)&&_(z,"max",D),r&64&&j(z,u[6]),r&64&&Q(F,u[6]),r&8&&J!==(J=(I=u[3])!=null?I:1e3)&&_(b,"max",J),r&128&&j(b,u[7]),r&128&&Q(K,u[7]),r&16&&re!==(re=(U=u[4])!=null?U:1e3)&&_(X,"max",re),r&256&&j(X,u[8]),r&256&&Q(oe,u[8]),r&2&&ue(l,"--sx",u[1]+"px"),r&4&&ue(l,"--sy",u[2]+"px")},i:ce,o:ce,d(u){u&&B(l),me=!1,Ae(ge)}}}function Se(e,l,t){let n=["give me a transformative experience","drag me","resize me","feel me","transform me"],d=n[0];Me(()=>{setInterval(()=>{t(0,d=n[Math.floor(Math.random()*n.length)])},2e3)});let o,v,g,i,y=16,f=500,m=100,c=100;const Y=p=>{t(1,o=Math.round(p.clientX/g*32-16)),t(2,v=Math.round(p.clientY/i*32-16))};let a=p=>{t(5,y=p.detail.pos.x),t(6,f=p.detail.pos.y),t(7,m=p.detail.size.width),t(8,c=p.detail.size.height)},w="nothing happened";function G(p){he.call(this,e,p)}function W(p){he.call(this,e,p)}function Z(p){he.call(this,e,p)}function A(p){he.call(this,e,p)}function x(){t(3,g=window.innerWidth),t(4,i=window.innerHeight)}const z=()=>t(9,w="start dragging node"),D=p=>t(9,w=`dragging node to [${p.detail.pos.x}:${p.detail.pos.y}]`),$=()=>t(9,w="end dragging node"),F=()=>t(9,w="start resizing node"),ee=p=>t(9,w=`resizing node to [${p.detail.size.width}:${p.detail.size.height}]`),M=()=>t(9,w="end resizing node"),te=()=>t(9,w="wait what wat are you doing!?"),b=p=>t(9,w="let me go!"),J=()=>t(9,w="\u{1F620}");function le(){y=de(this.value),t(5,y)}function K(){f=de(this.value),t(6,f)}function ne(){m=de(this.value),t(7,m)}function N(){c=de(this.value),t(8,c)}return[d,o,v,g,i,y,f,m,c,w,Y,a,G,W,Z,A,x,z,D,$,F,ee,M,te,b,J,le,K,ne,N]}class ke extends be{constructor(l){super();Ee(this,l,Se,Pe,Le,{})}}export{ke as default};
