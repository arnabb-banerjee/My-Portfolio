// ==========================
// Common JavaScript for indravoice.in
// ==========================

// Load header (upper.html)
fetch("upper.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("upper").innerHTML = data;
    })
    .catch(err => console.error("Failed to load header:", err));

// Load footer (lower.html)
fetch("lower.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("lower").innerHTML = data;
    })
    .catch(err => console.error("Failed to load footer:", err));

// Google Analytics (gtag)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'GTM-WW5ZCS64');

// Google Tag Manager
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WW5ZCS64');

