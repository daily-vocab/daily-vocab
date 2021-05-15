import{_ as t,a as n,b as o,c as a,i as e,s as c,d as r,S as s,Z as i,f as l,e as u,j as f,k as h,g as v,h as d,m as p,n as m,o as $,p as g,z as b,$ as y,D as w,E as x,a0 as k,t as _,l as E,A as I,B as j,C as D,a1 as R,F as V,L as B,a2 as F,N as T,G as H,M as z,a3 as C,I as O,x as N,a4 as P,Q as S,v as A,w as M}from"./client.dd271c1c.js";import{I as W}from"./icon-button.6025f006.js";function G(t){var n=t-1;return n*n*n+1}function L(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.delay,a=void 0===o?0:o,e=n.duration,c=void 0===e?400:e,r=n.easing,s=void 0===r?G:r,i=getComputedStyle(t),l=+i.opacity,u=parseFloat(i.height),f=parseFloat(i.paddingTop),h=parseFloat(i.paddingBottom),v=parseFloat(i.marginTop),d=parseFloat(i.marginBottom),p=parseFloat(i.borderTopWidth),m=parseFloat(i.borderBottomWidth);return{delay:a,duration:c,easing:s,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*l,";")+"height: ".concat(t*u,"px;")+"padding-top: ".concat(t*f,"px;")+"padding-bottom: ".concat(t*h,"px;")+"margin-top: ".concat(t*v,"px;")+"margin-bottom: ".concat(t*d,"px;")+"border-top-width: ".concat(t*p,"px;")+"border-bottom-width: ".concat(t*m,"px;")}}}function Q(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=n(t);if(a){var r=n(this).constructor;e=Reflect.construct(c,arguments,r)}else e=c.apply(this,arguments);return o(this,e)}}var U=function(t){return{}},Z=function(t){return{}},q=function(t){return{}},J=function(t){return{}};function K(t){var n,o,a,e,c,r,s,k=t[2].header,_=i(k,t,t[1],J),E=t[2].content,I=i(E,t,t[1],Z);return{c:function(){n=l("button"),o=l("div"),_&&_.c(),a=u(),e=l("div"),I&&I.c(),this.h()},l:function(t){n=f(t,"BUTTON",{class:!0});var c=h(n);o=f(c,"DIV",{class:!0});var r=h(o);_&&_.l(r),r.forEach(v),a=d(c),e=f(c,"DIV",{class:!0});var s=h(e);I&&I.l(s),s.forEach(v),c.forEach(v),this.h()},h:function(){p(o,"class","header svelte-ovztw3"),p(e,"class","content svelte-ovztw3"),p(n,"class","cmp-accordion svelte-ovztw3")},m:function(i,l){m(i,n,l),$(n,o),_&&_.m(o,null),$(n,a),$(n,e),I&&I.m(e,null),t[3](e),c=!0,r||(s=g(n,"click",t[4]),r=!0)},p:function(t,n){var o=b(n,1)[0];_&&_.p&&(!c||2&o)&&y(_,k,t,t[1],o,q,J),I&&I.p&&(!c||2&o)&&y(I,E,t,t[1],o,U,Z)},i:function(t){c||(w(_,t),w(I,t),c=!0)},o:function(t){x(_,t),x(I,t),c=!1},d:function(o){o&&v(n),_&&_.d(o),I&&I.d(o),t[3](null),r=!1,s()}}}function X(t,n,o){var a=n.$$slots,e=void 0===a?{}:a,c=n.$$scope,r=null;return t.$$set=function(t){"$$scope"in t&&o(1,c=t.$$scope)},[r,c,e,function(t){k[t?"unshift":"push"]((function(){o(0,r=t)}))},function(){r&&(console.log({mac:r.style.maxHeight}),""===r.style.maxHeight||"0px"===r.style.maxHeight?o(0,r.style.maxHeight="".concat(r.scrollHeight,"px"),r):o(0,r.style.maxHeight="0",r))}]}var Y=function(n){t(i,s);var o=Q(i);function i(t){var n;return a(this,i),n=o.call(this),e(r(n),t,X,K,c,{}),n}return i}();function tt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=n(t);if(a){var r=n(this).constructor;e=Reflect.construct(c,arguments,r)}else e=c.apply(this,arguments);return o(this,e)}}function nt(t,n,o){var a=t.slice();return a[4]=n[o],a}function ot(t){var n,o;return{c:function(){n=l("p"),o=_("uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),this.h()},l:function(t){n=f(t,"P",{class:!0});var a=h(n);o=E(a,"uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),a.forEach(v),this.h()},h:function(){p(n,"class","novocab_message svelte-1rbik6j")},m:function(t,a){m(t,n,a),$(n,o)},d:function(t){t&&v(n)}}}function at(t){var n,o,a,e,c,r,s,i,g,b,y=t[4].word+"",w=P.DateTime.fromISO(t[4].createdAt).toRelativeCalendar()+"",x=t[4].usage+"";return{c:function(){n=l("div"),o=l("div"),a=l("div"),e=_(y),c=u(),r=l("div"),s=_(w),i=u(),g=l("p"),b=_(x),this.h()},l:function(t){n=f(t,"DIV",{slot:!0,class:!0});var l=h(n);o=f(l,"DIV",{class:!0});var u=h(o);a=f(u,"DIV",{class:!0});var p=h(a);e=E(p,y),p.forEach(v),c=d(u),r=f(u,"DIV",{class:!0});var m=h(r);s=E(m,w),m.forEach(v),u.forEach(v),i=d(l),g=f(l,"P",{class:!0});var $=h(g);b=E($,x),$.forEach(v),l.forEach(v),this.h()},h:function(){p(a,"class","vocab_word svelte-1rbik6j"),p(r,"class","vocab_createdAt svelte-1rbik6j"),p(o,"class","vocab_title svelte-1rbik6j"),p(g,"class","vocab_sentence svelte-1rbik6j"),p(n,"slot","header"),p(n,"class","vocab_header svelte-1rbik6j")},m:function(t,l){m(t,n,l),$(n,o),$(o,a),$(a,e),$(o,c),$(o,r),$(r,s),$(n,i),$(n,g),$(g,b)},p:function(t,n){1&n&&y!==(y=t[4].word+"")&&S(e,y),1&n&&w!==(w=P.DateTime.fromISO(t[4].createdAt).toRelativeCalendar()+"")&&S(s,w),1&n&&x!==(x=t[4].usage+"")&&S(b,x)},d:function(t){t&&v(n)}}}function et(t){var n,o,a,e,c,r,s,i,g,b=t[4].notes+"";return(r=new W({props:{icon:"edit",size:"small"}})).$on("click",(function(){return t[1](t[4])})),(i=new W({props:{icon:"delete",size:"small",textColor:"white"}})).$on("click",(function(){return t[2](t[4])})),{c:function(){n=l("div"),o=l("p"),a=_(b),e=u(),c=l("div"),I(r.$$.fragment),s=u(),I(i.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{slot:!0,class:!0});var l=h(n);o=f(l,"P",{});var u=h(o);a=E(u,b),u.forEach(v),e=d(l),c=f(l,"DIV",{class:!0});var p=h(c);j(r.$$.fragment,p),s=d(p),j(i.$$.fragment,p),p.forEach(v),l.forEach(v),this.h()},h:function(){p(c,"class","vocab_actions svelte-1rbik6j"),p(n,"slot","content"),p(n,"class","vocab_sentence svelte-1rbik6j")},m:function(t,l){m(t,n,l),$(n,o),$(o,a),$(n,e),$(n,c),D(r,c,null),$(c,s),D(i,c,null),g=!0},p:function(n,o){t=n,(!g||1&o)&&b!==(b=t[4].notes+"")&&S(a,b)},i:function(t){g||(w(r.$$.fragment,t),w(i.$$.fragment,t),g=!0)},o:function(t){x(r.$$.fragment,t),x(i.$$.fragment,t),g=!1},d:function(t){t&&v(n),V(r),V(i)}}}function ct(t,n){var o,a,e,c;return a=new Y({props:{$$slots:{content:[et],header:[at]},$$scope:{ctx:n}}}),{key:t,first:null,c:function(){o=l("div"),I(a.$$.fragment),this.h()},l:function(t){o=f(t,"DIV",{class:!0});var n=h(o);j(a.$$.fragment,n),n.forEach(v),this.h()},h:function(){p(o,"class","vocab svelte-1rbik6j"),this.first=o},m:function(t,n){m(t,o,n),D(a,o,null),c=!0},p:function(t,o){n=t;var e={};129&o&&(e.$$scope={dirty:o,ctx:n}),a.$set(e)},i:function(t){c||(w(a.$$.fragment,t),e&&e.end(1),c=!0)},o:function(t){x(a.$$.fragment,t),t&&(e=R(o,L,{})),c=!1},d:function(t){t&&v(o),V(a),t&&e&&e.end()}}}function rt(t){for(var n,o,a,e,c,r,s,i,g,y,k=[],R=new Map,H=0===t[0].length&&ot(),O=t[0],N=function(t){return t[4].id},P=0;P<O.length;P+=1){var S=nt(t,O,P),A=N(S);R.set(A,k[P]=ct(A,S))}return(i=new W({props:{icon:"add"}})).$on("click",t[3]),{c:function(){n=l("section"),o=l("h1"),a=_("daily vocab"),e=u(),c=l("div"),H&&H.c(),r=u();for(var t=0;t<k.length;t+=1)k[t].c();s=u(),I(i.$$.fragment),this.h()},l:function(t){n=f(t,"SECTION",{class:!0});var l=h(n);o=f(l,"H1",{});var u=h(o);a=E(u,"daily vocab"),u.forEach(v),e=d(l),c=f(l,"DIV",{class:!0});var p=h(c);H&&H.l(p),r=d(p);for(var m=0;m<k.length;m+=1)k[m].l(p);s=d(p),j(i.$$.fragment,p),p.forEach(v),l.forEach(v),this.h()},h:function(){p(c,"class",g=B(0===t[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"),p(n,"class","home")},m:function(t,l){m(t,n,l),$(n,o),$(o,a),$(n,e),$(n,c),H&&H.m(c,null),$(c,r);for(var u=0;u<k.length;u+=1)k[u].m(c,null);$(c,s),D(i,c,null),y=!0},p:function(t,n){var o=b(n,1)[0];0===t[0].length?H||((H=ot()).c(),H.m(c,r)):H&&(H.d(1),H=null),1&o&&(O=t[0],z(),k=F(k,o,N,1,t,O,R,c,C,ct,s,nt),T()),(!y||1&o&&g!==(g=B(0===t[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"))&&p(c,"class",g)},i:function(t){if(!y){for(var n=0;n<O.length;n+=1)w(k[n]);w(i.$$.fragment,t),y=!0}},o:function(t){for(var n=0;n<k.length;n+=1)x(k[n]);x(i.$$.fragment,t),y=!1},d:function(t){t&&v(n),H&&H.d();for(var o=0;o<k.length;o+=1)k[o].d();V(i)}}}function st(t,n,o){var a;H(t,O,(function(t){return o(0,a=t)}));return[a,function(){var t=A(M.mark((function t(n){return M.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N("words/add?id=".concat(n.id));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),function(t){return O.deleteVocab(t.id)},function(){return N("words/add")}]}var it=function(n){t(i,s);var o=tt(i);function i(t){var n;return a(this,i),n=o.call(this),e(r(n),t,st,rt,c,{}),n}return i}();export default it;
