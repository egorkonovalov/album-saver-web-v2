import{A as f,y as c,B as t,C as v,L as h}from"./runtime.-sM8FUqq.js";import{b as g}from"./disclose-version.p3TvJaWJ.js";function A(r){if(c){var s=!1,o=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var e=r.value;i(r,"value",null),r.value=e}if(r.hasAttribute("checked")){var _=r.checked;i(r,"checked",null),r.checked=_}}};r.__on_r=o,v(o),g()}}function i(r,s,o,e){var _=r.__attributes??(r.__attributes={});c&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[h]=o),o==null?r.removeAttribute(s):typeof o!="string"&&n(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var d=new Map;function n(r){var s=d.get(r.nodeName);if(s)return s;d.set(r.nodeName,s=[]);for(var o,e=f(r),_=Element.prototype;_!==e;){o=t(e);for(var a in o)o[a].set&&s.push(a);e=f(e)}return s}export{A as r,i as s};
