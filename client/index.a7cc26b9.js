import{S as s,i as a,s as c,e as t,t as l,a as o,b as e,f as r,g as i,d as n,c as v,h as d,o as h,j as b,k as p,l as f,n as u,r as g,p as y,u as m,v as E}from"./client.62dbdbfc.js";function x(s){let a,c,y,m,E,x,T,I,w,N,O,V,k,S,j,B,D,G,M,P,U;return{c(){a=t("section"),c=t("h1"),y=l("settings"),m=o(),E=t("div"),x=t("p"),T=l("clear all vocabs"),I=o(),w=t("button"),N=t("img"),V=o(),k=t("div"),S=t("p"),j=l("export my vocabs"),B=o(),D=t("button"),G=t("img"),this.h()},l(s){a=e(s,"SECTION",{});var t=r(a);c=e(t,"H1",{});var l=r(c);y=i(l,"settings"),l.forEach(n),m=v(t),E=e(t,"DIV",{class:!0});var o=r(E);x=e(o,"P",{});var d=r(x);T=i(d,"clear all vocabs"),d.forEach(n),I=v(o),w=e(o,"BUTTON",{disabled:!0,class:!0});var h=r(w);N=e(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(n),o.forEach(n),V=v(t),k=e(t,"DIV",{class:!0});var b=r(k);S=e(b,"P",{});var p=r(S);j=i(p,"export my vocabs"),p.forEach(n),B=v(b),D=e(b,"BUTTON",{class:!0});var f=r(D);G=e(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(n),b.forEach(n),t.forEach(n),this.h()},h(){N.src!==(O="icons/delete--color.svg")&&d(N,"src","icons/delete--color.svg"),d(N,"alt","clear all vocab icon button"),d(N,"class","svelte-1dh77s3"),w.disabled=s[0],d(w,"class","svelte-1dh77s3"),h(w,"empty",s[0]),d(E,"class","setting svelte-1dh77s3"),G.src!==(M="icons/copy.svg")&&d(G,"src","icons/copy.svg"),d(G,"alt","clear all vocab icon button"),d(G,"class","svelte-1dh77s3"),d(D,"class","svelte-1dh77s3"),d(k,"class","setting svelte-1dh77s3")},m(t,l){b(t,a,l),p(a,c),p(c,y),p(a,m),p(a,E),p(E,x),p(x,T),p(E,I),p(E,w),p(w,N),p(a,V),p(a,k),p(k,S),p(S,j),p(k,B),p(k,D),p(D,G),P||(U=[f(w,"click",s[3]),f(D,"click",s[4])],P=!0)},p(s,[a]){1&a&&(w.disabled=s[0]),1&a&&h(w,"empty",s[0])},i:u,o:u,d(s){s&&n(a),P=!1,g(U)}}}function T(s,a,c){let t;y(s,E,(s=>c(5,t=s)));let l=!1;m((async()=>{await E.loadVocab(),0===t.length&&c(0,l=!0)}));const o=async()=>{await E.clearVocabs(),c(0,l=!0)},e=async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t)),alert("copied your vocabs into the clipboard! 😃")}catch(s){alert("unable to export your vocabs 😭")}};return[l,o,e,()=>o(),()=>e()]}export default class extends s{constructor(s){super(),a(this,s,T,x,c,{})}}