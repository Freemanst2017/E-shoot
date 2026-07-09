function checkClientCode() {
  const codeInput = document.getElementById('clientCode');
  const gallery = document.getElementById('privateGallery');
  const message = document.getElementById('codeMessage');

  if (!codeInput || !gallery || !message) return;

  const code = codeInput.value.trim().toUpperCase();

  if (code === 'CLIENT123') {
    gallery.classList.remove('hidden');
    message.textContent = 'Access granted. Your gallery is ready.';
    message.style.color = '#d4a24c';
  } else {
    gallery.classList.add('hidden');
    message.textContent = 'Wrong code. Please check your client code.';
    message.style.color = '#ff7777';
  }
}

function sendBookingMessage(event) {
  event.preventDefault();
  const status = document.getElementById('bookingStatus');
  status.textContent = 'Thank you. Your booking request has been prepared. Ernest-Shoot will contact you soon.';
  status.style.color = '#d4a24c';
}
