import{e as k}from"../chunks/index.CzR0xuCU.js";import{a as h,R as y,b}from"../chunks/artists.controller.Bg8LgLle.js";import{c as T,a as c,t as u}from"../chunks/disclose-version.CwmAI5Sj.js";import{p as w,k as P,l as C,g as n,m as p,o as i}from"../chunks/runtime.BcVk7UNP.js";import{d as R}from"../chunks/store.Dlcqcj33.js";import{b as S,P as j,e as q,i as x}from"../chunks/Placeholder.DA5kaB8F.js";import{p as I}from"../chunks/platformenvironment.service.xGjJADBI.js";import{d as M}from"../chunks/downloader.controller.tAUYAqJl.js";const O=async({url:r})=>{const a=r.searchParams.get("artistId");if(a)return{streamed:{tracks:h.getTracks(a)}};k(404,"Not found")},J=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));var z=(r,a,e)=>{r.preventDefault(),a(n(e).youTubeMusicPlaylistUrl)},A=u('<li class="record"><a href="/"><!></a></li>'),D=u('<ul class="artist track-list"></ul>');function K(r,a){w(a,!0);async function e(t){await M.download(t,2),I.closeWith("success")}var m=T(),f=P(m);S(f,()=>a.data.streamed.tracks,t=>{j(t,{count:10,_class:"mt-0 track-list artist"})},(t,_)=>{var o=D();q(o,21,()=>n(_),x,(v,d)=>{var s=A(),l=p(s);l.__click=[z,e,d];var g=p(l);y(g,{get requestType(){return b.ArtistTracks},get record(){return n(d)}}),i(l),i(s),c(v,s)}),i(o),c(t,o)}),c(r,m),C()}R(["click"]);export{K as component,J as universal};
