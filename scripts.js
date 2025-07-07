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

  const rawName = document.getElementById('name').value.trim();
  const rawNumber = document.getElementById('number').value.trim();
  const rawEmail = document.getElementById('email').value.trim();
  const rawPurpose = document.getElementById('purpose').value;
  const rawMessage = document.getElementById('message').value.trim();

  if (!rawName || !rawNumber || !rawEmail || !rawPurpose || !rawMessage) {
    alert('⚠️ Please fill in all fields before submitting.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(rawEmail)) {
    alert('❌ Please enter a valid email address.');
    return;
  }

  // Prepare message content
  const name = rawName;
  const number = rawNumber;
  const email = rawEmail;
  const purpose = rawPurpose;
  const message = rawMessage;

  const fullMessage = `New Contact Request:\n\nName: ${name}\nContact Number: ${number}\nEmail: ${email}\nPurpose: ${purpose}\nMessage: ${message}`;

  // Encode for WhatsApp URL
  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappUrl = `https://wa.me/919874360607?text=${encodedMessage}`;

  // Encode for mailto
  const mailtoSubject = encodeURIComponent(`Contact Form Submission: ${purpose}`);
  const mailtoBody = encodeURIComponent(fullMessage);
  const mailtoUrl = `mailto:arnab.banerjee.indra@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  alert('✅ Your message is being sent to WhatsApp and Email.');

  // Open WhatsApp and Email client in new tabs/windows
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    window.open(mailtoUrl, '_blank');
  }, 300);

  this.reset();
});

// Toggle Details Section
function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
        detail.style.display = (detail.style.display === 'block') ? 'none' : 'block';
    }
}
