function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?h(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function P(t){A=t}function R(){if(!A)throw new Error("Function called outside component initialization");return A}const L=[],j=[],C=[],N=[],q=Promise.resolve();let O=!1;function U(t){C.push(t)}let k=!1;const I=new Set;function D(){if(!k){k=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];P(e),H(e.$$)}for(L.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];I.has(e)||(I.add(e),e())}C.length=0}while(L.length);for(;N.length;)N.pop()();O=!1,k=!1,I.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const T=new Set;let B;function J(){B={r:0,c:[],p:B}}function V(){B.r||o(B.c),B=B.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),B.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,a,c,i,l=[-1]){const u=A;P(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Q(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=b(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),W(e,n.target,n.anchor),D()}P(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={},ot=()=>({});function st(e){let n,r,o,s,a,c,i,p,h,$,S,w,x,A,P,R,L,j,C,N,q,O,U,k,I,D;return{c(){n=d("nav"),r=d("ul"),o=d("li"),s=d("a"),a=m("home"),i=g(),p=d("li"),h=d("a"),$=m("cv"),w=g(),x=d("li"),A=d("a"),P=m("code"),L=g(),j=d("li"),C=d("a"),N=m("music"),O=g(),U=d("li"),k=d("a"),I=m("blog"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=b(n);r=y(e,"UL",{class:!0});var c=b(r);o=y(c,"LI",{class:!0});var l=b(o);s=y(l,"A",{"aria-current":!0,href:!0,class:!0});var u=b(s);a=E(u,"home"),u.forEach(f),l.forEach(f),i=_(c),p=y(c,"LI",{class:!0});var d=b(p);h=y(d,"A",{"aria-current":!0,href:!0,class:!0});var m=b(h);$=E(m,"cv"),m.forEach(f),d.forEach(f),w=_(c),x=y(c,"LI",{class:!0});var g=b(x);A=y(g,"A",{"aria-current":!0,href:!0,class:!0});var v=b(A);P=E(v,"code"),v.forEach(f),g.forEach(f),L=_(c),j=y(c,"LI",{class:!0});var S=b(j);C=y(S,"A",{"aria-current":!0,href:!0,class:!0});var R=b(C);N=E(R,"music"),R.forEach(f),S.forEach(f),O=_(c),U=y(c,"LI",{class:!0});var q=b(U);k=y(q,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var D=b(k);I=E(D,"blog"),D.forEach(f),q.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(s,"aria-current",c=void 0===e[0]?"page":void 0),v(s,"href","."),v(s,"class","svelte-1dbd5up"),v(o,"class","svelte-1dbd5up"),v(h,"aria-current",S="cv"===e[0]?"page":void 0),v(h,"href","cv"),v(h,"class","svelte-1dbd5up"),v(p,"class","svelte-1dbd5up"),v(A,"aria-current",R="code"===e[0]?"page":void 0),v(A,"href","code"),v(A,"class","svelte-1dbd5up"),v(x,"class","svelte-1dbd5up"),v(C,"aria-current",q="music"===e[0]?"page":void 0),v(C,"href","music"),v(C,"class","svelte-1dbd5up"),v(j,"class","svelte-1dbd5up"),v(k,"rel","prefetch"),v(k,"aria-current",D="blog"===e[0]?"page":void 0),v(k,"href","blog"),v(k,"class","svelte-1dbd5up"),v(U,"class","svelte-1dbd5up"),v(r,"class","svelte-1dbd5up"),v(n,"class","svelte-1dbd5up")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(r,i),l(r,p),l(p,h),l(h,$),l(r,w),l(r,x),l(x,A),l(A,P),l(r,L),l(r,j),l(j,C),l(C,N),l(r,O),l(r,U),l(U,k),l(k,I)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(s,"aria-current",c),1&e&&S!==(S="cv"===t[0]?"page":void 0)&&v(h,"aria-current",S),1&e&&R!==(R="code"===t[0]?"page":void 0)&&v(A,"aria-current",R),1&e&&q!==(q="music"===t[0]?"page":void 0)&&v(C,"aria-current",q),1&e&&D!==(D="blog"===t[0]?"page":void 0)&&v(k,"aria-current",D)},i:t,o:t,d(t){t&&f(n)}}}function at(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ct extends tt{constructor(t){super(),Z(this,t,at,st,a,{segment:0})}}function it(t){let e,n,r,o;e=new ct({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){F(e.$$.fragment),n=g(),r=d("main"),a&&a.c()},l(t){G(e.$$.fragment,t),n=_(t),r=y(t,"MAIN",{});var o=b(r);a&&a.l(o),o.forEach(f)},m(t,s){W(e,t,s),u(t,n,s),u(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&i(a,s,t,t[1],n,null,null)},i(t){o||(K(e.$$.fragment,t),K(a,t),o=!0)},o(t){M(e.$$.fragment,t),M(a,t),o=!1},d(t){X(e,t),t&&f(n),t&&f(r),a&&a.d(t)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ut extends tt{constructor(t){super(),Z(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=y(t,"PRE",{});var o=b(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,a,c,i,p,h,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ft(e);return{c(){r=g(),o=d("h1"),s=m(e[0]),a=g(),c=d("p"),i=m(w),p=g(),A&&A.c(),h=$(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=y(t,"H1",{class:!0});var n=b(o);s=E(n,e[0]),n.forEach(f),a=_(t),c=y(t,"P",{class:!0});var l=b(c);i=E(l,w),l.forEach(f),p=_(t),A&&A.l(t),h=$(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),A&&A.m(t,e),u(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&w!==(w=t[1].message+"")&&S(i,w),t[2]&&t[1].stack?A?A.p(t,e):(A=ft(t),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f(h)}}}function dt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ht extends tt{constructor(t){super(),Z(this,t,dt,pt,a,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&F(n.$$.fragment),r=$()},l(t){n&&G(n.$$.fragment,t),r=$()},m(t,e){n&&W(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[z(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){J();const t=n;M(t.$$.fragment,1,0,()=>{X(t,1)}),V()}a?(n=new a(c()),F(n.$$.fragment),K(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&X(n,t)}}}function gt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){F(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(J(),M(a[i],1,1,()=>{a[i]=null}),V(),n=a[e],n||(n=a[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function vt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){M(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=rt,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class yt extends tt{constructor(t){super(),Z(this,t,bt,vt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],_t=[{js:()=>import("./index.d6ad404d.js"),css:[]},{js:()=>import("./resume.b5fba151.js"),css:[]},{js:()=>import("./about.b89aa1c9.js"),css:[]},{js:()=>import("./index.88fb6434.js"),css:[]},{js:()=>import("./[slug].c1e78fde.js"),css:[]}],St=(wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/resume\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:wt(t[1])})}]}]);var wt;const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Pt,Rt,Lt=!1,jt=[],Ct="{}";const Nt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(xt&&xt.session)};let qt,Ot;Nt.session.subscribe(async t=>{if(qt=t,!Lt)return;Ot=!0;const e=Jt(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Yt(e);n===Pt&&await Mt(r,s,o,e.page)});let Ut,kt=null;let It,Dt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Bt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)It=e;else{const t=Vt();Tt[It]=t,e=It=++Dt,Tt[It]=n?t:{x:0,y:0}}It=e,At&&Nt.preloading.set(!0);const o=kt&&kt.href===t.href?kt.promise:Yt(t);kt=null;const s=Pt={},{redirect:a,props:c,branch:i}=await o;if(s===Pt&&(await Mt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[It]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:It},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await Rt},n.notify=Nt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}At=new yt({target:Ut,props:n,hydrate:!0})}jt=e,Ct=JSON.stringify(r.query),Lt=!0,Ot=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Rt||(Rt=xt.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const o=jt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ot&&!u&&jt[c]&&jt[c].part===e.i)return jt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Lt||!xt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:xt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function Gt(t){const e=Jt(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Yt(e)),kt.promise}let Wt;function Xt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Kt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ht.pushState({id:It},"",o.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Tt[It]=Vt(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){It=t}(Dt),Ht.replaceState({id:It},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ht.scrollRestoration="auto"}),addEventListener("load",()=>{Ht.scrollRestoration="manual"}),function(t){Ut=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Dt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=xt;Rt||(Rt=s&&s[0]),Mt(null,[],{error:c,status:a,session:o,level0:{props:Rt},level1:{props:{status:a,error:c},component:ht},segments:s},{host:e,path:n,query:Bt(r),params:{}})}();const r=Jt(n);return r?Kt(r,Dt,!0,t):void 0});export{tt as S,h as a,b,y as c,f as d,v as e,w as f,u as g,l as h,Z as i,g as j,d as k,F as l,_ as m,t as n,G as o,E as p,x as q,W as r,a as s,m as t,K as u,M as v,X as w,S as x,p as y};