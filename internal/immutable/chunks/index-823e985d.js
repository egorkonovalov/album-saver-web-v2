function A(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(T)}function I(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function st(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return A;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(J(n,e))}function ft(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,s){if(r){const c=q(n,e,i,s);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&u.push(f)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:R(1,r,y=>n[e[y]].claim_order,l))-1;i[u]=e[f]+1;const a=f+1;e[a]=u,r=Math.max(a,r)}const s=[],c=[];let o=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(s.push(n[u-1]);o>=u;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[u],f)}}function U(t,n){if($){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){$&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){tt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function L(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function $t(t,n,e){return L(t,n,e,X)}function Et(t,n,e){return L(t,n,e,Y)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function wt(t){return nt(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n){t.value=n==null?"":n}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){E().$$.on_mount.push(t)}function Ct(t){E().$$.after_update.push(t)}function kt(t){E().$$.on_destroy.push(t)}function Mt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=et(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],D=[],b=[],P=[],O=Promise.resolve();let N=!1;function z(){N||(N=!0,O.then(F))}function Dt(){return z(),O}function S(t){b.push(t)}const w=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),it(n.$$)}for(h(null),d.length=0,x=0;D.length;)D.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];w.has(e)||(w.add(e),e())}b.length=0}while(d.length);for(;P.length;)P.pop()();N=!1,w.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function Tt(){_.r||p(_.c),_=_.p}function rt(t,n){t&&t.i&&(v.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Bt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const u=s.map(T).filter(I);c?c.push(...u):p(u),t.$$.on_mount=[]}),o.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,s,c,o=[-1]){const u=m;h(t);const l=t.$$={fragment:null,ctx:null,props:s,update:A,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,y,...C)=>{const k=C.length?C[0]:y;return l.ctx&&r(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&lt(t,a)),y}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const a=Z(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Q(),F()}h(u)}class zt{$destroy(){ut(this,1),this.$destroy=A}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{A,ft as B,dt as C,ht as D,_t as E,U as F,at as G,St as H,xt as I,bt as J,p as K,Mt as L,I as M,D as N,st as O,kt as P,pt as Q,Y as R,zt as S,Et as T,yt as a,mt as b,wt as c,Tt as d,gt as e,rt as f,Pt as g,V as h,Ot as i,Ct as j,X as k,$t as l,Z as m,vt as n,jt as o,At as p,j as q,nt as r,ot as s,qt as t,Nt as u,Bt as v,Lt as w,ct as x,ut as y,Dt as z};
