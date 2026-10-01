const WHATSAPP_PHONE = '919456050307';
let activeEnquiryProduct = '';

// Mobile Navigation Toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) {
    nav.classList.toggle('hidden');
  }
}

// Modal Handlers (Using .active and .hidden safely)
function openEnquiryModal(productName) {
  activeEnquiryProduct = productName;
  const nameLabel = document.getElementById('modal-product-name');
  if (nameLabel) {
    nameLabel.textContent = productName;
  }
  const modal = document.getElementById('enquiry-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
  }
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
  }
}

// Close modal when tapping on the dark backdrop
window.addEventListener('click', function (e) {
  const modal = document.getElementById('enquiry-modal');
  if (e.target === modal) {
    closeEnquiryModal();
  }
});

// Modal Form: Redirects directly to WhatsApp chat
function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-name').value.trim() || 'Customer';
  const phone = document.getElementById('modal-phone').value.trim() || '';
  const notes = document.getElementById('modal-notes').value.trim() || 'Interested in wholesale prices.';
  
  const message = `*ENQUIRY - JIVA MEDICARE*%0A%0A*Product:* ${encodeURIComponent(activeEnquiryProduct)}%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Requirement:* ${encodeURIComponent(notes)}`;
  
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  
  closeEnquiryModal();
  document.getElementById('modal-name').value = '';
  document.getElementById('modal-phone').value = '';
  document.getElementById('modal-notes').value = '';
}

// Main Page Contact Form: Redirects directly to WhatsApp chat
function handleMainFormWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value.trim();
  const phone = document.getElementById('form-phone').value.trim();
  const city = document.getElementById('form-city').value.trim();
  const product = document.getElementById('form-product').value;
  const msg = document.getElementById('form-message').value.trim() || 'Please share catalog and carton prices.';

  const text = `*NEW ENQUIRY - JIVA MEDICARE*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*City:* ${encodeURIComponent(city)}%0A*Product:* ${encodeURIComponent(product)}%0A*Message:* ${encodeURIComponent(msg)}`;
  
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
}