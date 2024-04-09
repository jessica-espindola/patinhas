var cacheName = 'pwaPatinhas+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './home.html',
        './contato.html',
        './medicacoes.html',
        './vacinas.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

        './images/banner-contato.png',
        './images/banner-home.png',
        './images/banner-index.png',
        './images/banner-medicacoes.png',
        './images/banner-vacina.png',
        './images/logo-patinhas.png',
        './images/pic01.png',
        './images/pic02.png',
        './images/pic03.png',

        './images/icones/patinhas-16.png',
        './images/icones/patinhas-20.png',
        './images/icones/patinhas-29.png',
        './images/icones/patinhas-32.png',
        './images/icones/patinhas-40.png',
        './images/icones/patinhas-50.png',
        './images/icones/patinhas-57.png',
        './images/icones/patinhas-58.png',
        './images/icones/patinhas-60.png',
        './images/icones/patinhas-64.png',
        './images/icones/patinhas-72.png',
        './images/icones/patinhas-76.png',
        './images/icones/patinhas-80.png',
        './images/icones/patinhas-87.png',
        './images/icones/patinhas-100.png',
        './images/icones/patinhas-114.png',
        './images/icones/patinhas-120.png',
        './images/icones/patinhas-128.png',
        './images/icones/patinhas-144.png',
        './images/icones/patinhas-152.png',
        './images/icones/patinhas-167.png',
        './images/icones/patinhas-180.png',
        './images/icones/patinhas-192.png',
        './images/icones/patinhas-256.png',
        './images/icones/patinhas-512.png',
        './images/icones/patinhas-1024.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});