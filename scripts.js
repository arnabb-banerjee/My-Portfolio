/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const number = encodeURIComponent(document.getElementById('number').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const purpose = encodeURIComponent(document.getElementById('purpose').value);
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const fullMessage = `New Contact Request:%0A%0AName: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0APurpose: ${purpose}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919874360607?text=${fullMessage}`;

    window.open(whatsappUrl, '_blank');
});

function toggleDetails(id) {
    const detail = document.getElementById(id);
    detail.style.display = (detail.style.display === "block") ? "none" : "block";
}

