import{ai as E,O as T,aj as I,H as D,ak as V,q as B,al as C,J as P,am as N,ah as F,an as J,ae as x,ag as S,ab as y,aa as m,a6 as z,ac as p,ao as G,af as K,ap as Q,aq as U,ar as X,as as Z,at as rr,a4 as er,t as tr,l as O,x as ar,c as nr,$ as sr,n as q,s as ir,F as or,g as ur}from"./utils.BDNkSeAY.js";import{a as fr,d as cr}from"./disclose-version.Bxxz4Q4y.js";function M(r){var e=I,a=D;E(null),T(null);try{return r()}finally{E(e),T(a)}}function gr(r,e,a,n=a){r.addEventListener(e,()=>M(a));const s=r.__on_r;s?r.__on_r=()=>{s(),n()}:r.__on_r=n,fr()}const W=new Set,R=new Set;function lr(r,e,a,n){function s(t){if(n.capture||g.call(e,t),!t.cancelBubble)return M(()=>a.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?B(()=>{e.addEventListener(r,s,n)}):e.addEventListener(r,s,n),s}function br(r,e,a,n,s){var t={capture:n,passive:s},u=lr(r,e,a,t);(e===document.body||e===window||e===document)&&V(()=>{e.removeEventListener(r,u,t)})}function yr(r){for(var e=0;e<r.length;e++)W.add(r[e]);for(var a of R)a(r)}function g(r){var k;var e=this,a=e.ownerDocument,n=r.type,s=((k=r.composedPath)==null?void 0:k.call(r))||[],t=s[0]||r.target,u=0,h=r.__root;if(h){var l=s.indexOf(h);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var d=s.indexOf(e);if(d===-1)return;l<=d&&(u=l)}if(t=s[u]||r.target,t!==e){C(r,"currentTarget",{configurable:!0,get(){return t||a}});var L=I,f=D;E(null),T(null);try{for(var i,o=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(P(_)){var[$,...j]=_;$.apply(t,[r,...j])}else _.call(t,r)}catch(b){i?o.push(b):i=b}if(r.cancelBubble||c===e||c===null)break;t=c}if(i){for(let b of o)queueMicrotask(()=>{throw b});throw i}}finally{r.__root=e,delete r.currentTarget,E(L),T(f)}}}const dr=["touchstart","touchmove"];function _r(r){return dr.includes(r)}let H=!0;function wr(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function hr(r,e){return Y(r,e)}function Er(r,e){N(),e.intro=e.intro??!1;const a=e.target,n=O,s=p;try{for(var t=F(a);t&&(t.nodeType!==8||t.data!==J);)t=x(t);if(!t)throw S;y(!0),m(t),z();const u=Y(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==G)throw K(),S;return y(!1),u}catch(u){if(u===S)return e.recover===!1&&Q(),N(),U(a),y(!1),hr(r,e);throw u}finally{y(n),m(s)}}const v=new Map;function Y(r,{target:e,anchor:a,props:n={},events:s,context:t,intro:u=!0}){N();var h=new Set,l=f=>{for(var i=0;i<f.length;i++){var o=f[i];if(!h.has(o)){h.add(o);var c=_r(o);e.addEventListener(o,g,{passive:c});var _=v.get(o);_===void 0?(document.addEventListener(o,g,{passive:c}),v.set(o,1)):v.set(o,_+1)}}};l(X(W)),R.add(l);var d=void 0,L=Z(()=>{var f=a??e.appendChild(rr());return er(()=>{if(t){tr({});var i=nr;i.c=t}s&&(n.$$events=s),O&&cr(f,null),H=u,d=r(f,n)||{},H=!0,O&&(D.nodes_end=p),t&&ar()}),()=>{var c;for(var i of h){e.removeEventListener(i,g);var o=v.get(i);--o===0?(document.removeEventListener(i,g),v.delete(i)):v.set(i,o)}R.delete(l),A.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return A.set(d,L),d}let A=new WeakMap;function Tr(r){const e=A.get(r);e&&e()}let w=!1;function Lr(r,e,a){const n=a[e]??(a[e]={store:null,source:sr(void 0),unsubscribe:q});if(n.store!==r)if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=q;else{var s=!0;n.unsubscribe=ir(r,t=>{s?n.source.v=t:or(n.source,t)}),s=!1}return ur(n.source)}function Sr(){const r={};return V(()=>{for(var e in r)r[e].unsubscribe()}),r}function Nr(r){var e=w;try{return w=!1,[r(),w]}finally{w=e}}export{wr as a,Lr as b,Nr as c,yr as d,H as e,br as f,Er as h,gr as l,hr as m,Sr as s,Tr as u};
