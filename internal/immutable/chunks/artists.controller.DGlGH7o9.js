import{s as q,e as p,a as v,t as S,c as A,b as g,f as d,g as b,d as I,m as T,D as E,i as h,h as _,j as w,n as D,A as M,v as R}from"./scheduler.Br1097ij.js";import{S as z,i as B}from"./index.DJz_kk84.js";import{a as G}from"./stores.D6tJJVDc.js";import{g as k,d as K,f as L,i as F,j as H}from"./Placeholder.CEXoF0fh.js";var P=(r=>(r.Album="albums",r.Track="tracks",r.Release="releases",r.Artist="artists",r.ArtistTracks="artist-tracks",r.ArtistAlbums="artist-albums",r.AlbumTracks="album-tracks",r))(P||{});function V(r){let e,a=(r[1].author===void 0?"Various Artists":r[1].author)+"",t;return{c(){e=p("p"),t=S(a),this.h()},l(l){e=A(l,"P",{class:!0});var s=g(e);t=I(s,a),s.forEach(d),this.h()},h(){T(e,"class","record__artist")},m(l,s){h(l,e,s),_(e,t)},p(l,s){s&2&&a!==(a=(l[1].author===void 0?"Various Artists":l[1].author)+"")&&w(t,a)},d(l){l&&d(e)}}}function U(r){let e,a,t,l=r[1].year+"",s,n=r[1].recordType&&j(r);return{c(){e=p("div"),n&&n.c(),a=v(),t=p("p"),s=S(l),this.h()},l(i){e=A(i,"DIV",{class:!0});var u=g(e);n&&n.l(u),a=b(u),t=A(u,"P",{});var c=g(t);s=I(c,l),c.forEach(d),u.forEach(d),this.h()},h(){T(e,"class","flex gap-1 text-[11px] font-medium")},m(i,u){h(i,e,u),n&&n.m(e,null),_(e,a),_(e,t),_(t,s)},p(i,u){i[1].recordType?n?n.p(i,u):(n=j(i),n.c(),n.m(e,a)):n&&(n.d(1),n=null),u&2&&l!==(l=i[1].year+"")&&w(s,l)},d(i){i&&d(e),n&&n.d()}}}function j(r){let e,a=(r[1].recordType?r[1].recordType:"Album")+"",t,l,s,n="•";return{c(){e=p("p"),t=S(a),l=v(),s=p("p"),s.textContent=n},l(i){e=A(i,"P",{});var u=g(e);t=I(u,a),u.forEach(d),l=b(i),s=A(i,"P",{"data-svelte-h":!0}),R(s)!=="svelte-1ggzppq"&&(s.textContent=n)},m(i,u){h(i,e,u),_(e,t),h(i,l,u),h(i,s,u)},p(i,u){u&2&&a!==(a=(i[1].recordType?i[1].recordType:"Album")+"")&&w(t,a)},d(i){i&&(d(e),d(l),d(s))}}}function J(r){let e,a,t,l,s=r[1].title+"",n,i,u,c=r[0]!==P.Artist&&V(r),f=r[0]==="albums"&&U(r);return{c(){e=p("div"),a=v(),t=p("div"),l=p("p"),n=S(s),i=v(),c&&c.c(),u=v(),f&&f.c(),this.h()},l(o){e=A(o,"DIV",{class:!0,style:!0}),g(e).forEach(d),a=b(o),t=A(o,"DIV",{class:!0});var m=g(t);l=A(m,"P",{class:!0});var C=g(l);n=I(C,s),C.forEach(d),i=b(m),c&&c.l(m),u=b(m),f&&f.l(m),m.forEach(d),this.h()},h(){T(e,"class","cover"),E(e,"background-image","url("+r[1].imageUrl+")"),T(l,"class","record__name"),T(t,"class","record__title-container")},m(o,m){h(o,e,m),h(o,a,m),h(o,t,m),_(t,l),_(l,n),_(t,i),c&&c.m(t,null),_(t,u),f&&f.m(t,null)},p(o,[m]){m&2&&E(e,"background-image","url("+o[1].imageUrl+")"),m&2&&s!==(s=o[1].title+"")&&w(n,s),o[0]!==P.Artist?c?c.p(o,m):(c=V(o),c.c(),c.m(t,u)):c&&(c.d(1),c=null),o[0]==="albums"?f?f.p(o,m):(f=U(o),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i:D,o:D,d(o){o&&(d(e),d(a),d(t)),c&&c.d(),f&&f.d()}}}function N(r,e,a){let{requestType:t}=e,{record:l}=e;return M(()=>G.update(()=>({}))),r.$$set=s=>{"requestType"in s&&a(0,t=s.requestType),"record"in s&&a(1,l=s.record)},[t,l]}class $ extends z{constructor(e){super(),B(this,e,N,J,q,{requestType:0,record:1})}}class O{async getArtists(e){return(await k(K,{params:{query:e}})).result}async getTracks(e,a){let t={channelUrl:e};return a&&(t.takeCount=a.toString()),(await k(L,{params:t})).result}async getAlbums(e,a){let t={channelUrl:e};return a&&(t.takeCount=a.toString()),(await k(F,{params:t})).result}async getImage(e){return(await k(H,{params:{channelUrl:e}})).url}}const y=new O;class Q{async getArtists(e){return await y.getArtists(e)}async getTracks(e,a){return await y.getTracks(e,a)}async getAlbums(e,a){return await y.getAlbums(e,a)}async getImage(e){return await y.getImage(e)}}const x=new Q;export{$ as R,x as a,P as b};
