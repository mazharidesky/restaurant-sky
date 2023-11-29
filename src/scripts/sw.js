import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar Aset
const assetsToCache = [
  './',
  './icons/favicon-32x32.png',
  './icons/android-chrome-512x512.png',
  './icons/android-chrome-192x192.png',
  './index.html',
  './favicon-16x16.png',
  './app.bundle.js',
  './sw.bundle.js',
  './app.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache);
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
