import{S as E,B as G,C as K,D as y,E as Z,F as g,G as D,U as l,g as o,H as L,I as $,o as H,J as V,K as z,M as J,u as F,N as Q,R as W,O as M,P as X,Q as k,T as p,V as ee,i as U,W as re,X as ne,Y as te,Z as ae,_ as ie,$ as fe}from"./utils.BDNkSeAY.js";import{c as ue}from"./store.BvG3WA17.js";function h(n,s=null,b){if(typeof n!="object"||n===null||E in n)return n;const P=H(n);if(P!==G&&P!==K)return n;var f=new Map,c=V(n),m=y(0);c&&f.set("length",y(n.length));var I;return new Proxy(n,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Z();var a=f.get(e);return a===void 0?(a=y(r.value),f.set(e,a)):g(a,h(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var a=f.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&g(a,t)}g(r,l),Y(m)}return!0},get(i,e,r){var _;if(e===E)return n;var a=f.get(e),t=e in i;if(a===void 0&&(!t||(_=D(i,e))!=null&&_.writable)&&(a=y(h(t?i[e]:l,I)),f.set(e,a)),a!==void 0){var u=o(a);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=o(a))}else if(r===void 0){var t=f.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===E)return!0;var r=f.get(e),a=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||L!==null&&(!a||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=y(a?h(i[e],I):l),f.set(e,r));var t=o(r);if(t===l)return!1}return a},set(i,e,r,a){var R;var t=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<t.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,l):_ in i&&(w=y(l),f.set(_+"",w))}t===void 0?(!u||(R=D(i,e))!=null&&R.writable)&&(t=y(void 0),g(t,h(r,I)),f.set(e,t)):(u=t.v!==l,g(t,h(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(a,r),!u){if(c&&typeof e=="string"){var S=f.get("length"),N=Number(e);Number.isInteger(N)&&N>=S.v&&g(S,N+1)}Y(m)}return!0},ownKeys(i){o(m);var e=Reflect.ownKeys(i).filter(t=>{var u=f.get(t);return u===void 0||u.v!==l});for(var[r,a]of f)a.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){$()}})}function Y(n,s=1){g(n,n.v+s)}function j(n){return n!==null&&typeof n=="object"&&E in n?n[E]:n}function le(n,s){return Object.is(j(n),j(s))}function q(n){for(var s=L,b=L;s!==null&&!(s.f&(Q|W));)s=s.parent;try{return M(s),n()}finally{M(b)}}function _e(n,s,b,P){var C;var f=(b&ae)!==0,c=!X||(b&k)!==0,m=(b&p)!==0,I=(b&ie)!==0,i=!1,e;m?[e,i]=ue(()=>n[s]):e=n[s];var r=E in n||ee in n,a=((C=D(n,s))==null?void 0:C.set)??(r&&m&&s in n?v=>n[s]=v:void 0),t=P,u=!0,_=!1,w=()=>(_=!0,u&&(u=!1,I?t=F(P):t=P),t);e===void 0&&P!==void 0&&(a&&c&&z(),e=w(),a&&a(e));var d;if(c)d=()=>{var v=n[s];return v===void 0?w():(u=!0,_=!1,v)};else{var S=q(()=>(f?U:re)(()=>n[s]));S.f|=J,d=()=>{var v=o(S);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(b&ne))return d;if(a){var N=n.$$legacy;return function(v,O){return arguments.length>0?((!c||!O||N||i)&&a(O?d():v),v):d()}}var R=!1,B=!1,T=fe(e),A=q(()=>U(()=>{var v=d(),O=o(T);return R?(R=!1,B=!0,O):(B=!1,T.v=v)}));return f||(A.equals=te),function(v,O){if(arguments.length>0){const x=O?o(A):c&&m?h(v):v;return A.equals(x)||(R=!0,g(T,x),_&&t!==void 0&&(t=x),F(()=>o(A))),v}return o(A)}}export{_e as a,le as i,h as p};
