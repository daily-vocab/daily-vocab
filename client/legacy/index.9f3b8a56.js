import{_ as n,a as t,b as e,c,i as o,s as a,d as r,S as s,X as f,f as l,j as u,k as i,g as v,m as h,n as d,z as m,Y as $,J as p,K as y,e as g,h as E,o as R,r as I,t as _,l as b,E as w,F as D,H as x,L as V,G as k,T as B,Z as O,A as P,U as A,x as C,$ as S,I as T,C as j}from"./client.1c70c9f9.js";import{I as N}from"./icon-button.863fe813.js";function z(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,a=t(n);if(c){var r=t(this).constructor;o=Reflect.construct(a,arguments,r)}else o=a.apply(this,arguments);return e(this,o)}}function H(n){var t,e,c=n[1].default,o=f(c,n,n[0],null);return{c:function(){t=l("div"),o&&o.c(),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var e=i(t);o&&o.l(e),e.forEach(v),this.h()},h:function(){h(t,"class","container svelte-qzeduu")},m:function(n,c){d(n,t,c),o&&o.m(t,null),e=!0},p:function(n,t){var a=m(t,1)[0];o&&o.p&&(!e||1&a)&&$(o,c,n,n[0],a,null,null)},i:function(n){e||(p(o,n),e=!0)},o:function(n){y(o,n),e=!1},d:function(n){n&&v(t),o&&o.d(n)}}}function q(n,t,e){var c=t.$$slots,o=void 0===c?{}:c,a=t.$$scope;return n.$$set=function(n){"$$scope"in n&&e(0,a=n.$$scope)},[a,o]}var F=function(t){n(f,s);var e=z(f);function f(n){var t;return c(this,f),t=e.call(this),o(r(t),n,q,H,a,{}),t}return f}();function G(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,a=t(n);if(c){var r=t(this).constructor;o=Reflect.construct(a,arguments,r)}else o=a.apply(this,arguments);return e(this,o)}}function J(n){var t,e,c,o,a,r;return{c:function(){t=l("div"),e=l("div"),c=g(),o=l("div"),a=g(),r=l("div"),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var s=i(t);e=u(s,"DIV",{class:!0}),i(e).forEach(v),c=E(s),o=u(s,"DIV",{class:!0}),i(o).forEach(v),a=E(s),r=u(s,"DIV",{class:!0}),i(r).forEach(v),s.forEach(v),this.h()},h:function(){h(e,"class","dot svelte-y9x7nt"),h(o,"class","dot svelte-y9x7nt"),h(r,"class","dot svelte-y9x7nt"),h(t,"class","container svelte-y9x7nt")},m:function(n,s){d(n,t,s),R(t,e),R(t,c),R(t,o),R(t,a),R(t,r)},p:I,i:I,o:I,d:function(n){n&&v(t)}}}var K=function(t){n(f,s);var e=G(f);function f(n){var t;return c(this,f),t=e.call(this),o(r(t),n,null,J,a,{}),t}return f}();function L(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,a=t(n);if(c){var r=t(this).constructor;o=Reflect.construct(a,arguments,r)}else o=a.apply(this,arguments);return e(this,o)}}function U(n,t,e){var c=n.slice();return c[2]=t[e],c}function X(n){var t,e;return{c:function(){t=l("p"),e=_("uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),this.h()},l:function(n){t=u(n,"P",{class:!0});var c=i(t);e=b(c,"uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),c.forEach(v),this.h()},h:function(){h(t,"class","novocab_message svelte-yl2adv")},m:function(n,c){d(n,t,c),R(t,e)},d:function(n){n&&v(t)}}}function Y(n){var t,e,c,o,a,r,s,f,m,$=n[2].word+"",p=S.DateTime.fromISO(n[2].createdAt).toRelativeCalendar()+"",y=n[2].usage+"";return{c:function(){t=l("div"),e=l("div"),c=_($),o=g(),a=l("div"),r=_(p),s=g(),f=l("p"),m=_(y),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var l=i(t);e=u(l,"DIV",{class:!0});var h=i(e);c=b(h,$),h.forEach(v),o=E(l),a=u(l,"DIV",{class:!0});var d=i(a);r=b(d,p),d.forEach(v),l.forEach(v),s=E(n),f=u(n,"P",{class:!0});var g=i(f);m=b(g,y),g.forEach(v),this.h()},h:function(){h(e,"class","vocab_word svelte-yl2adv"),h(a,"class","vocab_createdAt svelte-yl2adv"),h(t,"class","vocab_header svelte-yl2adv"),h(f,"class","vocab_sentence svelte-yl2adv")},m:function(n,l){d(n,t,l),R(t,e),R(e,c),R(t,o),R(t,a),R(a,r),d(n,s,l),d(n,f,l),R(f,m)},p:function(n,t){1&t&&$!==($=n[2].word+"")&&T(c,$),1&t&&p!==(p=S.DateTime.fromISO(n[2].createdAt).toRelativeCalendar()+"")&&T(r,p),1&t&&y!==(y=n[2].usage+"")&&T(m,y)},d:function(n){n&&v(t),n&&v(s),n&&v(f)}}}function Z(n){var t,e,c;return e=new F({props:{$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c:function(){t=l("div"),w(e.$$.fragment),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var c=i(t);D(e.$$.fragment,c),c.forEach(v),this.h()},h:function(){h(t,"class","vocab svelte-yl2adv")},m:function(n,o){d(n,t,o),x(e,t,null),c=!0},p:function(n,t){var c={};33&t&&(c.$$scope={dirty:t,ctx:n}),e.$set(c)},i:function(n){c||(p(e.$$.fragment,n),c=!0)},o:function(n){y(e.$$.fragment,n),c=!1},d:function(n){n&&v(t),V(e)}}}function M(n){for(var t,e,c,o,a,r,s,f,$,I,P,C,S,T=0===n[0].length&&X(),j=n[0],z=[],H=0;H<j.length;H+=1)z[H]=Z(U(n,j,H));var q=function(n){return y(z[n],1,1,(function(){z[n]=null}))};return $=new K({}),(P=new N({props:{icon:"add"}})).$on("click",n[1]),{c:function(){t=l("section"),e=l("h1"),c=_("welcome back"),o=g(),a=l("div"),T&&T.c(),r=g();for(var n=0;n<z.length;n+=1)z[n].c();s=g(),f=l("div"),w($.$$.fragment),I=g(),w(P.$$.fragment),this.h()},l:function(n){t=u(n,"SECTION",{});var l=i(t);e=u(l,"H1",{});var h=i(e);c=b(h,"welcome back"),h.forEach(v),o=E(l),a=u(l,"DIV",{class:!0});var d=i(a);T&&T.l(d),r=E(d);for(var m=0;m<z.length;m+=1)z[m].l(d);s=E(d),f=u(d,"DIV",{class:!0});var p=i(f);D($.$$.fragment,p),I=E(p),D(P.$$.fragment,p),p.forEach(v),d.forEach(v),l.forEach(v),this.h()},h:function(){h(f,"class","new-vocab svelte-yl2adv"),h(a,"class",C=k(0===n[0].length?"home_content__novocab home_content":"home_content")+" svelte-yl2adv")},m:function(n,l){d(n,t,l),R(t,e),R(e,c),R(t,o),R(t,a),T&&T.m(a,null),R(a,r);for(var u=0;u<z.length;u+=1)z[u].m(a,null);R(a,s),R(a,f),x($,f,null),R(f,I),x(P,f,null),S=!0},p:function(n,t){var e=m(t,1)[0];if(0===n[0].length?T||((T=X()).c(),T.m(a,r)):T&&(T.d(1),T=null),1&e){var c;for(j=n[0],c=0;c<j.length;c+=1){var o=U(n,j,c);z[c]?(z[c].p(o,e),p(z[c],1)):(z[c]=Z(o),z[c].c(),p(z[c],1),z[c].m(a,s))}for(A(),c=j.length;c<z.length;c+=1)q(c);B()}(!S||1&e&&C!==(C=k(0===n[0].length?"home_content__novocab home_content":"home_content")+" svelte-yl2adv"))&&h(a,"class",C)},i:function(n){if(!S){for(var t=0;t<j.length;t+=1)p(z[t]);p($.$$.fragment,n),p(P.$$.fragment,n),S=!0}},o:function(n){z=z.filter(Boolean);for(var t=0;t<z.length;t+=1)y(z[t]);y($.$$.fragment,n),y(P.$$.fragment,n),S=!1},d:function(n){n&&v(t),T&&T.d(),O(z,n),V($),V(P)}}}function Q(n,t,e){var c;P(n,j,(function(n){return e(0,c=n)}));return[c,function(){return C("words/add")}]}var W=function(t){n(f,s);var e=L(f);function f(n){var t;return c(this,f),t=e.call(this),o(r(t),n,Q,M,a,{}),t}return f}();export default W;