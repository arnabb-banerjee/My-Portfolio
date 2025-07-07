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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const rawName = document.getElementById('name').value.trim();
    const rawNumber = document.getElementById('number').value.trim();
    const rawEmail = document.getElementById('email').value.trim();
    const rawPurpose = document.getElementById('purpose').value;
    const rawMessage = document.getElementById('message').value.trim();

    // Validate inputs
    if (!rawName || !rawNumber || !rawEmail || !rawPurpose || !rawMessage) {
        alert('⚠️ Please fill in all fields before submitting.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(rawEmail)) {
        alert('❌ Please enter a valid email address.');
        return;
    }

    // Prepare email components
    const mailSubject = encodeURIComponent(`Contact Request: ${rawPurpose}`);
    const mailBody = `Name: ${rawName}\nContact Number: ${rawNumber}\nEmail: ${rawEmail}\nPurpose: ${rawPurpose}\nMessage: ${rawMessage}`;
    const mailtoUrl = `mailto:arnab.banerjee.indra@gmail.com?subject=${mailSubject}&body=${encodeURIComponent(mailBody)}`;

    // Prepare WhatsApp message
    const whatsappMessage = `New Contact Request:%0A%0AName: ${encodeURIComponent(rawName)}%0AContact Number: ${encodeURIComponent(rawNumber)}%0AEmail: ${encodeURIComponent(rawEmail)}%0APurpose: ${encodeURIComponent(rawPurpose)}%0AMessage: ${encodeURIComponent(rawMessage)}`;
    const whatsappUrl = `https://wa.me/919874360607?text=${whatsappMessage}`;

    // Step 1: Open Email client
    const emailOpened = window.open(mailtoUrl, '_blank');

    if (!emailOpened) {
        alert('❌ Pop-up blocked! Please allow pop-ups to send email.');
        return;
    }

    alert('📧 Your email client has been opened. Please send your message.');

    // Step 2: Confirm if user sent the email and wants to send WhatsApp message
    const sendWhatsapp = confirm('Do you want to send the same message via WhatsApp?');

    if (sendWhatsapp) {
        // Open WhatsApp link
        const whatsappOpened = window.open(whatsappUrl, '_blank');
        if (!whatsappOpened) {
            alert('❌ Pop-up blocked! Please allow pop-ups to send WhatsApp message.');
            return;
        }
        alert('✅ WhatsApp window opened. Please send your message there.');
    } else {
        alert('ℹ️ WhatsApp message sending skipped.');
    }

    // Reset form after all done
    this.reset();
});


// Toggle Details Section
function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
        detail.style.display = (detail.style.display === 'block') ? 'none' : 'block';
    }
}
