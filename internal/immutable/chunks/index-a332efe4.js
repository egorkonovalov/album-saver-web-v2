function S(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t&&typeof t=="object"&&typeof t.then=="function"}function q(t){return t()}function D(){return Object.create(null)}function y(t){t.forEach(q)}function J(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function _t(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(Q(e,n))}function mt(t,e,n,r){if(t){const c=B(t,e,n,r);return t[0](c)}}function B(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function pt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],i=Math.max(e.dirty.length,c.length);for(let a=0;a<i;a+=1)s[a]=e.dirty[a]|c[a];return s}return e.dirty|c}return e.dirty}function yt(t,e,n,r,c,s){if(c){const i=B(e,n,r,s);t.p(i,c)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let w=!1;function R(){w=!0}function U(){w=!1}function V(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(c>0&&e[n[c]].claim_order<=u?c+1:V(1,c,_=>e[n[_]].claim_order,u))-1;r[l]=n[f]+1;const o=f+1;n[o]=l,c=Math.max(o,c)}const s=[],i=[];let a=e.length-1;for(let l=n[c]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);a>=l;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);s.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<s.length&&i[l].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(i[l],f)}}function X(t,e){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){w&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function vt(){return j(" ")}function $t(){return j("")}function wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Et(t){return function(e){return e.preventDefault(),t.call(this,e)}}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,c=!1){nt(t);const s=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const a=t[i];if(e(a)){const l=n(a);return l===void 0?t.splice(i,1):t[i]=l,c||(t.claim_info.last_index=i),a}}for(let i=t.claim_info.last_index-1;i>=0;i--){const a=t[i];if(e(a)){const l=n(a);return l===void 0?t.splice(i,1):t[i]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,a}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function O(t,e,n,r){return L(t,c=>c.nodeName===e,c=>{const s=[];for(let i=0;i<c.attributes.length;i++){const a=c.attributes[i];n[a.name]||s.push(a.name)}s.forEach(i=>c.removeAttribute(i))},()=>r(e))}function Nt(t,e,n){return O(t,e,n,Z)}function St(t,e,n){return O(t,e,n,tt)}function rt(t,e){return L(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function jt(t){return rt(t," ")}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e){t.value=e==null?"":e}function Mt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}let p;function d(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function Dt(t){b().$$.on_mount.push(t)}function Pt(t){b().$$.after_update.push(t)}function Tt(t){b().$$.on_destroy.push(t)}function qt(){const t=b();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=ct(e,n,{cancelable:r});return c.slice().forEach(i=>{i.call(t,s)}),!s.defaultPrevented}return!0}}const m=[],P=[],v=[],T=[],z=Promise.resolve();let k=!1;function F(){k||(k=!0,z.then(A))}function Bt(){return F(),z}function N(t){v.push(t)}const E=new Set;let x=0;function A(){const t=p;do{for(;x<m.length;){const e=m[x];x++,d(e),it(e.$$)}for(d(null),m.length=0,x=0;P.length;)P.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];E.has(n)||(E.add(n),n())}v.length=0}while(m.length);for(;T.length;)T.pop()();k=!1,E.clear(),d(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const $=new Set;let h;function lt(){h={r:0,c:[],p:h}}function ut(){h.r||y(h.c),h=h.p}function H(t,e){t&&t.i&&($.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Lt(t,e){const n=e.token={};function r(c,s,i,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;i!==void 0&&(l=l.slice(),l[i]=a);const u=c&&(e.current=c)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((o,_)=>{_!==s&&o&&(lt(),st(o,1,1,()=>{e.blocks[_]===o&&(e.blocks[_]=null)}),ut())}):e.block.d(1),u.c(),H(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&A()}if(G(t)){const c=b();if(t.then(s=>{d(c),r(e.then,1,e.value,s),d(null)},s=>{if(d(c),r(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ot(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function zt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function at(t,e,n,r){const{fragment:c,on_mount:s,on_destroy:i,after_update:a}=t.$$;c&&c.m(e,n),r||N(()=>{const l=s.map(q).filter(J);i?i.push(...l):y(l),t.$$.on_mount=[]}),a.forEach(N)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,c,s,i,a=[-1]){const l=p;d(t);const u=t.$$={fragment:null,ctx:null,props:s,update:S,not_equal:c,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:D(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(o,_,...C)=>{const M=C.length?C[0]:_;return u.ctx&&c(u.ctx[o],u.ctx[o]=M)&&(!u.skip_bound&&u.bound[o]&&u.bound[o](M),f&&ft(t,o)),_}):[],u.update(),f=!0,y(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){R();const o=et(e.target);u.fragment&&u.fragment.l(o),o.forEach(Y)}else u.fragment&&u.fragment.c();e.intro&&H(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),U(),A()}d(l)}class It{$destroy(){ot(this,1),this.$destroy=S}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{S as A,mt as B,yt as C,bt as D,pt as E,X as F,ht as G,Ct as H,wt as I,Et as J,y as K,qt as L,J as M,P as N,_t as O,Tt as P,xt as Q,tt as R,It as S,St as T,Lt as U,Ot as V,vt as a,gt as b,jt as c,ut as d,$t as e,H as f,lt as g,Y as h,Ht as i,Pt as j,Z as k,Nt as l,et as m,kt as n,Dt as o,Mt as p,j as q,rt as r,dt as s,st as t,At as u,zt as v,Ft as w,at as x,ot as y,Bt as z};
