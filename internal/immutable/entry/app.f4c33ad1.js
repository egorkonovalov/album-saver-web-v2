import{s as q,a as B,e as p,c as U,i as b,d as h,b as j,o as W,f as z,g as F,h as G,j as I,k as m,l as H,m as J,n as K,p as O,q as E}from"../chunks/scheduler.fb79c3ec.js";import{S as M,i as Q,t as d,c as P,a as g,g as D,b as v,d as T,m as R,e as L}from"../chunks/index.bb4217d0.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},V={},w=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in V)return;V[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},se={};function Z(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[12](null),e&&L(e,t)}}}function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[11](null),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){D();const o=e;d(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&d(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[10](null),e&&L(e,t)}}}function y(a){let e,n=a[6]&&A(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=G(e);n&&n.l(s),s.forEach(h),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function A(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function ee(a){let e,n,i,s,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&y(a);return{c(){n.c(),i=B(),o&&o.c(),s=p()},l(l){n.l(l),i=U(l),o&&o.l(l),s=p()},m(l,u){r[e].m(l,u),b(l,i,u),o&&o.m(l,u),b(l,s,u),f=!0},p(l,[u]){let k=e;e=_(l),e===k?r[e].p(l,u):(D(),d(r[k],1,1,()=>{r[k]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=y(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(g(n),f=!0)},o(l){d(n),f=!1},d(l){l&&(h(i),h(s)),r[e].d(l),o&&o.d(l)}}}function te(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;j(i.page.notify);let l=!1,u=!1,k=null;W(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,k,i,s,N,S,C]}class re extends M{constructor(e){super(),Q(this,e,te,ee,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>w(()=>import("../nodes/0.b6f0f1f4.js"),["../nodes/0.b6f0f1f4.js","../chunks/platformenvironment.service.10a2b919.js","../chunks/stores.4682d7de.js","../chunks/index.f6f3ae47.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../assets/0.f32e04c9.css"],import.meta.url),()=>w(()=>import("../nodes/1.e1054137.js"),["../nodes/1.e1054137.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/singletons.511c3aa2.js","../chunks/index.f6f3ae47.js","../chunks/paths.2beb0206.js"],import.meta.url),()=>w(()=>import("../nodes/2.fb41de45.js"),["../nodes/2.fb41de45.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/paths.2beb0206.js","../chunks/Placeholder.a525d50d.js","../chunks/artists.controller.7e735646.js","../chunks/stores.4682d7de.js","../chunks/index.f6f3ae47.js","../chunks/albums.controller.a6dd6fa6.js","../chunks/downloader.controller.43f9652b.js","../chunks/platformenvironment.service.10a2b919.js"],import.meta.url),()=>w(()=>import("../nodes/3.01c62093.js"),["../nodes/3.01c62093.js","../chunks/index.93323930.js","../chunks/control.f5b05b5f.js","../chunks/albums.controller.a6dd6fa6.js","../chunks/Placeholder.a525d50d.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/paths.2beb0206.js","../chunks/downloader.controller.43f9652b.js","../chunks/platformenvironment.service.10a2b919.js"],import.meta.url),()=>w(()=>import("../nodes/4.2aa0738a.js"),["../nodes/4.2aa0738a.js","../chunks/index.93323930.js","../chunks/control.f5b05b5f.js","../chunks/artists.controller.7e735646.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/stores.4682d7de.js","../chunks/index.f6f3ae47.js","../chunks/Placeholder.a525d50d.js","../chunks/singletons.511c3aa2.js","../chunks/paths.2beb0206.js","../chunks/downloader.controller.43f9652b.js","../chunks/platformenvironment.service.10a2b919.js"],import.meta.url),()=>w(()=>import("../nodes/5.208dc7fe.js"),["../nodes/5.208dc7fe.js","../chunks/index.93323930.js","../chunks/control.f5b05b5f.js","../chunks/artists.controller.7e735646.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/stores.4682d7de.js","../chunks/index.f6f3ae47.js","../chunks/Placeholder.a525d50d.js"],import.meta.url),()=>w(()=>import("../nodes/6.ee049354.js"),["../nodes/6.ee049354.js","../chunks/index.93323930.js","../chunks/control.f5b05b5f.js","../chunks/artists.controller.7e735646.js","../chunks/scheduler.fb79c3ec.js","../chunks/index.bb4217d0.js","../chunks/stores.4682d7de.js","../chunks/index.f6f3ae47.js","../chunks/Placeholder.a525d50d.js","../chunks/downloader.controller.43f9652b.js","../chunks/platformenvironment.service.10a2b919.js"],import.meta.url)],ae=[],le={"/":[2],"/album":[3],"/artist":[4],"/artist/albums":[5],"/artist/tracks":[6]},fe={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,fe as hooks,se as matchers,oe as nodes,re as root,ae as server_loads};
