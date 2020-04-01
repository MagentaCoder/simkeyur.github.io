/// <reference path="vendor/jquery/jquery.js" />
var cacheName = 'simkeyur-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/css/resume.css',
    '/js/main.js',
    '/Resume/KEYUR_Resume_Jan2020.pdf',
    '/vendor/bootstrap/css/bootstrap.css',
    '/vendor/bootstrap/js/bootstrap.js',
    '/vendor/jquery/jquery.js',
    '/js/resume.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});