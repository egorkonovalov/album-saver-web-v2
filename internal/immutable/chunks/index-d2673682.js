function b(){}const at=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function U(t){return t()}function G(){return Object.create(null)}function E(t){t.forEach(U)}function q(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ht(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function dt(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t){let e;return V(t,n=>e=n)(),e}function Wt(t,e,n){t.$$.on_destroy.push(V(e,n))}function Gt(t,e,n,r){if(t){const i=X(t,e,n,r);return t[0](i)}}function X(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Jt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function Kt(t,e,n,r,i,o){if(i){const c=X(e,n,r,o);t.p(c,i)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ut(t){return t&&q(t.destroy)?t.destroy:b}const Y=typeof window<"u";let ht=Y?()=>window.performance.now():()=>Date.now(),H=Y?t=>requestAnimationFrame(t):b;const w=new Set;function Z(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(Z)}function mt(t){let e;return w.size===0&&H(Z),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let R=!1;function pt(){R=!0}function yt(){R=!1}function gt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:gt(1,i,d=>e[n[d]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function xt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return vt(tt(t),e),e.sheet}function vt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(R){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){R&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Yt(){return I(" ")}function Zt(){return I("")}function te(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,r,i=!1){Nt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,r){return rt(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function re(t,e,n){return it(t,e,n,nt)}function ie(t,e,n){return it(t,e,n,Et)}function At(t,e){return rt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(e),!0)}function ce(t){return At(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e??""}function ue(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function oe(t,e){return new t(e)}const M=new Map;let P=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return M.set(t,n),n}function J(t,e,n,r,i,o,c,s=0){const l=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=l){const x=e+(n-e)*o(g);u+=g*100+`%{${c(x,1-x)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${s}`,d=tt(t),{stylesheet:_,rules:h}=M.get(d)||St(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,P+=1,a}function jt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),P-=i,P||Dt())}function Dt(){H(()=>{P||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),M.clear())})}let N;function p(t){N=t}function A(){if(!N)throw new Error("Function called outside component initialization");return N}function ae(t){A().$$.on_mount.push(t)}function fe(t){A().$$.after_update.push(t)}function _e(t){A().$$.on_destroy.push(t)}function de(){const t=A();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=ct(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const v=[],K=[],j=[],Q=[],st=Promise.resolve();let F=!1;function lt(){F||(F=!0,st.then(W))}function he(){return lt(),st}function O(t){j.push(t)}const B=new Set;let $=0;function W(){if($!==0)return;const t=N;do{try{for(;$<v.length;){const e=v[$];$++,p(e),Mt(e.$$)}}catch(e){throw v.length=0,$=0,e}for(p(null),v.length=0,$=0;K.length;)K.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];B.has(n)||(B.add(n),n())}j.length=0}while(v.length);for(;Q.length;)Q.pop()();F=!1,B.clear(),p(t)}function Mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let k;function Pt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function L(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const D=new Set;let y;function Ot(){y={r:0,c:[],p:y}}function qt(){y.r||E(y.c),y=y.p}function ut(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Rt(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),y.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Tt={duration:0};function me(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),c=r?0:1,s=null,l=null,u=null;function f(){u&&jt(t,u)}function a(_,h){const m=_.b-c;return h*=Math.abs(m),{a:c,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:g=at,tick:x=b,css:T}=o||Tt,z={start:ht()+h,b:_};_||(z.group=y,y.r+=1),s||l?l=z:(T&&(f(),u=J(t,c,_,m,h,g,T)),_&&x(0,1),s=a(z,m),O(()=>L(t,_,"start")),mt(C=>{if(l&&C>l.start&&(s=a(l,m),l=null,L(t,s.b,"start"),T&&(f(),u=J(t,c,s.b,s.duration,0,g,o.css))),s){if(C>=s.end)x(c=s.b,1-c),L(t,s.b,"end"),l||(s.b?f():--s.group.r||E(s.group.c)),s=null;else if(C>=s.start){const ot=C-s.start;c=s.a+s.d*g(ot/s.duration),x(c,1-c)}}return!!(s||l)}))}return{run(_){q(o)?Pt().then(()=>{o=o(i),d(_)}):d(_)},end(){f(),s=l=null}}}function pe(t,e){const n=e.token={};function r(i,o,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=s);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(Ot(),Rt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),qt())}):e.block.d(1),u.c(),ut(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&W()}if(_t(t)){const i=A();if(t.then(o=>{p(i),r(e.then,1,e.value,o),p(null)},o=>{if(p(i),r(e.catch,2,e.error,o),p(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ye(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function ge(t){t&&t.c()}function be(t,e){t&&t.l(e)}function zt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||O(()=>{const c=t.$$.on_mount.map(U).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):E(c),t.$$.on_mount=[]}),o.forEach(O)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(v.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,r,i,o,c,s=[-1]){const l=N;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Lt(t,a)),d}):[],u.update(),f=!0,E(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){pt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(et)}else u.fragment&&u.fragment.c();e.intro&&ut(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),yt(),W()}p(l)}class $e{$destroy(){Bt(this,1),this.$destroy=b}$on(e,n){if(!q(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as A,b as B,Gt as C,Kt as D,Qt as E,Jt as F,wt as G,Wt as H,le as I,te as J,ee as K,E as L,de as M,K as N,It as O,Ht as P,_e as Q,Xt as R,$e as S,Et as T,ie as U,O as V,me as W,Ut as X,pe as Y,ye as Z,Yt as a,Vt as b,ce as c,qt as d,Zt as e,ut as f,Ot as g,et as h,xe as i,fe as j,nt as k,re as l,kt as m,ne as n,ae as o,ue as p,I as q,At as r,Ft as s,Rt as t,se as u,oe as v,ge as w,be as x,zt as y,Bt as z};