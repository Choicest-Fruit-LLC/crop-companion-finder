// filepath: /home/yousafzakria48/crop-companion-finder/service-worker.js
const CACHE_NAME = "crop-companion-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  // Add all images and assets you want cached:
  "/assets/icon-192.png",
  "/assets/icon-512.png"
  // Add other images as needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});