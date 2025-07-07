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
    const rawPurpose = document.getElementById('purpose').value;
    const rawMessage = document.getElementById('message').value.trim();

    // Validate required fields
    if (!rawName || !rawNumber || !rawEmail || !rawPurpose || !rawMessage) {
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

    // GMAIL LINK
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=arnab.banerjee.indra@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // OUTLOOK LINK (optional alternative)
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=arnab.banerjee.indra@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ask user which platform to open
    const emailChoice = confirm('📧 Do you want to send the message using Gmail?\n(Click "Cancel" to use Outlook instead)');

    let emailWindow = null;
    if (emailChoice) {
        emailWindow = window.open(gmailUrl, '_blank');
    } else {
        emailWindow = window.open(outlookUrl, '_blank');
    }

    if (!emailWindow) {
        alert('❌ Pop-up blocked! Please allow pop-ups to send email.');
        return;
    }

    alert('✅ Your email window has opened. Please complete and send your email.');

    // Prompt for WhatsApp follow-up
    const sendWhatsApp = confirm('📱 Would you like to also send this message via WhatsApp for faster response?');

    if (sendWhatsApp) {
        const whatsappText = `New Contact Request:%0A%0AName: ${encodeURIComponent(rawName)}%0AContact Number: ${encodeURIComponent(rawNumber)}%0AEmail: ${encodeURIComponent(rawEmail)}%0APurpose: ${encodeURIComponent(rawPurpose)}%0AMessage: ${encodeURIComponent(rawMessage)}`;
        const whatsappUrl = `https://wa.me/919874360607?text=${whatsappText}`;

        const whatsappWindow = window.open(whatsappUrl, '_blank');
        if (!whatsappWindow) {
            alert('❌ Pop-up blocked for WhatsApp! Please allow pop-ups.');
        } else {
            alert('✅ WhatsApp window opened. Please send your message.');
        }
    } else {
        alert('ℹ️ WhatsApp sending skipped.');
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
