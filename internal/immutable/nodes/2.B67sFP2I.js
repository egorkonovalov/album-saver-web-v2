import{s as U,e as v,a as D,c as $,b as w,f as m,g as N,m as _,i as k,h as E,a1 as x,p as H,q as we,n as g,L as De,a2 as ee,D as O,E as Te,a3 as Ne,l as S,N as qe,o as K,a4 as Le,t as Ee,d as Ce,u as te,A as Re,a5 as Y,a6 as Z,B as le,j as Pe,a7 as Ue}from"../chunks/scheduler.Br1097ij.js";import{S as Q,i as B,t as d,g as L,a as p,c as P,f as ne,b as R,d as I,m as A,e as M}from"../chunks/index.DJz_kk84.js";import{b as j}from"../chunks/paths.DS_ok6AH.js";import{e as V,g as Ie,k as Ve,h as Ae,u as Me,P as G,l as Qe,t as se,T as ie}from"../chunks/Placeholder.CEXoF0fh.js";import{b as q,R as re,a as Be}from"../chunks/artists.controller.DGlGH7o9.js";import{a as ze}from"../chunks/albums.controller.CvCgrZUq.js";import{d as He}from"../chunks/downloader.controller.C9LOnaBQ.js";function ce(i){let e,t,r;return{c(){e=v("input"),this.h()},l(l){e=$(l,"INPUT",{type:!0,style:!0,class:!0}),this.h()},h(){_(e,"type","reset"),e.value="",O(e,"background","url("+j+"/close.svg)"),_(e,"class","w-4 h-4")},m(l,c){k(l,e,c),t||(r=H(e,"click",i[8]),t=!0)},p:g,d(l){l&&m(e),t=!1,r()}}}function Fe(i){let e,t,r,l,c,s,a,n=i[0]&&ce(i);return{c(){e=v("form"),t=v("div"),r=v("label"),l=v("input"),c=D(),n&&n.c(),this.h()},l(o){e=$(o,"FORM",{class:!0});var u=w(e);t=$(u,"DIV",{class:!0});var h=w(t);r=$(h,"LABEL",{class:!0});var f=w(r);l=$(f,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),f.forEach(m),c=N(h),n&&n.l(h),h.forEach(m),u.forEach(m),this.h()},h(){_(l,"type","search"),_(l,"id","search_record"),_(l,"class","bg-transparent w-full border-none outline-0"),_(l,"placeholder","What do you want to listen to?"),l.required=!0,_(r,"class","w-full"),_(t,"class","w-full searchbar flex items-center"),_(e,"class","form")},m(o,u){k(o,e,u),E(e,t),E(t,r),E(r,l),i[6](l),x(l,i[0]),E(t,c),n&&n.m(t,null),s||(a=[H(l,"focus",i[4]),H(l,"blur",i[5]),H(l,"input",i[7]),H(e,"submit",we(i[3]))],s=!0)},p(o,[u]){u&1&&l.value!==o[0]&&x(l,o[0]),o[0]?n?n.p(o,u):(n=ce(o),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:g,o:g,d(o){o&&m(e),i[6](null),n&&n.d(),s=!1,De(a)}}}function Oe(i,e,t){function r(){s.blur(),l("search",{value:c})}const l=ee();let c,s,a=!1;const n=()=>t(1,a=!0),o=()=>t(1,a=!1);function u(b){Te[b?"unshift":"push"](()=>{s=b,t(2,s)})}function h(){c=this.value,t(0,c)}const f=()=>t(0,c="");return i.$$.update=()=>{i.$$.dirty&1&&l("inputQueryChange",{value:c}),i.$$.dirty&2&&l("inputFocuseChange",{value:a})},[c,a,s,r,n,o,u,h,f]}class je extends Q{constructor(e){super(),B(this,e,Oe,Fe,U,{})}}function We(i){return i<.5?4*i*i*i:.5*Math.pow(2*i-2,3)+1}function ae(i,{delay:e=0,duration:t=400,easing:r=We,amount:l=5,opacity:c=0}={}){const s=getComputedStyle(i),a=+s.opacity,n=s.filter==="none"?"":s.filter,o=a*(1-c),[u,h]=Ne(l);return{delay:e,duration:t,easing:r,css:(f,b)=>`opacity: ${a-o*b}; filter: ${n} blur(${b*u}${h});`}}function oe(i,e,t){const r=i.slice();return r[5]=e[t],r}function ue(i){let e,t,r,l=V(i[1]),c=[];for(let s=0;s<l.length;s+=1)c[s]=fe(oe(i,l,s));return{c(){e=v("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var a=w(e);for(let n=0;n<c.length;n+=1)c[n].l(a);a.forEach(m),this.h()},h(){_(e,"class","filter")},m(s,a){k(s,e,a);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(e,null);r=!0},p(s,a){if(a&3){l=V(s[1]);let n;for(n=0;n<l.length;n+=1){const o=oe(s,l,n);c[n]?c[n].p(o,a):(c[n]=fe(o),c[n].c(),c[n].m(e,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=l.length}},i(s){r||(s&&qe(()=>{r&&(t||(t=ne(e,ae,{},!0)),t.run(1))}),r=!0)},o(s){s&&(t||(t=ne(e,ae,{},!1)),t.run(0)),r=!1},d(s){s&&m(e),K(c,s),s&&t&&t.end()}}}function fe(i){let e,t,r,l=i[5].type+"",c,s,a,n,o,u;return n=Le(i[3][0]),{c(){e=v("input"),t=D(),r=v("label"),c=Ee(l),s=D(),this.h()},l(h){e=$(h,"INPUT",{type:!0,name:!0,id:!0,class:!0}),t=N(h),r=$(h,"LABEL",{for:!0,class:!0});var f=w(r);c=Ce(f,l),s=N(f),f.forEach(m),this.h()},h(){_(e,"type","radio"),_(e,"name","record-type"),e.__value=i[5].type,x(e,e.__value),_(e,"id",`request_${i[5].type}`),_(e,"class","hidden"),_(r,"for",`request_${i[5].type}`),_(r,"class",a="filter-button "+(i[5].type===i[0]?"active":"")),n.p(e)},m(h,f){k(h,e,f),e.checked=e.__value===i[0],k(h,t,f),k(h,r,f),E(r,c),E(r,s),o||(u=H(e,"change",i[2]),o=!0)},p(h,f){f&1&&(e.checked=e.__value===h[0]),f&1&&a!==(a="filter-button "+(h[5].type===h[0]?"active":""))&&_(r,"class",a)},d(h){h&&(m(e),m(t),m(r)),n.r(),o=!1,u()}}}function Ke(i){let e,t=i[0]!==q.Release&&ue(i);return{c(){t&&t.c(),e=S()},l(r){t&&t.l(r),e=S()},m(r,l){t&&t.m(r,l),k(r,e,l)},p(r,[l]){r[0]!==q.Release?t?(t.p(r,l),l&1&&d(t,1)):(t=ue(r),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(L(),p(t,1,1,()=>{t=null}),P())},i(r){d(t)},o(r){p(t)},d(r){r&&m(e),t&&t.d(r)}}}function Ge(i,e,t){const r=ee();let{requestType:l}=e,c=[{type:q.Album},{type:q.Track}];const s=[[]];function a(){l=this.__value,t(0,l)}return i.$$set=n=>{"requestType"in n&&t(0,l=n.requestType)},i.$$.update=()=>{i.$$.dirty&1&&r("changeRequestType",{value:l})},[l,c,a,s]}class Je extends Q{constructor(e){super(),B(this,e,Ge,Ke,U,{requestType:0})}}class Xe{async getReleases(){return(await Ie(Ve)).result}}const Ye=new Xe;class Ze{async getReleases(){return await Ye.getReleases()}}const xe=new Ze;function he(i,e,t){const r=i.slice();return r[2]=e[t],r}function et(i){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function tt(i){let e,t,r=V(i[1]),l=[];for(let s=0;s<r.length;s+=1)l[s]=_e(he(i,r,s));const c=s=>p(l[s],1,1,()=>{l[s]=null});return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var a=w(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(m),this.h()},h(){_(e,"class","album-grid")},m(s,a){k(s,e,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null);t=!0},p(s,a){if(a&1){r=V(s[1]);let n;for(n=0;n<r.length;n+=1){const o=he(s,r,n);l[n]?(l[n].p(o,a),d(l[n],1)):(l[n]=_e(o),l[n].c(),d(l[n],1),l[n].m(e,null))}for(L(),n=r.length;n<l.length;n+=1)c(n);P()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)d(l[a]);t=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);t=!1},d(s){s&&m(e),K(l,s)}}}function _e(i){let e,t,r,l;return t=new re({props:{record:i[2],requestType:q.Release}}),{c(){e=v("a"),R(t.$$.fragment),r=D(),this.h()},l(c){e=$(c,"A",{href:!0,class:!0});var s=w(e);I(t.$$.fragment,s),r=N(s),s.forEach(m),this.h()},h(){_(e,"href",j+"/album?albumUrl=$"+i[2].youTubeMusicPlaylistUrl),_(e,"class","record")},m(c,s){k(c,e,s),A(t,e,null),E(e,r),l=!0},p:g,i(c){l||(d(t.$$.fragment,c),l=!0)},o(c){p(t.$$.fragment,c),l=!1},d(c){c&&m(e),M(t)}}}function rt(i){let e,t;return e=new G({props:{count:4,_class:"album-grid"}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function lt(i){let e,t,r={ctx:i,current:null,token:null,hasCatch:!1,pending:rt,then:tt,catch:et,value:1,blocks:[,,,]};return Ae(i[0](),r),{c(){e=S(),r.block.c()},l(l){e=S(),r.block.l(l)},m(l,c){k(l,e,c),r.block.m(l,r.anchor=c),r.mount=()=>e.parentNode,r.anchor=e,t=!0},p(l,[c]){i=l,Me(r,i,c)},i(l){t||(d(r.block),t=!0)},o(l){for(let c=0;c<3;c+=1){const s=r.blocks[c];p(s)}t=!1},d(l){l&&m(e),r.block.d(l),r.token=null,r=null}}}function nt(i){async function e(){return await xe.getReleases()}return[e]}class st extends Q{constructor(e){super(),B(this,e,nt,lt,U,{})}}function me(i){let e;return{c(){e=v("div"),this.h()},l(t){e=$(t,"DIV",{id:!0,style:!0}),w(e).forEach(m),this.h()},h(){_(e,"id","svelte-infinite-scroll"),O(e,"width","0")},m(t,r){k(t,e,r),i[11](e)},p:g,d(t){t&&m(e),i[11](null)}}}function it(i){let e,t=!i[1]&&!i[0]&&me(i);return{c(){t&&t.c(),e=S()},l(r){t&&t.l(r),e=S()},m(r,l){t&&t.m(r,l),k(r,e,l)},p(r,[l]){!r[1]&&!r[0]?t?t.p(r,l):(t=me(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:g,o:g,d(r){r&&m(e),t&&t.d(r)}}}function ct(i,e,t){let{threshold:r=0}=e,{horizontal:l=!1}=e,{elementScroll:c=null}=e,{hasMore:s=!0}=e,{reverse:a=!1}=e,{window:n=!1}=e;const o=ee();let u=!1,h,f,b,y;const F=T=>{if(!s)return;const W=T.target;J(W,a,l)<=r?(!u&&s&&(o("loadMore"),t(8,f=W.scrollHeight),t(9,b=W.scrollTop)),t(7,u=!0)):t(7,u=!1)},J=(T,W,X)=>{const z=T.documentElement?T.documentElement:T;return W?X?z.scrollLeft:z.scrollTop:X?z.scrollWidth-z.clientWidth-z.scrollLeft:z.scrollHeight-z.clientHeight-z.scrollTop};te(()=>{n?t(10,y=document):c?t(10,y=c):t(10,y=h.parentNode)}),Re(()=>{y&&(y.removeEventListener("scroll",F),y.removeEventListener("resize",F))});function C(T){Te[T?"unshift":"push"](()=>{h=T,t(2,h)})}return i.$$set=T=>{"threshold"in T&&t(3,r=T.threshold),"horizontal"in T&&t(4,l=T.horizontal),"elementScroll"in T&&t(0,c=T.elementScroll),"hasMore"in T&&t(5,s=T.hasMore),"reverse"in T&&t(6,a=T.reverse),"window"in T&&t(1,n=T.window)},i.$$.update=()=>{i.$$.dirty&1088&&y&&(a&&t(10,y.scrollTop=y.scrollHeight,y),y.addEventListener("scroll",F),y.addEventListener("resize",F)),i.$$.dirty&1984&&u&&a&&t(10,y.scrollTop=y.scrollHeight-f+b,y)},[c,n,h,r,l,s,a,u,f,b,y,C]}class Se extends Q{constructor(e){super(),B(this,e,ct,it,U,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function at(i){let e,t,r,l,c;return{c(){e=v("div"),t=Y("svg"),r=Y("circle"),l=Y("path"),this.h()},l(s){e=$(s,"DIV",{class:!0});var a=w(e);t=Z(a,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var n=w(t);r=Z(n,"circle",{style:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),w(r).forEach(m),l=Z(n,"path",{style:!0,fill:!0,d:!0}),w(l).forEach(m),n.forEach(m),a.forEach(m),this.h()},h(){O(r,"opacity","0.05"),_(r,"cx","12"),_(r,"cy","12"),_(r,"r","10"),_(r,"stroke","currentColor"),_(r,"stroke-width","4"),O(l,"opacity","1"),_(l,"fill","currentColor"),_(l,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),_(t,"xmlns","http://www.w3.org/2000/svg"),_(t,"fill","none"),_(t,"viewBox","0 0 24 24"),_(t,"class","h-5 w-5 animate-spin text-black dark:text-white"),_(e,"class",c=`${i[0]} flex justify-center`)},m(s,a){k(s,e,a),E(e,t),E(t,r),E(t,l)},p(s,[a]){a&1&&c!==(c=`${s[0]} flex justify-center`)&&_(e,"class",c)},i:g,o:g,d(s){s&&m(e)}}}function ot(i,e,t){let{stylingClass:r}=e;return i.$$set=l=>{"stylingClass"in l&&t(0,r=l.stylingClass)},[r]}class ut extends Q{constructor(e){super(),B(this,e,ot,at,U,{stylingClass:0})}}function de(i,e,t){const r=i.slice();return r[7]=e[t],r}function ft(i){let e,t,r,l,c,s=V(i[0]),a=[];for(let u=0;u<s.length;u+=1)a[u]=pe(de(i,s,u));const n=u=>p(a[u],1,1,()=>{a[u]=null});let o=i[1]&&ge();return l=new Se({props:{threshold:100,window:!0}}),l.$on("loadMore",i[3]),{c(){e=v("div");for(let u=0;u<a.length;u+=1)a[u].c();t=D(),o&&o.c(),r=D(),R(l.$$.fragment),this.h()},l(u){e=$(u,"DIV",{class:!0});var h=w(e);for(let f=0;f<a.length;f+=1)a[f].l(h);t=N(h),o&&o.l(h),h.forEach(m),r=N(u),I(l.$$.fragment,u),this.h()},h(){_(e,"class","album-grid")},m(u,h){k(u,e,h);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);E(e,t),o&&o.m(e,null),k(u,r,h),A(l,u,h),c=!0},p(u,h){if(h&1){s=V(u[0]);let f;for(f=0;f<s.length;f+=1){const b=de(u,s,f);a[f]?(a[f].p(b,h),d(a[f],1)):(a[f]=pe(b),a[f].c(),d(a[f],1),a[f].m(e,t))}for(L(),f=s.length;f<a.length;f+=1)n(f);P()}u[1]?o?h&2&&d(o,1):(o=ge(),o.c(),d(o,1),o.m(e,null)):o&&(L(),p(o,1,1,()=>{o=null}),P())},i(u){if(!c){for(let h=0;h<s.length;h+=1)d(a[h]);d(o),d(l.$$.fragment,u),c=!0}},o(u){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)p(a[h]);p(o),p(l.$$.fragment,u),c=!1},d(u){u&&(m(e),m(r)),K(a,u),o&&o.d(),M(l,u)}}}function ht(i){let e,t;return e=new G({props:{count:4,_class:"album-grid"}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function pe(i){let e,t,r,l;return t=new re({props:{record:i[7],requestType:q.Release}}),{c(){e=v("a"),R(t.$$.fragment),this.h()},l(c){e=$(c,"A",{href:!0,class:!0});var s=w(e);I(t.$$.fragment,s),s.forEach(m),this.h()},h(){_(e,"href",r=j+"/album?albumUrl=$"+i[7].youTubeMusicPlaylistUrl),_(e,"class","record")},m(c,s){k(c,e,s),A(t,e,null),l=!0},p(c,s){const a={};s&1&&(a.record=c[7]),t.$set(a),(!l||s&1&&r!==(r=j+"/album?albumUrl=$"+c[7].youTubeMusicPlaylistUrl))&&_(e,"href",r)},i(c){l||(d(t.$$.fragment,c),l=!0)},o(c){p(t.$$.fragment,c),l=!1},d(c){c&&m(e),M(t)}}}function ge(i){let e,t;return e=new ut({props:{stylingClass:"col-span-2 h-4"}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function _t(i){let e,t,r,l;const c=[ht,ft],s=[];function a(n,o){return n[2]?0:n[0].length?1:-1}return~(e=a(i))&&(t=s[e]=c[e](i)),{c(){t&&t.c(),r=S()},l(n){t&&t.l(n),r=S()},m(n,o){~e&&s[e].m(n,o),k(n,r,o),l=!0},p(n,[o]){let u=e;e=a(n),e===u?~e&&s[e].p(n,o):(t&&(L(),p(s[u],1,1,()=>{s[u]=null}),P()),~e?(t=s[e],t?t.p(n,o):(t=s[e]=c[e](n),t.c()),d(t,1),t.m(r.parentNode,r)):t=null)},i(n){l||(d(t),l=!0)},o(n){p(t),l=!1},d(n){n&&m(r),~e&&s[e].d(n)}}}function mt(i,e,t){let{query:r}=e;async function l(){return await ze.getAlbums(r)}async function c(){t(1,n=!0),t(5,s=await l()),t(1,n=!1)}let s=[],a=[],n=!1,o=!1;return te(async()=>{t(2,o=!0),t(0,a=await l()),t(2,o=!1)}),i.$$set=u=>{"query"in u&&t(4,r=u.query)},i.$$.update=()=>{i.$$.dirty&33&&t(0,a=[...a,...s])},[a,n,o,c,r,s]}class dt extends Q{constructor(e){super(),B(this,e,mt,_t,U,{query:4})}}class pt{async getTracks(e){return(await Ie(Qe,{params:{query:e}})).result}}const gt=new pt;class bt{async getTracks(e){return await gt.getTracks(e)}}const kt=new bt;function be(i,e,t){const r=i.slice();return r[10]=e[t],r}function yt(i){let e,t,r,l,c=V(i[0]),s=[];for(let n=0;n<c.length;n+=1)s[n]=ke(be(i,c,n));const a=n=>p(s[n],1,1,()=>{s[n]=null});return r=new Se({props:{threshold:100,window:!0}}),r.$on("loadMore",i[3]),{c(){e=v("div");for(let n=0;n<s.length;n+=1)s[n].c();t=D(),R(r.$$.fragment),this.h()},l(n){e=$(n,"DIV",{class:!0});var o=w(e);for(let u=0;u<s.length;u+=1)s[u].l(o);o.forEach(m),t=N(n),I(r.$$.fragment,n),this.h()},h(){_(e,"class","track-list")},m(n,o){k(n,e,o);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);k(n,t,o),A(r,n,o),l=!0},p(n,o){if(o&5){c=V(n[0]);let u;for(u=0;u<c.length;u+=1){const h=be(n,c,u);s[u]?(s[u].p(h,o),d(s[u],1)):(s[u]=ke(h),s[u].c(),d(s[u],1),s[u].m(e,null))}for(L(),u=c.length;u<s.length;u+=1)a(u);P()}},i(n){if(!l){for(let o=0;o<c.length;o+=1)d(s[o]);d(r.$$.fragment,n),l=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)p(s[o]);p(r.$$.fragment,n),l=!1},d(n){n&&(m(e),m(t)),K(s,n),M(r,n)}}}function vt(i){let e,t;return e=new G({props:{count:4,_class:"track-list"}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function ke(i){let e,t,r,l,c,s;t=new re({props:{record:i[10],requestType:q.Track}});function a(){return i[7](i[10])}return{c(){e=v("a"),R(t.$$.fragment),r=D(),this.h()},l(n){e=$(n,"A",{href:!0,class:!0});var o=w(e);I(t.$$.fragment,o),r=N(o),o.forEach(m),this.h()},h(){_(e,"href","/"),_(e,"class","record")},m(n,o){k(n,e,o),A(t,e,null),E(e,r),l=!0,c||(s=H(e,"click",we(a)),c=!0)},p(n,o){i=n;const u={};o&1&&(u.record=i[10]),t.$set(u)},i(n){l||(d(t.$$.fragment,n),l=!0)},o(n){p(t.$$.fragment,n),l=!1},d(n){n&&m(e),M(t),c=!1,s()}}}function $t(i){let e,t,r,l;const c=[vt,yt],s=[];function a(n,o){return n[1]?0:n[0].length?1:-1}return~(e=a(i))&&(t=s[e]=c[e](i)),{c(){t&&t.c(),r=S()},l(n){t&&t.l(n),r=S()},m(n,o){~e&&s[e].m(n,o),k(n,r,o),l=!0},p(n,[o]){let u=e;e=a(n),e===u?~e&&s[e].p(n,o):(t&&(L(),p(s[u],1,1,()=>{s[u]=null}),P()),~e?(t=s[e],t?t.p(n,o):(t=s[e]=c[e](n),t.c()),d(t,1),t.m(r.parentNode,r)):t=null)},i(n){l||(d(t),l=!0)},o(n){p(t),l=!1},d(n){n&&m(r),~e&&s[e].d(n)}}}function wt(i,e,t){let{query:r}=e,{environment:l}=e;async function c(f){await He.download(f,2),l.envokeHaptic("heavy"),l.close()}async function s(){return await kt.getTracks(r)}async function a(){t(6,n=await s())}let n=[],o=[],u=!1;te(async()=>{t(1,u=!0),t(0,o=await s()),t(1,u=!1)});const h=f=>c(f.youTubeMusicPlaylistUrl);return i.$$set=f=>{"query"in f&&t(4,r=f.query),"environment"in f&&t(5,l=f.environment)},i.$$.update=()=>{i.$$.dirty&65&&t(0,o=[...o,...n])},[o,u,c,a,r,l,n,h]}class Tt extends Q{constructor(e){super(),B(this,e,wt,$t,U,{query:4,environment:5})}}function qt(i){let e,t,r,l,c,s,a,n=i[0].title+"",o,u;return{c(){e=v("a"),t=v("img"),c=D(),s=v("div"),a=v("p"),o=Ee(n),this.h()},l(h){e=$(h,"A",{href:!0});var f=w(e);t=$(f,"IMG",{src:!0,alt:!0,class:!0}),c=N(f),s=$(f,"DIV",{class:!0});var b=w(s);a=$(b,"P",{class:!0});var y=w(a);o=Ce(y,n),y.forEach(m),b.forEach(m),f.forEach(m),this.h()},h(){le(t.src,r=i[0].imageUrl)||_(t,"src",r),_(t,"alt",l=i[0].title),_(t,"class","cover"),_(a,"class","font-semibold leading-tight"),_(s,"class","text-[12px]"),_(e,"href",u=j+"/artist?artistId="+i[0].youTubeMusicUrl+"&artistName="+i[0].title)},m(h,f){k(h,e,f),E(e,t),E(e,c),E(e,s),E(s,a),E(a,o)},p(h,[f]){f&1&&!le(t.src,r=h[0].imageUrl)&&_(t,"src",r),f&1&&l!==(l=h[0].title)&&_(t,"alt",l),f&1&&n!==(n=h[0].title+"")&&Pe(o,n),f&1&&u!==(u=j+"/artist?artistId="+h[0].youTubeMusicUrl+"&artistName="+h[0].title)&&_(e,"href",u)},i:g,o:g,d(h){h&&m(e)}}}function Et(i,e,t){let{artist:r}=e;return i.$$set=l=>{"artist"in l&&t(0,r=l.artist)},[r]}class Ct extends Q{constructor(e){super(),B(this,e,Et,qt,U,{artist:0})}}function ye(i,e,t){const r=i.slice();return r[3]=e[t],r}function Rt(i){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function It(i){let e,t,r=V(i[2]),l=[];for(let s=0;s<r.length;s+=1)l[s]=ve(ye(i,r,s));const c=s=>p(l[s],1,1,()=>{l[s]=null});return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var a=w(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(m),this.h()},h(){_(e,"class","artist-list")},m(s,a){k(s,e,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null);t=!0},p(s,a){if(a&1){r=V(s[2]);let n;for(n=0;n<r.length;n+=1){const o=ye(s,r,n);l[n]?(l[n].p(o,a),d(l[n],1)):(l[n]=ve(o),l[n].c(),d(l[n],1),l[n].m(e,null))}for(L(),n=r.length;n<l.length;n+=1)c(n);P()}},i(s){if(!t){for(let a=0;a<r.length;a+=1)d(l[a]);t=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);t=!1},d(s){s&&m(e),K(l,s)}}}function ve(i){let e,t;return e=new Ct({props:{artist:i[3]}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function At(i){let e,t;return e=new G({props:{count:4,_class:"artist-list"}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Mt(i){let e,t,r={ctx:i,current:null,token:null,hasCatch:!1,pending:At,then:It,catch:Rt,value:2,blocks:[,,,]};return Ae(i[0](),r),{c(){e=S(),r.block.c()},l(l){e=S(),r.block.l(l)},m(l,c){k(l,e,c),r.block.m(l,r.anchor=c),r.mount=()=>e.parentNode,r.anchor=e,t=!0},p(l,[c]){i=l,Me(r,i,c)},i(l){t||(d(r.block),t=!0)},o(l){for(let c=0;c<3;c+=1){const s=r.blocks[c];p(s)}t=!1},d(l){l&&m(e),r.block.d(l),r.token=null,r=null}}}function St(i,e,t){let{query:r}=e;async function l(){return await Be.getArtists(r)}return i.$$set=c=>{"query"in c&&t(1,r=c.query)},[l,r]}class Dt extends Q{constructor(e){super(),B(this,e,St,Mt,U,{query:1})}}function Nt(i){let e,t;return e=new st({}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p:g,i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Lt(i){let e,t,r,l;const c=[Vt,Ut,Pt],s=[];function a(n,o){return n[3].requestType===q.Album?0:n[3].requestType===q.Track?1:n[3].requestType===q.Artist?2:-1}return~(e=a(i))&&(t=s[e]=c[e](i)),{c(){t&&t.c(),r=S()},l(n){t&&t.l(n),r=S()},m(n,o){~e&&s[e].m(n,o),k(n,r,o),l=!0},p(n,o){let u=e;e=a(n),e===u?~e&&s[e].p(n,o):(t&&(L(),p(s[u],1,1,()=>{s[u]=null}),P()),~e?(t=s[e],t?t.p(n,o):(t=s[e]=c[e](n),t.c()),d(t,1),t.m(r.parentNode,r)):t=null)},i(n){l||(d(t),l=!0)},o(n){p(t),l=!1},d(n){n&&m(r),~e&&s[e].d(n)}}}function Pt(i){let e,t;return e=new Dt({props:{query:i[3].searchQuery}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p(r,l){const c={};l&8&&(c.query=r[3].searchQuery),e.$set(c)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Ut(i){let e,t;return e=new Tt({props:{query:i[3].searchQuery,environment:i[0].environmentStore}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p(r,l){const c={};l&8&&(c.query=r[3].searchQuery),l&1&&(c.environment=r[0].environmentStore),e.$set(c)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function Vt(i){let e,t;return e=new dt({props:{query:i[3].searchQuery}}),{c(){R(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,l){A(e,r,l),t=!0},p(r,l){const c={};l&8&&(c.query=r[3].searchQuery),e.$set(c)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function $e(i){let e,t,r,l;const c=[Lt,Nt],s=[];function a(n,o){return n[3].searchQuery!==""?0:n[3].requestType===q.Release?1:-1}return~(t=a(i))&&(r=s[t]=c[t](i)),{c(){e=v("div"),r&&r.c(),this.h()},l(n){e=$(n,"DIV",{class:!0,style:!0});var o=w(e);r&&r.l(o),o.forEach(m),this.h()},h(){_(e,"class","content"),O(e,"margin-top",i[4]+"px")},m(n,o){k(n,e,o),~t&&s[t].m(e,null),l=!0},p(n,o){let u=t;t=a(n),t===u?~t&&s[t].p(n,o):(r&&(L(),p(s[u],1,1,()=>{s[u]=null}),P()),~t?(r=s[t],r?r.p(n,o):(r=s[t]=c[t](n),r.c()),d(r,1),r.m(e,null)):r=null),(!l||o&16)&&O(e,"margin-top",n[4]+"px")},i(n){l||(d(r),l=!0)},o(n){p(r),l=!1},d(n){n&&m(e),~t&&s[t].d()}}}function Qt(i){let e,t,r,l,c,s,a,n=i[3],o,u;r=new je({}),r.$on("search",i[8]),r.$on("inputQueryChange",i[9]),r.$on("inputFocuseChange",i[10]),c=new Je({props:{requestType:i[2]}}),c.$on("changeRequestType",i[11]);let h=$e(i);return{c(){e=v("div"),t=v("div"),R(r.$$.fragment),l=D(),R(c.$$.fragment),a=D(),h.c(),o=S(),this.h()},l(f){e=$(f,"DIV",{class:!0});var b=w(e);t=$(b,"DIV",{class:!0});var y=w(t);I(r.$$.fragment,y),y.forEach(m),l=N(b),I(c.$$.fragment,b),b.forEach(m),a=N(f),h.l(f),o=S(),this.h()},h(){_(t,"class","flex"),_(e,"class","top-bar"),qe(()=>i[12].call(e))},m(f,b){k(f,e,b),E(e,t),A(r,t,null),E(e,l),A(c,e,null),s=Ue(e,i[12].bind(e)),k(f,a,b),h.m(f,b),k(f,o,b),u=!0},p(f,[b]){const y={};b&4&&(y.requestType=f[2]),c.$set(y),b&8&&U(n,n=f[3])?(L(),p(h,1,1,g),P(),h=$e(f),h.c(),d(h,1),h.m(o.parentNode,o)):h.p(f,b)},i(f){u||(d(r.$$.fragment,f),d(c.$$.fragment,f),d(h),u=!0)},o(f){p(r.$$.fragment,f),p(c.$$.fragment,f),p(h),u=!1},d(f){f&&(m(e),m(a),m(o)),M(r),M(c),s(),h.d(f)}}}function Bt(i,e,t){let{data:r}=e;function l(C){t(2,u=C)}function c(C){C?u===q.Release&&l(q.Album):o===void 0&&q.Release}function s(C){n=C,n?u===q.Release&&t(2,u=q.Album):(t(1,o=""),t(2,u=q.Release))}let a,n="",o="",u=q.Release,h={searchQuery:o,requestType:q.Release};Re(()=>se.clearTokens(ie));const f=C=>t(1,o=C.detail.value),b=C=>s(C.detail.value),y=C=>c(C.detail.value),F=C=>l(C.detail.value);function J(){a=this.clientHeight,t(4,a)}return i.$$set=C=>{"data"in C&&t(0,r=C.data)},i.$$.update=()=>{i.$$.dirty&14&&(se.clearTokens(ie),t(3,h.searchQuery=o,h),t(3,h.requestType=u,h),t(3,h),t(1,o),t(2,u))},[r,o,u,h,a,l,c,s,f,b,y,F,J]}class Gt extends Q{constructor(e){super(),B(this,e,Bt,Qt,U,{data:0})}}export{Gt as component};
