import{_ as n,a as t,b as r,c as a,i as c,s as e,d as o,S as s,A as i,f as u,j as f,k as l,g as v,m as p,n as $,o as h,z as m,B as d,C as g,D as y,E as w,F as b,G as x,H as E,I as k,J as R,K as I,t as C,e as V,l as j,h as D,L as P,M as B,N as O,r as z,O as F,v as H,w as N,P as S}from"./client.dc2272d5.js";import{f as J}from"./index.312f8861.js";import{I as T}from"./icon-button.85d422c6.js";function A(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(a){var o=t(this).constructor;c=Reflect.construct(e,arguments,o)}else c=e.apply(this,arguments);return r(this,c)}}function G(n){var t,r,a,c,e,o=n[1].default,s=i(o,n,n[0],null);return{c:function(){t=u("div"),r=u("div"),s&&s.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=l(t);r=f(a,"DIV",{class:!0});var c=l(r);s&&s.l(c),c.forEach(v),a.forEach(v),this.h()},h:function(){p(r,"class","alert-window svelte-wjwcrp"),p(t,"class","cmp-alert svelte-wjwcrp")},m:function(n,a){$(n,t,a),h(t,r),s&&s.m(r,null),e=!0},p:function(n,t){var r=m(t,1)[0];s&&s.p&&(!e||1&r)&&d(s,o,n,n[0],r,null,null)},i:function(n){e||(g(s,n),y((function(){c&&c.end(1),a||(a=w(t,J,{})),a.start()})),e=!0)},o:function(n){b(s,n),a&&a.invalidate(),c=x(t,J,{}),e=!1},d:function(n){n&&v(t),s&&s.d(n),n&&c&&c.end()}}}function K(n,t,r){var a=t.$$slots,c=void 0===a?{}:a,e=t.$$scope;return n.$$set=function(n){"$$scope"in n&&r(0,e=n.$$scope)},[e,c]}var L=function(t){n(i,s);var r=A(i);function i(n){var t;return a(this,i),t=r.call(this),c(o(t),n,K,G,e,{}),t}return i}();function M(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(a){var o=t(this).constructor;c=Reflect.construct(e,arguments,o)}else c=e.apply(this,arguments);return r(this,c)}}function _(n){var t,r;return t=new L({props:{$$slots:{default:[q]},$$scope:{ctx:n}}}),{c:function(){E(t.$$.fragment)},l:function(n){k(t.$$.fragment,n)},m:function(n,a){R(t,n,a),r=!0},p:function(n,r){var a={};514&r&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i:function(n){r||(g(t.$$.fragment,n),r=!0)},o:function(n){b(t.$$.fragment,n),r=!1},d:function(n){I(t,n)}}}function q(n){var t,r,a,c,e,o,s,i,m,d,y;return(i=new T({props:{icon:"tick",iconColor:"#F4676F"}})).$on("click",n[6]),(d=new T({props:{icon:"incorrect",iconColor:"gray"}})).$on("click",n[7]),{c:function(){t=u("h1"),r=C("confirmation"),a=V(),c=u("p"),e=C("are you sure you want to clear all your vocabs?"),o=V(),s=u("div"),E(i.$$.fragment),m=V(),E(d.$$.fragment),this.h()},l:function(n){t=f(n,"H1",{class:!0});var u=l(t);r=j(u,"confirmation"),u.forEach(v),a=D(n),c=f(n,"P",{});var p=l(c);e=j(p,"are you sure you want to clear all your vocabs?"),p.forEach(v),o=D(n),s=f(n,"DIV",{class:!0});var $=l(s);k(i.$$.fragment,$),m=D($),k(d.$$.fragment,$),$.forEach(v),this.h()},h:function(){p(t,"class","svelte-6aegme"),p(s,"class","confirmation-actions svelte-6aegme")},m:function(n,u){$(n,t,u),h(t,r),$(n,a,u),$(n,c,u),h(c,e),$(n,o,u),$(n,s,u),R(i,s,null),h(s,m),R(d,s,null),y=!0},p:z,i:function(n){y||(g(i.$$.fragment,n),g(d.$$.fragment,n),y=!0)},o:function(n){b(i.$$.fragment,n),b(d.$$.fragment,n),y=!1},d:function(n){n&&v(t),n&&v(a),n&&v(c),n&&v(o),n&&v(s),I(i),I(d)}}}function Q(n){var t,r,a,c,e,o,s,i,d,y,w,x,B,O,z,H,N;(d=new T({props:{icon:"delete",size:"small",textColor:"white",iconColor:n[0]?"gray":void 0,disabled:n[0]}})).$on("click",n[4]),(z=new T({props:{icon:"copy",size:"small"}})).$on("click",n[5]);var S=n[1]&&_(n);return{c:function(){t=u("section"),r=u("h1"),a=C("settings"),c=V(),e=u("div"),o=u("p"),s=C("clear all vocabs"),i=V(),E(d.$$.fragment),y=V(),w=u("div"),x=u("p"),B=C("export my vocabs"),O=V(),E(z.$$.fragment),H=V(),S&&S.c(),this.h()},l:function(n){t=f(n,"SECTION",{class:!0});var u=l(t);r=f(u,"H1",{class:!0});var p=l(r);a=j(p,"settings"),p.forEach(v),c=D(u),e=f(u,"DIV",{class:!0});var $=l(e);o=f($,"P",{});var h=l(o);s=j(h,"clear all vocabs"),h.forEach(v),i=D($),k(d.$$.fragment,$),$.forEach(v),y=D(u),w=f(u,"DIV",{class:!0});var m=l(w);x=f(m,"P",{});var g=l(x);B=j(g,"export my vocabs"),g.forEach(v),O=D(m),k(z.$$.fragment,m),m.forEach(v),H=D(u),S&&S.l(u),u.forEach(v),this.h()},h:function(){p(r,"class","svelte-6aegme"),p(e,"class","setting svelte-6aegme"),p(w,"class","setting svelte-6aegme"),p(t,"class","settings")},m:function(n,u){$(n,t,u),h(t,r),h(r,a),h(t,c),h(t,e),h(e,o),h(o,s),h(e,i),R(d,e,null),h(t,y),h(t,w),h(w,x),h(x,B),h(w,O),R(z,w,null),h(t,H),S&&S.m(t,null),N=!0},p:function(n,r){var a=m(r,1)[0],c={};1&a&&(c.iconColor=n[0]?"gray":void 0),1&a&&(c.disabled=n[0]),d.$set(c),n[1]?S?(S.p(n,a),2&a&&g(S,1)):((S=_(n)).c(),g(S,1),S.m(t,null)):S&&(F(),b(S,1,1,(function(){S=null})),P())},i:function(n){N||(g(d.$$.fragment,n),g(z.$$.fragment,n),g(S),N=!0)},o:function(n){b(d.$$.fragment,n),b(z.$$.fragment,n),b(S),N=!1},d:function(n){n&&v(t),I(d),I(z),S&&S.d()}}}function U(n,t,r){var a;B(n,S,(function(n){return r(8,a=n)}));var c=!1,e=!1;O(H(N.mark((function n(){return N.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.loadVocab();case 2:0===a.length&&r(0,c=!0);case 3:case"end":return n.stop()}}),n)}))));var o=function(){var n=H(N.mark((function n(){return N.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.clearVocabs();case 2:r(0,c=!0),r(1,e=!1);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=H(N.mark((function n(){return N.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,navigator.clipboard.writeText(JSON.stringify(a));case 3:alert("copied your vocabs into the clipboard! 😃"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),alert("unable to export your vocabs 😭");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return[c,e,o,s,function(){return c?null:r(1,e=!0)},function(){return s()},function(){return o()},function(){return r(1,e=!1)}]}var W=function(t){n(i,s);var r=M(i);function i(n){var t;return a(this,i),t=r.call(this),c(o(t),n,U,Q,e,{}),t}return i}();export default W;
