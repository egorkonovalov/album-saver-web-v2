import{S as r,i as f,d as c,G as _,s as d,H as p,I as m,J as $,k as g,t as v,v as h}from"../../chunks/index-e925d202.js";function u(s){let n;const a=s[1].default,e=_(a,s,s[0],null),i={c:function(){e&&e.c()},l:function(t){e&&e.l(t)},m:function(t,l){e&&e.m(t,l),n=!0},p:function(t,[l]){e&&e.p&&(!n||l&1)&&p(e,a,t,t[0],n?$(a,t[0],l,null):m(t[0]),null)},i:function(t){n||(g(e,t),n=!0)},o:function(t){v(e,t),n=!1},d:function(t){e&&e.d(t)}};return c("SvelteRegisterBlock",{block:i,id:u.name,type:"component",source:"",ctx:s}),i}function w(s,n,a){let{$$slots:e={},$$scope:i}=n;h("Layout",e,["default"]);const o=[];return Object.keys(n).forEach(t=>{!~o.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Layout> was created with unknown prop '${t}'`)}),s.$$set=t=>{"$$scope"in t&&a(0,i=t.$$scope)},[i,e]}class y extends r{constructor(n){super(n),f(this,n,w,u,d,{}),c("SvelteRegisterComponent",{component:this,tagName:"Layout",options:n,id:u.name})}}export{y as default};
