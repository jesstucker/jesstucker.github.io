function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function p(){}function h(){}function d(){}var v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==r&&n.call(g,a)&&(v=g);var y=d.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function $(e,r){var o;this._invoke=function(a,i){function c(){return new r((function(o,c){!function o(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y.constructor=d,d.constructor=h,h.displayName=u(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},b($.prototype),$.prototype[i]=function(){return this},e.AsyncIterator=$,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new $(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),u(y,c,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function w(t){return"function"==typeof t}function x(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){if(t){var o=_(t,e,r,n);return t[0](o)}}function _(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function S(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=_(r,n,o,c);e.p(s,u)}}function L(t,e){t.appendChild(e)}function R(t,e,r){t.insertBefore(e,r||null)}function j(t){t.parentNode.removeChild(t)}function P(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function A(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function N(){return O(" ")}function C(){return O("")}function I(t,e,r,n){return t.addEventListener(e,r,n),function(){return t.removeEventListener(e,r,n)}}function q(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function D(t){return Array.from(t.childNodes)}function T(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return n?k(e):A(e)}function U(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return O(e)}function G(t){return U(t," ")}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function H(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function J(t){o=t}function M(){if(!o)throw new Error("Function called outside component initialization");return o}function V(t){M().$$.on_mount.push(t)}var Y=[],K=[],z=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){z.push(t)}var tt=!1,et=new Set;function rt(){if(!tt){tt=!0;do{for(var t=0;t<Y.length;t+=1){var e=Y[t];J(e),nt(e.$$)}for(Y.length=0;K.length;)K.pop()();for(var r=0;r<z.length;r+=1){var n=z[r];et.has(n)||(et.add(n),n())}z.length=0}while(Y.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function nt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,at=new Set;function it(){ot={r:0,c:[],p:ot}}function ct(){ot.r||$(ot.c),ot=ot.p}function ut(t,e){t&&t.i&&(at.delete(t),t.i(e))}function st(t,e,r,n){if(t&&t.o){if(at.has(t))return;at.add(t),ot.c.push((function(){at.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function ft(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function lt(e){return"object"===t(e)&&null!==e?e:{}}function pt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function dt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),Z((function(){var e=a.map(y).filter(w);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(Z)}function vt(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),Q||(Q=!0,X.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(t,e,r,n,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;J(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&mt(t,e)),r})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=D(e.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&ut(t.$$.fragment),dt(t,e.target,e.anchor),rt()}J(u)}var yt=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){vt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&v(e.prototype,r),n&&v(e,n),t}(),bt=[];function $t(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(x(t,r)&&(t=r,e)){for(var o=!bt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),bt.push(i,t)}if(o){for(var c=0;c<bt.length;c+=2)bt[c][0](bt[c+1]);bt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var wt={},xt=function(){return{}};function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function _t(t){var e,r,o,a,i,c,u,s,f,l,p,h,d,v,g,y,b,$,w,x,E,_,S,P,k,C;return{c:function(){e=A("nav"),r=A("ul"),o=A("li"),a=A("a"),i=O("home"),u=N(),s=A("li"),f=A("a"),l=O("cv"),h=N(),d=A("li"),v=A("a"),g=O("code"),b=N(),$=A("li"),w=A("a"),x=O("music"),_=N(),S=A("li"),P=A("a"),k=O("blog"),this.h()},l:function(t){var n=D(e=T(t,"NAV",{class:!0})),c=D(r=T(n,"UL",{class:!0})),p=D(o=T(c,"LI",{class:!0})),m=D(a=T(p,"A",{"aria-current":!0,href:!0,class:!0}));i=U(m,"home"),m.forEach(j),p.forEach(j),u=G(c);var y=D(s=T(c,"LI",{class:!0})),E=D(f=T(y,"A",{"aria-current":!0,href:!0,class:!0}));l=U(E,"cv"),E.forEach(j),y.forEach(j),h=G(c);var L=D(d=T(c,"LI",{class:!0})),R=D(v=T(L,"A",{"aria-current":!0,href:!0,class:!0}));g=U(R,"code"),R.forEach(j),L.forEach(j),b=G(c);var A=D($=T(c,"LI",{class:!0})),O=D(w=T(A,"A",{"aria-current":!0,href:!0,class:!0}));x=U(O,"music"),O.forEach(j),A.forEach(j),_=G(c);var N=D(S=T(c,"LI",{class:!0})),C=D(P=T(N,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));k=U(C,"blog"),C.forEach(j),N.forEach(j),c.forEach(j),n.forEach(j),this.h()},h:function(){q(a,"aria-current",c=void 0===t[0]?"page":void 0),q(a,"href","."),q(a,"class","svelte-1dbd5up"),q(o,"class","svelte-1dbd5up"),q(f,"aria-current",p="cv"===t[0]?"page":void 0),q(f,"href","cv"),q(f,"class","svelte-1dbd5up"),q(s,"class","svelte-1dbd5up"),q(v,"aria-current",y="code"===t[0]?"page":void 0),q(v,"href","code"),q(v,"class","svelte-1dbd5up"),q(d,"class","svelte-1dbd5up"),q(w,"aria-current",E="music"===t[0]?"page":void 0),q(w,"href","music"),q(w,"class","svelte-1dbd5up"),q($,"class","svelte-1dbd5up"),q(P,"rel","prefetch"),q(P,"aria-current",C="blog"===t[0]?"page":void 0),q(P,"href","blog"),q(P,"class","svelte-1dbd5up"),q(S,"class","svelte-1dbd5up"),q(r,"class","svelte-1dbd5up"),q(e,"class","svelte-1dbd5up")},m:function(t,n){R(t,e,n),L(e,r),L(r,o),L(o,a),L(a,i),L(r,u),L(r,s),L(s,f),L(f,l),L(r,h),L(r,d),L(d,v),L(v,g),L(r,b),L(r,$),L($,w),L(w,x),L(r,_),L(r,S),L(S,P),L(P,k)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c=void 0===t[0]?"page":void 0)&&q(a,"aria-current",c),1&r&&p!==(p="cv"===t[0]?"page":void 0)&&q(f,"aria-current",p),1&r&&y!==(y="code"===t[0]?"page":void 0)&&q(v,"aria-current",y),1&r&&E!==(E="music"===t[0]?"page":void 0)&&q(w,"aria-current",E),1&r&&C!==(C="blog"===t[0]?"page":void 0)&&q(P,"aria-current",C)},i:m,o:m,d:function(t){t&&j(e)}}}function St(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var Lt=function(t){f(r,yt);var e=Et(r);function r(t){var n;return d(this,r),gt(l(n=e.call(this)),t,St,_t,x,{segment:0}),n}return r}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function jt(t){var e,r,o,a;e=new Lt({props:{segment:t[0]}});var i=t[2].default,c=E(i,t,t[1],null);return{c:function(){pt(e.$$.fragment),r=N(),o=A("main"),c&&c.c()},l:function(t){ht(e.$$.fragment,t),r=G(t);var n=D(o=T(t,"MAIN",{}));c&&c.l(n),n.forEach(j)},m:function(t,n){dt(e,t,n),R(t,r,n),R(t,o,n),c&&c.m(o,null),a=!0},p:function(t,r){var o=n(r,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),c&&c.p&&2&o&&S(c,i,t,t[1],o,null,null)},i:function(t){a||(ut(e.$$.fragment,t),ut(c,t),a=!0)},o:function(t){st(e.$$.fragment,t),st(c,t),a=!1},d:function(t){vt(e,t),t&&j(r),t&&j(o),c&&c.d(t)}}}function Pt(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var At=function(t){f(r,yt);var e=Rt(r);function r(t){var n;return d(this,r),gt(l(n=e.call(this)),t,Pt,jt,x,{segment:0}),n}return r}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ot(t){var e,r,n=t[1].stack+"";return{c:function(){e=A("pre"),r=O(n)},l:function(t){var o=D(e=T(t,"PRE",{}));r=U(o,n),o.forEach(j)},m:function(t,n){R(t,e,n),L(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&F(r,n)},d:function(t){t&&j(e)}}}function Nt(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Ot(t);return{c:function(){r=N(),o=A("h1"),a=O(t[0]),i=N(),c=A("p"),u=O(l),s=N(),p&&p.c(),f=C(),this.h()},l:function(e){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(j),r=G(e);var n=D(o=T(e,"H1",{class:!0}));a=U(n,t[0]),n.forEach(j),i=G(e);var h=D(c=T(e,"P",{class:!0}));u=U(h,l),h.forEach(j),s=G(e),p&&p.l(e),f=C(),this.h()},h:function(){q(o,"class","svelte-8od9u6"),q(c,"class","svelte-8od9u6")},m:function(t,e){R(t,r,e),R(t,o,e),L(o,a),R(t,i,e),R(t,c,e),L(c,u),R(t,s,e),p&&p.m(t,e),R(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&F(a,t[0]),2&o&&l!==(l=t[1].message+"")&&F(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Ot(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&j(r),t&&j(o),t&&j(i),t&&j(c),t&&j(s),p&&p.d(t),t&&j(f)}}}function Ct(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var It=function(t){f(r,yt);var e=kt(r);function r(t){var n;return d(this,r),gt(l(n=e.call(this)),t,Ct,Nt,x,{status:0,error:1}),n}return r}();function qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Dt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=g(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&pt(e.$$.fragment),r=C()},l:function(t){e&&ht(e.$$.fragment,t),r=C()},m:function(t,o){e&&dt(e,t,o),R(t,r,o),n=!0},p:function(t,n){var c=16&n?ft(o,[lt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){it();var u=e;st(u.$$.fragment,1,0,(function(){vt(u,1)})),ct()}a?(pt((e=new a(i())).$$.fragment),ut(e.$$.fragment,1),dt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&ut(e.$$.fragment,t),n=!0)},o:function(t){e&&st(e.$$.fragment,t),n=!1},d:function(t){t&&j(r),e&&vt(e,t)}}}function Tt(t){var e,r;return e=new It({props:{error:t[0],status:t[1]}}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,n){dt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){st(e.$$.fragment,t),r=!1},d:function(t){vt(e,t)}}}function Ut(t){var e,r,n,o,a=[Tt,Dt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=C()},l:function(t){r.l(t),n=C()},m:function(t,r){i[e].m(t,r),R(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(it(),st(i[u],1,1,(function(){i[u]=null})),ct(),(r=i[e])||(r=i[e]=a[e](t)).c(),ut(r,1),r.m(n.parentNode,n))},i:function(t){o||(ut(r),o=!0)},o:function(t){st(r),o=!1},d:function(t){i[e].d(t),t&&j(n)}}}function Gt(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Ut]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=g(a,o[i]);return e=new At({props:a}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,n){dt(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?ft(o,[4&a&&{segment:t[2][0]},8&a&&lt(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){st(e.$$.fragment,t),r=!1},d:function(t){vt(e,t)}}}function Ft(t,e,r){var n,o,a,i=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,M().$$.after_update.push(n),o=wt,a=i,M().$$.context.set(o,a),t.$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,c=t.error),"status"in t&&r(1,u=t.status),"segments"in t&&r(2,s=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[c,u,s,f,p,i,h]}var Ht,Bt=function(t){f(r,yt);var e=qt(r);function r(t){var n;return d(this,r),gt(l(n=e.call(this)),t,Ft,Gt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Jt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],Mt=[{js:function(){return import("./index.9bc3b1ef.js")},css:[]},{js:function(){return import("./resume.9440b4c6.js")},css:[]},{js:function(){return import("./about.f4d26bba.js")},css:[]},{js:function(){return import("./index.a72ac8c8.js")},css:[]},{js:function(){return import("./[slug].f22bb01f.js")},css:[]}],Vt=(Ht=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:Ht(t[1])}}}]}]);function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=he(new URL(t,document.baseURI));return r?(fe[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ve(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Kt,zt,Wt,Xt,Qt,Zt="undefined"!=typeof __SAPPER__&&__SAPPER__,te=!1,ee=[],re="{}",ne={page:function(t){var e=$t(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:$t(null),session:$t(Zt&&Zt.session)};ne.session.subscribe(function(){var t=c(a.mark((function t(e){var r,n,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Xt=e,te){t.next=3;break}return t.abrupt("return");case 3:return Qt=!0,r=he(new URL(location.href)),n=zt={},t.next=8,$e(r);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,n===zt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ge(i,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var oe,ae=null;var ie,ce=1;var ue,se,fe="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},le={};function pe(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function he(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt.baseUrl))return null;var e=t.pathname.slice(Zt.baseUrl.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var r=0;r<Vt.length;r+=1){var n=Vt[r],o=n.pattern.exec(e);if(o){var a=pe(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function de(){return{x:pageXOffset,y:pageYOffset}}function ve(t,e,r,n){return me.apply(this,arguments)}function me(){return(me=c(a.mark((function t(e,r,n,o){var i,c,u,s,f,l,p,h,d;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?ie=r:(i=de(),le[ie]=i,r=ie=++ce,le[ie]=n?i:{x:0,y:0}),ie=r,Kt&&ne.preloading.set(!0),c=ae&&ae.href===e.href?ae.promise:$e(e),ae=null,u=zt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===zt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ge(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=le[r],o&&(d=document.getElementById(o.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top+scrollY}),le[ie]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ge(t,e,r,n){return ye.apply(this,arguments)}function ye(){return(ye=c(a.mark((function t(e,r,n,o){var i,c;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Yt(e.location,{replaceState:!0}));case 2:if(ne.page.set(o),ne.preloading.set(!1),!Kt){t.next=8;break}Kt.$set(n),t.next=18;break;case 8:return n.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},t.next=11,Wt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},n.notify=ne.page.notify,i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)_e(i.nextSibling);_e(i),_e(c)}Kt=new Bt({target:oe,props:n,hydrate:!0});case 18:ee=r,re=JSON.stringify(o.query),te=!0,Qt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function be(t,e,r,n){if(n!==re)return!0;var o=ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function $e(t){return we.apply(this,arguments)}function we(){return(we=c(a.mark((function t(e){var r,n,o,i,u,s,f,l,p,h,d;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Wt||(Wt=Zt.preloaded[0]||xt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Xt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),d=!1,t.next=13,Promise.all(r.parts.map(function(){var t=c(a.mark((function t(r,i){var c,f,v,m,g,y;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],be(i,c,h,p)&&(d=!0),u.segments[l]=o[i+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Qt||d||!ee[i]||ee[i].part!==r.i){t.next=8;break}return t.abrupt("return",ee[i]);case 8:return d=!1,t.next=11,Ee(Mt[r.i]);case 11:if(v=t.sent,m=v.default,g=v.preload,!te&&Zt.preloaded[i+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Xt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=Zt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:y,segment:c,match:h,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function xe(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function Ee(t){var e="string"==typeof t.css?[]:t.css.map(xe);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function _e(t){t.parentNode.removeChild(t)}function Se(t){var e=he(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,$e(e)),ae.promise}function Le(t){clearTimeout(ue),ue=setTimeout((function(){Re(t)}),20)}function Re(t){var e=Pe(t.target);e&&"prefetch"===e.rel&&Se(e.href)}function je(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Pe(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=he(a);if(i)ve(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),fe.pushState({id:ie},"",a.href)}}}else location.hash||e.preventDefault()}}}function Pe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ae(t){if(le[ie]=de(),t.state){var e=he(new URL(location.href));e?ve(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ce=ce+1),fe.replaceState({id:ie},"",location.href)}se={target:document.querySelector("#sapper")},"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){fe.scrollRestoration="auto"})),addEventListener("load",(function(){fe.scrollRestoration="manual"})),function(t){oe=t}(se.target),addEventListener("click",je),addEventListener("popstate",Ae),addEventListener("touchstart",Re),addEventListener("mousemove",Le),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;fe.replaceState({id:ce},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Zt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Zt.session,u=Zt.preloaded,s=Zt.status,f=Zt.error,Wt||(Wt=u&&u[0]),void ge(null,[],{error:f,status:s,session:c,level0:{props:Wt},level1:{props:{status:s,error:f},component:It},segments:u},{host:o,path:a,query:pe(i),params:{}});var p=he(l);return p?ve(p,ce,!0,e):void 0}));export{F as A,P as B,V as C,c as D,a as E,pt as F,B as G,ht as H,dt as I,vt as J,yt as S,f as _,u as a,p as b,d as c,l as d,k as e,T as f,D as g,j as h,gt as i,q as j,H as k,R as l,L as m,m as n,E as o,A as p,N as q,G as r,x as s,n as t,S as u,ut as v,st as w,O as x,U as y,I as z};
