!function(){"use strict";const e=1620823214431,t=`cache${e}`,n=["/client/client.939af710.js","/client/inject_styles.5607aec6.js","/client/index.de3bc684.js","/client/index.25ae3fa1.js","/client/index.fe349ea5.js","/client/index.39f86198.js","/client/icon-button.d8533b54.js","/client/index.38cec2f5.js"].concat(["/service-worker-index.html","/favicon.png","/icons/add.svg","/icons/copy.svg","/icons/delete--color.svg","/icons/logo-192.png","/icons/logo-512.png","/icons/tick--light.svg","/icons/tick.svg","/icons/warn--light.svg","/icons/warn.svg","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!a;!c||i||o||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
