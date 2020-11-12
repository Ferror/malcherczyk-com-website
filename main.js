/*
    (function () {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                console.log('CLIENT: service worker registration in progress.');
                navigator.serviceWorker.register('service-worker.js').then(function() {
                    console.log('CLIENT: service worker registration complete.');
                }, function() {
                    console.log('CLIENT: service worker registration failure.');
                });
            });
        } else {
            console.log('CLIENT: service worker is not supported.');
        }
    })();
*/
(function () {
    let emailInput = document.querySelector('input[type=email]');

    emailInput.addEventListener('keyup', function () {
        document.querySelector('input[type=submit]').disabled = emailInput.value.length <= 0;
    })
})();
(function () {
    let darkModeUrl = 'https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.1/grave-dark.min.css';
    let lightModeUrl = 'https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.1/grave.min.css';

    document.querySelector('body').addEventListener('dblclick', function() {
        let link = document.querySelector('link');

        if (link.href === darkModeUrl) {
            link.href = lightModeUrl;
        } else {
            link.href = darkModeUrl;
        }
    });
})();
