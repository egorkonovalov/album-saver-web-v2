import{e as K}from"../chunks/index.93323930.js";import{a as Q}from"../chunks/albums.controller.a6dd6fa6.js";import{s as q,f as p,a as S,g as b,h as w,d as f,c as P,j as d,i as v,v as m,A as g,o as W,L as X,l as U,m as A,O as B,n as C,J as Y,D as Z}from"../chunks/scheduler.fb79c3ec.js";import{h as y,u as I,e as N,P as x}from"../chunks/Placeholder.a525d50d.js";import{S as G,i as V,a as T,t as E,b as z,d as J,m as R,e as F}from"../chunks/index.bb4217d0.js";import{b as ee}from"../chunks/paths.8a2d5a44.js";import{d as O}from"../chunks/downloader.controller.43f9652b.js";function te(r,e){let a=r.searchParams.get(e);if(a)return a;throw K(500,`The value for the parameter "${e}" was not provided.`)}const le=async({url:r,parent:e})=>{const a=te(r,"albumUrl"),{environmentStore:t}=await e();return{environmentStore:t,albumUrl:a,streamed:{album:Q.getAlbum(a)}}},ge=Object.freeze(Object.defineProperty({__proto__:null,load:le},Symbol.toStringTag,{value:"Module"}));function ne(r){let e,a,t,n,s;return{c(){e=p("span"),a=S(),t=p("span"),n=S(),s=p("span"),this.h()},l(l){e=b(l,"SPAN",{class:!0}),w(e).forEach(f),a=P(l),t=b(l,"SPAN",{class:!0}),w(t).forEach(f),n=P(l),s=b(l,"SPAN",{class:!0}),w(s).forEach(f),this.h()},h(){d(e,"class","artwork w-52 h-60 bg-stone-200 animate-pulse"),d(t,"class","h-5 w-20 rounded-md self-center bg-stone-200 animate-pulse my-3"),d(s,"class","h-3 w-32 rounded-md self-center bg-stone-200 animate-pulse")},m(l,o){v(l,e,o),v(l,a,o),v(l,t,o),v(l,n,o),v(l,s,o)},p:m,i:m,o:m,d(l){l&&(f(e),f(a),f(t),f(n),f(s))}}}class ae extends G{constructor(e){super(),V(this,e,null,ne,q,{})}}function j(r,e,a){const t=r.slice();return t[6]=e[a],t}function re(r){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function oe(r){let e,a,t,n,s,l=r[5].albumTitle+"",o,c,u,k=r[5].artistName+"",$;return{c(){e=p("img"),t=S(),n=p("div"),s=p("h3"),o=U(l),c=S(),u=p("p"),$=U(k),this.h()},l(i){e=b(i,"IMG",{class:!0,src:!0,alt:!0}),t=P(i),n=b(i,"DIV",{class:!0});var h=w(n);s=b(h,"H3",{class:!0});var _=w(s);o=A(_,l),_.forEach(f),c=P(h),u=b(h,"P",{});var M=w(u);$=A(M,k),M.forEach(f),h.forEach(f),this.h()},h(){d(e,"class","artwork"),B(e.src,a=r[5].albumImage)||d(e,"src",a),d(e,"alt","cover"),d(s,"class","title"),d(n,"class","headings")},m(i,h){v(i,e,h),v(i,t,h),v(i,n,h),g(n,s),g(s,o),g(n,c),g(n,u),g(u,$)},p(i,h){h&1&&!B(e.src,a=i[5].albumImage)&&d(e,"src",a),h&1&&l!==(l=i[5].albumTitle+"")&&C(o,l),h&1&&k!==(k=i[5].artistName+"")&&C($,k)},i:m,o:m,d(i){i&&(f(e),f(t),f(n))}}}function se(r){let e,a;return e=new ae({}),{c(){z(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){R(e,t,n),a=!0},p:m,i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function ce(r){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function ie(r){let e,a=N(r[5].result),t=[];for(let n=0;n<a.length;n+=1)t[n]=L(j(r,a,n));return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"UL",{class:!0});var s=w(e);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(f),this.h()},h(){d(e,"class","track-list")},m(n,s){v(n,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,s){if(s&7){a=N(n[5].result);let l;for(l=0;l<a.length;l+=1){const o=j(n,a,l);t[l]?t[l].p(o,s):(t[l]=L(o),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},i:m,o:m,d(n){n&&f(e),Y(t,n)}}}function H(r){let e,a;return{c(){e=p("img"),this.h()},l(t){e=b(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){B(e.src,a=ee+"/check-circle.svg")||d(e,"src",a),d(e,"alt","check"),d(e,"class","h-5 w-5")},m(t,n){v(t,e,n)},p:m,d(t){t&&f(e)}}}function L(r){let e,a,t,n=r[6].title+"",s,l,o=r[1].includes(r[6].youTubeMusicPlaylistUrl),c,u,k;function $(){return r[3](r[6])}let i=o&&H();return{c(){e=p("li"),a=p("button"),t=p("p"),s=U(n),l=S(),i&&i.c(),c=S(),this.h()},l(h){e=b(h,"LI",{});var _=w(e);a=b(_,"BUTTON",{class:!0});var M=w(a);t=b(M,"P",{});var D=w(t);s=A(D,n),D.forEach(f),M.forEach(f),l=P(_),i&&i.l(_),c=P(_),_.forEach(f),this.h()},h(){d(a,"class","track")},m(h,_){v(h,e,_),g(e,a),g(a,t),g(t,s),g(e,l),i&&i.m(e,null),g(e,c),u||(k=Z(a,"click",$),u=!0)},p(h,_){r=h,_&1&&n!==(n=r[6].title+"")&&C(s,n),_&3&&(o=r[1].includes(r[6].youTubeMusicPlaylistUrl)),o?i?i.p(r,_):(i=H(),i.c(),i.m(e,c)):i&&(i.d(1),i=null)},d(h){h&&f(e),i&&i.d(),u=!1,k()}}}function ue(r){let e,a;return e=new x({props:{count:8,_class:"album-entry track-list mt-0"}}),{c(){z(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){R(e,t,n),a=!0},p:m,i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function me(r){let e,a,t,n,s,l={ctx:r,current:null,token:null,hasCatch:!1,pending:se,then:oe,catch:re,value:5,blocks:[,,,]};y(a=r[0].streamed.album,l);let o={ctx:r,current:null,token:null,hasCatch:!1,pending:ue,then:ie,catch:ce,value:5,blocks:[,,,]};return y(n=r[0].streamed.album,o),{c(){e=p("div"),l.block.c(),t=S(),o.block.c(),this.h()},l(c){e=b(c,"DIV",{class:!0});var u=w(e);l.block.l(u),t=P(u),o.block.l(u),u.forEach(f),this.h()},h(){d(e,"class","album-entry")},m(c,u){v(c,e,u),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=t,g(e,t),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,s=!0},p(c,[u]){r=c,l.ctx=r,u&1&&a!==(a=r[0].streamed.album)&&y(a,l)||I(l,r,u),o.ctx=r,u&1&&n!==(n=r[0].streamed.album)&&y(n,o)||I(o,r,u)},i(c){s||(T(l.block),T(o.block),s=!0)},o(c){for(let u=0;u<3;u+=1){const k=l.blocks[u];E(k)}for(let u=0;u<3;u+=1){const k=o.blocks[u];E(k)}s=!1},d(c){c&&f(e),l.block.d(),l.token=null,l=null,o.block.d(),o.token=null,o=null}}}function fe(r,e,a){let{data:t}=e,n=[];function s(c){n.includes(c)?(n.splice(n.indexOf(c),1),a(1,n)):a(1,n=[...n,c]),t.environmentStore.envokeHaptic("light")}async function l(c){n.length>0?await O.downloadSet(n):c&&await O.download(c,1),t.environmentStore.envokeHaptic("heavy"),t.environmentStore.close()}W(async()=>{t.environmentStore.showMainButton("Download Album"),t.environmentStore.onMainButtonClick(()=>l(t.albumUrl))}),X(()=>{t.environmentStore.hideMainButton()});const o=c=>s(c.youTubeMusicPlaylistUrl);return r.$$set=c=>{"data"in c&&a(0,t=c.data)},r.$$.update=()=>{r.$$.dirty&3&&(n.length>0?(t.environmentStore.setMainButtonText(`Download Tracks (${n.length})`),t.environmentStore.onMainButtonClick(()=>l())):(t.environmentStore.setMainButtonText("Download Album"),t.environmentStore.onMainButtonClick(()=>l(t.albumUrl))))},[t,n,s,o]}class we extends G{constructor(e){super(),V(this,e,fe,me,q,{data:0})}}export{we as component,ge as universal};