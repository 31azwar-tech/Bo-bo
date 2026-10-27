// Bo'Bo' service worker
const CACHE = "bobo-v5-1";
const SHELL = ["./", "index.html", "firebase-config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "lame.min.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  // jangan sentuh Firebase, Google API, AI
  if (/googleapis\.com|firebaseio|identitytoolkit|securetoken|anthropic|openlibrary/.test(url.hostname) && !/fonts\.googleapis/.test(url.hostname)) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put("index.html", c)); return r; }).catch(() => caches.match("index.html")));
    return;
  }
  // konfigurasi: selalu coba jaringan dulu agar perubahan langsung terpakai
  if (url.origin === location.origin && /firebase-config\.js$/.test(url.pathname)) {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); return r; }).catch(() => caches.match(req)));
    return;
  }
  // aset sendiri, font, SDK Firebase (gstatic), lamejs: cache-first
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok && (url.origin === location.origin || /gstatic\.com|fonts\.googleapis|jsdelivr/.test(url.hostname))) { const c = res.clone(); caches.open(CACHE).then((x) => x.put(req, c)); }
    return res;
  })));
});
