import{V as t}from"./client.288e9929.js";function o(t){var o=t-1;return o*o*o+1}function a(o){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.delay,i=void 0===n?0:n,r=a.duration,e=void 0===r?400:r,d=a.easing,p=void 0===d?t:d,c=+getComputedStyle(o).opacity;return{delay:i,duration:e,easing:p,css:function(t){return"opacity: ".concat(t*c)}}}function n(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.delay,i=void 0===n?0:n,r=a.duration,e=void 0===r?400:r,d=a.easing,p=void 0===d?o:d,c=getComputedStyle(t),s=+c.opacity,g=parseFloat(c.height),l=parseFloat(c.paddingTop),u=parseFloat(c.paddingBottom),m=parseFloat(c.marginTop),h=parseFloat(c.marginBottom),v=parseFloat(c.borderTopWidth),y=parseFloat(c.borderBottomWidth);return{delay:i,duration:e,easing:p,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*s,";")+"height: ".concat(t*g,"px;")+"padding-top: ".concat(t*l,"px;")+"padding-bottom: ".concat(t*u,"px;")+"margin-top: ".concat(t*m,"px;")+"margin-bottom: ".concat(t*h,"px;")+"border-top-width: ".concat(t*v,"px;")+"border-bottom-width: ".concat(t*y,"px;")}}}export{a as f,n as s};
