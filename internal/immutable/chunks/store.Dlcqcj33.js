import{ak as E,a6 as L,al as M,H as O,am as P,q as $,ai as j,Y as F,an as N,G,ao as J,L as K,N as m,a1 as y,J as q,K as z,D as b,ap as Q,M as U,aq as X,ar as Z,as as x,at as ee,F as re,A as te,p as ae,C as S,l as ne,c as se,n as R,u as ie,ag as ue,g as oe,y as fe}from"./runtime.BcVk7UNP.js";import{b as ce}from"./disclose-version.CwmAI5Sj.js";let H=!1;function le(){H||(H=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function V(e){var r=M,a=O;E(null),L(null);try{return e()}finally{E(r),L(a)}}function ye(e,r,a,n=a){e.addEventListener(r,()=>V(a));const s=e.__on_r;s?e.__on_r=()=>{s(),n()}:e.__on_r=n,le()}const Y=new Set,A=new Set;function de(e,r,a,n){function s(t){if(n.capture||p.call(r,t),!t.cancelBubble)return V(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function we(e,r,a,n,s){var t={capture:n,passive:s},o=de(e,r,a,t);(r===document.body||r===window||r===document)&&P(()=>{r.removeEventListener(e,o,t)})}function Ee(e){for(var r=0;r<e.length;r++)Y.add(e[r]);for(var a of A)a(e)}function p(e){var k;var r=this,a=r.ownerDocument,n=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],t=s[0]||e.target,o=0,v=e.__root;if(v){var l=s.indexOf(v);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){j(e,"currentTarget",{configurable:!0,get(){return t||a}});var T=M,f=O;E(null),L(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(F(_)){var[W,...B]=_;W.apply(t,[e,...B])}else _.call(t,e)}catch(g){i?u.push(g):i=g}if(e.cancelBubble||c===r||c===null)break;t=c}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=r,delete e.currentTarget,E(T),L(f)}}}const _e=["touchstart","touchmove"];function ve(e){return _e.includes(e)}let I=!0;function Le(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function he(e,r){return C(e,r)}function Te(e,r){N(),r.intro=r.intro??!1;const a=r.target,n=S,s=b;try{for(var t=G(a);t&&(t.nodeType!==8||t.data!==J);)t=K(t);if(!t)throw m;y(!0),q(t),z();const o=C(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==Q)throw U(),m;return y(!1),o}catch(o){if(o===m)return r.recover===!1&&X(),N(),Z(a),y(!1),he(e,r);throw o}finally{y(n),q(s)}}const h=new Map;function C(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:o=!0}){N();var v=new Set,l=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!v.has(u)){v.add(u);var c=ve(u);r.addEventListener(u,p,{passive:c});var _=h.get(u);_===void 0?(document.addEventListener(u,p,{passive:c}),h.set(u,1)):h.set(u,_+1)}}};l(x(Y)),A.add(l);var d=void 0,T=ee(()=>{var f=a??r.appendChild(re());return te(()=>{if(t){ae({});var i=se;i.c=t}s&&(n.$$events=s),S&&ce(f,null),I=o,d=e(f,n)||{},I=!0,S&&(O.nodes_end=b),t&&ne()}),()=>{var c;for(var i of v){r.removeEventListener(i,p);var u=h.get(i);--u===0?(document.removeEventListener(i,p),h.delete(i)):h.set(i,u)}A.delete(l),D.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return D.set(d,T),d}let D=new WeakMap;function me(e){const r=D.get(e);r&&r()}function be(e,r,a){if(e==null)return r(void 0),R;const n=ie(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function Ne(e,r,a){const n=a[r]??(a[r]={store:null,source:ue(void 0),unsubscribe:R});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=R;else{var s=!0;n.unsubscribe=be(e,t=>{s?n.source.v=t:fe(n.source,t)}),s=!1}return oe(n.source)}function Se(){const e={};return P(()=>{for(var r in e)e[r].unsubscribe()}),e}function Re(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{Le as a,Ne as b,Re as c,Ee as d,le as e,I as f,we as g,Te as h,ye as l,he as m,Se as s,me as u};
