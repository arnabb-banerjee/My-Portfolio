/*!
* Start Bootstrap - Resume v7.0.6
*/

// Core Scripts
window.addEventListener('DOMContentLoaded', event => {
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const rawName = document.getElementById('name').value.trim();
            const rawNumber = document.getElementById('number').value.trim();
            const rawEmail = document.getElementById('email').value.trim();
            const rawPurpose = document.getElementById('purpose').value;
            const rawMessage = document.getElementById('message').value.trim();

            // Validate fields
            if (!rawName || !rawNumber || !rawEmail || !rawPurpose || !rawMessage) {
                alert('⚠️ Please fill in all fields before submitting.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(rawEmail)) {
                alert('❌ Please enter a valid email address.');
                return;
            }

            // Encode values
            const name = encodeURIComponent(rawName);
            const number = encodeURIComponent(rawNumber);
            const email = encodeURIComponent(rawEmail);
            const purpose = encodeURIComponent(rawPurpose);
            const message = encodeURIComponent(rawMessage);

            const fullMessage = `New Contact Request:%0A%0AName: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0APurpose: ${purpose}%0AMessage: ${message}`;
            const whatsappUrl = `https://wa.me/919874360607?text=${fullMessage}`;

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Show alert
            alert('✅ Your message is being sent to WhatsApp.');

            // Open WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 300);

            // Clear form
            contactForm.reset();
        });
    }
});

// Toggle Details Section
function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
        detail.style.display = (detail.style.display === 'block') ? 'none' : 'block';
    }
}
