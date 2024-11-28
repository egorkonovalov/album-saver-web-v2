import{e as X}from"../chunks/index.CzR0xuCU.js";import{a as S}from"../chunks/artists.controller.BKB_Q1h5.js";import{t as U,T as j,s as Z,P as D}from"../chunks/Placeholder.BmwCSx2O.js";import{b as E,d as $,a as m,t as g,c as aa}from"../chunks/disclose-version.CxhRANXo.js";import{v as ta,y as q,a5 as z,w as ra,z as B,av as ea,aB as sa,aC as oa,ad as ia,ae as la,x as na,p as Y,c as e,s as u,r as t,t as A,a as F,f as H,k as p}from"../chunks/runtime.DJK5OjHR.js";import{d as G,s as C}from"../chunks/render.DJPECFcd.js";import{s as I,a as M,e as K,i as L}from"../chunks/attributes.Cg3wPQw7.js";import{i as J}from"../chunks/index-client.Ch5NUNdE.js";import{b as ca,R as da,a as ma}from"../chunks/RecordCard.CzCe-meg.js";import{a as ua}from"../chunks/props.nCNZolO7.js";import{g as va}from"../chunks/entry.DYuDyBHo.js";import{b as O}from"../chunks/paths.Wm1Rnjzg.js";import{d as _a}from"../chunks/downloader.controller.BFOUfmJS.js";import{t as fa}from"../chunks/telegram.service.BtJAcorA.js";function V(r,a,v,w,T){var l=r,n="",_;ta(()=>{if(n===(n=a()??"")){q&&z();return}_!==void 0&&(na(_),_=void 0),n!==""&&(_=ra(()=>{if(q){B.data;for(var s=z(),k=s;s!==null&&(s.nodeType!==8||s.data!=="");)k=s,s=ea(s);if(s===null)throw sa(),oa;E(B,k),l=ia(s);return}var d=n+"",y=$(d);E(la(y),y.lastChild),l.before(y)}))})}async function ba(r){let a=await S.getTracks(r,9);return U.clearTokens(j),a}async function ga(r){let a=await S.getAlbums(r,6);return U.clearTokens(j),a}const ha=async({url:r})=>{U.clearTokens(j);const a=r.searchParams.get("artistId"),v=r.searchParams.get("artistName");if(a&&v)return{artistId:a,artistName:v,streamed:{tracks:ba(a),albums:ga(a),artistImage:S.getImage(a)}};X(404,"Not found")},Wa=Object.freeze(Object.defineProperty({__proto__:null,load:ha},Symbol.toStringTag,{value:"Module"})),W='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>';var ka=(r,a)=>{r.preventDefault(),a()},ya=g('<div class="flex gap-1 text-[11px] font-medium"><p> </p> <p>•</p> <p> </p></div>'),pa=g('<a><div class="cover"></div> <div class="record__title-container"><p class="record__name"> </p> <p class="record__artist"> </p> <!></div></a>');function wa(r,a){Y(a,!0);let v=ua(a,"_class",3,"");const w=`${O}/album?albumUrl=${a.album.youTubeMusicPlaylistUrl}`;function T(){ca.set(a.album),va(w)}var l=pa();I(l,"href",w),l.__click=[ka,T];var n=e(l),_=u(n,2),s=e(_),k=e(s,!0);t(s);var d=u(s,2),y=e(d,!0);t(d);var R=u(d,2);J(R,()=>a.album.recordType&&a.album.year,o=>{var c=ya(),i=e(c),h=e(i,!0);t(i);var f=u(i,4),b=e(f,!0);t(f),t(c),A(()=>{C(h,a.album.recordType),C(b,a.album.year)}),m(o,c)}),t(_),t(l),A(()=>{Z(l,v()+" record"),I(n,"style",`background-image: url(${a.album.imageUrl??""})`),C(k,a.album.title),C(y,a.album.author===void 0?"Various Artists":a.album.author)}),m(r,l),F()}G(["click"]);var Ta=g('<div class="artist-header"><h1 class="name"> </h1></div>'),xa=g('<div class="h-[10rem] animate-pulse bg-stone-200 w-full mb-4"></div>'),Ca=(r,a,v)=>{r.preventDefault(),a(p(v).youTubeMusicPlaylistUrl)},Ia=g('<li class="record"><a href="/"><!></a></li>'),Aa=g('<ul class="artist track-list conveyer"></ul>'),Ra=g("<li><!></li>"),Na=g('<ul class="album-grid conveyer"></ul>'),Pa=g('<!> <section><a class="text-xl px-4 btn btn--icon">Top Tracks<!></a> <!></section> <section><a class="px-4 btn btn--icon">Albums<!></a> <!></section>',1);function Ya(r,a){Y(a,!0);async function v(o){await _a.download(o,2),fa.closeWith("success")}var w=Pa(),T=H(w);M(T,()=>a.data.streamed.artistImage,o=>{var c=xa();m(o,c)},(o,c)=>{var i=Ta(),h=e(i),f=e(h,!0);t(h),t(i),A(()=>{I(i,"style",`background-image: url(${p(c)??""})`),C(f,a.data.artistName)}),m(o,i)});var l=u(T,2),n=e(l),_=u(e(n));V(_,()=>W),t(n);var s=u(n,2);M(s,()=>a.data.streamed.tracks,o=>{D(o,{count:3,_class:"mt-0 track-list artist"})},(o,c)=>{var i=Aa();K(i,21,()=>p(c),L,(h,f)=>{var b=Ia(),x=e(b);x.__click=[Ca,v,f];var N=e(x);da(N,{get requestType(){return ma.ArtistTracks},get record(){return p(f)}}),t(x),t(b),m(h,b)}),t(i),m(o,i)}),t(l);var k=u(l,2),d=e(k),y=u(e(d));V(y,()=>W),t(d);var R=u(d,2);M(R,()=>a.data.streamed.albums,o=>{D(o,{count:6,_class:"album-grid conveyer"})},(o,c)=>{var i=aa(),h=H(i);J(h,()=>p(c).length,f=>{var b=Na();K(b,21,()=>p(c),L,(x,N)=>{var P=Ra(),Q=e(P);wa(Q,{get album(){return p(N)}}),t(P),m(x,P)}),t(b),m(f,b)}),m(o,i)}),t(k),A(()=>{I(n,"href",`${O??""}/artist/tracks?artistId=${a.data.artistId??""}`),I(d,"href",`${O??""}/artist/albums?artistId=${a.data.artistId??""}`)}),m(r,w),F()}G(["click"]);export{Ya as component,Wa as universal};
