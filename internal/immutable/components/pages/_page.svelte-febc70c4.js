import{S as q,i as v,s as U,k as O,a as H,q as le,l as T,m as x,h as y,c as $,r as ce,n as b,b as k,F as g,H as Ne,I as ie,J as ye,A as R,K as _t,L as Xe,M as Et,N as Ge,O as we,u as gt,e as D,o as Re,P as St,p as _e,Q as Ye,R as he,T as pe,g as Q,t as A,d as X,f as S,v as z,w as J,x as V,y as W}from"../../chunks/index-823e985d.js";import{b as Rt}from"../../chunks/paths-846459bd.js";function Ot(t){let e,r,n,s,o,i,l,f;return{c(){e=O("form"),r=O("label"),n=O("input"),s=H(),o=O("button"),i=le("Search"),this.h()},l(a){e=T(a,"FORM",{class:!0});var c=x(e);r=T(c,"LABEL",{class:!0});var h=x(r);n=T(h,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),h.forEach(y),s=$(c),o=T(c,"BUTTON",{type:!0,class:!0});var d=x(o);i=ce(d,"Search"),d.forEach(y),c.forEach(y),this.h()},h(){b(n,"type","text"),b(n,"id","search_album"),b(n,"class","bg-gray-100 h-full text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),b(n,"placeholder","What do you want to listen to?"),n.required=!0,b(r,"class","w-full"),b(o,"type","submit"),b(o,"class","px-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"),b(e,"class","form")},m(a,c){k(a,e,c),g(e,r),g(r,n),t[3](n),Ne(n,t[0]),g(e,s),g(e,o),g(o,i),l||(f=[ie(n,"input",t[4]),ie(e,"submit",ye(t[2])),ie(e,"submit",ye(function(){Et(t[1].blur())&&t[1].blur().apply(this,arguments)}))],l=!0)},p(a,[c]){t=a,c&1&&n.value!==t[0]&&Ne(n,t[0])},i:R,o:R,d(a){a&&y(e),t[3](null),l=!1,_t(f)}}}function Tt(t,e,r){const n=Xe();function s(){n("search",{value:o})}let o,i;function l(a){Ge[a?"unshift":"push"](()=>{i=a,r(1,i)})}function f(){o=this.value,r(0,o)}return[o,i,s,l,f]}class At extends q{constructor(e){super(),v(this,e,Tt,Ot,U,{})}}function Ze(t,e){return function(){return t.apply(e,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:Oe}=Object,Te=(t=>e=>{const r=et.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),M=t=>(t=t.toLowerCase(),e=>Te(e)===t),ue=t=>e=>typeof e===t,{isArray:ne}=Array,Ee=ue("undefined");function xt(t){return t!==null&&!Ee(t)&&t.constructor!==null&&!Ee(t.constructor)&&G(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const tt=M("ArrayBuffer");function kt(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&tt(t.buffer),e}const Nt=ue("string"),G=ue("function"),rt=ue("number"),nt=t=>t!==null&&typeof t=="object",Pt=t=>t===!0||t===!1,ae=t=>{if(Te(t)!=="object")return!1;const e=Oe(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ct=M("Date"),Dt=M("File"),Bt=M("Blob"),Lt=M("FileList"),Ft=t=>nt(t)&&G(t.pipe),Ut=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||et.call(t)===e||G(t.toString)&&t.toString()===e)},Mt=M("URLSearchParams"),jt=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fe(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let n,s;if(typeof t!="object"&&(t=[t]),ne(t))for(n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let l;for(n=0;n<i;n++)l=o[n],e.call(null,t[l],l,t)}}function ge(){const t={},e=(r,n)=>{ae(t[n])&&ae(r)?t[n]=ge(t[n],r):ae(r)?t[n]=ge({},r):ne(r)?t[n]=r.slice():t[n]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&fe(arguments[r],e);return t}const qt=(t,e,r,{allOwnKeys:n}={})=>(fe(e,(s,o)=>{r&&G(s)?t[o]=Ze(s,r):t[o]=s},{allOwnKeys:n}),t),vt=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),It=(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},Ht=(t,e,r,n)=>{let s,o,i;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)i=s[o],(!n||n(i,t,e))&&!l[i]&&(e[i]=t[i],l[i]=!0);t=r!==!1&&Oe(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},$t=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return n!==-1&&n===r},zt=t=>{if(!t)return null;if(ne(t))return t;let e=t.length;if(!rt(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},Jt=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Oe(Uint8Array)),Vt=(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=n.next())&&!s.done;){const o=s.value;e.call(t,o[0],o[1])}},Wt=(t,e)=>{let r;const n=[];for(;(r=t.exec(e))!==null;)n.push(r);return n},Kt=M("HTMLFormElement"),Qt=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Pe=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),Xt=M("RegExp"),st=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};fe(r,(s,o)=>{e(s,o,t)!==!1&&(n[o]=s)}),Object.defineProperties(t,n)},Gt=t=>{st(t,(e,r)=>{const n=t[r];if(!!G(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+r+"'")})}})},Yt=(t,e)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return ne(t)?n(t):n(String(t).split(e)),r},Zt=()=>{},er=(t,e)=>(t=+t,Number.isFinite(t)?t:e),u={isArray:ne,isArrayBuffer:tt,isBuffer:xt,isFormData:Ut,isArrayBufferView:kt,isString:Nt,isNumber:rt,isBoolean:Pt,isObject:nt,isPlainObject:ae,isUndefined:Ee,isDate:Ct,isFile:Dt,isBlob:Bt,isRegExp:Xt,isFunction:G,isStream:Ft,isURLSearchParams:Mt,isTypedArray:Jt,isFileList:Lt,forEach:fe,merge:ge,extend:qt,trim:jt,stripBOM:vt,inherits:It,toFlatObject:Ht,kindOf:Te,kindOfTest:M,endsWith:$t,toArray:zt,forEachEntry:Vt,matchAll:Wt,isHTMLForm:Kt,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:st,freezeMethods:Gt,toObjectSet:Yt,toCamelCase:Qt,noop:Zt,toFiniteNumber:er};function w(t,e,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}u.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ot=w.prototype,it={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{it[t]={value:t}});Object.defineProperties(w,it);Object.defineProperty(ot,"isAxiosError",{value:!0});w.from=(t,e,r,n,s,o)=>{const i=Object.create(ot);return u.toFlatObject(t,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),w.call(i,t.message,e,r,n,s),i.cause=t,i.name=t.name,o&&Object.assign(i,o),i};var tr=typeof self=="object"?self.FormData:window.FormData;function Se(t){return u.isPlainObject(t)||u.isArray(t)}function at(t){return u.endsWith(t,"[]")?t.slice(0,-2):t}function Ce(t,e,r){return t?t.concat(e).map(function(s,o){return s=at(s),!r&&o?"["+s+"]":s}).join(r?".":""):e}function rr(t){return u.isArray(t)&&!t.some(Se)}const nr=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function sr(t){return t&&u.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function de(t,e,r){if(!u.isObject(t))throw new TypeError("target must be an object");e=e||new(tr||FormData),r=u.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,B){return!u.isUndefined(B[_])});const n=r.metaTokens,s=r.visitor||c,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&sr(e);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function a(p){if(p===null)return"";if(u.isDate(p))return p.toISOString();if(!f&&u.isBlob(p))throw new w("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(p)||u.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,_,B){let P=p;if(p&&!B&&typeof p=="object"){if(u.endsWith(_,"{}"))_=n?_:_.slice(0,-2),p=JSON.stringify(p);else if(u.isArray(p)&&rr(p)||u.isFileList(p)||u.endsWith(_,"[]")&&(P=u.toArray(p)))return _=at(_),P.forEach(function(L,Z){!u.isUndefined(L)&&e.append(i===!0?Ce([_],Z,o):i===null?_:_+"[]",a(L))}),!1}return Se(p)?!0:(e.append(Ce(B,_,o),a(p)),!1)}const h=[],d=Object.assign(nr,{defaultVisitor:c,convertValue:a,isVisitable:Se});function m(p,_){if(!u.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(p),u.forEach(p,function(P,E){(!u.isUndefined(P)&&s.call(e,P,u.isString(E)?E.trim():E,_,d))===!0&&m(P,_?_.concat(E):[E])}),h.pop()}}if(!u.isObject(t))throw new TypeError("data must be an object");return m(t),e}function De(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Ae(t,e){this._pairs=[],t&&de(t,this,e)}const lt=Ae.prototype;lt.append=function(e,r){this._pairs.push([e,r])};lt.toString=function(e){const r=e?function(n){return e.call(this,n,De)}:De;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function or(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ct(t,e,r){if(!e)return t;const n=t.indexOf("#");n!==-1&&(t=t.slice(0,n));const s=r&&r.encode||or,o=u.isURLSearchParams(e)?e.toString():new Ae(e,r).toString(s);return o&&(t+=(t.indexOf("?")===-1?"?":"&")+o),t}class Be{constructor(){this.handlers=[]}use(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(n){n!==null&&e(n)})}}const ut={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ir=typeof URLSearchParams<"u"?URLSearchParams:Ae,ar=FormData,lr=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),F={isBrowser:!0,classes:{URLSearchParams:ir,FormData:ar,Blob},isStandardBrowserEnv:lr,protocols:["http","https","file","blob","url","data"]};function cr(t,e){return de(t,new F.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return F.isNode&&u.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function ur(t){return u.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function fr(t){const e={},r=Object.keys(t);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],e[o]=t[o];return e}function ft(t){function e(r,n,s,o){let i=r[o++];const l=Number.isFinite(+i),f=o>=r.length;return i=!i&&u.isArray(s)?s.length:i,f?(u.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!l):((!s[i]||!u.isObject(s[i]))&&(s[i]=[]),e(r,n,s[i],o)&&u.isArray(s[i])&&(s[i]=fr(s[i])),!l)}if(u.isFormData(t)&&u.isFunction(t.entries)){const r={};return u.forEachEntry(t,(n,s)=>{e(ur(n),s,r,0)}),r}return null}function dr(t,e,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new w("Request failed with status code "+r.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const hr=F.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,l){const f=[];f.push(r+"="+encodeURIComponent(n)),u.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),u.isString(o)&&f.push("path="+o),u.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function pr(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function mr(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function dt(t,e){return t&&!pr(e)?mr(t,e):e}const br=F.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const l=u.isString(i)?s(i):i;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function se(t,e,r){w.call(this,t==null?"canceled":t,w.ERR_CANCELED,e,r),this.name="CanceledError"}u.inherits(se,w,{__CANCEL__:!0});function yr(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const wr=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_r=t=>{const e={};let r,n,s;return t&&t.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||e[r]&&wr[r])&&(r==="set-cookie"?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)}),e},Le=Symbol("internals"),ht=Symbol("defaults");function te(t){return t&&String(t).trim().toLowerCase()}function oe(t){return t===!1||t==null?t:String(t)}function Er(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(t);)e[n[1]]=n[2];return e}function Fe(t,e,r,n){if(u.isFunction(n))return n.call(this,e,r);if(!!u.isString(e)){if(u.isString(n))return e.indexOf(n)!==-1;if(u.isRegExp(n))return n.test(e)}}function gr(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,n)=>r.toUpperCase()+n)}function Sr(t,e){const r=u.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(s,o,i){return this[n].call(this,e,s,o,i)},configurable:!0})})}function ee(t,e){e=e.toLowerCase();const r=Object.keys(t);let n=r.length,s;for(;n-- >0;)if(s=r[n],e===s.toLowerCase())return s;return null}function C(t,e){t&&this.set(t),this[ht]=e||null}Object.assign(C.prototype,{set:function(t,e,r){const n=this;function s(o,i,l){const f=te(i);if(!f)throw new Error("header name must be a non-empty string");const a=ee(n,f);a&&l!==!0&&(n[a]===!1||l===!1)||(u.isArray(o)?o=o.map(oe):o=oe(o),n[a||i]=o)}return u.isPlainObject(t)?u.forEach(t,(o,i)=>{s(o,i,e)}):s(e,t,r),this},get:function(t,e){if(t=te(t),!t)return;const r=ee(this,t);if(r){const n=this[r];if(!e)return n;if(e===!0)return Er(n);if(u.isFunction(e))return e.call(this,n,r);if(u.isRegExp(e))return e.exec(n);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=te(t),t){const r=ee(this,t);return!!(r&&(!e||Fe(this,this[r],r,e)))}return!1},delete:function(t,e){const r=this;let n=!1;function s(o){if(o=te(o),o){const i=ee(r,o);i&&(!e||Fe(r,r[i],i,e))&&(delete r[i],n=!0)}}return u.isArray(t)?t.forEach(s):s(t),n},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,r={};return u.forEach(this,(n,s)=>{const o=ee(r,s);if(o){e[o]=oe(n),delete e[s];return}const i=t?gr(s):String(s).trim();i!==s&&delete e[s],e[i]=oe(n),r[i]=!0}),this},toJSON:function(){const t=Object.create(null);return u.forEach(Object.assign({},this[ht]||null,this),(e,r)=>{e==null||e===!1||(t[r]=u.isArray(e)?e.join(", "):e)}),t}});Object.assign(C,{from:function(t){return u.isString(t)?new this(_r(t)):t instanceof this?t:new this(t)},accessor:function(t){const r=(this[Le]=this[Le]={accessors:{}}).accessors,n=this.prototype;function s(o){const i=te(o);r[i]||(Sr(n,o),r[i]=!0)}return u.isArray(t)?t.forEach(s):s(t),this}});C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);u.freezeMethods(C.prototype);u.freezeMethods(C);function Rr(t,e){t=t||10;const r=new Array(t),n=new Array(t);let s=0,o=0,i;return e=e!==void 0?e:1e3,function(f){const a=Date.now(),c=n[o];i||(i=a),r[s]=f,n[s]=a;let h=o,d=0;for(;h!==s;)d+=r[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),a-i<e)return;const m=c&&a-c;return m?Math.round(d*1e3/m):void 0}}function Ue(t,e){let r=0;const n=Rr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-r,f=n(l),a=o<=i;r=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&a?(i-o)/f:void 0};c[e?"download":"upload"]=!0,t(c)}}function Me(t){return new Promise(function(r,n){let s=t.data;const o=C.from(t.headers).normalize(),i=t.responseType;let l;function f(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}u.isFormData(s)&&F.isStandardBrowserEnv&&o.setContentType(!1);let a=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+p))}const c=dt(t.baseURL,t.url);a.open(t.method.toUpperCase(),ct(c,t.params,t.paramsSerializer),!0),a.timeout=t.timeout;function h(){if(!a)return;const m=C.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),_={data:!i||i==="text"||i==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:m,config:t,request:a};dr(function(P){r(P),f()},function(P){n(P),f()},_),a=null}if("onloadend"in a?a.onloadend=h:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(h)},a.onabort=function(){!a||(n(new w("Request aborted",w.ECONNABORTED,t,a)),a=null)},a.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,t,a)),a=null},a.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const _=t.transitional||ut;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),n(new w(p,_.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,t,a)),a=null},F.isStandardBrowserEnv){const m=(t.withCredentials||br(c))&&t.xsrfCookieName&&hr.read(t.xsrfCookieName);m&&o.set(t.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in a&&u.forEach(o.toJSON(),function(p,_){a.setRequestHeader(_,p)}),u.isUndefined(t.withCredentials)||(a.withCredentials=!!t.withCredentials),i&&i!=="json"&&(a.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&a.addEventListener("progress",Ue(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",Ue(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{!a||(n(!m||m.type?new se(null,t,a):m),a.abort(),a=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const d=yr(c);if(d&&F.protocols.indexOf(d)===-1){n(new w("Unsupported protocol "+d+":",w.ERR_BAD_REQUEST,t));return}a.send(s||null)})}const je={http:Me,xhr:Me},qe={getAdapter:t=>{if(u.isString(t)){const e=je[t];if(!t)throw Error(u.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!u.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:je},Or={"Content-Type":"application/x-www-form-urlencoded"};function Tr(){let t;return typeof XMLHttpRequest<"u"?t=qe.getAdapter("xhr"):typeof process<"u"&&u.kindOf(process)==="process"&&(t=qe.getAdapter("http")),t}function Ar(t,e,r){if(u.isString(t))try{return(e||JSON.parse)(t),u.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}const Y={transitional:ut,adapter:Tr(),transformRequest:[function(e,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=u.isObject(e);if(o&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return s&&s?JSON.stringify(ft(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return cr(e,this.formSerializer).toString();if((l=u.isFileList(e))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return de(l?{"files[]":e}:e,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),Ar(e)):e}],transformResponse:[function(e){const r=this.transitional||Y.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(e&&u.isString(e)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(i)throw l.name==="SyntaxError"?w.from(l,w.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};u.forEach(["delete","get","head"],function(e){Y.headers[e]={}});u.forEach(["post","put","patch"],function(e){Y.headers[e]=u.merge(Or)});function me(t,e){const r=this||Y,n=e||r,s=C.from(n.headers);let o=n.data;return u.forEach(t,function(l){o=l.call(r,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function pt(t){return!!(t&&t.__CANCEL__)}function be(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new se}function ve(t){return be(t),t.headers=C.from(t.headers),t.data=me.call(t,t.transformRequest),(t.adapter||Y.adapter)(t).then(function(n){return be(t),n.data=me.call(t,t.transformResponse,n),n.headers=C.from(n.headers),n},function(n){return pt(n)||(be(t),n&&n.response&&(n.response.data=me.call(t,t.transformResponse,n.response),n.response.headers=C.from(n.response.headers))),Promise.reject(n)})}function re(t,e){e=e||{};const r={};function n(a,c){return u.isPlainObject(a)&&u.isPlainObject(c)?u.merge(a,c):u.isPlainObject(c)?u.merge({},c):u.isArray(c)?c.slice():c}function s(a){if(u.isUndefined(e[a])){if(!u.isUndefined(t[a]))return n(void 0,t[a])}else return n(t[a],e[a])}function o(a){if(!u.isUndefined(e[a]))return n(void 0,e[a])}function i(a){if(u.isUndefined(e[a])){if(!u.isUndefined(t[a]))return n(void 0,t[a])}else return n(void 0,e[a])}function l(a){if(a in e)return n(t[a],e[a]);if(a in t)return n(void 0,t[a])}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l};return u.forEach(Object.keys(t).concat(Object.keys(e)),function(c){const h=f[c]||s,d=h(c);u.isUndefined(d)&&h!==l||(r[c]=d)}),r}const mt="1.1.2",xe={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{xe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const Ie={};xe.transitional=function(e,r,n){function s(o,i){return"[Axios v"+mt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,l)=>{if(e===!1)throw new w(s(i," has been removed"+(r?" in "+r:"")),w.ERR_DEPRECATED);return r&&!Ie[i]&&(Ie[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,i,l):!0}};function xr(t,e,r){if(typeof t!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let s=n.length;for(;s-- >0;){const o=n[s],i=e[o];if(i){const l=t[o],f=l===void 0||i(l,o,t);if(f!==!0)throw new w("option "+o+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new w("Unknown option "+o,w.ERR_BAD_OPTION)}}const bt={assertOptions:xr,validators:xe},K=bt.validators;class I{constructor(e){this.defaults=e,this.interceptors={request:new Be,response:new Be}}request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=re(this.defaults,r);const n=r.transitional;n!==void 0&&bt.assertOptions(n,{silentJSONParsing:K.transitional(K.boolean),forcedJSONParsing:K.transitional(K.boolean),clarifyTimeoutError:K.transitional(K.boolean)},!1),r.method=(r.method||this.defaults.method||"get").toLowerCase();const s=r.headers&&u.merge(r.headers.common,r.headers[r.method]);s&&u.forEach(["delete","get","head","post","put","patch","common"],function(m){delete r.headers[m]}),r.headers=new C(r.headers,s);const o=[];let i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(i=i&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let f,a=0,c;if(!i){const d=[ve.bind(this),void 0];for(d.unshift.apply(d,o),d.push.apply(d,l),c=d.length,f=Promise.resolve(r);a<c;)f=f.then(d[a++],d[a++]);return f}c=o.length;let h=r;for(a=0;a<c;){const d=o[a++],m=o[a++];try{h=d(h)}catch(p){m.call(this,p);break}}try{f=ve.call(this,h)}catch(d){return Promise.reject(d)}for(a=0,c=l.length;a<c;)f=f.then(l[a++],l[a++]);return f}getUri(e){e=re(this.defaults,e);const r=dt(e.baseURL,e.url);return ct(r,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){I.prototype[e]=function(r,n){return this.request(re(n||{},{method:e,url:r,data:(n||{}).data}))}});u.forEach(["post","put","patch"],function(e){function r(n){return function(o,i,l){return this.request(re(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[e]=r(),I.prototype[e+"Form"]=r(!0)});class ke{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{n.subscribe(l),o=l}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},e(function(o,i,l){n.reason||(n.reason=new se(o,i,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}static source(){let e;return{token:new ke(function(s){e=s}),cancel:e}}}function kr(t){return function(r){return t.apply(null,r)}}function Nr(t){return u.isObject(t)&&t.isAxiosError===!0}function yt(t){const e=new I(t),r=Ze(I.prototype.request,e);return u.extend(r,I.prototype,e,{allOwnKeys:!0}),u.extend(r,e,null,{allOwnKeys:!0}),r.create=function(s){return yt(re(t,s))},r}const N=yt(Y);N.Axios=I;N.CanceledError=se;N.CancelToken=ke;N.isCancel=pt;N.VERSION=mt;N.toFormData=de;N.AxiosError=w;N.Cancel=N.CanceledError;N.all=function(e){return Promise.all(e)};N.spread=kr;N.isAxiosError=Nr;N.formToJSON=t=>ft(u.isHTMLForm(t)?new FormData(t):t);function He(){return N.create({baseURL:"https://album-saver-web.azurewebsites.net",headers:{"Content-type":"application/json"}})}class $e{async getMusicQuery(e){return(await He().get(`/search?query=${e.query}&page=${e.page}`)).data}async requestMusicEntry(e){const n=await He().post(`/download?userId=${e.userId}&youTubeMusicPlaylistUrl=${e.youTubeMusicPlaylistUrl}`);console.log(n.data)}}class ze{static parseString(e){return JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}static parseJson(e){return JSON.parse(decodeURI(e).replace(/%3A/g,":").replace(/%2C/g,","))}}class wt{static async getAlbums(e){return await new $e().getMusicQuery(e)}static getUserId(){const e=ze.parseString(Telegram.WebApp.initData);return ze.parseJson(e.user).id}static async requestAlbum(e){const n={userId:this.getUserId(),youTubeMusicPlaylistUrl:e};return await new $e().requestMusicEntry(n)}}function Pr(t){let e,r,n,s,o,i,l=t[0].title+"",f,a,c;return{c(){e=O("a"),r=O("img"),o=H(),i=O("p"),f=le(l),this.h()},l(h){e=T(h,"A",{href:!0,class:!0});var d=x(e);r=T(d,"IMG",{src:!0,alt:!0,class:!0}),o=$(d),i=T(d,"P",{class:!0});var m=x(i);f=ce(m,l),m.forEach(y),d.forEach(y),this.h()},h(){we(r.src,n=t[0].imageUrl)||b(r,"src",n),b(r,"alt",s=t[0].title),b(r,"class","w-full rounded-lg"),b(i,"class","truncate dark:text-white"),b(e,"href","/"),b(e,"class","flex flex-col gap-2 cursor-pointer")},m(h,d){k(h,e,d),g(e,r),g(e,o),g(e,i),g(i,f),a||(c=ie(e,"click",ye(t[2])),a=!0)},p(h,[d]){d&1&&!we(r.src,n=h[0].imageUrl)&&b(r,"src",n),d&1&&s!==(s=h[0].title)&&b(r,"alt",s),d&1&&l!==(l=h[0].title+"")&&gt(f,l)},i:R,o:R,d(h){h&&y(e),a=!1,c()}}}function Cr(t,e,r){let{album:n}=e,s=Telegram;const o=async i=>{await wt.requestAlbum(n.youTubeMusicPlaylistUrl),s.WebApp.close()};return t.$$set=i=>{"album"in i&&r(0,n=i.album)},[n,s,o]}class Dr extends q{constructor(e){super(),v(this,e,Cr,Pr,U,{album:0})}}function Je(t){let e;return{c(){e=O("div"),this.h()},l(r){e=T(r,"DIV",{id:!0,style:!0}),x(e).forEach(y),this.h()},h(){b(e,"id","svelte-infinite-scroll"),_e(e,"width","0")},m(r,n){k(r,e,n),t[11](e)},p:R,d(r){r&&y(e),t[11](null)}}}function Br(t){let e,r=!t[1]&&!t[0]&&Je(t);return{c(){r&&r.c(),e=D()},l(n){r&&r.l(n),e=D()},m(n,s){r&&r.m(n,s),k(n,e,s)},p(n,[s]){!n[1]&&!n[0]?r?r.p(n,s):(r=Je(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:R,o:R,d(n){r&&r.d(n),n&&y(e)}}}function Lr(t,e,r){let{threshold:n=0}=e,{horizontal:s=!1}=e,{elementScroll:o=null}=e,{hasMore:i=!0}=e,{reverse:l=!1}=e,{window:f=!1}=e;const a=Xe();let c=!1,h,d,m,p;const _=E=>{if(!i)return;const L=E.target;B(L,l,s)<=n?(!c&&i&&(a("loadMore"),r(8,d=L.scrollHeight),r(9,m=L.scrollTop)),r(7,c=!0)):r(7,c=!1)},B=(E,L,Z)=>{const j=E.documentElement?E.documentElement:E;return L?Z?j.scrollLeft:j.scrollTop:Z?j.scrollWidth-j.clientWidth-j.scrollLeft:j.scrollHeight-j.clientHeight-j.scrollTop};Re(()=>{f?r(10,p=document):o?r(10,p=o):r(10,p=h.parentNode)}),St(()=>{p&&(p.removeEventListener("scroll",_),p.removeEventListener("resize",_))});function P(E){Ge[E?"unshift":"push"](()=>{h=E,r(2,h)})}return t.$$set=E=>{"threshold"in E&&r(3,n=E.threshold),"horizontal"in E&&r(4,s=E.horizontal),"elementScroll"in E&&r(0,o=E.elementScroll),"hasMore"in E&&r(5,i=E.hasMore),"reverse"in E&&r(6,l=E.reverse),"window"in E&&r(1,f=E.window)},t.$$.update=()=>{t.$$.dirty&1088&&p&&(l&&r(10,p.scrollTop=p.scrollHeight,p),p.addEventListener("scroll",_),p.addEventListener("resize",_)),t.$$.dirty&1984&&c&&l&&r(10,p.scrollTop=p.scrollHeight-d+m,p)},[o,f,h,n,s,i,l,c,d,m,p,P]}class Fr extends q{constructor(e){super(),v(this,e,Lr,Br,U,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function Ur(t,e,r){const n=t.slice();return n[0]=e[r],n}function Mr(t){let e,r,n,s,o;return{c(){e=O("div"),r=O("div"),n=H(),s=O("p"),o=H(),this.h()},l(i){e=T(i,"DIV",{class:!0});var l=x(e);r=T(l,"DIV",{class:!0}),x(r).forEach(y),n=$(l),s=T(l,"P",{class:!0}),x(s).forEach(y),o=$(l),l.forEach(y),this.h()},h(){b(r,"class","bg-gray-200 h-full w-full rounded-lg"),b(s,"class","bg-gray-200 h-5 rounded-lg"),b(e,"class","flex flex-col gap-2 h-48 w-full")},m(i,l){k(i,e,l),g(e,r),g(e,n),g(e,s),g(e,o)},p:R,d(i){i&&y(e)}}}function jr(t){let e,r=Array(8),n=[];for(let s=0;s<r.length;s+=1)n[s]=Mr(Ur(t,r,s));return{c(){e=O("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var o=x(e);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(y),this.h()},h(){b(e,"class","grid grid-cols-2 p-4 gap-4 animate-pulse album-list")},m(s,o){k(s,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p:R,i:R,o:R,d(s){s&&y(e),Ye(n,s)}}}class qr extends q{constructor(e){super(),v(this,e,null,jr,U,{})}}function vr(t){let e,r,n,s;return{c(){e=O("div"),r=he("svg"),n=he("circle"),s=he("path"),this.h()},l(o){e=T(o,"DIV",{class:!0});var i=x(e);r=pe(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var l=x(r);n=pe(l,"circle",{style:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),x(n).forEach(y),s=pe(l,"path",{style:!0,fill:!0,d:!0}),x(s).forEach(y),l.forEach(y),i.forEach(y),this.h()},h(){_e(n,"opacity","0.05"),b(n,"cx","12"),b(n,"cy","12"),b(n,"r","10"),b(n,"stroke","currentColor"),b(n,"stroke-width","4"),_e(s,"opacity","1"),b(s,"fill","currentColor"),b(s,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),b(r,"xmlns","http://www.w3.org/2000/svg"),b(r,"fill","none"),b(r,"viewBox","0 0 24 24"),b(r,"class","h-5 w-5 animate-spin text-black dark:text-white"),b(e,"class","flex justify-center")},m(o,i){k(o,e,i),g(e,r),g(r,n),g(r,s)},p:R,i:R,o:R,d(o){o&&y(e)}}}class Ir extends q{constructor(e){super(),v(this,e,null,vr,U,{})}}function Ve(t,e,r){const n=t.slice();return n[7]=e[r],n}function Hr(t){let e,r,n,s,o,i=t[0],l=[];for(let c=0;c<i.length;c+=1)l[c]=We(Ve(t,i,c));const f=c=>A(l[c],1,1,()=>{l[c]=null});n=new Fr({props:{threshold:100}}),n.$on("loadMore",t[2]);let a=t[1]&&Ke();return{c(){e=O("div");for(let c=0;c<l.length;c+=1)l[c].c();r=H(),z(n.$$.fragment),s=H(),a&&a.c(),this.h()},l(c){e=T(c,"DIV",{class:!0});var h=x(e);for(let d=0;d<l.length;d+=1)l[d].l(h);r=$(h),J(n.$$.fragment,h),s=$(h),a&&a.l(h),h.forEach(y),this.h()},h(){b(e,"class","album-list")},m(c,h){k(c,e,h);for(let d=0;d<l.length;d+=1)l[d].m(e,null);g(e,r),V(n,e,null),g(e,s),a&&a.m(e,null),o=!0},p(c,h){if(h&1){i=c[0];let d;for(d=0;d<i.length;d+=1){const m=Ve(c,i,d);l[d]?(l[d].p(m,h),S(l[d],1)):(l[d]=We(m),l[d].c(),S(l[d],1),l[d].m(e,r))}for(Q(),d=i.length;d<l.length;d+=1)f(d);X()}c[1]?a?h&2&&S(a,1):(a=Ke(),a.c(),S(a,1),a.m(e,null)):a&&(Q(),A(a,1,1,()=>{a=null}),X())},i(c){if(!o){for(let h=0;h<i.length;h+=1)S(l[h]);S(n.$$.fragment,c),S(a),o=!0}},o(c){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)A(l[h]);A(n.$$.fragment,c),A(a),o=!1},d(c){c&&y(e),Ye(l,c),W(n),a&&a.d()}}}function $r(t){let e,r;return e=new qr({}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p:R,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function We(t){let e,r;return e=new Dr({props:{album:t[7]}}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p(n,s){const o={};s&1&&(o.album=n[7]),e.$set(o)},i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function Ke(t){let e,r,n;return r=new Ir({}),{c(){e=O("div"),z(r.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var o=x(e);J(r.$$.fragment,o),o.forEach(y),this.h()},h(){b(e,"class","col-span-2 h-5")},m(s,o){k(s,e,o),V(r,e,null),n=!0},i(s){n||(S(r.$$.fragment,s),n=!0)},o(s){A(r.$$.fragment,s),n=!1},d(s){s&&y(e),W(r)}}}function zr(t){let e,r,n,s;const o=[$r,Hr],i=[];function l(f,a){return f[0].length?1:0}return e=l(t),r=i[e]=o[e](t),{c(){r.c(),n=D()},l(f){r.l(f),n=D()},m(f,a){i[e].m(f,a),k(f,n,a),s=!0},p(f,[a]){let c=e;e=l(f),e===c?i[e].p(f,a):(Q(),A(i[c],1,1,()=>{i[c]=null}),X(),r=i[e],r?r.p(f,a):(r=i[e]=o[e](f),r.c()),S(r,1),r.m(n.parentNode,n))},i(f){s||(S(r),s=!0)},o(f){A(r),s=!1},d(f){i[e].d(f),f&&y(n)}}}function Jr(t,e,r){let{query:n}=e,s=n,o=[],i=[],l=!1;async function f(){r(4,i=await wt.getAlbums(s)),r(1,l=!1)}function a(){r(1,l=!0),s.page++,f()}return Re(()=>{f()}),t.$$set=c=>{"query"in c&&r(3,n=c.query)},t.$$.update=()=>{t.$$.dirty&17&&r(0,o=[...o,...i])},[o,l,a,n,i]}class Vr extends q{constructor(e){super(),v(this,e,Jr,zr,U,{query:3})}}function Wr(t){let e,r,n;return{c(){e=O("div"),r=O("img"),this.h()},l(s){e=T(s,"DIV",{class:!0});var o=x(e);r=T(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(y),this.h()},h(){we(r.src,n=Rt+"/headphones.webp")||b(r,"src",n),b(r,"alt","headphones"),b(r,"class","drop-shadow-xl"),b(e,"class","headphones")},m(s,o){k(s,e,o),g(e,r)},p:R,i:R,o:R,d(s){s&&y(e)}}}function Kr(t){let e=t[0],r,n,s=Qe(t);return{c(){s.c(),r=D()},l(o){s.l(o),r=D()},m(o,i){s.m(o,i),k(o,r,i),n=!0},p(o,i){i&1&&U(e,e=o[0])?(Q(),A(s,1,1,R),X(),s=Qe(o),s.c(),S(s,1),s.m(r.parentNode,r)):s.p(o,i)},i(o){n||(S(s),n=!0)},o(o){A(s),n=!1},d(o){o&&y(r),s.d(o)}}}function Qe(t){let e,r;return e=new Vr({props:{query:t[0]}}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p(n,s){const o={};s&1&&(o.query=n[0]),e.$set(o)},i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function Qr(t){let e,r,n,s,o,i;e=new At({}),e.$on("search",t[1]);const l=[Kr,Wr],f=[];function a(c,h){var d;return(d=c[0])!=null&&d.query?0:1}return n=a(t),s=f[n]=l[n](t),{c(){z(e.$$.fragment),r=H(),s.c(),o=D()},l(c){J(e.$$.fragment,c),r=$(c),s.l(c),o=D()},m(c,h){V(e,c,h),k(c,r,h),f[n].m(c,h),k(c,o,h),i=!0},p(c,[h]){let d=n;n=a(c),n===d?f[n].p(c,h):(Q(),A(f[d],1,1,()=>{f[d]=null}),X(),s=f[n],s?s.p(c,h):(s=f[n]=l[n](c),s.c()),S(s,1),s.m(o.parentNode,o))},i(c){i||(S(e.$$.fragment,c),S(s),i=!0)},o(c){A(e.$$.fragment,c),A(s),i=!1},d(c){W(e,c),c&&y(r),f[n].d(c),c&&y(o)}}}function Xr(t,e,r){let n;function s(o){r(0,n={query:o.detail.value,page:0})}return[n,s]}class Gr extends q{constructor(e){super(),v(this,e,Xr,Qr,U,{})}}function Yr(t){let e,r,n,s,o;return{c(){e=O("p"),r=le("You can use this website only with a"),n=O("br"),s=O("a"),o=le("Telegram bot"),this.h()},l(i){e=T(i,"P",{class:!0});var l=x(e);r=ce(l,"You can use this website only with a"),n=T(l,"BR",{}),s=T(l,"A",{class:!0,href:!0});var f=x(s);o=ce(f,"Telegram bot"),f.forEach(y),l.forEach(y),this.h()},h(){b(s,"class","text-blue-700 underline"),b(s,"href","https://t.me/album_saver_web_tes_bot"),b(e,"class","w-full text-center p-10 font-semibold leading-loose")},m(i,l){k(i,e,l),g(e,r),g(e,n),g(e,s),g(s,o)},i:R,o:R,d(i){i&&y(e)}}}function Zr(t){let e,r;return e=new Gr({}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function en(t){let e,r,n,s;const o=[Zr,Yr],i=[];function l(f,a){var c;return(c=f[0])!=null&&c.WebApp.initData?0:1}return e=l(t),r=i[e]=o[e](t),{c(){r.c(),n=D()},l(f){r.l(f),n=D()},m(f,a){i[e].m(f,a),k(f,n,a),s=!0},p(f,[a]){let c=e;e=l(f),e!==c&&(Q(),A(i[c],1,1,()=>{i[c]=null}),X(),r=i[e],r||(r=i[e]=o[e](f),r.c()),S(r,1),r.m(n.parentNode,n))},i(f){s||(S(r),s=!0)},o(f){A(r),s=!1},d(f){i[e].d(f),f&&y(n)}}}function tn(t,e,r){let n;return Re(async()=>{r(0,n=Telegram)}),[n]}class sn extends q{constructor(e){super(),v(this,e,tn,en,U,{})}}export{sn as default};