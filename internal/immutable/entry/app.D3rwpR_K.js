const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B1lgd7YH.js","../chunks/platformenvironment.service.xGjJADBI.js","../chunks/disclose-version.CwmAI5Sj.js","../chunks/runtime.BcVk7UNP.js","../assets/0.C0zJlrBX.css","../nodes/1.DzvTzYIZ.js","../chunks/legacy.75qm9smu.js","../chunks/store.Dlcqcj33.js","../chunks/lifecycle.BIetebKu.js","../chunks/entry.C8ZGARzC.js","../chunks/index.CosPk6_3.js","../chunks/paths.XWCyYyRa.js","../chunks/control.CYgJF_JY.js","../nodes/2.BtL7YnHC.js","../chunks/index-client.B0zAmEIW.js","../chunks/Placeholder.DA5kaB8F.js","../chunks/this.Q-mQjf83.js","../chunks/artists.controller.Bg8LgLle.js","../chunks/albums.controller.Bjd7kaC9.js","../chunks/downloader.controller.tAUYAqJl.js","../nodes/3.DKE9ofJK.js","../chunks/index.CzR0xuCU.js","../nodes/4.CuCHzQ0u.js","../nodes/5.DSsyif42.js","../nodes/6.CpJjQ9kc.js"])))=>i.map(i=>d[i]);
var q=a=>{throw TypeError(a)};var F=(a,t,r)=>t.has(a)||q("Cannot "+r);var l=(a,t,r)=>(F(a,t,"read from private field"),r?r.call(a):t.get(a)),O=(a,t,r)=>t.has(a)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,r),T=(a,t,r,n)=>(F(a,t,"write to private field"),n?n.call(a,r):t.set(a,r),r);import{C as U,K as Y,z as H,E as J,A as Q,D as X,_ as Z,g as v,aa as M,y as x,ah as $,ai as tt,ag as et,p as rt,a as st,b as at,aj as nt,k as w,l as ot,x as C,v as it,m as ct,t as lt,o as ut,i as S}from"../chunks/runtime.BcVk7UNP.js";import{h as mt,m as dt,u as ft,a as _t}from"../chunks/store.Dlcqcj33.js";import{c as D,a as R,t as G,e as ht}from"../chunks/disclose-version.CwmAI5Sj.js";import{b as I,o as vt,p as gt,i as V}from"../chunks/index-client.B0zAmEIW.js";import{b as p}from"../chunks/this.Q-mQjf83.js";function j(a,t,r){U&&Y();var n=a,o,c;H(()=>{o!==(o=t())&&(c&&(Z(c),c=null),o&&(c=Q(()=>r(n,o))))},J),U&&(n=X)}function yt(a){return class extends Et{constructor(t){super({component:a,...t})}}}var g,m;class Et{constructor(t){O(this,g);O(this,m);var c;var r=new Map,n=(s,e)=>{var d=et(e);return r.set(s,d),d};const o=new Proxy({...t.props||{},$$events:{}},{get(s,e){return v(r.get(e)??n(e,Reflect.get(s,e)))},has(s,e){return e===M?!0:(v(r.get(e)??n(e,Reflect.get(s,e))),Reflect.has(s,e))},set(s,e,d){return x(r.get(e)??n(e,d),d),Reflect.set(s,e,d)}});T(this,m,(t.hydrate?mt:dt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&$(),T(this,g,o.$$events);for(const s of Object.keys(l(this,m)))s==="$set"||s==="$destroy"||s==="$on"||tt(this,s,{get(){return l(this,m)[s]},set(e){l(this,m)[s]=e},enumerable:!0});l(this,m).$set=s=>{Object.assign(o,s)},l(this,m).$destroy=()=>{ft(l(this,m))}}$set(t){l(this,m).$set(t)}$on(t,r){l(this,g)[t]=l(this,g)[t]||[];const n=(...o)=>r.call(this,...o);return l(this,g)[t].push(n),()=>{l(this,g)[t]=l(this,g)[t].filter(o=>o!==n)}}$destroy(){l(this,m).$destroy()}}g=new WeakMap,m=new WeakMap;const bt="modulepreload",Pt=function(a,t){return new URL(a,t).href},z={},b=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=Pt(u,n),u in z)return;z[u]=!0;const y=u.endsWith(".css"),A=y?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===u&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${A}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":bt,y||(i.as="script"),i.crossOrigin="",i.href=u,d&&i.setAttribute("nonce",d),document.head.appendChild(i),y)return new Promise((f,h)=>{i.addEventListener("load",f),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return o.then(s=>{for(const e of s||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Dt={};var Rt=G('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),kt=G("<!> <!>",1);function wt(a,t){rt(t,!0);let r=I(t,"components",23,()=>[]),n=I(t,"data_0",3,null),o=I(t,"data_1",3,null);st(()=>t.stores.page.set(t.page)),at(()=>{t.stores,t.page,t.constructors,r(),t.form,n(),o(),t.stores.page.notify()});let c=C(!1),s=C(!1),e=C(null);vt(()=>{const E=t.stores.page.subscribe(()=>{v(c)&&(x(s,!0),nt().then(()=>{x(e,gt(document.title||"untitled page"))}))});return x(c,!0),E});const d=S(()=>t.constructors[1]);var u=kt(),y=w(u);V(y,()=>t.constructors[1],E=>{var i=D();const f=S(()=>t.constructors[0]);var h=w(i);j(h,()=>v(f),(P,L)=>{p(L(P,{get data(){return n()},get form(){return t.form},children:(_,xt)=>{var B=D(),K=w(B);j(K,()=>v(d),(N,W)=>{p(W(N,{get data(){return o()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),R(_,B)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),R(E,i)},E=>{var i=D();const f=S(()=>t.constructors[0]);var h=w(i);j(h,()=>v(f),(P,L)=>{p(L(P,{get data(){return n()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),R(E,i)});var A=it(y,2);V(A,()=>v(c),E=>{var i=Rt(),f=ct(i);V(f,()=>v(s),h=>{var P=ht();lt(()=>_t(P,v(e))),R(h,P)}),ut(i),R(E,i)}),R(a,u),ot()}const It=yt(wt),Vt=[()=>b(()=>import("../nodes/0.B1lgd7YH.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>b(()=>import("../nodes/1.DzvTzYIZ.js"),__vite__mapDeps([5,2,3,6,7,8,9,10,11,12]),import.meta.url),()=>b(()=>import("../nodes/2.BtL7YnHC.js"),__vite__mapDeps([13,2,3,14,7,15,16,11,17,10,6,8,18,19,1]),import.meta.url),()=>b(()=>import("../nodes/3.DKE9ofJK.js"),__vite__mapDeps([20,21,12,18,15,3,7,2,14,11,6,19,1]),import.meta.url),()=>b(()=>import("../nodes/4.CuCHzQ0u.js"),__vite__mapDeps([22,21,12,17,2,3,7,14,15,10,9,11,19,1]),import.meta.url),()=>b(()=>import("../nodes/5.DSsyif42.js"),__vite__mapDeps([23,21,12,17,2,3,7,14,15,10,11]),import.meta.url),()=>b(()=>import("../nodes/6.CpJjQ9kc.js"),__vite__mapDeps([24,21,12,17,2,3,7,14,15,10,1,19]),import.meta.url)],pt=[],jt={"/":[2],"/album":[3],"/artist":[4],"/artist/albums":[5],"/artist/tracks":[6]},Bt={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{jt as dictionary,Bt as hooks,Dt as matchers,Vt as nodes,It as root,pt as server_loads};
