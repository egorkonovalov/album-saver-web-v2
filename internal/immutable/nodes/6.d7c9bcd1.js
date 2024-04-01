import{e as A}from"../chunks/index.93323930.js";import{b as I,a as R,R as L}from"../chunks/artists.controller.ddb6e061.js";import{s as M,e as v,i as $,d,v as u,f as p,g as k,h as g,j as b,J as N,a as O,c as U,A as y,D as z,E as B}from"../chunks/scheduler.fb79c3ec.js";import{h as w,u as D,e as P,P as H}from"../chunks/Placeholder.4405300c.js";import{S as J,i as F,a as h,t as _,g as G,c as K,b as C,d as E,m as j,e as q}from"../chunks/index.bb4217d0.js";import{d as Q}from"../chunks/downloader.controller.3605e98c.js";const V=async({url:l})=>{const r=l.searchParams.get("artistId");if(r)return{streamed:{tracks:I.getTracks(r)}};throw A(404,"Not found")},le=Object.freeze(Object.defineProperty({__proto__:null,load:V},Symbol.toStringTag,{value:"Module"}));function S(l,r,o){const a=l.slice();return a[4]=r[o],a}function W(l){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function X(l){let r,o,a=P(l[3]),e=[];for(let t=0;t<a.length;t+=1)e[t]=T(S(l,a,t));const s=t=>_(e[t],1,1,()=>{e[t]=null});return{c(){r=p("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){r=k(t,"UL",{class:!0});var c=g(r);for(let n=0;n<e.length;n+=1)e[n].l(c);c.forEach(d),this.h()},h(){b(r,"class","artist track-list")},m(t,c){$(t,r,c);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(r,null);o=!0},p(t,c){if(c&3){a=P(t[3]);let n;for(n=0;n<a.length;n+=1){const i=S(t,a,n);e[n]?(e[n].p(i,c),h(e[n],1)):(e[n]=T(i),e[n].c(),h(e[n],1),e[n].m(r,null))}for(G(),n=a.length;n<e.length;n+=1)s(n);K()}},i(t){if(!o){for(let c=0;c<a.length;c+=1)h(e[c]);o=!0}},o(t){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)_(e[c]);o=!1},d(t){t&&d(r),N(e,t)}}}function T(l){let r,o,a,e,s,t,c;a=new R({props:{requestType:L.ArtistTracks,record:l[4]}});function n(){return l[2](l[4])}return{c(){r=p("li"),o=p("a"),C(a.$$.fragment),e=O(),this.h()},l(i){r=k(i,"LI",{class:!0});var f=g(r);o=k(f,"A",{href:!0});var m=g(o);E(a.$$.fragment,m),m.forEach(d),e=U(f),f.forEach(d),this.h()},h(){b(o,"href","/"),b(r,"class","record")},m(i,f){$(i,r,f),y(r,o),j(a,o,null),y(r,e),s=!0,t||(c=z(o,"click",B(n)),t=!0)},p(i,f){l=i;const m={};f&1&&(m.record=l[4]),a.$set(m)},i(i){s||(h(a.$$.fragment,i),s=!0)},o(i){_(a.$$.fragment,i),s=!1},d(i){i&&d(r),q(a),t=!1,c()}}}function Y(l){let r,o;return r=new H({props:{count:10,_class:"mt-0 track-list artist"}}),{c(){C(r.$$.fragment)},l(a){E(r.$$.fragment,a)},m(a,e){j(r,a,e),o=!0},p:u,i(a){o||(h(r.$$.fragment,a),o=!0)},o(a){_(r.$$.fragment,a),o=!1},d(a){q(r,a)}}}function Z(l){let r,o,a,e={ctx:l,current:null,token:null,hasCatch:!1,pending:Y,then:X,catch:W,value:3,blocks:[,,,]};return w(o=l[0].streamed.tracks,e),{c(){r=v(),e.block.c()},l(s){r=v(),e.block.l(s)},m(s,t){$(s,r,t),e.block.m(s,e.anchor=t),e.mount=()=>r.parentNode,e.anchor=r,a=!0},p(s,[t]){l=s,e.ctx=l,t&1&&o!==(o=l[0].streamed.tracks)&&w(o,e)||D(e,l,t)},i(s){a||(h(e.block),a=!0)},o(s){for(let t=0;t<3;t+=1){const c=e.blocks[t];_(c)}a=!1},d(s){s&&d(r),e.block.d(s),e.token=null,e=null}}}function x(l,r,o){async function a(t){await Q.download(t,2),e.environmentStore.envokeHaptic("heavy"),e.environmentStore.close()}let{data:e}=r;const s=t=>a(t.youTubeMusicPlaylistUrl);return l.$$set=t=>{"data"in t&&o(0,e=t.data)},[e,a,s]}class se extends J{constructor(r){super(),F(this,r,x,Z,M,{data:0})}}export{se as component,le as universal};