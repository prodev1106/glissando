!function(){var t={937:function(t,e,n){!function(){"use strict";function e(t,e,n,r,o,i){return{tag:t,key:e,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}e.normalize=function(t){return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null==t||"boolean"==typeof t?null:"object"==typeof t?t:e("#",void 0,void 0,String(t),void 0,void 0)},e.normalizeChildren=function(t){var n=[];if(t.length){for(var r=null!=t[0]&&null!=t[0].key,o=1;o<t.length;o++)if((null!=t[o]&&null!=t[o].key)!==r)throw new TypeError("Vnodes must either always have keys or never have keys!");for(o=0;o<t.length;o++)n[o]=e.normalize(t[o])}return n};var r=function(){var t,n=arguments[this],r=this+1;if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},r=this),arguments.length===r+1)t=arguments[r],Array.isArray(t)||(t=[t]);else for(t=[];r<arguments.length;)t.push(arguments[r++]);return e("",n.key,n,t)},o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},a={}.hasOwnProperty;function l(t){for(var e in t)if(a.call(t,e))return!1;return!0}function u(t){for(var e,n="div",r=[],a={};e=o.exec(t);){var l=e[1],u=e[2];if(""===l&&""!==u)n=u;else if("#"===l)a.id=u;else if("."===l)r.push(u);else if("["===e[3][0]){var c=e[6];c&&(c=c.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?r.push(c):a[e[4]]=""===c?c:c||!0}}return r.length>0&&(a.className=r.join(" ")),i[t]={tag:n,attrs:a}}function c(t,n){var r=n.attrs,o=e.normalizeChildren(n.children),i=a.call(r,"class"),u=i?r.class:r.className;if(n.tag=t.tag,n.attrs=null,n.children=void 0,!l(t.attrs)&&!l(r)){var c={};for(var s in r)a.call(r,s)&&(c[s]=r[s]);r=c}for(var s in t.attrs)a.call(t.attrs,s)&&"className"!==s&&!a.call(r,s)&&(r[s]=t.attrs[s]);for(var s in null==u&&null==t.attrs.className||(r.className=null!=u?null!=t.attrs.className?String(t.attrs.className)+" "+String(u):u:null!=t.attrs.className?t.attrs.className:null),i&&(r.class=null),r)if(a.call(r,s)&&"key"!==s){n.attrs=r;break}return Array.isArray(o)&&1===o.length&&null!=o[0]&&"#"===o[0].tag?n.text=o[0].children:n.children=o,n}function s(t){if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.");var n=r.apply(1,arguments);return"string"==typeof t&&(n.children=e.normalizeChildren(n.children),"["!==t)?c(i[t]||u(t),n):(n.tag=t,n)}if(s.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)},s.fragment=function(){var t=r.apply(0,arguments);return t.tag="[",t.children=e.normalizeChildren(t.children),t},(f=function(t){if(!(this instanceof f))throw new Error("Promise must be called with `new`");if("function"!=typeof t)throw new TypeError("executor must be a function");var e=this,n=[],r=[],o=u(n,!0),i=u(r,!1),a=e._instance={resolvers:n,rejectors:r},l="function"==typeof setImmediate?setImmediate:setTimeout;function u(t,o){return function u(s){var f;try{if(!o||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(f=s.then))l((function(){o||0!==t.length||console.error("Possible unhandled promise rejection:",s);for(var e=0;e<t.length;e++)t[e](s);n.length=0,r.length=0,a.state=o,a.retry=function(){u(s)}}));else{if(s===e)throw new TypeError("Promise can't be resolved w/ itself");c(f.bind(s))}}catch(t){i(t)}}}function c(t){var e=0;function n(t){return function(n){e++>0||t(n)}}var r=n(i);try{t(n(o),r)}catch(t){r(t)}}c(t)}).prototype.then=function(t,e){var n,r,o=this._instance;function i(t,e,i,a){e.push((function(e){if("function"!=typeof t)i(e);else try{n(t(e))}catch(t){r&&r(t)}})),"function"==typeof o.retry&&a===o.state&&o.retry()}var a=new f((function(t,e){n=t,r=e}));return i(t,o.resolvers,n,!0),i(e,o.rejectors,r,!1),a},f.prototype.catch=function(t){return this.then(null,t)},f.prototype.finally=function(t){return this.then((function(e){return f.resolve(t()).then((function(){return e}))}),(function(e){return f.resolve(t()).then((function(){return f.reject(e)}))}))},f.resolve=function(t){return t instanceof f?t:new f((function(e){e(t)}))},f.reject=function(t){return new f((function(e,n){n(t)}))},f.all=function(t){return new f((function(e,n){var r=t.length,o=0,i=[];if(0===t.length)e([]);else for(var a=0;a<t.length;a++)!function(a){function l(t){o++,i[a]=t,o===r&&e(i)}null==t[a]||"object"!=typeof t[a]&&"function"!=typeof t[a]||"function"!=typeof t[a].then?l(t[a]):t[a].then(l,n)}(a)}))},f.race=function(t){return new f((function(e,n){for(var r=0;r<t.length;r++)t[r].then(e,n)}))},"undefined"!=typeof window){void 0===window.Promise?window.Promise=f:window.Promise.prototype.finally||(window.Promise.prototype.finally=f.prototype.finally);var f=window.Promise}else if(void 0!==n.g){void 0===n.g.Promise?n.g.Promise=f:n.g.Promise.prototype.finally||(n.g.Promise.prototype.finally=f.prototype.finally);f=n.g.Promise}var d=function(t){var n,r=t&&t.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(t){return t.attrs&&t.attrs.xmlns||o[t.tag]}function a(t,e){if(t.state!==e)throw new Error("`vnode.state` must not be modified")}function l(t){var e=t.state;try{return this.apply(e,arguments)}finally{a(t,e)}}function u(){try{return r.activeElement}catch(t){return null}}function c(t,e,n,r,o,i,a){for(var l=n;l<r;l++){var u=e[l];null!=u&&s(t,u,o,a,i)}}function s(t,n,o,a,u){var f=n.tag;if("string"==typeof f)switch(n.state={},null!=n.attrs&&$(n.attrs,n,o),f){case"#":!function(t,e,n){e.dom=r.createTextNode(e.children),x(t,e.dom,n)}(t,n,u);break;case"<":d(t,n,a,u);break;case"[":!function(t,e,n,o,i){var a=r.createDocumentFragment();if(null!=e.children){var l=e.children;c(a,l,0,l.length,n,null,o)}e.dom=a.firstChild,e.domSize=a.childNodes.length,x(t,a,i)}(t,n,o,a,u);break;default:!function(t,n,o,a,l){var u=n.tag,s=n.attrs,f=s&&s.is,d=(a=i(n)||a)?f?r.createElementNS(a,u,{is:f}):r.createElementNS(a,u):f?r.createElement(u,{is:f}):r.createElement(u);n.dom=d,null!=s&&function(t,e,n){for(var r in e)O(t,r,null,e[r],n)}(n,s,a);if(x(t,d,l),!b(n)&&(null!=n.text&&(""!==n.text?d.textContent=n.text:n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children)){var p=n.children;c(d,p,0,p.length,o,null,a),"select"===n.tag&&null!=s&&function(t,e){if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null);else{var n=""+e.value;t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}"selectedIndex"in e&&O(t,"selectedIndex",null,e.selectedIndex,void 0)}(n,s)}}(t,n,o,a,u)}else!function(t,n,r,o,i){(function(t,n){var r;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(r=t.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(r=t.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}$(t.state,t,n),null!=t.attrs&&$(t.attrs,t,n);if(t.instance=e.normalize(l.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null})(n,r),null!=n.instance?(s(t,n.instance,r,o,i),n.dom=n.instance.dom,n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(t,n,o,a,u)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(t,e,n,o){var i=e.children.match(/^\s*?<(\w+)/im)||[],a=r.createElement(f[i[1]]||"div");"http://www.w3.org/2000/svg"===n?(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",a=a.firstChild):a.innerHTML=e.children,e.dom=a.firstChild,e.domSize=a.childNodes.length,e.instance=[];for(var l,u=r.createDocumentFragment();l=a.firstChild;)e.instance.push(l),u.appendChild(l);x(t,u,o)}function p(t,e,n,r,o,i){if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)c(t,n,0,n.length,r,o,i);else if(null==n||0===n.length)S(t,e,0,e.length);else{var a=null!=e[0]&&null!=e[0].key,l=null!=n[0]&&null!=n[0].key,u=0,f=0;if(!a)for(;f<e.length&&null==e[f];)f++;if(!l)for(;u<n.length&&null==n[u];)u++;if(null===l&&null==a)return;if(a!==l)S(t,e,f,e.length),c(t,n,u,n.length,r,o,i);else if(l){for(var d,p,w,x,b,A=e.length-1,E=n.length-1;A>=f&&E>=u&&(w=e[A],x=n[E],w.key===x.key);)w!==x&&h(t,w,x,r,o,i),null!=x.dom&&(o=x.dom),A--,E--;for(;A>=f&&E>=u&&(d=e[f],p=n[u],d.key===p.key);)f++,u++,d!==p&&h(t,d,p,r,g(e,f,o),i);for(;A>=f&&E>=u&&u!==E&&d.key===x.key&&w.key===p.key;)y(t,w,b=g(e,f,o)),w!==p&&h(t,w,p,r,b,i),++u<=--E&&y(t,d,o),d!==x&&h(t,d,x,r,o,i),null!=x.dom&&(o=x.dom),f++,w=e[--A],x=n[E],d=e[f],p=n[u];for(;A>=f&&E>=u&&w.key===x.key;)w!==x&&h(t,w,x,r,o,i),null!=x.dom&&(o=x.dom),E--,w=e[--A],x=n[E];if(u>E)S(t,e,f,A+1);else if(f>A)c(t,n,u,E+1,r,o,i);else{var I,O,C=o,N=E-u+1,j=new Array(N),P=0,_=0,z=2147483647,T=0;for(_=0;_<N;_++)j[_]=-1;for(_=E;_>=u;_--){null==I&&(I=m(e,f,A+1));var L=I[(x=n[_]).key];null!=L&&(z=L<z?L:-1,j[_-u]=L,w=e[L],e[L]=null,w!==x&&h(t,w,x,r,o,i),null!=x.dom&&(o=x.dom),T++)}if(o=C,T!==A-f+1&&S(t,e,f,A+1),0===T)c(t,n,u,E+1,r,o,i);else if(-1===z)for(P=(O=function(t){var e=[0],n=0,r=0,o=0,i=v.length=t.length;for(o=0;o<i;o++)v[o]=t[o];for(o=0;o<i;++o)if(-1!==t[o]){var a=e[e.length-1];if(t[a]<t[o])v[o]=a,e.push(o);else{for(n=0,r=e.length-1;n<r;){var l=(n>>>1)+(r>>>1)+(n&r&1);t[e[l]]<t[o]?n=l+1:r=l}t[o]<t[e[n]]&&(n>0&&(v[o]=e[n-1]),e[n]=o)}}n=e.length,r=e[n-1];for(;n-- >0;)e[n]=r,r=v[r];return v.length=0,e}(j)).length-1,_=E;_>=u;_--)p=n[_],-1===j[_-u]?s(t,p,r,i,o):O[P]===_-u?P--:y(t,p,o),null!=p.dom&&(o=n[_].dom);else for(_=E;_>=u;_--)p=n[_],-1===j[_-u]&&s(t,p,r,i,o),null!=p.dom&&(o=n[_].dom)}}else{var R=e.length<n.length?e.length:n.length;for(u=u<f?u:f;u<R;u++)(d=e[u])===(p=n[u])||null==d&&null==p||(null==d?s(t,p,r,i,g(e,u+1,o)):null==p?k(t,d):h(t,d,p,r,g(e,u+1,o),i));e.length>R&&S(t,e,u,e.length),n.length>R&&c(t,n,u,n.length,r,o,i)}}}function h(t,n,r,o,a,u){var c=n.tag;if(c===r.tag){if(r.state=n.state,r.events=n.events,function(t,e){do{var n;if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=l.call(t.attrs.onbeforeupdate,t,e))&&!n)break;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=l.call(t.state.onbeforeupdate,t,e))&&!n)break;return!1}while(0);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,t.text=e.text,!0}(r,n))return;if("string"==typeof c)switch(null!=r.attrs&&M(r.attrs,r,o),c){case"#":!function(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children);e.dom=t.dom}(n,r);break;case"<":!function(t,e,n,r,o){e.children!==n.children?(A(t,e),d(t,n,r,o)):(n.dom=e.dom,n.domSize=e.domSize,n.instance=e.instance)}(t,n,r,u,a);break;case"[":!function(t,e,n,r,o,i){p(t,e.children,n.children,r,o,i);var a=0,l=n.children;if(n.dom=null,null!=l){for(var u=0;u<l.length;u++){var c=l[u];null!=c&&null!=c.dom&&(null==n.dom&&(n.dom=c.dom),a+=c.domSize||1)}1!==a&&(n.domSize=a)}}(t,n,r,o,a,u);break;default:!function(t,n,r,o){var a=n.dom=t.dom;o=i(n)||o,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0));(function(t,e,n,r){if(null!=n)for(var o in n)O(t,o,e&&e[o],n[o],r);var i;if(null!=e)for(var o in e)null==(i=e[o])||null!=n&&null!=n[o]||C(t,o,i,r)})(n,t.attrs,n.attrs,o),b(n)||(null!=t.text&&null!=n.text&&""!==n.text?t.text.toString()!==n.text.toString()&&(t.dom.firstChild.nodeValue=n.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=n.text&&(n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),p(a,t.children,n.children,r,null,o)))}(n,r,o,u)}else!function(t,n,r,o,i,a){if(r.instance=e.normalize(l.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");M(r.state,r,o),null!=r.attrs&&M(r.attrs,r,o);null!=r.instance?(null==n.instance?s(t,r.instance,o,a,i):h(t,n.instance,r.instance,o,i,a),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(k(t,n.instance),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(t,n,r,o,a,u)}else k(t,n),s(t,r,o,u,a)}function m(t,e,n){for(var r=Object.create(null);e<n;e++){var o=t[e];if(null!=o){var i=o.key;null!=i&&(r[i]=e)}}return r}var v=[];function g(t,e,n){for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom;return n}function y(t,e,n){var o=r.createDocumentFragment();w(t,o,e),x(t,o,n)}function w(t,e,n){for(;null!=n.dom&&n.dom.parentNode===t;){if("string"!=typeof n.tag){if(null!=(n=n.instance))continue}else if("<"===n.tag)for(var r=0;r<n.instance.length;r++)e.appendChild(n.instance[r]);else if("["!==n.tag)e.appendChild(n.dom);else if(1===n.children.length){if(null!=(n=n.children[0]))continue}else for(r=0;r<n.children.length;r++){var o=n.children[r];null!=o&&w(t,e,o)}break}}function x(t,e,n){null!=n?t.insertBefore(e,n):t.appendChild(e)}function b(t){if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1;var e=t.children;if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(null!=t.text||null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function S(t,e,n,r){for(var o=n;o<r;o++){var i=e[o];null!=i&&k(t,i)}}function k(t,e){var n,r,o,i=0,u=e.state;"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(o=l.call(e.state.onbeforeremove,e))&&"function"==typeof o.then&&(i=1,n=o));e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(o=l.call(e.attrs.onbeforeremove,e))&&"function"==typeof o.then&&(i|=2,r=o));if(a(e,u),i){if(null!=n){var c=function(){1&i&&((i&=2)||s())};n.then(c,c)}if(null!=r){c=function(){2&i&&((i&=1)||s())};r.then(c,c)}}else I(e),E(t,e);function s(){a(e,u),I(e),E(t,e)}}function A(t,e){for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}function E(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){if("string"!=typeof e.tag){if(null!=(e=e.instance))continue}else if("<"===e.tag)A(t,e);else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break;if(1===e.children.length){if(null!=(e=e.children[0]))continue}else for(var n=0;n<e.children.length;n++){var r=e.children[n];null!=r&&E(t,r)}}break}}function I(t){if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&l.call(t.state.onremove,t),t.attrs&&"function"==typeof t.attrs.onremove&&l.call(t.attrs.onremove,t),"string"!=typeof t.tag)null!=t.instance&&I(t.instance);else{var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];null!=r&&I(r)}}}function O(t,e,n,o,i){if("key"!==e&&"is"!==e&&null!=o&&!N(e)&&(n!==o||function(t,e){return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===u()||"option"===t.tag&&t.dom.parentNode===r.activeElement}(t,e)||"object"==typeof o)){if("o"===e[0]&&"n"===e[1])return R(t,e,o);if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),o);else if("style"===e)T(t.dom,n,o);else if(j(t,e,i)){if("value"===e){if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+o&&t.dom===u())return;if("select"===t.tag&&null!==n&&t.dom.value===""+o)return;if("option"===t.tag&&null!==n&&t.dom.value===""+o)return}"input"===t.tag&&"type"===e?t.dom.setAttribute(e,o):t.dom[e]=o}else"boolean"==typeof o?o?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,o)}}function C(t,e,n,r){if("key"!==e&&"is"!==e&&null!=n&&!N(e))if("o"!==e[0]||"n"!==e[1]||N(e))if("style"===e)T(t.dom,n,null);else if(!j(t,e,r)||"className"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===u())||"input"===t.tag&&"type"===e){var o=e.indexOf(":");-1!==o&&(e=e.slice(o+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)}else t.dom[e]=null;else R(t,e,void 0)}function N(t){return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t}function j(t,e,n){return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom}var P=/[A-Z]/g;function _(t){return"-"+t.toLowerCase()}function z(t){return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(P,_)}function T(t,e,n){if(e===n);else if(null==n)t.style.cssText="";else if("object"!=typeof n)t.style.cssText=n;else if(null==e||"object"!=typeof e)for(var r in t.style.cssText="",n){null!=(o=n[r])&&t.style.setProperty(z(r),String(o))}else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(e[r])&&t.style.setProperty(z(r),o)}for(var r in e)null!=e[r]&&null==n[r]&&t.style.removeProperty(z(r))}}function L(){this._=n}function R(t,e,n){if(null!=t.events){if(t.events[e]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(t.events=new L,t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}function $(t,e,n){"function"==typeof t.oninit&&l.call(t.oninit,e),"function"==typeof t.oncreate&&n.push(l.bind(t.oncreate,e))}function M(t,e,n){"function"==typeof t.onupdate&&n.push(l.bind(t.onupdate,e))}return L.prototype=Object.create(null),L.prototype.handleEvent=function(t){var e,n=this["on"+t.type];"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),this._&&!1!==t.redraw&&(0,this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(t,r,o){if(!t)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=[],a=u(),l=t.namespaceURI;null==t.vnodes&&(t.textContent=""),r=e.normalizeChildren(Array.isArray(r)?r:[r]);var c=n;try{n="function"==typeof o?o:void 0,p(t,t.vnodes,r,i,null,"http://www.w3.org/1999/xhtml"===l?void 0:l)}finally{n=c}t.vnodes=r,null!=a&&u()!==a&&"function"==typeof a.focus&&a.focus();for(var s=0;s<i.length;s++)i[s]()}}(window),p=function(t,n,r){var o=[],i=!1,a=!1;function l(){if(i)throw new Error("Nested m.redraw.sync() call");i=!0;for(var n=0;n<o.length;n+=2)try{t(o[n],e(o[n+1]),u)}catch(t){r.error(t)}i=!1}function u(){a||(a=!0,n((function(){a=!1,l()})))}return u.sync=l,{mount:function(n,r){if(null!=r&&null==r.view&&"function"!=typeof r)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var i=o.indexOf(n);i>=0&&(o.splice(i,2),t(n,[],u)),null!=r&&(o.push(n,r),t(n,e(r),u))},redraw:u}}(d,requestAnimationFrame,console),h=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return"";var e=[];for(var n in t)r(n,t[n]);return e.join("&");function r(t,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(t+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(t+"["+o+"]",n[o]);else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},m=Object.assign||function(t,e){e&&Object.keys(e).forEach((function(n){t[n]=e[n]}))},v=function(t,e){if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names *must* be separated");if(null==e)return t;var n=t.indexOf("?"),r=t.indexOf("#"),o=r<0?t.length:r,i=n<0?o:n,a=t.slice(0,i),l={};m(l,e);var u=a.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,n,r){return delete l[n],null==e[n]?t:r?e[n]:encodeURIComponent(String(e[n]))})),c=u.indexOf("?"),s=u.indexOf("#"),f=s<0?u.length:s,d=c<0?f:c,p=u.slice(0,d);n>=0&&(p+=t.slice(n,o)),c>=0&&(p+=(n<0?"?":"&")+u.slice(c,f));var v=h(l);return v&&(p+=(n<0&&c<0?"?":"&")+v),r>=0&&(p+=t.slice(r)),s>=0&&(p+=(r<0?"":"&")+u.slice(s)),p},g=function(t,e,n){var r=0;function o(t){return new e(t)}function i(t){return function(r,i){"string"!=typeof r?(i=r,r=r.url):null==i&&(i={});var a=new e((function(e,n){t(v(r,i.params),i,(function(t){if("function"==typeof i.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new i.type(t[n]);else t=new i.type(t);e(t)}),n)}));if(!0===i.background)return a;var l=0;function u(){0==--l&&"function"==typeof n&&n()}return function t(e){var n=e.then;return e.constructor=o,e.then=function(){l++;var r=n.apply(e,arguments);return r.then(u,(function(t){if(u(),0===l)throw t})),t(r)},e}(a)}}function a(t,e){for(var n in t.headers)if({}.hasOwnProperty.call(t.headers,n)&&e.test(n))return!0;return!1}return o.prototype=e.prototype,o.__proto__=e,{request:i((function(e,n,r,o){var i,l=null!=n.method?n.method.toUpperCase():"GET",u=n.body,c=!(null!=n.serialize&&n.serialize!==JSON.serialize||u instanceof t.FormData),s=n.responseType||("function"==typeof n.extract?"":"json"),f=new t.XMLHttpRequest,d=!1,p=f,h=f.abort;for(var m in f.abort=function(){d=!0,h.call(this)},f.open(l,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),c&&null!=u&&!a(n,/^content0-type1$/i)&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||a(n,/^accept$/i)||f.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(f.withCredentials=n.withCredentials),n.timeout&&(f.timeout=n.timeout),f.responseType=s,n.headers)({}).hasOwnProperty.call(n.headers,m)&&f.setRequestHeader(m,n.headers[m]);f.onreadystatechange=function(t){if(!d&&4===t.target.readyState)try{var i,a=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),l=t.target.response;if("json"===s?t.target.responseType||"function"==typeof n.extract||(l=JSON.parse(t.target.responseText)):s&&"text"!==s||null==l&&(l=t.target.responseText),"function"==typeof n.extract?(l=n.extract(t.target,n),a=!0):"function"==typeof n.deserialize&&(l=n.deserialize(l)),a)r(l);else{try{i=t.target.responseText}catch(t){i=l}var u=new Error(i);u.code=t.target.status,u.response=l,o(u)}}catch(t){o(t)}},"function"==typeof n.config&&(f=n.config(f,n,e)||f)!==p&&(i=f.abort,f.abort=function(){d=!0,i.call(this)}),null==u?f.send():"function"==typeof n.serialize?f.send(n.serialize(u)):u instanceof t.FormData?f.send(u):f.send(JSON.stringify(u))})),jsonp:i((function(e,n,o,i){var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,l=t.document.createElement("script");t[a]=function(e){delete t[a],l.parentNode.removeChild(l),o(e)},l.onerror=function(){delete t[a],l.parentNode.removeChild(l),i(new Error("JSONP request failed"))},l.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),t.document.documentElement.appendChild(l)}))}}(window,f,p.redraw),y=p,w=function(){return s.apply(this,arguments)};w.m=s,w.trust=s.trust,w.fragment=s.fragment,w.mount=y.mount;var x=s,b=f,S=function(t){if(""===t||null==t)return{};"?"===t.charAt(0)&&(t=t.slice(1));for(var e=t.split("&"),n={},r={},o=0;o<e.length;o++){var i=e[o].split("="),a=decodeURIComponent(i[0]),l=2===i.length?decodeURIComponent(i[1]):"";"true"===l?l=!0:"false"===l&&(l=!1);var u=a.split(/\]\[?|\[/),c=r;a.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var f=u[s],d=u[s+1],p=""==d||!isNaN(parseInt(d,10));if(""===f)null==n[a=u.slice(0,s).join()]&&(n[a]=Array.isArray(c)?c.length:0),f=n[a]++;else if("__proto__"===f)break;if(s===u.length-1)c[f]=l;else{var h=Object.getOwnPropertyDescriptor(c,f);null!=h&&(h=h.value),null==h&&(c[f]=h=p?[]:{}),c=h}}}return r},k=function(t){var e=t.indexOf("?"),n=t.indexOf("#"),r=n<0?t.length:n,o=e<0?r:e,i=t.slice(0,o).replace(/\/{2,}/g,"/");return i?("/"!==i[0]&&(i="/"+i),i.length>1&&"/"===i[i.length-1]&&(i=i.slice(0,-1))):i="/",{path:i,params:e<0?{}:S(t.slice(e+1,r))}},A={};w.route=function(t,n){var r;function o(e,n,o){if(e=v(e,n),null!=r){r();var i=o?o.state:null,a=o?o.title:null;o&&o.replace?t.history.replaceState(i,a,f.prefix+e):t.history.pushState(i,a,f.prefix+e)}else t.location.href=f.prefix+e}var i,a,l,u,c=A,s=f.SKIP={};function f(d,p,h){if(null==d)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var v,g=0,y=Object.keys(h).map((function(t){if("/"!==t[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:t,component:h[t],check:(e=t,n=k(e),r=Object.keys(n.params),o=[],i=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){return null==e?"\\"+t:(o.push({k:e,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$"),function(t){for(var e=0;e<r.length;e++)if(n.params[r[e]]!==t.params[r[e]])return!1;if(!o.length)return i.test(t.path);var a=i.exec(t.path);if(null==a)return!1;for(e=0;e<o.length;e++)t.params[o[e].k]=o[e].r?a[e+1]:decodeURIComponent(a[e+1]);return!0})};var e,n,r,o,i})),w="function"==typeof setImmediate?setImmediate:setTimeout,x=b.resolve(),S=!1;if(r=null,null!=p){var E=k(p);if(!y.some((function(t){return t.check(E)})))throw new ReferenceError("Default route doesn't match any known routes")}function I(){S=!1;var e=t.location.hash;"#"!==f.prefix[0]&&(e=t.location.search+e,"?"!==f.prefix[0]&&"/"!==(e=t.location.pathname+e)[0]&&(e="/"+e));var r=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(f.prefix.length),d=k(r);function h(){if(r===p)throw new Error("Could not resolve default route "+p);o(p,null,{replace:!0})}m(d.params,t.history.state),function t(e){for(;e<y.length;e++)if(y[e].check(d)){var o=y[e].component,f=y[e].route,p=o,m=u=function(f){if(m===u){if(f===s)return t(e+1);i=null==f||"function"!=typeof f.view&&"function"!=typeof f?"div":f,a=d.params,l=r,u=null,c=o.render?o:null,2===g?n.redraw():(g=2,n.redraw.sync())}};return void(o.view||"function"==typeof o?(o={},m(p)):o.onmatch?x.then((function(){return o.onmatch(d.params,r,f)})).then(m,h):m("div"))}h()}(0)}return r=function(){S||(S=!0,w(I))},"function"==typeof t.history.pushState?(v=function(){t.removeEventListener("popstate",r,!1)},t.addEventListener("popstate",r,!1)):"#"===f.prefix[0]&&(r=null,v=function(){t.removeEventListener("hashchange",I,!1)},t.addEventListener("hashchange",I,!1)),n.mount(d,{onbeforeupdate:function(){return!(!(g=g?2:1)||A===c)},oncreate:I,onremove:v,view:function(){if(g&&A!==c){var t=[e(i,a.key,a)];return c&&(t=c.render(t[0])),t}}})}return f.set=function(t,e,n){null!=u&&((n=n||{}).replace=!0),u=null,o(t,e,n)},f.get=function(){return l},f.prefix="#!",f.Link={view:function(t){var e,n,r=t.attrs.options,o={};m(o,t.attrs),o.selector=o.options=o.key=o.oninit=o.oncreate=o.onbeforeupdate=o.onupdate=o.onbeforeremove=o.onremove=null;var i=x(t.attrs.selector||"a",o,t.children);return(i.attrs.disabled=Boolean(i.attrs.disabled))?(i.attrs.href=null,i.attrs["aria-disabled"]="true",i.attrs.onclick=null):(e=i.attrs.onclick,n=i.attrs.href,i.attrs.href=f.prefix+n,i.attrs.onclick=function(t){var o;"function"==typeof e?o=e.call(t.currentTarget,t):null==e||"object"!=typeof e||"function"==typeof e.handleEvent&&e.handleEvent(t),!1===o||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),t.redraw=!1,f.set(n,null,r))}),i}},f.param=function(t){return a&&null!=t?a[t]:a},f}(window,y),w.render=d,w.redraw=y.redraw,w.request=g.request,w.jsonp=g.jsonp,w.parseQueryString=S,w.buildQueryString=h,w.parsePathname=k,w.buildPathname=v,w.vnode=e,w.PromisePolyfill=f,t.exports=w}()},773:function(t){!function(){"use strict";n.SKIP={},n.lift=function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return o(e).map((function(e){return t.apply(void 0,e)}))},n.scan=function(t,e,r){var o=r.map((function(r){var o=t(e,r);return o!==n.SKIP&&(e=o),o}));return o(e),o},n.merge=o,n.combine=r,n.scanMerge=function(t,e){var n=t.map((function(t){return t[0]})),o=r((function(){var r=arguments[arguments.length-1];return n.forEach((function(n,o){r.indexOf(n)>-1&&(e=t[o][1](e,n()))})),e}),n);return o(e),o},n["fantasy-land/of"]=n;var e=!1;function n(t){var e,o=[],a=[];function l(e){return arguments.length&&e!==n.SKIP&&(t=e,i(l)&&(l._changing(),l._state="active",o.forEach((function(e,n){e(a[n](t))})))),t}function u(){return(e=n()).map((function(t){return!0===t&&(l._parents.forEach((function(t){t._unregisterChild(l)})),l._state="ended",l._parents.length=o.length=a.length=0),t})),e}return l.constructor=n,l._state=arguments.length&&t!==n.SKIP?"active":"pending",l._parents=[],l._changing=function(){i(l)&&(l._state="changing"),o.forEach((function(t){t._changing()}))},l._map=function(e,r){var i=r?n():n(e(t));return i._parents.push(l),o.push(i),a.push(e),i},l.map=function(t){return l._map(t,"active"!==l._state)},l.toJSON=function(){return null!=t&&"function"==typeof t.toJSON?t.toJSON():t},l["fantasy-land/map"]=l.map,l["fantasy-land/ap"]=function(t){return r((function(t,e){return t()(e())}),[t,l])},l._unregisterChild=function(t){var e=o.indexOf(t);-1!==e&&(o.splice(e,1),a.splice(e,1))},Object.defineProperty(l,"end",{get:function(){return e||u()}}),l}function r(t,e){var r=e.every((function(t){if(t.constructor!==n)throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream");return"active"===t._state})),o=r?n(t.apply(null,e.concat([e]))):n(),i=[],a=e.map((function(n){return n._map((function(a){return i.push(n),(r||e.every((function(t){return"pending"!==t._state})))&&(r=!0,o(t.apply(null,e.concat([i]))),i=[]),a}),!0)})),l=o.end.map((function(t){!0===t&&(a.forEach((function(t){t.end(!0)})),l.end(!0))}));return o}function o(t){return r((function(){return t.map((function(t){return t()}))}),t)}function i(t){return"pending"===t._state||"active"===t._state||"changing"===t._state}Object.defineProperty(n,"HALT",{get:function(){return e||console.log("HALT is deprecated and has been renamed to SKIP"),e=!0,n.SKIP}}),t.exports=n}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(937),e=n.n(t),r=n(773),o=n.n(r);const i=t=>e=>{const{newIndex:n,shouldUpdate:r}=((t,e)=>{if(void 0===e||Number.isNaN(e))return{newIndex:t.index,shouldUpdate:!1};const n=Math.min(e,t.count-1);return{newIndex:n,shouldUpdate:n>=0&&n<t.count&&n!==t.index}})(t,e.index);return r?{...t,...e.animate?void 0:{index:n},targetIndex:n,isAnimating:!!e.animate}:t},a=t=>e=>{if(!t.locations||!t.location)return;const n=t.locations.indexOf(t.location);return-1!==n?t.locations[e(n)]:void 0},l=(t={})=>{const e=(({index:t=0,count:e=0,sideViews:n=1,location:r,locations:o}={})=>{const i=[...Array(1+2*n)].map(((t,e)=>e-n)),a={targetIndex:t,index:t,count:e,...Array.isArray(o)?{locations:o,count:o?o.length:0,location:o[0]}:void 0,...r?{location:r,index:Array.isArray(o)&&o.indexOf(r)||t}:void 0,isAnimating:!1,direction:"ltr",slots:i,sideViews:n};return a.targetIndex=a.index,a})(t),n=t=>({previous:({animate:e}={animate:!0})=>{t((t=>i(t)({index:t.index-1,animate:!1!==e})))},next:({animate:e}={animate:!0})=>{t((t=>i(t)({index:t.index+1,animate:!1!==e})))},goTo:({index:e,location:n,animate:r})=>{t((t=>{if(n){const e={location:n,animate:r};return(t=>e=>{if(!t.locations||0===t.locations.length)return t;let n=e.location.toString(),r=t.locations.indexOf(n);-1===r&&(r=0,n=t.locations[r]);const o=void 0!==t.location&&!1!==e.animate,a={...t,location:n},l={index:r,animate:o};return i(a)(l)})(t)(e)}if(void 0===e)return t;const o={index:e,animate:r};return i(t)(o)}))},finalize:e=>{t((t=>i(t)({index:e,animate:!1})))},setCount:e=>{t((t=>i({...t,count:e})({index:t.index})))},setDirection:e=>{t((t=>({...t,direction:e})))},setLocations:e=>{t((t=>({...t,locations:e,count:e.length})))}}),r=t=>({hasNext:()=>{const e=t();return e.index<e.count-1},hasPrevious:()=>t().index>0,isAnimating:()=>t().isAnimating,getViewIndices:()=>{const e=t();return e.slots.map((t=>{let n=t+e.index+0;return t<0&&e.targetIndex<e.index?n=t+e.targetIndex+1:t>0&&e.targetIndex>e.index&&(n=t+e.targetIndex-1),n}))},getLocation:()=>{const e=t();return a(e)((t=>t))},getNextLocation:()=>{const e=t();return a(e)((t=>t+1))},getPreviousLocation:()=>{const e=t();return a(e)((t=>t-1))}}),l=o()(),u=o().scan(((t,e)=>e(t)),{...e},l),c={...n(l)},s={...r(u)},f=o().scan(((t,e)=>JSON.stringify(t,null,2)===JSON.stringify(e,null,2)?o().SKIP:e),o().SKIP,u);return{getState:u,getChanges:o().lift((t=>t),f),...c,...s}},u=t=>{const{model:n}=t.attrs,{getState:r,finalize:o,setCount:i,setDirection:a,getViewIndices:l,goTo:u,setLocations:c}=n,s=t=>{o(r().targetIndex)};return{onupdate:({dom:t,children:e,attrs:n})=>{const{locations:o,location:l}=n,s=e.length;s!==r().count&&i(s),o&&JSON.stringify(o)!==JSON.stringify(r().locations)&&c(o),l&&l!==r().location&&u({location:l});const{direction:f}=getComputedStyle(t);f!==r().direction&&a(f)},view:({children:t,attrs:n})=>{if(!t)return null;const{className:o}=n,{className:i,style:a}=(t=>{const e=2*t.sideViews+1,n=100/e,r="rtl"===t.direction?1:-1;let o=r*n*(t.sideViews+0);return t.targetIndex>t.index?o=r*n*(t.sideViews+1):t.targetIndex<t.index&&(o=r*n*(t.sideViews-1)),{style:{width:`calc(${e} * calc(100%))`,transform:`translateX(${o}%)`,...t.isAnimating?void 0:{transitionDuration:"0ms"}},className:t.isAnimating?"glissando-animating":""}})(r());return e()(`.glissando ${o}`,e()(".glissando-slider",{oncreate:t=>{t.dom.addEventListener("transitionend",s)},onremove:t=>{t.dom.removeEventListener("transitionend",s)},className:i,style:a},l().map((n=>e()(".glissando-page",t[n])))))}}};var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t},f=function(t){return s([],Array(t)).map((function(t,e){return e}))},d={view:function(t){var n=t.attrs,r=n.appModel,o=n.model,i=o.getState,a=o.previous,l=o.next,u=o.goTo,c=o.hasPrevious,s=o.hasNext,f=o.isAnimating;return e()("header",[e()(".row.row-meta",[e()("div",[e()("input",{id:"rtl",type:"checkbox",value:"1",checked:r.getState().isRtl,onclick:function(t){r.setIsRtl(t.target.checked)}}),e()("label",{for:"rtl"},"Right to left")]),e()("div",[e()("input",{id:"animate",type:"checkbox",value:"1",checked:r.getState().isAnimated,onclick:function(t){r.setIsAnimated(t.target.checked)}}),e()("label",{for:"animate"},"Animate")])]),e()(".row.row-controls",[e()("button",{onclick:function(){return a({animate:r.getState().isAnimated})},disabled:!c()||f()},"Previous"),e()("button",{onclick:function(){return l({animate:r.getState().isAnimated})},disabled:!s()||f()},"Next"),e()("select",{disabled:i().isAnimating||i().count<2,value:i().index,onchange:function(t){var e=t.target;e&&u({index:parseInt(e.value,10),animate:r.getState().isAnimated})}},r.getState().selectIndices.map((function(t,n){return e()("option",{key:n,value:n},"Go to page "+(n+1))}))),e()("button",{onclick:function(){r.setCount(r.getState().count-1)},disabled:1===r.getState().count||f()},"Remove page"),e()("button",{onclick:function(){r.setCount(r.getState().count+1)},disabled:10===r.getState().count||f()},"Add page")])])}},p={view:function(t){var n=t.attrs.index+1,r="https://arthurclemens.github.io/assets/mithril-slider/img/"+((n<10?"0":"")+n)+".jpg";return e()(".demo-page",e()("img",{src:r}))}},h=function(t,e){for(var n=0,r=e.length,o=t.length;n<r;n++,o++)t[o]=e[n];return t},m=function(){var t,n,r,i,a,s,m,v=(t=>{const n=l(t);return n.getState.map(e().redraw),n})(),g=(n={initialState:{isAnimated:(t={isAnimated:!0,isRtl:!1,count:5,selectIndices:[]}).isAnimated,isRtl:t.isRtl,count:t.count,selectIndices:f(t.count)},actions:function(t){return{setIsAnimated:function(e){t((function(t){return c(c({},t),{isAnimated:e})}))},setIsRtl:function(e){t((function(t){return c(c({},t),{isRtl:e})}))},setCount:function(e){t((function(t){return c(c({},t),{count:e,selectIndices:f(e)})}))}}}},r=o()(),i=o().scan((function(t,e){return e(t)}),c({},n.initialState),r),a=c({},n.actions(r)),s=o().scan((function(t,e){return JSON.stringify(t,null,2)===JSON.stringify(e,null,2)?o().SKIP:e}),c({},n.initialState),i),m=o().lift((function(t){return t}),s),c({getState:i,getChanges:m},a));return g.getChanges.map((function(t){return g.setCount(t.count),null})),{view:function(){var t=g.getState().count,n=h([],Array(t)).map((function(t,e){return e}));return e()(".demo-container",{dir:g.getState().isRtl?"rtl":""},[e()(d,{model:v,appModel:g}),e()(u,{model:v},n.map((function(t){return e()(p,{key:t,index:t})})))])}}},v=document.getElementById("root");v&&e().mount(v,(function(){return{view:function(){return e()(m)}}}))}()}();
//# sourceMappingURL=index.js.map