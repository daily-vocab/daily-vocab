import{_ as n,a as t,b as e,c as o,i as c,s as a,d as r,S as s,A as i,f,e as u,j as l,k as h,g as v,h as d,m,n as $,o as p,p as g,z as b,B as y,C as k,F as w,a4 as _,t as x,l as E,H as j,I,J as D,G as R,K as V,T as H,a5 as O,L as z,M as B,O as P,a6 as T,P as C,x as A,a7 as N,X as S,v as M,w as F}from"./client.288e9929.js";import{s as G}from"./index.98221ff5.js";import{I as J}from"./icon-button.e5da4195.js";function K(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,a=t(n);if(o){var r=t(this).constructor;c=Reflect.construct(a,arguments,r)}else c=a.apply(this,arguments);return e(this,c)}}var L=function(n){return{}},U=function(n){return{}},X=function(n){return{}},q=function(n){return{}};function Q(n){var t,e,o,c,a,r,s,_=n[2].header,x=i(_,n,n[1],q),E=n[2].content,j=i(E,n,n[1],U);return{c:function(){t=f("button"),e=f("div"),x&&x.c(),o=u(),c=f("div"),j&&j.c(),this.h()},l:function(n){t=l(n,"BUTTON",{class:!0});var a=h(t);e=l(a,"DIV",{class:!0});var r=h(e);x&&x.l(r),r.forEach(v),o=d(a),c=l(a,"DIV",{class:!0});var s=h(c);j&&j.l(s),s.forEach(v),a.forEach(v),this.h()},h:function(){m(e,"class","header svelte-ovztw3"),m(c,"class","content svelte-ovztw3"),m(t,"class","cmp-accordion svelte-ovztw3")},m:function(i,f){$(i,t,f),p(t,e),x&&x.m(e,null),p(t,o),p(t,c),j&&j.m(c,null),n[3](c),a=!0,r||(s=g(t,"click",n[4]),r=!0)},p:function(n,t){var e=b(t,1)[0];x&&x.p&&(!a||2&e)&&y(x,_,n,n[1],e,X,q),j&&j.p&&(!a||2&e)&&y(j,E,n,n[1],e,L,U)},i:function(n){a||(k(x,n),k(j,n),a=!0)},o:function(n){w(x,n),w(j,n),a=!1},d:function(e){e&&v(t),x&&x.d(e),j&&j.d(e),n[3](null),r=!1,s()}}}function W(n,t,e){var o=t.$$slots,c=void 0===o?{}:o,a=t.$$scope,r=null;return n.$$set=function(n){"$$scope"in n&&e(1,a=n.$$scope)},[r,a,c,function(n){_[n?"unshift":"push"]((function(){e(0,r=n)}))},function(){r&&(console.log({mac:r.style.maxHeight}),""===r.style.maxHeight||"0px"===r.style.maxHeight?e(0,r.style.maxHeight="".concat(r.scrollHeight,"px"),r):e(0,r.style.maxHeight="0",r))}]}var Y=function(t){n(i,s);var e=K(i);function i(n){var t;return o(this,i),t=e.call(this),c(r(t),n,W,Q,a,{}),t}return i}();function Z(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,a=t(n);if(o){var r=t(this).constructor;c=Reflect.construct(a,arguments,r)}else c=a.apply(this,arguments);return e(this,c)}}function nn(n,t,e){var o=n.slice();return o[4]=t[e],o}function tn(n){var t,e;return{c:function(){t=f("p"),e=x("uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),this.h()},l:function(n){t=l(n,"P",{class:!0});var o=h(t);e=E(o,"uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),o.forEach(v),this.h()},h:function(){m(t,"class","novocab_message svelte-1rbik6j")},m:function(n,o){$(n,t,o),p(t,e)},d:function(n){n&&v(t)}}}function en(n){var t,e,o,c,a,r,s,i,g,b,y=n[4].word+"",k=N.DateTime.fromISO(n[4].createdAt).toRelativeCalendar()+"",w=n[4].usage+"";return{c:function(){t=f("div"),e=f("div"),o=f("div"),c=x(y),a=u(),r=f("div"),s=x(k),i=u(),g=f("p"),b=x(w),this.h()},l:function(n){t=l(n,"DIV",{slot:!0,class:!0});var f=h(t);e=l(f,"DIV",{class:!0});var u=h(e);o=l(u,"DIV",{class:!0});var m=h(o);c=E(m,y),m.forEach(v),a=d(u),r=l(u,"DIV",{class:!0});var $=h(r);s=E($,k),$.forEach(v),u.forEach(v),i=d(f),g=l(f,"P",{class:!0});var p=h(g);b=E(p,w),p.forEach(v),f.forEach(v),this.h()},h:function(){m(o,"class","vocab_word svelte-1rbik6j"),m(r,"class","vocab_createdAt svelte-1rbik6j"),m(e,"class","vocab_title svelte-1rbik6j"),m(g,"class","vocab_sentence svelte-1rbik6j"),m(t,"slot","header"),m(t,"class","vocab_header svelte-1rbik6j")},m:function(n,f){$(n,t,f),p(t,e),p(e,o),p(o,c),p(e,a),p(e,r),p(r,s),p(t,i),p(t,g),p(g,b)},p:function(n,t){1&t&&y!==(y=n[4].word+"")&&S(c,y),1&t&&k!==(k=N.DateTime.fromISO(n[4].createdAt).toRelativeCalendar()+"")&&S(s,k),1&t&&w!==(w=n[4].usage+"")&&S(b,w)},d:function(n){n&&v(t)}}}function on(n){var t,e,o,c,a,r,s,i,g,b=n[4].notes+"";return(r=new J({props:{icon:"edit",size:"small"}})).$on("click",(function(){return n[1](n[4])})),(i=new J({props:{icon:"delete",size:"small",textColor:"white"}})).$on("click",(function(){return n[2](n[4])})),{c:function(){t=f("div"),e=f("p"),o=x(b),c=u(),a=f("div"),j(r.$$.fragment),s=u(),j(i.$$.fragment),this.h()},l:function(n){t=l(n,"DIV",{slot:!0,class:!0});var f=h(t);e=l(f,"P",{});var u=h(e);o=E(u,b),u.forEach(v),c=d(f),a=l(f,"DIV",{class:!0});var m=h(a);I(r.$$.fragment,m),s=d(m),I(i.$$.fragment,m),m.forEach(v),f.forEach(v),this.h()},h:function(){m(a,"class","vocab_actions svelte-1rbik6j"),m(t,"slot","content"),m(t,"class","vocab_sentence svelte-1rbik6j")},m:function(n,f){$(n,t,f),p(t,e),p(e,o),p(t,c),p(t,a),D(r,a,null),p(a,s),D(i,a,null),g=!0},p:function(t,e){n=t,(!g||1&e)&&b!==(b=n[4].notes+"")&&S(o,b)},i:function(n){g||(k(r.$$.fragment,n),k(i.$$.fragment,n),g=!0)},o:function(n){w(r.$$.fragment,n),w(i.$$.fragment,n),g=!1},d:function(n){n&&v(t),V(r),V(i)}}}function cn(n,t){var e,o,c,a;return o=new Y({props:{$$slots:{content:[on],header:[en]},$$scope:{ctx:t}}}),{key:n,first:null,c:function(){e=f("div"),j(o.$$.fragment),this.h()},l:function(n){e=l(n,"DIV",{class:!0});var t=h(e);I(o.$$.fragment,t),t.forEach(v),this.h()},h:function(){m(e,"class","vocab svelte-1rbik6j"),this.first=e},m:function(n,t){$(n,e,t),D(o,e,null),a=!0},p:function(n,e){t=n;var c={};129&e&&(c.$$scope={dirty:e,ctx:t}),o.$set(c)},i:function(n){a||(k(o.$$.fragment,n),c&&c.end(1),a=!0)},o:function(n){w(o.$$.fragment,n),n&&(c=R(e,G,{})),a=!1},d:function(n){n&&v(e),V(o),n&&c&&c.end()}}}function an(n){for(var t,e,o,c,a,r,s,i,g,y,_=[],R=new Map,B=0===n[0].length&&tn(),C=n[0],A=function(n){return n[4].id},N=0;N<C.length;N+=1){var S=nn(n,C,N),M=A(S);R.set(M,_[N]=cn(M,S))}return(i=new J({props:{icon:"add"}})).$on("click",n[3]),{c:function(){t=f("section"),e=f("h1"),o=x("daily vocab"),c=u(),a=f("div"),B&&B.c(),r=u();for(var n=0;n<_.length;n+=1)_[n].c();s=u(),j(i.$$.fragment),this.h()},l:function(n){t=l(n,"SECTION",{class:!0});var f=h(t);e=l(f,"H1",{});var u=h(e);o=E(u,"daily vocab"),u.forEach(v),c=d(f),a=l(f,"DIV",{class:!0});var m=h(a);B&&B.l(m),r=d(m);for(var $=0;$<_.length;$+=1)_[$].l(m);s=d(m),I(i.$$.fragment,m),m.forEach(v),f.forEach(v),this.h()},h:function(){m(a,"class",g=H(0===n[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"),m(t,"class","home")},m:function(n,f){$(n,t,f),p(t,e),p(e,o),p(t,c),p(t,a),B&&B.m(a,null),p(a,r);for(var u=0;u<_.length;u+=1)_[u].m(a,null);p(a,s),D(i,a,null),y=!0},p:function(n,t){var e=b(t,1)[0];0===n[0].length?B||((B=tn()).c(),B.m(a,r)):B&&(B.d(1),B=null),1&e&&(C=n[0],P(),_=O(_,e,A,1,n,C,R,a,T,cn,s,nn),z()),(!y||1&e&&g!==(g=H(0===n[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"))&&m(a,"class",g)},i:function(n){if(!y){for(var t=0;t<C.length;t+=1)k(_[t]);k(i.$$.fragment,n),y=!0}},o:function(n){for(var t=0;t<_.length;t+=1)w(_[t]);w(i.$$.fragment,n),y=!1},d:function(n){n&&v(t),B&&B.d();for(var e=0;e<_.length;e+=1)_[e].d();V(i)}}}function rn(n,t,e){var o;B(n,C,(function(n){return e(0,o=n)}));return[o,function(){var n=M(F.mark((function n(t){return F.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A("words/add?id=".concat(t.id));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),function(n){return C.deleteVocab(n.id)},function(){return A("words/add")}]}var sn=function(t){n(i,s);var e=Z(i);function i(n){var t;return o(this,i),t=e.call(this),c(r(t),n,rn,an,a,{}),t}return i}();export default sn;