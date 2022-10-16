import{S as K,i as Q,s as I,k as g,a as q,q as z,l as S,m as A,h as y,c as j,r as V,n as E,b as N,F as _,H as Se,I as ue,J as Je,A as R,K as ht,L as pt,M as ze,N as Re,e as $,O as mt,f as T,t as P,u as Ve,P as Oe,v as ee,w as te,x as re,y as ne,g as me,d as be,o as bt}from"../../chunks/index-112d494e.js";function yt(e){let t,r,n,s,i,o,l,u;return{c(){t=g("form"),r=g("label"),n=g("input"),s=q(),i=g("button"),o=z("Search"),this.h()},l(a){t=S(a,"FORM",{class:!0});var f=A(t);r=S(f,"LABEL",{class:!0});var w=A(r);n=S(w,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),w.forEach(y),s=j(f),i=S(f,"BUTTON",{type:!0,class:!0});var m=A(i);o=V(m,"Search"),m.forEach(y),f.forEach(y),this.h()},h(){E(n,"type","text"),E(n,"id","search_album"),E(n,"class","bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),E(n,"placeholder","What do you want to listen to?"),n.required=!0,E(r,"class","w-full"),E(i,"type","submit"),E(i,"class","p-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"),E(t,"class","w-full p-4 flex gap-4 justify-between")},m(a,f){N(a,t,f),_(t,r),_(r,n),Se(n,e[0]),_(t,s),_(t,i),_(i,o),l||(u=[ue(n,"input",e[2]),ue(t,"submit",Je(e[1]))],l=!0)},p(a,[f]){f&1&&n.value!==a[0]&&Se(n,a[0])},i:R,o:R,d(a){a&&y(t),l=!1,ht(u)}}}function wt(e,t,r){const n=pt();function s(){n("search",{value:i})}let i;function o(){i=this.value,r(0,i)}return[i,s,o]}class Et extends K{constructor(t){super(),Q(this,t,wt,yt,I,{})}}function We(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ke}=Object.prototype,{getPrototypeOf:ye}=Object,we=(e=>t=>{const r=Ke.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>we(t)===e),se=e=>t=>typeof t===e,{isArray:X}=Array,fe=se("undefined");function _t(e){return e!==null&&!fe(e)&&e.constructor!==null&&!fe(e.constructor)&&M(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Qe=D("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Qe(e.buffer),t}const St=se("string"),M=se("function"),Xe=se("number"),Ye=e=>e!==null&&typeof e=="object",Rt=e=>e===!0||e===!1,Z=e=>{if(we(e)!=="object")return!1;const t=ye(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ot=D("Date"),At=D("File"),Tt=D("Blob"),xt=D("FileList"),Nt=e=>Ye(e)&&M(e.pipe),Pt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ke.call(e)===t||M(e.toString)&&e.toString()===t)},kt=D("URLSearchParams"),Ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oe(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),X(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(n=0;n<o;n++)l=i[n],t.call(null,e[l],l,e)}}function de(){const e={},t=(r,n)=>{Z(e[n])&&Z(r)?e[n]=de(e[n],r):Z(r)?e[n]=de({},r):X(r)?e[n]=r.slice():e[n]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&oe(arguments[r],t);return e}const Dt=(e,t,r,{allOwnKeys:n}={})=>(oe(t,(s,i)=>{r&&M(s)?e[i]=We(s,r):e[i]=s},{allOwnKeys:n}),e),$t=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ft=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Bt=(e,t,r,n)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!n||n(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&ye(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ut=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Lt=e=>{if(!e)return null;if(X(e))return e;let t=e.length;if(!Xe(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ye(Uint8Array)),jt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},It=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Mt=D("HTMLFormElement"),vt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ht=D("RegExp"),Ge=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};oe(r,(s,i)=>{t(s,i,e)!==!1&&(n[i]=s)}),Object.defineProperties(e,n)},Jt=e=>{Ge(e,(t,r)=>{const n=e[r];if(!!M(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+r+"'")})}})},zt=(e,t)=>{const r={},n=s=>{s.forEach(i=>{r[i]=!0})};return X(e)?n(e):n(String(e).split(t)),r},Vt=()=>{},Wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),c={isArray:X,isArrayBuffer:Qe,isBuffer:_t,isFormData:Pt,isArrayBufferView:gt,isString:St,isNumber:Xe,isBoolean:Rt,isObject:Ye,isPlainObject:Z,isUndefined:fe,isDate:Ot,isFile:At,isBlob:Tt,isRegExp:Ht,isFunction:M,isStream:Nt,isURLSearchParams:kt,isTypedArray:qt,isFileList:xt,forEach:oe,merge:de,extend:Dt,trim:Ct,stripBOM:$t,inherits:Ft,toFlatObject:Bt,kindOf:we,kindOfTest:D,endsWith:Ut,toArray:Lt,forEachEntry:jt,matchAll:It,isHTMLForm:Mt,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:Ge,freezeMethods:Jt,toObjectSet:zt,toCamelCase:vt,noop:Vt,toFiniteNumber:Wt};function p(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}c.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ze=p.prototype,et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{et[e]={value:e}});Object.defineProperties(p,et);Object.defineProperty(Ze,"isAxiosError",{value:!0});p.from=(e,t,r,n,s,i)=>{const o=Object.create(Ze);return c.toFlatObject(e,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),p.call(o,e.message,t,r,n,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var Kt=typeof self=="object"?self.FormData:window.FormData;function he(e){return c.isPlainObject(e)||c.isArray(e)}function tt(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Te(e,t,r){return e?e.concat(t).map(function(s,i){return s=tt(s),!r&&i?"["+s+"]":s}).join(r?".":""):t}function Qt(e){return c.isArray(e)&&!e.some(he)}const Xt=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Yt(e){return e&&c.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function ie(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new(Kt||FormData),r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,F){return!c.isUndefined(F[b])});const n=r.metaTokens,s=r.visitor||f,i=r.dots,o=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&Yt(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function a(d){if(d===null)return"";if(c.isDate(d))return d.toISOString();if(!u&&c.isBlob(d))throw new p("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(d)||c.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,b,F){let k=d;if(d&&!F&&typeof d=="object"){if(c.endsWith(b,"{}"))b=n?b:b.slice(0,-2),d=JSON.stringify(d);else if(c.isArray(d)&&Qt(d)||c.isFileList(d)||c.endsWith(b,"[]")&&(k=c.toArray(d)))return b=tt(b),k.forEach(function(ae,dt){!c.isUndefined(ae)&&t.append(o===!0?Te([b],dt,i):o===null?b:b+"[]",a(ae))}),!1}return he(d)?!0:(t.append(Te(F,b,i),a(d)),!1)}const w=[],m=Object.assign(Xt,{defaultVisitor:f,convertValue:a,isVisitable:he});function h(d,b){if(!c.isUndefined(d)){if(w.indexOf(d)!==-1)throw Error("Circular reference detected in "+b.join("."));w.push(d),c.forEach(d,function(k,U){(!c.isUndefined(k)&&s.call(t,k,c.isString(U)?U.trim():U,b,m))===!0&&h(k,b?b.concat(U):[U])}),w.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return h(e),t}function xe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ee(e,t){this._pairs=[],e&&ie(e,this,t)}const rt=Ee.prototype;rt.append=function(t,r){this._pairs.push([t,r])};rt.toString=function(t){const r=t?function(n){return t.call(this,n,xe)}:xe;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nt(e,t,r){if(!t)return e;const n=e.indexOf("#");n!==-1&&(e=e.slice(0,n));const s=r&&r.encode||Gt,i=c.isURLSearchParams(t)?t.toString():new Ee(t,r).toString(s);return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}class Ne{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}const st={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zt=typeof URLSearchParams<"u"?URLSearchParams:Ee,er=FormData,tr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),C={isBrowser:!0,classes:{URLSearchParams:Zt,FormData:er,Blob},isStandardBrowserEnv:tr,protocols:["http","https","file","blob","url","data"]};function rr(e,t){return ie(e,new C.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,i){return C.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function nr(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sr(e){const t={},r=Object.keys(e);let n;const s=r.length;let i;for(n=0;n<s;n++)i=r[n],t[i]=e[i];return t}function ot(e){function t(r,n,s,i){let o=r[i++];const l=Number.isFinite(+o),u=i>=r.length;return o=!o&&c.isArray(s)?s.length:o,u?(c.hasOwnProp(s,o)?s[o]=[s[o],n]:s[o]=n,!l):((!s[o]||!c.isObject(s[o]))&&(s[o]=[]),t(r,n,s[o],i)&&c.isArray(s[o])&&(s[o]=sr(s[o])),!l)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(n,s)=>{t(nr(n),s,r,0)}),r}return null}function or(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new p("Request failed with status code "+r.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const ir=C.isStandardBrowserEnv?function(){return{write:function(r,n,s,i,o,l){const u=[];u.push(r+"="+encodeURIComponent(n)),c.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),c.isString(i)&&u.push("path="+i),c.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ar(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function it(e,t){return e&&!ar(t)?cr(e,t):t}const lr=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(i){let o=i;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){const l=c.isString(o)?s(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function Y(e,t,r){p.call(this,e==null?"canceled":e,p.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(Y,p,{__CANCEL__:!0});function ur(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const fr=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dr=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),n=o.substring(s+1).trim(),!(!r||t[r]&&fr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Pe=Symbol("internals"),at=Symbol("defaults");function J(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:String(e)}function hr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}function ke(e,t,r,n){if(c.isFunction(n))return n.call(this,t,r);if(!!c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function pr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function mr(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,i,o){return this[n].call(this,t,s,i,o)},configurable:!0})})}function H(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}function x(e,t){e&&this.set(e),this[at]=t||null}Object.assign(x.prototype,{set:function(e,t,r){const n=this;function s(i,o,l){const u=J(o);if(!u)throw new Error("header name must be a non-empty string");const a=H(n,u);a&&l!==!0&&(n[a]===!1||l===!1)||(c.isArray(i)?i=i.map(G):i=G(i),n[a||o]=i)}return c.isPlainObject(e)?c.forEach(e,(i,o)=>{s(i,o,t)}):s(t,e,r),this},get:function(e,t){if(e=J(e),!e)return;const r=H(this,e);if(r){const n=this[r];if(!t)return n;if(t===!0)return hr(n);if(c.isFunction(t))return t.call(this,n,r);if(c.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=J(e),e){const r=H(this,e);return!!(r&&(!t||ke(this,this[r],r,t)))}return!1},delete:function(e,t){const r=this;let n=!1;function s(i){if(i=J(i),i){const o=H(r,i);o&&(!t||ke(r,r[o],o,t))&&(delete r[o],n=!0)}}return c.isArray(e)?e.forEach(s):s(e),n},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,r={};return c.forEach(this,(n,s)=>{const i=H(r,s);if(i){t[i]=G(n),delete t[s];return}const o=e?pr(s):String(s).trim();o!==s&&delete t[s],t[o]=G(n),r[o]=!0}),this},toJSON:function(){const e=Object.create(null);return c.forEach(Object.assign({},this[at]||null,this),(t,r)=>{t==null||t===!1||(e[r]=c.isArray(t)?t.join(", "):t)}),e}});Object.assign(x,{from:function(e){return c.isString(e)?new this(dr(e)):e instanceof this?e:new this(e)},accessor:function(e){const r=(this[Pe]=this[Pe]={accessors:{}}).accessors,n=this.prototype;function s(i){const o=J(i);r[o]||(mr(n,i),r[o]=!0)}return c.isArray(e)?e.forEach(s):s(e),this}});x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(x.prototype);c.freezeMethods(x);function br(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(u){const a=Date.now(),f=n[i];o||(o=a),r[s]=u,n[s]=a;let w=i,m=0;for(;w!==s;)m+=r[w++],w=w%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),a-o<t)return;const h=f&&a-f;return h?Math.round(m*1e3/h):void 0}}function Ce(e,t){let r=0;const n=br(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-r,u=n(l),a=i<=o;r=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:u||void 0,estimated:u&&o&&a?(o-i)/u:void 0};f[t?"download":"upload"]=!0,e(f)}}function De(e){return new Promise(function(r,n){let s=e.data;const i=x.from(e.headers).normalize(),o=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}c.isFormData(s)&&C.isStandardBrowserEnv&&i.setContentType(!1);let a=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+d))}const f=it(e.baseURL,e.url);a.open(e.method.toUpperCase(),nt(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function w(){if(!a)return;const h=x.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:h,config:e,request:a};or(function(k){r(k),u()},function(k){n(k),u()},b),a=null}if("onloadend"in a?a.onloadend=w:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(w)},a.onabort=function(){!a||(n(new p("Request aborted",p.ECONNABORTED,e,a)),a=null)},a.onerror=function(){n(new p("Network Error",p.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||st;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),n(new p(d,b.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,a)),a=null},C.isStandardBrowserEnv){const h=(e.withCredentials||lr(f))&&e.xsrfCookieName&&ir.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}s===void 0&&i.setContentType(null),"setRequestHeader"in a&&c.forEach(i.toJSON(),function(d,b){a.setRequestHeader(b,d)}),c.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),o&&o!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=h=>{!a||(n(!h||h.type?new Y(null,e,a):h),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=ur(f);if(m&&C.protocols.indexOf(m)===-1){n(new p("Unsupported protocol "+m+":",p.ERR_BAD_REQUEST,e));return}a.send(s||null)})}const $e={http:De,xhr:De},Fe={getAdapter:e=>{if(c.isString(e)){const t=$e[e];if(!e)throw Error(c.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!c.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:$e},yr={"Content-Type":"application/x-www-form-urlencoded"};function wr(){let e;return typeof XMLHttpRequest<"u"?e=Fe.getAdapter("xhr"):typeof process<"u"&&c.kindOf(process)==="process"&&(e=Fe.getAdapter("http")),e}function Er(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const v={transitional:st,adapter:wr(),transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(ot(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rr(t,this.formSerializer).toString();if((l=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ie(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||s?(r.setContentType("application/json",!1),Er(t)):t}],transformResponse:[function(t){const r=this.transitional||v.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(n&&!this.responseType||s)){const o=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?p.from(l,p.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){v.headers[t]={}});c.forEach(["post","put","patch"],function(t){v.headers[t]=c.merge(yr)});function ce(e,t){const r=this||v,n=t||r,s=x.from(n.headers);let i=n.data;return c.forEach(e,function(l){i=l.call(r,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ct(e){return!!(e&&e.__CANCEL__)}function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Y}function Be(e){return le(e),e.headers=x.from(e.headers),e.data=ce.call(e,e.transformRequest),(e.adapter||v.adapter)(e).then(function(n){return le(e),n.data=ce.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return ct(n)||(le(e),n&&n.response&&(n.response.data=ce.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}function W(e,t){t=t||{};const r={};function n(a,f){return c.isPlainObject(a)&&c.isPlainObject(f)?c.merge(a,f):c.isPlainObject(f)?c.merge({},f):c.isArray(f)?f.slice():f}function s(a){if(c.isUndefined(t[a])){if(!c.isUndefined(e[a]))return n(void 0,e[a])}else return n(e[a],t[a])}function i(a){if(!c.isUndefined(t[a]))return n(void 0,t[a])}function o(a){if(c.isUndefined(t[a])){if(!c.isUndefined(e[a]))return n(void 0,e[a])}else return n(void 0,t[a])}function l(a){if(a in t)return n(e[a],t[a]);if(a in e)return n(void 0,e[a])}const u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const w=u[f]||s,m=w(f);c.isUndefined(m)&&w!==l||(r[f]=m)}),r}const lt="1.1.2",_e={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_e[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ue={};_e.transitional=function(t,r,n){function s(i,o){return"[Axios v"+lt+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,l)=>{if(t===!1)throw new p(s(o," has been removed"+(r?" in "+r:"")),p.ERR_DEPRECATED);return r&&!Ue[o]&&(Ue[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,l):!0}};function _r(e,t,r){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const i=n[s],o=t[i];if(o){const l=e[i],u=l===void 0||o(l,i,e);if(u!==!0)throw new p("option "+i+" must be "+u,p.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new p("Unknown option "+i,p.ERR_BAD_OPTION)}}const ut={assertOptions:_r,validators:_e},L=ut.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new Ne,response:new Ne}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=W(this.defaults,r);const n=r.transitional;n!==void 0&&ut.assertOptions(n,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),r.method=(r.method||this.defaults.method||"get").toLowerCase();const s=r.headers&&c.merge(r.headers.common,r.headers[r.method]);s&&c.forEach(["delete","get","head","post","put","patch","common"],function(h){delete r.headers[h]}),r.headers=new x(r.headers,s);const i=[];let o=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(o=o&&h.synchronous,i.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,a=0,f;if(!o){const m=[Be.bind(this),void 0];for(m.unshift.apply(m,i),m.push.apply(m,l),f=m.length,u=Promise.resolve(r);a<f;)u=u.then(m[a++],m[a++]);return u}f=i.length;let w=r;for(a=0;a<f;){const m=i[a++],h=i[a++];try{w=m(w)}catch(d){h.call(this,d);break}}try{u=Be.call(this,w)}catch(m){return Promise.reject(m)}for(a=0,f=l.length;a<f;)u=u.then(l[a++],l[a++]);return u}getUri(t){t=W(this.defaults,t);const r=it(t.baseURL,t.url);return nt(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(r,n){return this.request(W(n||{},{method:t,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(n){return function(i,o,l){return this.request(W(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}B.prototype[t]=r(),B.prototype[t+"Form"]=r(!0)});class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(s=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](s);n._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{n.subscribe(l),i=l}).then(s);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i,o,l){n.reason||(n.reason=new Y(i,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ge(function(s){t=s}),cancel:t}}}function gr(e){return function(r){return e.apply(null,r)}}function Sr(e){return c.isObject(e)&&e.isAxiosError===!0}function ft(e){const t=new B(e),r=We(B.prototype.request,t);return c.extend(r,B.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return ft(W(e,s))},r}const O=ft(v);O.Axios=B;O.CanceledError=Y;O.CancelToken=ge;O.isCancel=ct;O.VERSION=lt;O.toFormData=ie;O.AxiosError=p;O.Cancel=O.CanceledError;O.all=function(t){return Promise.all(t)};O.spread=gr;O.isAxiosError=Sr;O.formToJSON=e=>ot(c.isHTMLForm(e)?new FormData(e):e);function Le(){return O.create({baseURL:"https://ytmusicdownloaderwebapi.azurewebsites.net/",headers:{"Content-type":"application/json"}})}class qe{async getMusicQuery(t){return(await Le().get(`/search?query=${t.query}&page=${t.page}`)).data}async requestMusicEntry(t){const n=await Le().post(`/download?userId=${t.userId}&youTubeMusicPlaylistUrl=${t.youTubeMusicPlaylistUrl}`);console.log(n.data)}}class je{static parseString(t){return JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}static parseJson(t){return JSON.parse(decodeURI(t).replace(/%3A/g,":").replace(/%2C/g,","))}}class pe{static async getAlbums(t){return await new qe().getMusicQuery(t)}static getUserId(){const t=je.parseString(Telegram.WebApp.initData);return je.parseJson(t.user).id}static async requestAlbum(t){const n={userId:this.getUserId(),youTubeMusicPlaylistUrl:t};return await new qe().requestMusicEntry(n)}}function Rr(e,t,r){const n=e.slice();return n[0]=t[r],n}function Or(e){let t,r,n,s,i;return{c(){t=g("div"),r=g("div"),n=q(),s=g("p"),i=q(),this.h()},l(o){t=S(o,"DIV",{class:!0});var l=A(t);r=S(l,"DIV",{class:!0}),A(r).forEach(y),n=j(l),s=S(l,"P",{class:!0}),A(s).forEach(y),i=j(l),l.forEach(y),this.h()},h(){E(r,"class","bg-gray-200 h-full w-full rounded-lg"),E(s,"class","bg-gray-200 h-5 rounded-lg"),E(t,"class","flex flex-col gap-2 h-48 w-full")},m(o,l){N(o,t,l),_(t,r),_(t,n),_(t,s),_(t,i)},p:R,d(o){o&&y(t)}}}function Ar(e){let t,r=Array(8),n=[];for(let s=0;s<r.length;s+=1)n[s]=Or(Rr(e,r,s));return{c(){t=g("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=S(s,"DIV",{class:!0});var i=A(t);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(y),this.h()},h(){E(t,"class","grid grid-cols-2 p-4 gap-4 animate-pulse")},m(s,i){N(s,t,i);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p:R,i:R,o:R,d(s){s&&y(t),ze(n,s)}}}class Tr extends K{constructor(t){super(),Q(this,t,null,Ar,I,{})}}function Ie(e,t,r){const n=e.slice();return n[3]=t[r].youTubeMusicPlaylistUrl,n[4]=t[r].title,n[5]=t[r].imageUrl,n}function xr(e){let t,r=e[8].message+"",n;return{c(){t=g("p"),n=z(r)},l(s){t=S(s,"P",{});var i=A(t);n=V(i,r),i.forEach(y)},m(s,i){N(s,t,i),_(t,n)},p(s,i){i&1&&r!==(r=s[8].message+"")&&Ve(n,r)},i:R,o:R,d(s){s&&y(t)}}}function Nr(e){let t,r=e[2],n=[];for(let s=0;s<r.length;s+=1)n[s]=Me(Ie(e,r,s));return{c(){t=g("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=S(s,"DIV",{class:!0});var i=A(t);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(y),this.h()},h(){E(t,"class","grid grid-cols-2 p-4 gap-4")},m(s,i){N(s,t,i);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(s,i){if(i&1){r=s[2];let o;for(o=0;o<r.length;o+=1){const l=Ie(s,r,o);n[o]?n[o].p(l,i):(n[o]=Me(l),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},i:R,o:R,d(s){s&&y(t),ze(n,s)}}}function Me(e){let t,r,n,s,i,o,l=e[4]+"",u,a,f,w;function m(...h){return e[1](e[3],...h)}return{c(){t=g("a"),r=g("img"),i=q(),o=g("p"),u=z(l),a=q(),this.h()},l(h){t=S(h,"A",{href:!0,class:!0});var d=A(t);r=S(d,"IMG",{src:!0,alt:!0,class:!0}),i=j(d),o=S(d,"P",{class:!0});var b=A(o);u=V(b,l),b.forEach(y),a=j(d),d.forEach(y),this.h()},h(){Oe(r.src,n=e[5])||E(r,"src",n),E(r,"alt",s=e[4]),E(r,"class","w-full rounded-lg"),E(o,"class","truncate dark:text-white"),E(t,"href","/"),E(t,"class","flex flex-col gap-2 cursor-pointer")},m(h,d){N(h,t,d),_(t,r),_(t,i),_(t,o),_(o,u),_(t,a),f||(w=ue(t,"click",Je(m)),f=!0)},p(h,d){e=h,d&1&&!Oe(r.src,n=e[5])&&E(r,"src",n),d&1&&s!==(s=e[4])&&E(r,"alt",s),d&1&&l!==(l=e[4]+"")&&Ve(u,l)},d(h){h&&y(t),f=!1,w()}}}function Pr(e){let t,r;return t=new Tr({}),{c(){ee(t.$$.fragment)},l(n){te(t.$$.fragment,n)},m(n,s){re(t,n,s),r=!0},p:R,i(n){r||(T(t.$$.fragment,n),r=!0)},o(n){P(t.$$.fragment,n),r=!1},d(n){ne(t,n)}}}function kr(e){let t,r,n,s={ctx:e,current:null,token:null,hasCatch:!0,pending:Pr,then:Nr,catch:xr,value:2,error:8,blocks:[,,,]};return Re(r=pe.getAlbums(e[0]),s),{c(){t=$(),s.block.c()},l(i){t=$(),s.block.l(i)},m(i,o){N(i,t,o),s.block.m(i,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,n=!0},p(i,[o]){e=i,s.ctx=e,o&1&&r!==(r=pe.getAlbums(e[0]))&&Re(r,s)||mt(s,e,o)},i(i){n||(T(s.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const l=s.blocks[o];P(l)}n=!1},d(i){i&&y(t),s.block.d(i),s.token=null,s=null}}}function Cr(e,t,r){let{query:n}=t;const s=async(i,o)=>{await pe.requestAlbum(i),Telegram.WebApp.close()};return e.$$set=i=>{"query"in i&&r(0,n=i.query)},[n,s]}class Dr extends K{constructor(t){super(),Q(this,t,Cr,kr,I,{query:0})}}function ve(e){let t=e[0].query,r,n,s=He(e);return{c(){s.c(),r=$()},l(i){s.l(i),r=$()},m(i,o){s.m(i,o),N(i,r,o),n=!0},p(i,o){o&1&&I(t,t=i[0].query)?(me(),P(s,1,1,R),be(),s=He(i),s.c(),T(s,1),s.m(r.parentNode,r)):s.p(i,o)},i(i){n||(T(s),n=!0)},o(i){P(s),n=!1},d(i){i&&y(r),s.d(i)}}}function He(e){let t,r;return t=new Dr({props:{query:e[0]}}),{c(){ee(t.$$.fragment)},l(n){te(t.$$.fragment,n)},m(n,s){re(t,n,s),r=!0},p(n,s){const i={};s&1&&(i.query=n[0]),t.$set(i)},i(n){r||(T(t.$$.fragment,n),r=!0)},o(n){P(t.$$.fragment,n),r=!1},d(n){ne(t,n)}}}function $r(e){let t,r,n,s;t=new Et({}),t.$on("search",e[1]);let i=e[0].query&&ve(e);return{c(){ee(t.$$.fragment),r=q(),i&&i.c(),n=$()},l(o){te(t.$$.fragment,o),r=j(o),i&&i.l(o),n=$()},m(o,l){re(t,o,l),N(o,r,l),i&&i.m(o,l),N(o,n,l),s=!0},p(o,[l]){o[0].query?i?(i.p(o,l),l&1&&T(i,1)):(i=ve(o),i.c(),T(i,1),i.m(n.parentNode,n)):i&&(me(),P(i,1,1,()=>{i=null}),be())},i(o){s||(T(t.$$.fragment,o),T(i),s=!0)},o(o){P(t.$$.fragment,o),P(i),s=!1},d(o){ne(t,o),o&&y(r),i&&i.d(o),o&&y(n)}}}function Fr(e,t,r){let n={query:"",page:0};function s(i){r(0,n.query="",n),r(0,n.query=i.detail.value,n),r(0,n)}return[n,s]}class Br extends K{constructor(t){super(),Q(this,t,Fr,$r,I,{})}}function Ur(e){let t,r,n,s,i;return{c(){t=g("p"),r=z("You can use this website only with a"),n=g("br"),s=g("a"),i=z("Telegram bot"),this.h()},l(o){t=S(o,"P",{class:!0});var l=A(t);r=V(l,"You can use this website only with a"),n=S(l,"BR",{}),s=S(l,"A",{class:!0,href:!0});var u=A(s);i=V(u,"Telegram bot"),u.forEach(y),l.forEach(y),this.h()},h(){E(s,"class","text-blue-700 underline"),E(s,"href","https://t.me/album_saver_web_tes_bot"),E(t,"class","w-full text-center p-10 font-semibold leading-loose")},m(o,l){N(o,t,l),_(t,r),_(t,n),_(t,s),_(s,i)},i:R,o:R,d(o){o&&y(t)}}}function Lr(e){let t,r;return t=new Br({}),{c(){ee(t.$$.fragment)},l(n){te(t.$$.fragment,n)},m(n,s){re(t,n,s),r=!0},i(n){r||(T(t.$$.fragment,n),r=!0)},o(n){P(t.$$.fragment,n),r=!1},d(n){ne(t,n)}}}function qr(e){let t,r,n,s;const i=[Lr,Ur],o=[];function l(u,a){var f;return(f=u[0])!=null&&f.WebApp.initData?0:1}return t=l(e),r=o[t]=i[t](e),{c(){r.c(),n=$()},l(u){r.l(u),n=$()},m(u,a){o[t].m(u,a),N(u,n,a),s=!0},p(u,[a]){let f=t;t=l(u),t!==f&&(me(),P(o[f],1,1,()=>{o[f]=null}),be(),r=o[t],r||(r=o[t]=i[t](u),r.c()),T(r,1),r.m(n.parentNode,n))},i(u){s||(T(r),s=!0)},o(u){P(r),s=!1},d(u){o[t].d(u),u&&y(n)}}}function jr(e,t,r){let n;return bt(async()=>{r(0,n=Telegram)}),[n]}class Mr extends K{constructor(t){super(),Q(this,t,jr,qr,I,{})}}export{Mr as default};
