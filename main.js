(function () {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // console.log('CLIENT: service worker registration in progress.');
            navigator.serviceWorker.register('service-worker.js');
                // .then(function() {
                //     console.log('CLIENT: service worker registration complete.');
                // });
        });
    } else {
        console.log('CLIENT: service worker is not supported.');
    }
})();
(function () {
    let emailInput = document.querySelector('input[type=email]');

    emailInput.addEventListener('keyup', function () {
        document.querySelector('input[type=submit]').disabled = emailInput.value.length <= 0;
    })
})();
(function () {
    let darkModeUrl = 'https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.3/grave-dark.min.css';
    let lightModeUrl = 'https://cdn.jsdelivr.net/gh/ferror/grave@gh-pages/3.3/grave-light.min.css';

    document.querySelector('body').addEventListener('dblclick', function() {
        let links = document.querySelectorAll('link[rel=stylesheet]');

        links.forEach(function (link) {
            if (link.href === darkModeUrl) {
                link.href = lightModeUrl;
            } else {
                link.href = darkModeUrl;
            }
        });
    });
})();
