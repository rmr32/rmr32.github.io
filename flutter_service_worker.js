'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "6b3dd30ce96db1b27156f7cceb3b4173",
"version.json": "4ed18c5e1941555acc70f795a999205d",
"assets/assets/images/abstract1.png": "4180250bcd3b54160c251d8030ecc01f",
"assets/assets/images/austin1.jpg": "c6fa1068d022d20c363af278bbcde00a",
"assets/assets/images/circle.svg": "d0a742e61914eaecf44dba731dd6bac5",
"assets/assets/images/head_engineer.jpg": "52056f020823bd8be0929dab1a993ecd",
"assets/assets/images/red_logo.svg": "d2c26f7664a6ddde50c763ab2f134580",
"assets/assets/images/red_texas.svg": "f51f12f28bcb85d74aa5c13dd7ea97a8",
"assets/assets/images/soundwave.gif": "f81ec789a2f6c52c0ce48be9a163f4a0",
"assets/assets/images/soundwave_large.gif": "e837a87447f87414369369d5e9a9c060",
"assets/assets/images/studio1.jpg": "d872d0107640c5d45254c3a709b2d291",
"assets/assets/images/studio2.jpg": "1a5a00df9e0179d76928cf261194887f",
"assets/assets/images/studio3.jpg": "af07ebe73dedcae5668452f2aa701e25",
"assets/assets/images/studio4.jpg": "a327731005084adeaade3a2755347a1e",
"assets/assets/images/studio5.jpg": "314ec0f0bdf3b4dba6d67ff2b71b1f01",
"assets/assets/images/studio6.jpg": "9305c4630e496e6feec4095d4cabef16",
"assets/assets/images/album/bloc_boy.jpg": "4a9e645d0355c38636f46476b1d434d4",
"assets/assets/images/album/ceo.jpeg": "3405d902c560f5ec5525e933989732eb",
"assets/assets/images/album/future.jpeg": "58587b33d31d8fbd41e943ef8521f834",
"assets/assets/images/album/jd.jpg": "545cabbe7bd2b0bfb3c36f677b85373a",
"assets/assets/images/album/lil_durk_lil_baby.png": "11d627e37393697e3d4e954c0af690fd",
"assets/assets/images/album/roddy_ricch.jpeg": "703dffdd77f7b6fb27184f6e0b54a1ee",
"assets/assets/images/album/sir.jpeg": "2ea6c806a57b26fedfa9683870cbb718",
"assets/assets/logos/logo.png": "35cc4e3b235fe9f9e8a8caa0cd2a477f",
"assets/assets/logos/logo.xcf": "dfe83fdaa64b1e00f9f053f6db94f8f2",
"assets/assets/logos/logo_white.png": "0158d3e28723d0eaf471a0eb156f9174",
"assets/assets/audio/bloc_boy.mp3": "e16e85f8b3e4c29123ce4caf5be0b975",
"assets/assets/audio/ceo.mp3": "0ddd03e6df7d9ecc183553ae9dcaebce",
"assets/assets/audio/future.mp3": "1ece3466e3bfba511620c57ef7a1b18b",
"assets/assets/audio/lil_durk_lil_baby.mp3": "c04f6467aa8cb48c92df8dbb681cb971",
"assets/assets/audio/roddy_ricch.mp3": "fa4619c074477c85bdb7c21e221c1b72",
"assets/assets/audio/sir.mp3": "47cad77128d46be419802284235526e3",
"assets/assets/video/hero.mp4": "536b979dc18f88f3f2fbad5d0810802b",
"assets/assets/animations/soundwave.json": "b6ef428a43bb89e2c30157711a3e16e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2d817e2f4beae0d4edd53ee72132aeea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f0f87f87b8e48db0b8c7487237c64529",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "974da76fefdfa713478143167dabc0a0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/fonts/MaterialIcons-Regular.otf": "98fe1bfd27509ca2106b46f4063012e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "9a1f1cb0a83a9401f3a6b24d7ff0426a",
"assets/AssetManifest.bin": "24dd2bfc4acaec6e720934f25908e436",
"assets/AssetManifest.bin.json": "5dc5a799d7772a1992bd44db6a0c8928",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "a71f0f97cf06ea98607d390b6a9e0e2c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be3c2df6f1a880061d868592b9c17adb",
"/": "be3c2df6f1a880061d868592b9c17adb",
"manifest.json": "2ac3a158fad81a2b368936a03eda1800",
"favicon.ico": "0a24e4de8bb15a3502674bf773f8c1dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
