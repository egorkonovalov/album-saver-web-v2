import{e as j}from"../chunks/index.93323930.js";import{b as q,a as E,R as I}from"../chunks/artists.controller.7e735646.js";import{s as M,e as k,i as g,d as f,v as i,f as d,g as p,h as b,j as _,J as R,a as L,c as N,A as $}from"../chunks/scheduler.fb79c3ec.js";import{h as y,u as O,e as v,P as z}from"../chunks/Placeholder.a525d50d.js";import{S as B,i as J,a as m,t as h,g as D,c as F,b as U,d as A,m as C,e as S}from"../chunks/index.bb4217d0.js";import{b as P}from"../chunks/paths.8a2d5a44.js";const G=async({url:s})=>{const t=s.searchParams.get("artistId");if(t)return{streamed:{albums:q.getAlbums(t)}};throw j(404,"Not found")},re=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function T(s,t,n){const a=s.slice();return a[2]=t[n],a}function H(s){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function K(s){let t,n,a=v(s[1]),e=[];for(let r=0;r<a.length;r+=1)e[r]=w(T(s,a,r));const c=r=>h(e[r],1,1,()=>{e[r]=null});return{c(){t=d("ul");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=p(r,"UL",{class:!0});var o=b(t);for(let l=0;l<e.length;l+=1)e[l].l(o);o.forEach(f),this.h()},h(){_(t,"class","album-grid")},m(r,o){g(r,t,o);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null);n=!0},p(r,o){if(o&1){a=v(r[1]);let l;for(l=0;l<a.length;l+=1){const u=T(r,a,l);e[l]?(e[l].p(u,o),m(e[l],1)):(e[l]=w(u),e[l].c(),m(e[l],1),e[l].m(t,null))}for(D(),l=a.length;l<e.length;l+=1)c(l);F()}},i(r){if(!n){for(let o=0;o<a.length;o+=1)m(e[o]);n=!0}},o(r){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)h(e[o]);n=!1},d(r){r&&f(t),R(e,r)}}}function w(s){let t,n,a,e,c,r;return a=new E({props:{requestType:I.AlbumTracks,record:s[2]}}),{c(){t=d("li"),n=d("a"),U(a.$$.fragment),c=L(),this.h()},l(o){t=p(o,"LI",{});var l=b(t);n=p(l,"A",{href:!0,class:!0});var u=b(n);A(a.$$.fragment,u),u.forEach(f),c=N(l),l.forEach(f),this.h()},h(){_(n,"href",e=P+"/album?albumUrl=$"+s[2].youTubeMusicPlaylistUrl),_(n,"class","record")},m(o,l){g(o,t,l),$(t,n),C(a,n,null),$(t,c),r=!0},p(o,l){const u={};l&1&&(u.record=o[2]),a.$set(u),(!r||l&1&&e!==(e=P+"/album?albumUrl=$"+o[2].youTubeMusicPlaylistUrl))&&_(n,"href",e)},i(o){r||(m(a.$$.fragment,o),r=!0)},o(o){h(a.$$.fragment,o),r=!1},d(o){o&&f(t),S(a)}}}function Q(s){let t,n;return t=new z({props:{count:10,_class:"mt-0 album-grid"}}),{c(){U(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,e){C(t,a,e),n=!0},p:i,i(a){n||(m(t.$$.fragment,a),n=!0)},o(a){h(t.$$.fragment,a),n=!1},d(a){S(t,a)}}}function V(s){let t,n,a,e={ctx:s,current:null,token:null,hasCatch:!1,pending:Q,then:K,catch:H,value:1,blocks:[,,,]};return y(n=s[0].streamed.albums,e),{c(){t=k(),e.block.c()},l(c){t=k(),e.block.l(c)},m(c,r){g(c,t,r),e.block.m(c,e.anchor=r),e.mount=()=>t.parentNode,e.anchor=t,a=!0},p(c,[r]){s=c,e.ctx=s,r&1&&n!==(n=s[0].streamed.albums)&&y(n,e)||O(e,s,r)},i(c){a||(m(e.block),a=!0)},o(c){for(let r=0;r<3;r+=1){const o=e.blocks[r];h(o)}a=!1},d(c){c&&f(t),e.block.d(c),e.token=null,e=null}}}function W(s,t,n){let{data:a}=t;return s.$$set=e=>{"data"in e&&n(0,a=e.data)},[a]}class ae extends B{constructor(t){super(),J(this,t,W,V,M,{data:0})}}export{ae as component,re as universal};