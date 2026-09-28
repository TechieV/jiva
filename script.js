const WHATSAPP_PHONE = '919456050307';
let activeEnquiryProduct = '';

// Mobile Navigation Toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('hidden');
}

// Modal Handlers
function openEnquiryModal(productName) {
  activeEnquiryProduct = productName;
  document.getElementById('modal-product-name').textContent = productName;
  document.getElementById('enquiry-modal').classList.remove('hidden');
}

function closeEnquiryModal() {
  document.getElementById('enquiry-modal').classList.add('hidden');
}

window.addEventListener('click', function (e) {
  const modal = document.getElementById('enquiry-modal');
  if (e.target === modal) {
    closeEnquiryModal();
  }
});

// Modal Form Submission
function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-name').value;
  const phone = document.getElementById('modal-phone').value;
  
  closeEnquiryModal();
  showToast(`Thank you, ${name}! Enquiry for ${activeEnquiryProduct} received.`);
  document.getElementById('modal-name').value = '';
  document.getElementById('modal-phone').value = '';
  document.getElementById('modal-notes').value = '';
}

// Modal WhatsApp Send
function sendModalViaWhatsApp() {
  const name = document.getElementById('modal-name').value || 'Customer';
  const phone = document.getElementById('modal-phone').value || '';
  const notes = document.getElementById('modal-notes').value || 'Interested in bulk pricing.';
  
  const message = `*ENQUIRY - JIVA MEDICARE*%0A%0A*Product:* ${encodeURIComponent(activeEnquiryProduct)}%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Requirement:* ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
  closeEnquiryModal();
}

// Main Contact Form Submission
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const product = document.getElementById('form-product').value;
  
  showToast(`Thank you ${name}! Your enquiry for ${product} has been submitted.`);
  document.getElementById('contact-form').reset();
}

// Send Form directly to WhatsApp
function sendViaWhatsAppDirect() {
  const name = document.getElementById('form-name').value || 'Customer';
  const phone = document.getElementById('form-phone').value || '';
  const product = document.getElementById('form-product').value || 'General Range';
  const msg = document.getElementById('form-message').value || 'Please share pricing details.';

  const text = `*NEW ENQUIRY - JIVA MEDICARE*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Product:* ${encodeURIComponent(product)}%0A*Message:* ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
}

// Notification Toast Helper
function showToast(text) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').textContent = text;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3500);
}