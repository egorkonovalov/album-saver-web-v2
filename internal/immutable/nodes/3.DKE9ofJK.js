import{e as O}from"../chunks/index.CzR0xuCU.js";import{a as j}from"../chunks/albums.controller.Bjd7kaC9.js";import{a as d,t as v}from"../chunks/disclose-version.CwmAI5Sj.js";import{w as q,p as z,x as E,b as H,l as I,g as t,m as i,v as _,o as l,k as N,t as B,y as R}from"../chunks/runtime.BcVk7UNP.js";import{d as W,a as y}from"../chunks/store.Dlcqcj33.js";import{b as P,P as F,s as T,e as G,i as J}from"../chunks/Placeholder.DA5kaB8F.js";import{p as U,o as K,a as L,i as Q}from"../chunks/index-client.B0zAmEIW.js";import{b as V}from"../chunks/paths.XWCyYyRa.js";import"../chunks/legacy.75qm9smu.js";import{d as C}from"../chunks/downloader.controller.tAUYAqJl.js";import{p as r}from"../chunks/platformenvironment.service.xGjJADBI.js";function X(s,e){let a=s.searchParams.get(e);if(a)return a;O(500,`The value for the parameter "${e}" was not provided.`)}const Y=async({url:s,parent:e})=>{const a=X(s,"albumUrl"),{environmentStore:h}=await e();return{environmentStore:h,albumUrl:a,streamed:{album:j.getAlbum(a)}}},ga=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));var Z=v('<span class="artwork bg-[color:var(--tg-theme-secondary-bg-color)] animate-pulse aspect-square"></span> <span class="h-5 w-20 rounded-md self-center bg-[color:var(--tg-theme-secondary-bg-color)] animate-pulse my-3"></span> <span class="h-3 w-32 rounded-md self-center bg-[color:var(--tg-theme-secondary-bg-color)] animate-pulse"></span>',1);function $(s){var e=Z();q(4),d(s,e)}var aa=v('<img class="artwork" alt="cover"> <div class="headings"><h3 class="title"> </h3> <p> </p></div>',1),ta=(s,e,a)=>e(t(a).youTubeMusicPlaylistUrl),ea=v('<img alt="check" class="h-5 w-5">'),oa=v('<li><button class="track"><p> </p></button> <!></li>'),ra=v('<ul class="track-list"></ul>'),sa=v('<div class="album-entry"><!> <!></div>');function _a(s,e){z(e,!0);let a=E(U([]));function h(o){t(a).includes(o)?t(a).splice(t(a).indexOf(o),1):R(a,U(t(a).concat(o))),r.envokeHaptic("light")}async function f(o){t(a).length>0?await C.downloadSet(t(a)):o&&await C.download(o,1),r.closeWith("success")}H(()=>{t(a).length>0?(r.setMainButtonText(`Download Tracks (${t(a).length})`),r.onMainButtonClick(f)):(r.setMainButtonText("Download Album"),r.onMainButtonClick(()=>f(e.data.albumUrl)))}),K(async()=>{r.showMainButton("Download Album"),r.onMainButtonClick(()=>f(e.data.albumUrl))}),L(()=>{r.offMainButtonClick(()=>f(e.data.albumUrl)),r.hideMainButton()});var w=sa(),x=i(w);P(x,()=>e.data.streamed.album,o=>{$(o,{})},(o,b)=>{var c=aa(),g=N(c),m=_(g,2),n=i(m),u=i(n,!0);l(n);var p=_(n,2),k=i(p,!0);l(p),l(m),B(()=>{T(g,"src",t(b).albumImage),y(u,t(b).albumTitle),y(k,t(b).artistName)}),d(o,c)});var S=_(x,2);P(S,()=>e.data.streamed.album,o=>{F(o,{count:8,_class:"album-entry track-list mt-0"})},(o,b)=>{var c=ra();G(c,21,()=>t(b).result,J,(g,m)=>{var n=oa(),u=i(n);u.__click=[ta,h,m];var p=i(u),k=i(p,!0);l(p),l(u);var A=_(u,2);Q(A,()=>t(a).includes(t(m).youTubeMusicPlaylistUrl),D=>{var M=ea();T(M,"src",`${V??""}/check-circle.svg`),d(D,M)}),l(n),B(()=>y(k,t(m).title)),d(g,n)}),l(c),d(o,c)}),l(w),d(s,w),I()}W(["click"]);export{_a as component,ga as universal};
