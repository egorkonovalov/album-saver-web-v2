import{v as b,ab as d,w as m,ac as v,y as i,a6 as g,E as k,ai as T,aj as x,ae as w,ak as h,z as A,h as r,W as R,g as D,u as p,O as N}from"./runtime.-sM8FUqq.js";function u(e){throw new Error("lifecycle_outside_component")}function P(e,n,l,c=null,o=!1){i&&g();var t=e,s=null,a=null,f=null,y=o?k:0;b(()=>{if(f===(f=!!n()))return;let _=!1;if(i){const E=t.data===T;f===E&&(t=x(),w(t),h(!1),_=!0)}f?(s?d(s):s=m(()=>l(t)),a&&v(a,()=>{a=null})):(a?d(a):c&&(a=m(()=>c(t))),s&&v(s,()=>{s=null})),_&&h(!0)},y),i&&(t=A)}function S(e){r===null&&u(),R&&r.l!==null?F(r).m.push(e):D(()=>{const n=p(e);if(typeof n=="function")return n})}function $(e){r===null&&u(),S(()=>()=>p(e))}function C(e,n,{bubbles:l=!1,cancelable:c=!1}={}){return new CustomEvent(e,{detail:n,bubbles:l,cancelable:c})}function j(){const e=r;return e===null&&u(),(n,l,c)=>{var t;const o=(t=e.s.$$events)==null?void 0:t[n];if(o){const s=N(o)?o.slice():[o],a=C(n,l,c);for(const f of s)f.call(e.x,a);return!a.defaultPrevented}return!0}}function F(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{$ as a,j as c,P as i,S as o};
