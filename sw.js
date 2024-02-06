self.addEventListener("install", (e) => {
  console.log("[Service Worker] installed");
});

self.addEventListener("activate", (e) => {
  console.log("[Service Worker] activated", e);
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetching something...", e.request.url);
});
