import{_ as t,a as n,b as r,c,i as e,s as o,d as a,S as s,J as f,f as u,j as i,k as l,g as v,m as h,n as d,B as $,K as p,C as m,D as y,e as g,h as R,o as E,r as w,t as I,l as x,x as D,y as b,A as V,E as k,L as B,M as O,N as P,O as _,w as A,P as C,Q as N,G as S}from"./client.019cce5a.js";import{I as j}from"./icon-button.661117f5.js";function T(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(c){var a=n(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return r(this,e)}}function q(t){var n,r,c=t[1].default,e=f(c,t,t[0],null);return{c:function(){n=u("div"),e&&e.c(),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var r=l(n);e&&e.l(r),r.forEach(v),this.h()},h:function(){h(n,"class","container svelte-qzeduu")},m:function(t,c){d(t,n,c),e&&e.m(n,null),r=!0},p:function(t,n){var r=$(n,1)[0];e&&e.p&&1&r&&p(e,c,t,t[0],r,null,null)},i:function(t){r||(m(e,t),r=!0)},o:function(t){y(e,t),r=!1},d:function(t){t&&v(n),e&&e.d(t)}}}function z(t,n,r){var c=n.$$slots,e=void 0===c?{}:c,o=n.$$scope;return t.$$set=function(t){"$$scope"in t&&r(0,o=t.$$scope)},[o,e]}var G=function(n){t(f,s);var r=T(f);function f(t){var n;return c(this,f),n=r.call(this),e(a(n),t,z,q,o,{}),n}return f}();function H(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(c){var a=n(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return r(this,e)}}function J(t){var n,r,c,e,o,a;return{c:function(){n=u("div"),r=u("div"),c=g(),e=u("div"),o=g(),a=u("div"),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var s=l(n);r=i(s,"DIV",{class:!0}),l(r).forEach(v),c=R(s),e=i(s,"DIV",{class:!0}),l(e).forEach(v),o=R(s),a=i(s,"DIV",{class:!0}),l(a).forEach(v),s.forEach(v),this.h()},h:function(){h(r,"class","dot svelte-y9x7nt"),h(e,"class","dot svelte-y9x7nt"),h(a,"class","dot svelte-y9x7nt"),h(n,"class","container svelte-y9x7nt")},m:function(t,s){d(t,n,s),E(n,r),E(n,c),E(n,e),E(n,o),E(n,a)},p:w,i:w,o:w,d:function(t){t&&v(n)}}}var K=function(n){t(f,s);var r=H(f);function f(t){var n;return c(this,f),n=r.call(this),e(a(n),t,null,J,o,{}),n}return f}();function L(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(c){var a=n(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return r(this,e)}}function M(t,n,r){var c=t.slice();return c[2]=n[r],c}function Q(t){var n,r;return{c:function(){n=u("p"),r=I("uh oh 🙊 looks like you don't have any vocab yet!  No worries, let's add one now! 😃")},l:function(t){n=i(t,"P",{});var c=l(n);r=x(c,"uh oh 🙊 looks like you don't have any vocab yet!  No worries, let's add one now! 😃"),c.forEach(v)},m:function(t,c){d(t,n,c),E(n,r)},d:function(t){t&&v(n)}}}function F(t){var n,r,c,e,o,a,s,f,$,p=t[2].word+"",m=C.DateTime.fromISO(t[2].createdAt).toRelativeCalendar()+"",y=t[2].sentences[0].text+"";return{c:function(){n=u("div"),r=u("div"),c=I(p),e=g(),o=u("div"),a=I(m),s=g(),f=u("p"),$=I(y),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var u=l(n);r=i(u,"DIV",{class:!0});var h=l(r);c=x(h,p),h.forEach(v),e=R(u),o=i(u,"DIV",{class:!0});var d=l(o);a=x(d,m),d.forEach(v),u.forEach(v),s=R(t),f=i(t,"P",{class:!0});var g=l(f);$=x(g,y),g.forEach(v),this.h()},h:function(){h(r,"class","vocab_word svelte-1l3r1c7"),h(o,"class","vocab_createdAt svelte-1l3r1c7"),h(n,"class","vocab_header svelte-1l3r1c7"),h(f,"class","vocab_sentence svelte-1l3r1c7")},m:function(t,u){d(t,n,u),E(n,r),E(r,c),E(n,e),E(n,o),E(o,a),d(t,s,u),d(t,f,u),E(f,$)},p:function(t,n){1&n&&p!==(p=t[2].word+"")&&N(c,p),1&n&&m!==(m=C.DateTime.fromISO(t[2].createdAt).toRelativeCalendar()+"")&&N(a,m),1&n&&y!==(y=t[2].sentences[0].text+"")&&N($,y)},d:function(t){t&&v(n),t&&v(s),t&&v(f)}}}function U(t){var n,r,c;return r=new G({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),{c:function(){n=u("div"),D(r.$$.fragment),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var c=l(n);b(r.$$.fragment,c),c.forEach(v),this.h()},h:function(){h(n,"class","vocab svelte-1l3r1c7")},m:function(t,e){d(t,n,e),V(r,n,null),c=!0},p:function(t,n){var c={};33&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c)},i:function(t){c||(m(r.$$.fragment,t),c=!0)},o:function(t){y(r.$$.fragment,t),c=!1},d:function(t){t&&v(n),k(r)}}}function W(t){for(var n,r,c,e,o,a,s,f,p,w,P,A=0===t[0].length&&Q(),C=t[0],N=[],S=0;S<C.length;S+=1)N[S]=U(M(t,C,S));var T=function(t){return y(N[t],1,1,(function(){N[t]=null}))};return f=new K({}),(w=new j({props:{icon:"add"}})).$on("click",t[1]),{c:function(){n=u("section"),r=u("h1"),c=I("welcome back"),e=g(),A&&A.c(),o=g();for(var t=0;t<N.length;t+=1)N[t].c();a=g(),s=u("div"),D(f.$$.fragment),p=g(),D(w.$$.fragment),this.h()},l:function(t){n=i(t,"SECTION",{});var u=l(n);r=i(u,"H1",{});var h=l(r);c=x(h,"welcome back"),h.forEach(v),e=R(u),A&&A.l(u),o=R(u);for(var d=0;d<N.length;d+=1)N[d].l(u);a=R(u),s=i(u,"DIV",{class:!0});var $=l(s);b(f.$$.fragment,$),p=R($),b(w.$$.fragment,$),$.forEach(v),u.forEach(v),this.h()},h:function(){h(s,"class","new-vocab svelte-1l3r1c7")},m:function(t,u){d(t,n,u),E(n,r),E(r,c),E(n,e),A&&A.m(n,null),E(n,o);for(var i=0;i<N.length;i+=1)N[i].m(n,null);E(n,a),E(n,s),V(f,s,null),E(s,p),V(w,s,null),P=!0},p:function(t,r){var c=$(r,1)[0];if(0===t[0].length?A||((A=Q()).c(),A.m(n,o)):A&&(A.d(1),A=null),1&c){var e;for(C=t[0],e=0;e<C.length;e+=1){var s=M(t,C,e);N[e]?(N[e].p(s,c),m(N[e],1)):(N[e]=U(s),N[e].c(),m(N[e],1),N[e].m(n,a))}for(_(),e=C.length;e<N.length;e+=1)T(e);B()}},i:function(t){if(!P){for(var n=0;n<C.length;n+=1)m(N[n]);m(f.$$.fragment,t),m(w.$$.fragment,t),P=!0}},o:function(t){N=N.filter(Boolean);for(var n=0;n<N.length;n+=1)y(N[n]);y(f.$$.fragment,t),y(w.$$.fragment,t),P=!1},d:function(t){t&&v(n),A&&A.d(),O(N,t),k(f),k(w)}}}function X(t,n,r){var c;P(t,S,(function(t){return r(0,c=t)}));return[c,function(){return A("words/add")}]}var Y=function(n){t(f,s);var r=L(f);function f(t){var n;return c(this,f),n=r.call(this),e(a(n),t,X,W,o,{}),n}return f}();export default Y;
