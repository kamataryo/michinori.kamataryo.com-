!function(e){function t(t){for(var o,n,a=t[0],i=t[1],c=0,d=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(l&&l(t);d.length;)d.shift()()}var o={},r={0:0};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+e+".main.js"}(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}r[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=o,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=i;n(n.s=0)}([function(e,t,o){"use strict";o.r(t);const r={id:"app-vertice",type:"symbol",source:"app-vertice",paint:{"text-color":"#000","text-halo-color":"#FFF","text-halo-width":2},layout:{"text-field":"aaa","text-field":["concat",["to-string",["/",["round",["*",100,["get","cumulative_length"]]],100]]," km"],"text-size":14,"text-font":["Noto Sans Regular"],"text-offset":[0,1],"text-allow-overlap":!1}},n=new URLSearchParams(window.location.search),a=e=>{n.set("g",e.geometry.coordinates.map(e=>e.join(",")).join(";")),window.history.replaceState({},"",`?${n.toString()}${window.location.hash}`),document.getElementById("url").value=window.location.href},i=async e=>{const t=await o.e(1).then(o.t.bind(null,1,7)),{coordinates:r}=e,n={type:"FeatureCollection",features:[{type:"Feature",properties:{cumulative_length:0},geometry:{type:"Point",coordinates:r[0]}}]};let a=0;for(let e=1;e<r.length;e++){const o=t.point(r[e-1]),i=t.point(r[e]);a+=t.distance(o,i),n.features.push({type:"Feature",properties:{cumulative_length:a},geometry:{type:"Point",coordinates:r[e]}})}return{vertice:n,distance:a}};document.getElementById("clip").addEventListener("click",()=>{var e=document.getElementById("url");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),e.setSelectionRange(0,0),s("copy",!1,0),s("copied",!0,0),s("copied",!1,3e3)});const c=document.getElementById("wizard-trail"),l=document.getElementById("wizard-copy"),d=document.getElementById("wizard-copied"),u=document.getElementById("distance"),s=(e,t,o=0)=>{const r=t?"block":"none";let n=null;switch(e){case"trail":n=c;break;case"copy":n=l;break;case"copied":n=d}n&&setTimeout(()=>n.style.display=r,o)},p=e=>{let t="";t=e<1?Math.round(1e3*e)+" m":Math.round(100*e)/100+" km",u.innerText=t},y=new geolonia.Map("#map"),m=new MapboxDraw({controls:{point:!1,polygon:!1,combine_features:!1,uncombine_features:!1},styles:[{id:"gl-draw-line-inactive",type:"line",filter:["all",["==","active","false"],["==","$type","LineString"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"rgb(255, 0, 0)","line-width":2}},{id:"gl-draw-line-active",type:"line",filter:["all",["==","$type","LineString"],["==","active","true"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#fbb03b","line-dasharray":[.2,2],"line-width":2}}]});y.addControl(m,"top-right"),y.on("load",async()=>{const e=(()=>{let e;document.getElementById("url").value=window.location.href;const t=n.get("g");if(t){try{e=t.split(";").map(e=>e.split(",").map(e=>parseFloat(e)))}catch(e){console.error(e)}if(e){const t={type:"LineString",coordinates:e};try{return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:t}]}}catch(e){return console.error(e),null}}}})();let t,o;const c=e=>{if(t&&t.remove(),o&&o.remove(),e){t=new geolonia.Marker,o=new geolonia.Marker;const r=e.geometry.coordinates.length-1;t.setLngLat(e.geometry.coordinates[0]).addTo(y),o.setLngLat(e.geometry.coordinates[r]).addTo(y)}};if(e){m.set(e);const t=e.features[0],{distance:o,vertice:n}=await i(t.geometry);y.addSource("app-vertice",{type:"geojson",data:n}),y.addLayer(r),p(o),c(t)}s("trail",!0,1e3),y.on("draw.create",async e=>{const t=e.features[0];m.deleteAll(),m.set({type:"FeatureCollection",features:[t]}),s("trail",!1),s("copied",!1),s("copy",!0,1e3),a(t);const{distance:o,vertice:n}=await i(t.geometry);y.getSource("app-vertice")&&(y.removeLayer(r.id),y.removeSource("app-vertice")),y.addSource("app-vertice",{type:"geojson",data:n}),y.addLayer(r),p(o),c(t)}),y.on("draw.update",async e=>{if("move"===e.action||"change_coordinates"===e.action){const e=m.getAll().features[0];s("trail",!1),a(e);const{distance:t,vertice:o}=await i(e.geometry);y.getSource("app-vertice")&&(y.removeLayer(r.id),y.removeSource("app-vertice")),y.addSource("app-vertice",{type:"geojson",data:o}),y.addLayer(r),p(t),c(e)}}),y.on("draw.delete",()=>{y.removeLayer(r.id),y.removeSource("app-vertice"),c(!1),s("copied",!1),s("copy",!1),s("trail",!0,1e3)})})}]);