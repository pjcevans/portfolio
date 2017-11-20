"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","4315484905a07436468d867ff6593699"],["/portfolio/static/css/main.bb94fbb9.css","33d18411d615fa866dba731229afd93b"],["/portfolio/static/js/main.44a10d28.js","382dee771d9e2210893ff7c6d767f2a8"],["/portfolio/static/media/dkp-thumb.9e77dc6a.png","9e77dc6af84fc2304238327f40b51d7b"],["/portfolio/static/media/dkpcomparing-content2.1da57fb1.gif","1da57fb1162406c6200b0f5342fa86d3"],["/portfolio/static/media/github.ce89173e.svg","ce89173e3842fb91835a9cc8605a5ecc"],["/portfolio/static/media/heroku.b38ff61a.svg","b38ff61aa327fbdc24f7b1dad7d04d1a"],["/portfolio/static/media/portfolio-content1.571b45af.png","571b45af72253400acb8385b4fc13f52"],["/portfolio/static/media/portfolio-content2.b7593fea.png","b7593fea2d932e93694ffc8fbab07123"],["/portfolio/static/media/portfolio-thumb.c44a58c0.png","c44a58c09d69ca1badde698fa885b1da"],["/portfolio/static/media/sampledata-content1.2cb18985.png","2cb18985adee02783499f507e77c1787"],["/portfolio/static/media/statetodo.b5e0dae2.gif","b5e0dae2c4ae6a8dab7a72f3577d100f"],["/portfolio/static/media/subtodo.e32367db.gif","e32367dbc9993e43f04be3f8aa5a30ab"],["/portfolio/static/media/thunk-content3.90d10aef.png","90d10aef65bdd271bd5b51d389992102"],["/portfolio/static/media/todo-thumb.f155a2a6.png","f155a2a6e4f955c4d086b3e883fa69b4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});