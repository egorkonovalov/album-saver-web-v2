import{S as P,T as E,U as i,V as x,s as U,f as T,g as v,h as L,d as m,j as _,i as S,v as f,J as O,u as j}from"./scheduler.fb79c3ec.js";import{g as q,t as y,c as D,a as M,S as N,i as B}from"./index.bb4217d0.js";function F(n,e){const t=e.token={};function s(c,l,r,o){if(e.token!==t)return;e.resolved=o;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=o);const u=c&&(e.current=c)(a);let g=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==l&&h&&(q(),y(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),D())}):e.block.d(1),u.c(),M(u,1),u.m(e.mount(),e.anchor),g=!0),e.block=u,e.blocks&&(e.blocks[l]=u),g&&x()}if(P(n)){const c=E();if(n.then(l=>{i(c),s(e.then,1,e.value,l),i(null)},l=>{if(i(c),s(e.catch,2,e.error,l),i(null),!e.hasCatch)throw l}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,n),!0;e.resolved=n}}function Q(n,e,t){const s=e.slice(),{resolved:c}=n;n.current===n.then&&(s[n.value]=c),n.current===n.catch&&(s[n.error]=c),n.block.p(s,t)}function p(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const X="/albums",Y="/tracks",Z="/releases",$="/download",ee="/download-set",te="/album/tracks",se="/artists",ne="/artist/tracks",ce="/artists/albums",le="/artists/image";class k{static get(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}static set(e,t,s=null){s={path:"/"};let c=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let l in s){c+="; "+l;let r=s[l];r!==!0&&(c+="="+r)}document.cookie=c}static deleteCookie(e,t=null){t={path:"/"},document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}}class K{set tokens(e){for(const[t,s]of Object.entries(e))k.set(t,s)}getTokens(e){let t={};for(let s of e){const c=k.get(s);c&&c!=="undefined"&&c!=="null"&&(t[s]=c)}return Object.keys(t).length===0&&t.constructor===Object?null:t}clearTokens(e){for(let t of e)k.deleteCookie(t)}}const w=new K,I=["token","continuationToken"],V="https://b5b5-2a00-6d40-40-4ceb-00-1.ngrok-free.app/",J=(n,e)=>{const t=w.getTokens(I);let s={...e==null?void 0:e.params};return t&&(s={...s,...t,continuation:"true"}),n+"?"+new URLSearchParams(s)},C=(n,e,t)=>{const s=J(n,t);return new Request(V+s,{method:e,body:JSON.stringify(t==null?void 0:t.body),headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":""}})},R=async n=>{const e=await fetch(n);if(e){if(e.status===204)return null;if(e.headers.get("content-length")==="0")return{};const t=await e.json();if(e.ok){for(let s of I)w.tokens={[s]:t[s]};return t}else throw new Error(t.reason)}else throw new Error("Something went wrong")},oe=async(n,e)=>{const t=C(n,"GET",e);return await R(t)},re=async(n,e)=>{const t=C(n,"POST",e);return await R(t)};function A(n,e,t){const s=n.slice();return s[2]=e[t],s}function b(n){let e,t='<div class="image"></div> <div class="text-container"><p class="text-line text-line-md"></p> <p class="text-line text-line-sm"></p></div> ';return{c(){e=T("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,["data-svelte-h"]:!0}),j(e)!=="svelte-zvdlwb"&&(e.innerHTML=t),this.h()},h(){_(e,"class","entry")},m(s,c){S(s,e,c)},p:f,d(s){s&&m(e)}}}function G(n){let e,t,s=p(Array(n[1])),c=[];for(let l=0;l<s.length;l+=1)c[l]=b(A(n,s,l));return{c(){e=T("div");for(let l=0;l<c.length;l+=1)c[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var r=L(e);for(let o=0;o<c.length;o+=1)c[o].l(r);r.forEach(m),this.h()},h(){_(e,"class",t=`${n[0]} placeholder`)},m(l,r){S(l,e,r);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(e,null)},p(l,[r]){if(r&2){s=p(Array(l[1]));let o;for(o=0;o<s.length;o+=1){const a=A(l,s,o);c[o]?c[o].p(a,r):(c[o]=b(),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=s.length}r&1&&t!==(t=`${l[0]} placeholder`)&&_(e,"class",t)},i:f,o:f,d(l){l&&m(e),O(c,l)}}}function H(n,e,t){let{_class:s=""}=e,{count:c}=e;return n.$$set=l=>{"_class"in l&&t(0,s=l._class),"count"in l&&t(1,c=l.count)},[s,c]}class ae extends N{constructor(e){super(),B(this,e,H,G,U,{_class:0,count:1})}}export{Z as A,ae as P,I as T,Y as a,X as b,te as c,$ as d,p as e,ee as f,oe as g,F as h,se as i,ne as j,ce as k,le as l,re as p,w as t,Q as u};
