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

    // Collect form values
    const rawName = document.getElementById('name').value.trim();
    const rawNumber = document.getElementById('number').value.trim();
    const rawEmail = document.getElementById('email').value.trim();
    const rawPurpose = document.getElementById('purpose') ? document.getElementById('purpose').value : 'General Inquiry';
    const rawMessage = document.getElementById('message').value.trim();

    // Validate required fields
    if (!rawName || !rawNumber || !rawEmail || !rawMessage) {
        alert('⚠️ Please fill in all fields before submitting.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(rawEmail)) {
        alert('❌ Please enter a valid email address.');
        return;
    }

    // Compose subject and body
    const subject = `Contact Request: ${rawPurpose}`;
    const body = `Name: ${rawName}\nContact Number: ${rawNumber}\nEmail: ${rawEmail}\nPurpose: ${rawPurpose}\nMessage: ${rawMessage}`;
    const encodedBody = encodeURIComponent(body);
    const encodedSubject = encodeURIComponent(subject);

    // Email links
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=arnab.banerjee.indra@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=arnab.banerjee.indra@gmail.com&subject=${encodedSubject}&body=${encodedBody}`;

    // WhatsApp message
    const whatsappText = `New Contact Request:%0A%0AName: ${encodeURIComponent(rawName)}%0AContact Number: ${encodeURIComponent(rawNumber)}%0AEmail: ${encodeURIComponent(rawEmail)}%0APurpose: ${encodeURIComponent(rawPurpose)}%0AMessage: ${encodeURIComponent(rawMessage)}`;
    const whatsappUrl = `https://wa.me/919874360607?text=${whatsappText}`;

    // Try opening all links
    const gmailOpened = window.open(gmailUrl, '_blank');
    const outlookOpened = window.open(outlookUrl, '_blank');
    const whatsappOpened = window.open(whatsappUrl, '_blank');

    // Notify user
    if (!gmailOpened || !outlookOpened || !whatsappOpened) {
        alert('⚠️ Pop-ups might be blocked! Please allow pop-ups in your browser settings.');
    } else {
        alert('✅ Gmail, Outlook, and WhatsApp windows opened. You can send your message through any of them.');
    }

    // Clear the form
    this.reset();
});



// Toggle Details Section
function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
        detail.style.display = (detail.style.display === 'block') ? 'none' : 'block';
    }
}
