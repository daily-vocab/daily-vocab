import{S as e,i as t,s as a,e as n,t as l,a as s,b as o,f as c,g as r,d as h,c as i,h as f,j as g,k as v,n as u,o as b}from"./client.083a9b11.js";var d=[{version:"v0.1.1-beta",changes:["Fix color of clear vocabs button when there no vocabs to delete"]},{version:"v0.1.0-beta",changes:["All CRUD operations on vocabs","Color scheme facelift","Transition on vocab delete"]},{version:"v0.0.4-beta",changes:["Delete a Vocab","Style facelift"]},{version:"v0.0.3-beta",changes:["Edit a Vocab"]},{version:"v0.0.2-beta",changes:["Add an about page"]},{version:"v0.0.1-beta",changes:["Basic app structure","Add a vocab"]}];function p(e,t,a){const n=e.slice();return n[0]=t[a],n}function m(e,t,a){const n=e.slice();return n[3]=t[a],n}function E(e){let t,a,s=e[3]+"";return{c(){t=n("li"),a=l(s)},l(e){t=o(e,"LI",{});var n=c(t);a=r(n,s),n.forEach(h)},m(e,n){g(e,t,n),v(t,a)},p:u,d(e){e&&h(t)}}}function x(e){let t,a,u,d,p,x=e[0].version+"",A=e[0].changes,C=[];for(let t=0;t<A.length;t+=1)C[t]=E(m(e,A,t));return{c(){t=n("h2"),a=l(x),u=s(),d=n("ul");for(let e=0;e<C.length;e+=1)C[e].c();p=s(),this.h()},l(e){t=o(e,"H2",{class:!0});var n=c(t);a=r(n,x),n.forEach(h),u=i(e),d=o(e,"UL",{});var l=c(d);for(let e=0;e<C.length;e+=1)C[e].l(l);p=i(l),l.forEach(h),this.h()},h(){f(t,"class","svelte-qqdt9c")},m(e,n){g(e,t,n),v(t,a),g(e,u,n),g(e,d,n);for(let e=0;e<C.length;e+=1)C[e].m(d,null);v(d,p)},p(e,t){if(0&t){let a;for(A=e[0].changes,a=0;a<A.length;a+=1){const n=m(e,A,a);C[a]?C[a].p(n,t):(C[a]=E(n),C[a].c(),C[a].m(d,p))}for(;a<C.length;a+=1)C[a].d(1);C.length=A.length}},d(e){e&&h(t),e&&h(u),e&&h(d),b(C,e)}}}function A(e){let t,a,m,E,A=d,C=[];for(let t=0;t<A.length;t+=1)C[t]=x(p(e,A,t));return{c(){t=n("section"),a=n("h1"),m=l("changelog"),E=s();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=o(e,"SECTION",{class:!0});var n=c(t);a=o(n,"H1",{});var l=c(a);m=r(l,"changelog"),l.forEach(h),E=i(n);for(let e=0;e<C.length;e+=1)C[e].l(n);n.forEach(h),this.h()},h(){f(t,"class","changelog")},m(e,n){g(e,t,n),v(t,a),v(a,m),v(t,E);for(let e=0;e<C.length;e+=1)C[e].m(t,null)},p(e,[a]){if(0&a){let n;for(A=d,n=0;n<A.length;n+=1){const l=p(e,A,n);C[n]?C[n].p(l,a):(C[n]=x(l),C[n].c(),C[n].m(t,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=A.length}},i:u,o:u,d(e){e&&h(t),b(C,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,A,a,{})}}
