var St=Object.defineProperty;var Rt=(t,e,r)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var he=(t,e,r)=>(Rt(t,typeof e!="symbol"?e+"":e,r),r);import{S as M,i as j,s as U,k as O,a as H,q as le,l as T,m as A,h as y,c as $,r as ce,n as b,b as k,F as g,H as Ne,I as ie,J as _e,A as S,K as Ot,L as Xe,M as Tt,N as Ge,O as we,u as At,e as D,o as Ye,P as xt,p as Ee,Q as Ze,R as pe,T as me,g as ee,t as x,d as te,f as R,v as z,w as J,x as V,y as W}from"../../chunks/index-823e985d.js";import{b as kt}from"../../chunks/paths-846459bd.js";class Pe{static parseString(e){return JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}static parseJson(e){return JSON.parse(decodeURI(e).replace(/%3A/g,":").replace(/%2C/g,","))}}class et{constructor(){he(this,"_userId");he(this,"_platformName");let e=Telegram;const r=Pe.parseString(e.WebApp.initData),n=Pe.parseJson(r.user);this._userId=n.id,this._platformName=r.platform}get userId(){return this._userId}get platformName(){return this._platformName}}class tt{static getEnvironment(){try{let r=Telegram.WebApp.initData;return new et}catch(e){return console.error(e),e}}}function Nt(t){let e,r,n,s,o,i,l,f;return{c(){e=O("form"),r=O("label"),n=O("input"),s=H(),o=O("button"),i=le("Search"),this.h()},l(a){e=T(a,"FORM",{class:!0});var u=A(e);r=T(u,"LABEL",{class:!0});var h=A(r);n=T(h,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),h.forEach(y),s=$(u),o=T(u,"BUTTON",{type:!0,class:!0});var d=A(o);i=ce(d,"Search"),d.forEach(y),u.forEach(y),this.h()},h(){b(n,"type","text"),b(n,"id","search_album"),b(n,"class","bg-gray-100 h-full text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),b(n,"placeholder","What do you want to listen to?"),n.required=!0,b(r,"class","w-full"),b(o,"type","submit"),b(o,"class","px-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"),b(e,"class","form")},m(a,u){k(a,e,u),g(e,r),g(r,n),t[3](n),Ne(n,t[0]),g(e,s),g(e,o),g(o,i),l||(f=[ie(n,"input",t[4]),ie(e,"submit",_e(t[2])),ie(e,"submit",_e(function(){Tt(t[1].blur())&&t[1].blur().apply(this,arguments)}))],l=!0)},p(a,[u]){t=a,u&1&&n.value!==t[0]&&Ne(n,t[0])},i:S,o:S,d(a){a&&y(e),t[3](null),l=!1,Ot(f)}}}function Pt(t,e,r){const n=Xe();function s(){n("search",{value:o})}let o,i;function l(a){Ge[a?"unshift":"push"](()=>{i=a,r(1,i)})}function f(){o=this.value,r(0,o)}return[o,i,s,l,f]}class Ct extends M{constructor(e){super(),j(this,e,Pt,Nt,U,{})}}function rt(t,e){return function(){return t.apply(e,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:Oe}=Object,Te=(t=>e=>{const r=nt.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),v=t=>(t=t.toLowerCase(),e=>Te(e)===t),ue=t=>e=>typeof e===t,{isArray:ne}=Array,ge=ue("undefined");function Dt(t){return t!==null&&!ge(t)&&t.constructor!==null&&!ge(t.constructor)&&Q(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const st=v("ArrayBuffer");function Bt(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&st(t.buffer),e}const Lt=ue("string"),Q=ue("function"),ot=ue("number"),it=t=>t!==null&&typeof t=="object",Ft=t=>t===!0||t===!1,ae=t=>{if(Te(t)!=="object")return!1;const e=Oe(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ut=v("Date"),vt=v("File"),It=v("Blob"),Mt=v("FileList"),jt=t=>it(t)&&Q(t.pipe),qt=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||nt.call(t)===e||Q(t.toString)&&t.toString()===e)},Ht=v("URLSearchParams"),$t=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fe(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let n,s;if(typeof t!="object"&&(t=[t]),ne(t))for(n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let l;for(n=0;n<i;n++)l=o[n],e.call(null,t[l],l,t)}}function Se(){const t={},e=(r,n)=>{ae(t[n])&&ae(r)?t[n]=Se(t[n],r):ae(r)?t[n]=Se({},r):ne(r)?t[n]=r.slice():t[n]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&fe(arguments[r],e);return t}const zt=(t,e,r,{allOwnKeys:n}={})=>(fe(e,(s,o)=>{r&&Q(s)?t[o]=rt(s,r):t[o]=s},{allOwnKeys:n}),t),Jt=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Vt=(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},Wt=(t,e,r,n)=>{let s,o,i;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)i=s[o],(!n||n(i,t,e))&&!l[i]&&(e[i]=t[i],l[i]=!0);t=r!==!1&&Oe(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},Kt=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return n!==-1&&n===r},Qt=t=>{if(!t)return null;if(ne(t))return t;let e=t.length;if(!ot(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},Xt=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Oe(Uint8Array)),Gt=(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=n.next())&&!s.done;){const o=s.value;e.call(t,o[0],o[1])}},Yt=(t,e)=>{let r;const n=[];for(;(r=t.exec(e))!==null;)n.push(r);return n},Zt=v("HTMLFormElement"),er=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ce=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),tr=v("RegExp"),at=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};fe(r,(s,o)=>{e(s,o,t)!==!1&&(n[o]=s)}),Object.defineProperties(t,n)},rr=t=>{at(t,(e,r)=>{const n=t[r];if(!!Q(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+r+"'")})}})},nr=(t,e)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return ne(t)?n(t):n(String(t).split(e)),r},sr=()=>{},or=(t,e)=>(t=+t,Number.isFinite(t)?t:e),c={isArray:ne,isArrayBuffer:st,isBuffer:Dt,isFormData:qt,isArrayBufferView:Bt,isString:Lt,isNumber:ot,isBoolean:Ft,isObject:it,isPlainObject:ae,isUndefined:ge,isDate:Ut,isFile:vt,isBlob:It,isRegExp:tr,isFunction:Q,isStream:jt,isURLSearchParams:Ht,isTypedArray:Xt,isFileList:Mt,forEach:fe,merge:Se,extend:zt,trim:$t,stripBOM:Jt,inherits:Vt,toFlatObject:Wt,kindOf:Te,kindOfTest:v,endsWith:Kt,toArray:Qt,forEachEntry:Gt,matchAll:Yt,isHTMLForm:Zt,hasOwnProperty:Ce,hasOwnProp:Ce,reduceDescriptors:at,freezeMethods:rr,toObjectSet:nr,toCamelCase:er,noop:sr,toFiniteNumber:or};function _(t,e,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}c.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lt=_.prototype,ct={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ct[t]={value:t}});Object.defineProperties(_,ct);Object.defineProperty(lt,"isAxiosError",{value:!0});_.from=(t,e,r,n,s,o)=>{const i=Object.create(lt);return c.toFlatObject(t,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),_.call(i,t.message,e,r,n,s),i.cause=t,i.name=t.name,o&&Object.assign(i,o),i};var ir=typeof self=="object"?self.FormData:window.FormData;function Re(t){return c.isPlainObject(t)||c.isArray(t)}function ut(t){return c.endsWith(t,"[]")?t.slice(0,-2):t}function De(t,e,r){return t?t.concat(e).map(function(s,o){return s=ut(s),!r&&o?"["+s+"]":s}).join(r?".":""):e}function ar(t){return c.isArray(t)&&!t.some(Re)}const lr=c.toFlatObject(c,{},null,function(e){return/^is[A-Z]/.test(e)});function cr(t){return t&&c.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function de(t,e,r){if(!c.isObject(t))throw new TypeError("target must be an object");e=e||new(ir||FormData),r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,B){return!c.isUndefined(B[w])});const n=r.metaTokens,s=r.visitor||u,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&cr(e);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function a(p){if(p===null)return"";if(c.isDate(p))return p.toISOString();if(!f&&c.isBlob(p))throw new _("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(p)||c.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,w,B){let P=p;if(p&&!B&&typeof p=="object"){if(c.endsWith(w,"{}"))w=n?w:w.slice(0,-2),p=JSON.stringify(p);else if(c.isArray(p)&&ar(p)||c.isFileList(p)||c.endsWith(w,"[]")&&(P=c.toArray(p)))return w=ut(w),P.forEach(function(L,G){!c.isUndefined(L)&&e.append(i===!0?De([w],G,o):i===null?w:w+"[]",a(L))}),!1}return Re(p)?!0:(e.append(De(B,w,o),a(p)),!1)}const h=[],d=Object.assign(lr,{defaultVisitor:u,convertValue:a,isVisitable:Re});function m(p,w){if(!c.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(p),c.forEach(p,function(P,E){(!c.isUndefined(P)&&s.call(e,P,c.isString(E)?E.trim():E,w,d))===!0&&m(P,w?w.concat(E):[E])}),h.pop()}}if(!c.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Be(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Ae(t,e){this._pairs=[],t&&de(t,this,e)}const ft=Ae.prototype;ft.append=function(e,r){this._pairs.push([e,r])};ft.toString=function(e){const r=e?function(n){return e.call(this,n,Be)}:Be;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function ur(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dt(t,e,r){if(!e)return t;const n=t.indexOf("#");n!==-1&&(t=t.slice(0,n));const s=r&&r.encode||ur,o=c.isURLSearchParams(e)?e.toString():new Ae(e,r).toString(s);return o&&(t+=(t.indexOf("?")===-1?"?":"&")+o),t}class Le{constructor(){this.handlers=[]}use(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){c.forEach(this.handlers,function(n){n!==null&&e(n)})}}const ht={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fr=typeof URLSearchParams<"u"?URLSearchParams:Ae,dr=FormData,hr=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),F={isBrowser:!0,classes:{URLSearchParams:fr,FormData:dr,Blob},isStandardBrowserEnv:hr,protocols:["http","https","file","blob","url","data"]};function pr(t,e){return de(t,new F.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return F.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function mr(t){return c.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function br(t){const e={},r=Object.keys(t);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],e[o]=t[o];return e}function pt(t){function e(r,n,s,o){let i=r[o++];const l=Number.isFinite(+i),f=o>=r.length;return i=!i&&c.isArray(s)?s.length:i,f?(c.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!l):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),e(r,n,s[i],o)&&c.isArray(s[i])&&(s[i]=br(s[i])),!l)}if(c.isFormData(t)&&c.isFunction(t.entries)){const r={};return c.forEachEntry(t,(n,s)=>{e(mr(n),s,r,0)}),r}return null}function yr(t,e,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new _("Request failed with status code "+r.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const _r=F.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,l){const f=[];f.push(r+"="+encodeURIComponent(n)),c.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),c.isString(o)&&f.push("path="+o),c.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function wr(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Er(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function mt(t,e){return t&&!wr(e)?Er(t,e):e}const gr=F.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const l=c.isString(i)?s(i):i;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function se(t,e,r){_.call(this,t==null?"canceled":t,_.ERR_CANCELED,e,r),this.name="CanceledError"}c.inherits(se,_,{__CANCEL__:!0});function Sr(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const Rr=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Or=t=>{const e={};let r,n,s;return t&&t.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||e[r]&&Rr[r])&&(r==="set-cookie"?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)}),e},Fe=Symbol("internals"),bt=Symbol("defaults");function Z(t){return t&&String(t).trim().toLowerCase()}function oe(t){return t===!1||t==null?t:String(t)}function Tr(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(t);)e[n[1]]=n[2];return e}function Ue(t,e,r,n){if(c.isFunction(n))return n.call(this,e,r);if(!!c.isString(e)){if(c.isString(n))return e.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(e)}}function Ar(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,n)=>r.toUpperCase()+n)}function xr(t,e){const r=c.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(s,o,i){return this[n].call(this,e,s,o,i)},configurable:!0})})}function Y(t,e){e=e.toLowerCase();const r=Object.keys(t);let n=r.length,s;for(;n-- >0;)if(s=r[n],e===s.toLowerCase())return s;return null}function C(t,e){t&&this.set(t),this[bt]=e||null}Object.assign(C.prototype,{set:function(t,e,r){const n=this;function s(o,i,l){const f=Z(i);if(!f)throw new Error("header name must be a non-empty string");const a=Y(n,f);a&&l!==!0&&(n[a]===!1||l===!1)||(c.isArray(o)?o=o.map(oe):o=oe(o),n[a||i]=o)}return c.isPlainObject(t)?c.forEach(t,(o,i)=>{s(o,i,e)}):s(e,t,r),this},get:function(t,e){if(t=Z(t),!t)return;const r=Y(this,t);if(r){const n=this[r];if(!e)return n;if(e===!0)return Tr(n);if(c.isFunction(e))return e.call(this,n,r);if(c.isRegExp(e))return e.exec(n);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=Z(t),t){const r=Y(this,t);return!!(r&&(!e||Ue(this,this[r],r,e)))}return!1},delete:function(t,e){const r=this;let n=!1;function s(o){if(o=Z(o),o){const i=Y(r,o);i&&(!e||Ue(r,r[i],i,e))&&(delete r[i],n=!0)}}return c.isArray(t)?t.forEach(s):s(t),n},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,r={};return c.forEach(this,(n,s)=>{const o=Y(r,s);if(o){e[o]=oe(n),delete e[s];return}const i=t?Ar(s):String(s).trim();i!==s&&delete e[s],e[i]=oe(n),r[i]=!0}),this},toJSON:function(){const t=Object.create(null);return c.forEach(Object.assign({},this[bt]||null,this),(e,r)=>{e==null||e===!1||(t[r]=c.isArray(e)?e.join(", "):e)}),t}});Object.assign(C,{from:function(t){return c.isString(t)?new this(Or(t)):t instanceof this?t:new this(t)},accessor:function(t){const r=(this[Fe]=this[Fe]={accessors:{}}).accessors,n=this.prototype;function s(o){const i=Z(o);r[i]||(xr(n,o),r[i]=!0)}return c.isArray(t)?t.forEach(s):s(t),this}});C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(C.prototype);c.freezeMethods(C);function kr(t,e){t=t||10;const r=new Array(t),n=new Array(t);let s=0,o=0,i;return e=e!==void 0?e:1e3,function(f){const a=Date.now(),u=n[o];i||(i=a),r[s]=f,n[s]=a;let h=o,d=0;for(;h!==s;)d+=r[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),a-i<e)return;const m=u&&a-u;return m?Math.round(d*1e3/m):void 0}}function ve(t,e){let r=0;const n=kr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-r,f=n(l),a=o<=i;r=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&a?(i-o)/f:void 0};u[e?"download":"upload"]=!0,t(u)}}function Ie(t){return new Promise(function(r,n){let s=t.data;const o=C.from(t.headers).normalize(),i=t.responseType;let l;function f(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}c.isFormData(s)&&F.isStandardBrowserEnv&&o.setContentType(!1);let a=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+p))}const u=mt(t.baseURL,t.url);a.open(t.method.toUpperCase(),dt(u,t.params,t.paramsSerializer),!0),a.timeout=t.timeout;function h(){if(!a)return;const m=C.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:m,config:t,request:a};yr(function(P){r(P),f()},function(P){n(P),f()},w),a=null}if("onloadend"in a?a.onloadend=h:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(h)},a.onabort=function(){!a||(n(new _("Request aborted",_.ECONNABORTED,t,a)),a=null)},a.onerror=function(){n(new _("Network Error",_.ERR_NETWORK,t,a)),a=null},a.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const w=t.transitional||ht;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),n(new _(p,w.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,t,a)),a=null},F.isStandardBrowserEnv){const m=(t.withCredentials||gr(u))&&t.xsrfCookieName&&_r.read(t.xsrfCookieName);m&&o.set(t.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in a&&c.forEach(o.toJSON(),function(p,w){a.setRequestHeader(w,p)}),c.isUndefined(t.withCredentials)||(a.withCredentials=!!t.withCredentials),i&&i!=="json"&&(a.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&a.addEventListener("progress",ve(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",ve(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{!a||(n(!m||m.type?new se(null,t,a):m),a.abort(),a=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const d=Sr(u);if(d&&F.protocols.indexOf(d)===-1){n(new _("Unsupported protocol "+d+":",_.ERR_BAD_REQUEST,t));return}a.send(s||null)})}const Me={http:Ie,xhr:Ie},je={getAdapter:t=>{if(c.isString(t)){const e=Me[t];if(!t)throw Error(c.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!c.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:Me},Nr={"Content-Type":"application/x-www-form-urlencoded"};function Pr(){let t;return typeof XMLHttpRequest<"u"?t=je.getAdapter("xhr"):typeof process<"u"&&c.kindOf(process)==="process"&&(t=je.getAdapter("http")),t}function Cr(t,e,r){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}const X={transitional:ht,adapter:Pr(),transformRequest:[function(e,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=c.isObject(e);if(o&&c.isHTMLForm(e)&&(e=new FormData(e)),c.isFormData(e))return s&&s?JSON.stringify(pt(e)):e;if(c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return pr(e,this.formSerializer).toString();if((l=c.isFileList(e))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return de(l?{"files[]":e}:e,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),Cr(e)):e}],transformResponse:[function(e){const r=this.transitional||X.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(e&&c.isString(e)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(i)throw l.name==="SyntaxError"?_.from(l,_.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){X.headers[e]={}});c.forEach(["post","put","patch"],function(e){X.headers[e]=c.merge(Nr)});function be(t,e){const r=this||X,n=e||r,s=C.from(n.headers);let o=n.data;return c.forEach(t,function(l){o=l.call(r,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function yt(t){return!!(t&&t.__CANCEL__)}function ye(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new se}function qe(t){return ye(t),t.headers=C.from(t.headers),t.data=be.call(t,t.transformRequest),(t.adapter||X.adapter)(t).then(function(n){return ye(t),n.data=be.call(t,t.transformResponse,n),n.headers=C.from(n.headers),n},function(n){return yt(n)||(ye(t),n&&n.response&&(n.response.data=be.call(t,t.transformResponse,n.response),n.response.headers=C.from(n.response.headers))),Promise.reject(n)})}function re(t,e){e=e||{};const r={};function n(a,u){return c.isPlainObject(a)&&c.isPlainObject(u)?c.merge(a,u):c.isPlainObject(u)?c.merge({},u):c.isArray(u)?u.slice():u}function s(a){if(c.isUndefined(e[a])){if(!c.isUndefined(t[a]))return n(void 0,t[a])}else return n(t[a],e[a])}function o(a){if(!c.isUndefined(e[a]))return n(void 0,e[a])}function i(a){if(c.isUndefined(e[a])){if(!c.isUndefined(t[a]))return n(void 0,t[a])}else return n(void 0,e[a])}function l(a){if(a in e)return n(t[a],e[a]);if(a in t)return n(void 0,t[a])}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l};return c.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const h=f[u]||s,d=h(u);c.isUndefined(d)&&h!==l||(r[u]=d)}),r}const _t="1.1.2",xe={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{xe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const He={};xe.transitional=function(e,r,n){function s(o,i){return"[Axios v"+_t+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,l)=>{if(e===!1)throw new _(s(i," has been removed"+(r?" in "+r:"")),_.ERR_DEPRECATED);return r&&!He[i]&&(He[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,i,l):!0}};function Dr(t,e,r){if(typeof t!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let s=n.length;for(;s-- >0;){const o=n[s],i=e[o];if(i){const l=t[o],f=l===void 0||i(l,o,t);if(f!==!0)throw new _("option "+o+" must be "+f,_.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new _("Unknown option "+o,_.ERR_BAD_OPTION)}}const wt={assertOptions:Dr,validators:xe},K=wt.validators;class q{constructor(e){this.defaults=e,this.interceptors={request:new Le,response:new Le}}request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=re(this.defaults,r);const n=r.transitional;n!==void 0&&wt.assertOptions(n,{silentJSONParsing:K.transitional(K.boolean),forcedJSONParsing:K.transitional(K.boolean),clarifyTimeoutError:K.transitional(K.boolean)},!1),r.method=(r.method||this.defaults.method||"get").toLowerCase();const s=r.headers&&c.merge(r.headers.common,r.headers[r.method]);s&&c.forEach(["delete","get","head","post","put","patch","common"],function(m){delete r.headers[m]}),r.headers=new C(r.headers,s);const o=[];let i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(i=i&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let f,a=0,u;if(!i){const d=[qe.bind(this),void 0];for(d.unshift.apply(d,o),d.push.apply(d,l),u=d.length,f=Promise.resolve(r);a<u;)f=f.then(d[a++],d[a++]);return f}u=o.length;let h=r;for(a=0;a<u;){const d=o[a++],m=o[a++];try{h=d(h)}catch(p){m.call(this,p);break}}try{f=qe.call(this,h)}catch(d){return Promise.reject(d)}for(a=0,u=l.length;a<u;)f=f.then(l[a++],l[a++]);return f}getUri(e){e=re(this.defaults,e);const r=mt(e.baseURL,e.url);return dt(r,e.params,e.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(e){q.prototype[e]=function(r,n){return this.request(re(n||{},{method:e,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(e){function r(n){return function(o,i,l){return this.request(re(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[e]=r(),q.prototype[e+"Form"]=r(!0)});class ke{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{n.subscribe(l),o=l}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},e(function(o,i,l){n.reason||(n.reason=new se(o,i,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}static source(){let e;return{token:new ke(function(s){e=s}),cancel:e}}}function Br(t){return function(r){return t.apply(null,r)}}function Lr(t){return c.isObject(t)&&t.isAxiosError===!0}function Et(t){const e=new q(t),r=rt(q.prototype.request,e);return c.extend(r,q.prototype,e,{allOwnKeys:!0}),c.extend(r,e,null,{allOwnKeys:!0}),r.create=function(s){return Et(re(t,s))},r}const N=Et(X);N.Axios=q;N.CanceledError=se;N.CancelToken=ke;N.isCancel=yt;N.VERSION=_t;N.toFormData=de;N.AxiosError=_;N.Cancel=N.CanceledError;N.all=function(e){return Promise.all(e)};N.spread=Br;N.isAxiosError=Lr;N.formToJSON=t=>pt(c.isHTMLForm(t)?new FormData(t):t);function $e(){return N.create({baseURL:"https://album-saver-web.azurewebsites.net",headers:{"Content-type":"application/json"}})}class ze{async getMusicQuery(e){return(await $e().get(`/search?query=${e.query}&page=${e.page}`)).data}async requestMusicEntry(e){const n=await $e().post(`/download?userId=${e.userId}&youTubeMusicPlaylistUrl=${e.youTubeMusicPlaylistUrl}`);console.log(n.data)}}class gt{static async getAlbums(e){return await new ze().getMusicQuery(e)}static getUserId(e){return e.userId}static async requestAlbum(e){const r=tt.getEnvironment(),s={userId:this.getUserId(r),youTubeMusicPlaylistUrl:e};return await new ze().requestMusicEntry(s)}}function Fr(t){let e,r,n,s,o,i,l=t[0].title+"",f,a,u;return{c(){e=O("a"),r=O("img"),o=H(),i=O("p"),f=le(l),this.h()},l(h){e=T(h,"A",{href:!0,class:!0});var d=A(e);r=T(d,"IMG",{src:!0,alt:!0,class:!0}),o=$(d),i=T(d,"P",{class:!0});var m=A(i);f=ce(m,l),m.forEach(y),d.forEach(y),this.h()},h(){we(r.src,n=t[0].imageUrl)||b(r,"src",n),b(r,"alt",s=t[0].title),b(r,"class","w-full rounded-lg"),b(i,"class","truncate dark:text-white"),b(e,"href","/"),b(e,"class","flex flex-col gap-2 cursor-pointer")},m(h,d){k(h,e,d),g(e,r),g(e,o),g(e,i),g(i,f),a||(u=ie(e,"click",_e(t[2])),a=!0)},p(h,[d]){d&1&&!we(r.src,n=h[0].imageUrl)&&b(r,"src",n),d&1&&s!==(s=h[0].title)&&b(r,"alt",s),d&1&&l!==(l=h[0].title+"")&&At(f,l)},i:S,o:S,d(h){h&&y(e),a=!1,u()}}}function Ur(t,e,r){let{album:n}=e,s=Telegram;const o=async i=>{await gt.requestAlbum(n.youTubeMusicPlaylistUrl),s.WebApp.close()};return t.$$set=i=>{"album"in i&&r(0,n=i.album)},[n,s,o]}class vr extends M{constructor(e){super(),j(this,e,Ur,Fr,U,{album:0})}}function Je(t){let e;return{c(){e=O("div"),this.h()},l(r){e=T(r,"DIV",{id:!0,style:!0}),A(e).forEach(y),this.h()},h(){b(e,"id","svelte-infinite-scroll"),Ee(e,"width","0")},m(r,n){k(r,e,n),t[11](e)},p:S,d(r){r&&y(e),t[11](null)}}}function Ir(t){let e,r=!t[1]&&!t[0]&&Je(t);return{c(){r&&r.c(),e=D()},l(n){r&&r.l(n),e=D()},m(n,s){r&&r.m(n,s),k(n,e,s)},p(n,[s]){!n[1]&&!n[0]?r?r.p(n,s):(r=Je(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(n){r&&r.d(n),n&&y(e)}}}function Mr(t,e,r){let{threshold:n=0}=e,{horizontal:s=!1}=e,{elementScroll:o=null}=e,{hasMore:i=!0}=e,{reverse:l=!1}=e,{window:f=!1}=e;const a=Xe();let u=!1,h,d,m,p;const w=E=>{if(!i)return;const L=E.target;B(L,l,s)<=n?(!u&&i&&(a("loadMore"),r(8,d=L.scrollHeight),r(9,m=L.scrollTop)),r(7,u=!0)):r(7,u=!1)},B=(E,L,G)=>{const I=E.documentElement?E.documentElement:E;return L?G?I.scrollLeft:I.scrollTop:G?I.scrollWidth-I.clientWidth-I.scrollLeft:I.scrollHeight-I.clientHeight-I.scrollTop};Ye(()=>{f?r(10,p=document):o?r(10,p=o):r(10,p=h.parentNode)}),xt(()=>{p&&(p.removeEventListener("scroll",w),p.removeEventListener("resize",w))});function P(E){Ge[E?"unshift":"push"](()=>{h=E,r(2,h)})}return t.$$set=E=>{"threshold"in E&&r(3,n=E.threshold),"horizontal"in E&&r(4,s=E.horizontal),"elementScroll"in E&&r(0,o=E.elementScroll),"hasMore"in E&&r(5,i=E.hasMore),"reverse"in E&&r(6,l=E.reverse),"window"in E&&r(1,f=E.window)},t.$$.update=()=>{t.$$.dirty&1088&&p&&(l&&r(10,p.scrollTop=p.scrollHeight,p),p.addEventListener("scroll",w),p.addEventListener("resize",w)),t.$$.dirty&1984&&u&&l&&r(10,p.scrollTop=p.scrollHeight-d+m,p)},[o,f,h,n,s,i,l,u,d,m,p,P]}class jr extends M{constructor(e){super(),j(this,e,Mr,Ir,U,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function qr(t,e,r){const n=t.slice();return n[0]=e[r],n}function Hr(t){let e,r,n,s,o;return{c(){e=O("div"),r=O("div"),n=H(),s=O("p"),o=H(),this.h()},l(i){e=T(i,"DIV",{class:!0});var l=A(e);r=T(l,"DIV",{class:!0}),A(r).forEach(y),n=$(l),s=T(l,"P",{class:!0}),A(s).forEach(y),o=$(l),l.forEach(y),this.h()},h(){b(r,"class","bg-gray-200 h-full w-full rounded-lg"),b(s,"class","bg-gray-200 h-5 rounded-lg"),b(e,"class","flex flex-col gap-2 h-48 w-full")},m(i,l){k(i,e,l),g(e,r),g(e,n),g(e,s),g(e,o)},p:S,d(i){i&&y(e)}}}function $r(t){let e,r=Array(8),n=[];for(let s=0;s<r.length;s+=1)n[s]=Hr(qr(t,r,s));return{c(){e=O("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var o=A(e);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(y),this.h()},h(){b(e,"class","grid grid-cols-2 p-4 gap-4 animate-pulse album-list")},m(s,o){k(s,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p:S,i:S,o:S,d(s){s&&y(e),Ze(n,s)}}}class zr extends M{constructor(e){super(),j(this,e,null,$r,U,{})}}function Jr(t){let e,r,n,s;return{c(){e=O("div"),r=pe("svg"),n=pe("circle"),s=pe("path"),this.h()},l(o){e=T(o,"DIV",{class:!0});var i=A(e);r=me(i,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var l=A(r);n=me(l,"circle",{style:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),A(n).forEach(y),s=me(l,"path",{style:!0,fill:!0,d:!0}),A(s).forEach(y),l.forEach(y),i.forEach(y),this.h()},h(){Ee(n,"opacity","0.05"),b(n,"cx","12"),b(n,"cy","12"),b(n,"r","10"),b(n,"stroke","currentColor"),b(n,"stroke-width","4"),Ee(s,"opacity","1"),b(s,"fill","currentColor"),b(s,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),b(r,"xmlns","http://www.w3.org/2000/svg"),b(r,"fill","none"),b(r,"viewBox","0 0 24 24"),b(r,"class","h-5 w-5 animate-spin text-black dark:text-white"),b(e,"class","flex justify-center")},m(o,i){k(o,e,i),g(e,r),g(r,n),g(r,s)},p:S,i:S,o:S,d(o){o&&y(e)}}}class Vr extends M{constructor(e){super(),j(this,e,null,Jr,U,{})}}function Ve(t,e,r){const n=t.slice();return n[7]=e[r],n}function Wr(t){let e,r,n,s,o,i=t[0],l=[];for(let u=0;u<i.length;u+=1)l[u]=We(Ve(t,i,u));const f=u=>x(l[u],1,1,()=>{l[u]=null});n=new jr({props:{threshold:100}}),n.$on("loadMore",t[2]);let a=t[1]&&Ke();return{c(){e=O("div");for(let u=0;u<l.length;u+=1)l[u].c();r=H(),z(n.$$.fragment),s=H(),a&&a.c(),this.h()},l(u){e=T(u,"DIV",{class:!0});var h=A(e);for(let d=0;d<l.length;d+=1)l[d].l(h);r=$(h),J(n.$$.fragment,h),s=$(h),a&&a.l(h),h.forEach(y),this.h()},h(){b(e,"class","album-list")},m(u,h){k(u,e,h);for(let d=0;d<l.length;d+=1)l[d].m(e,null);g(e,r),V(n,e,null),g(e,s),a&&a.m(e,null),o=!0},p(u,h){if(h&1){i=u[0];let d;for(d=0;d<i.length;d+=1){const m=Ve(u,i,d);l[d]?(l[d].p(m,h),R(l[d],1)):(l[d]=We(m),l[d].c(),R(l[d],1),l[d].m(e,r))}for(ee(),d=i.length;d<l.length;d+=1)f(d);te()}u[1]?a?h&2&&R(a,1):(a=Ke(),a.c(),R(a,1),a.m(e,null)):a&&(ee(),x(a,1,1,()=>{a=null}),te())},i(u){if(!o){for(let h=0;h<i.length;h+=1)R(l[h]);R(n.$$.fragment,u),R(a),o=!0}},o(u){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)x(l[h]);x(n.$$.fragment,u),x(a),o=!1},d(u){u&&y(e),Ze(l,u),W(n),a&&a.d()}}}function Kr(t){let e,r;return e=new zr({}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p:S,i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){x(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function We(t){let e,r;return e=new vr({props:{album:t[7]}}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p(n,s){const o={};s&1&&(o.album=n[7]),e.$set(o)},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){x(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function Ke(t){let e,r,n;return r=new Vr({}),{c(){e=O("div"),z(r.$$.fragment),this.h()},l(s){e=T(s,"DIV",{class:!0});var o=A(e);J(r.$$.fragment,o),o.forEach(y),this.h()},h(){b(e,"class","col-span-2 h-5")},m(s,o){k(s,e,o),V(r,e,null),n=!0},i(s){n||(R(r.$$.fragment,s),n=!0)},o(s){x(r.$$.fragment,s),n=!1},d(s){s&&y(e),W(r)}}}function Qr(t){let e,r,n,s;const o=[Kr,Wr],i=[];function l(f,a){return f[0].length?1:0}return e=l(t),r=i[e]=o[e](t),{c(){r.c(),n=D()},l(f){r.l(f),n=D()},m(f,a){i[e].m(f,a),k(f,n,a),s=!0},p(f,[a]){let u=e;e=l(f),e===u?i[e].p(f,a):(ee(),x(i[u],1,1,()=>{i[u]=null}),te(),r=i[e],r?r.p(f,a):(r=i[e]=o[e](f),r.c()),R(r,1),r.m(n.parentNode,n))},i(f){s||(R(r),s=!0)},o(f){x(r),s=!1},d(f){i[e].d(f),f&&y(n)}}}function Xr(t,e,r){let{query:n}=e,s=n,o=[],i=[],l=!1;async function f(){r(4,i=await gt.getAlbums(s)),r(1,l=!1)}function a(){r(1,l=!0),s.page++,f()}return Ye(()=>{f()}),t.$$set=u=>{"query"in u&&r(3,n=u.query)},t.$$.update=()=>{t.$$.dirty&17&&r(0,o=[...o,...i])},[o,l,a,n,i]}class Gr extends M{constructor(e){super(),j(this,e,Xr,Qr,U,{query:3})}}function Yr(t){let e,r,n;return{c(){e=O("div"),r=O("img"),this.h()},l(s){e=T(s,"DIV",{class:!0});var o=A(e);r=T(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(y),this.h()},h(){we(r.src,n=kt+"/headphones.webp")||b(r,"src",n),b(r,"alt","headphones"),b(r,"class","drop-shadow-xl"),b(e,"class","headphones")},m(s,o){k(s,e,o),g(e,r)},p:S,i:S,o:S,d(s){s&&y(e)}}}function Zr(t){let e=t[0],r,n,s=Qe(t);return{c(){s.c(),r=D()},l(o){s.l(o),r=D()},m(o,i){s.m(o,i),k(o,r,i),n=!0},p(o,i){i&1&&U(e,e=o[0])?(ee(),x(s,1,1,S),te(),s=Qe(o),s.c(),R(s,1),s.m(r.parentNode,r)):s.p(o,i)},i(o){n||(R(s),n=!0)},o(o){x(s),n=!1},d(o){o&&y(r),s.d(o)}}}function Qe(t){let e,r;return e=new Gr({props:{query:t[0]}}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},p(n,s){const o={};s&1&&(o.query=n[0]),e.$set(o)},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){x(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function en(t){let e,r,n,s,o,i;e=new Ct({}),e.$on("search",t[1]);const l=[Zr,Yr],f=[];function a(u,h){var d;return(d=u[0])!=null&&d.query?0:1}return n=a(t),s=f[n]=l[n](t),{c(){z(e.$$.fragment),r=H(),s.c(),o=D()},l(u){J(e.$$.fragment,u),r=$(u),s.l(u),o=D()},m(u,h){V(e,u,h),k(u,r,h),f[n].m(u,h),k(u,o,h),i=!0},p(u,[h]){let d=n;n=a(u),n===d?f[n].p(u,h):(ee(),x(f[d],1,1,()=>{f[d]=null}),te(),s=f[n],s?s.p(u,h):(s=f[n]=l[n](u),s.c()),R(s,1),s.m(o.parentNode,o))},i(u){i||(R(e.$$.fragment,u),R(s),i=!0)},o(u){x(e.$$.fragment,u),x(s),i=!1},d(u){W(e,u),u&&y(r),f[n].d(u),u&&y(o)}}}function tn(t,e,r){let n;function s(o){r(0,n={query:o.detail.value,page:0})}return[n,s]}class rn extends M{constructor(e){super(),j(this,e,tn,en,U,{})}}function nn(t){let e,r,n,s,o;return{c(){e=O("p"),r=le("You can use this website only with a"),n=O("br"),s=O("a"),o=le("Telegram bot"),this.h()},l(i){e=T(i,"P",{class:!0});var l=A(e);r=ce(l,"You can use this website only with a"),n=T(l,"BR",{}),s=T(l,"A",{class:!0,href:!0});var f=A(s);o=ce(f,"Telegram bot"),f.forEach(y),l.forEach(y),this.h()},h(){b(s,"class","text-blue-700 underline"),b(s,"href","https://t.me/album_saver_web_tes_bot"),b(e,"class","w-full text-center p-10 font-semibold leading-loose")},m(i,l){k(i,e,l),g(e,r),g(e,n),g(e,s),g(s,o)},i:S,o:S,d(i){i&&y(e)}}}function sn(t){let e,r;return e=new rn({}),{c(){z(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,s){V(e,n,s),r=!0},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){x(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function on(t){let e,r,n,s;const o=[sn,nn],i=[];function l(f,a){return f[0]instanceof et?0:1}return e=l(t),r=i[e]=o[e](t),{c(){r.c(),n=D()},l(f){r.l(f),n=D()},m(f,a){i[e].m(f,a),k(f,n,a),s=!0},p:S,i(f){s||(R(r),s=!0)},o(f){x(r),s=!1},d(f){i[e].d(f),f&&y(n)}}}function an(t){return[tt.getEnvironment()]}class fn extends M{constructor(e){super(),j(this,e,an,on,U,{})}}export{fn as default};
