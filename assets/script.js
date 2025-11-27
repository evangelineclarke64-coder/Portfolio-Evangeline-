document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  document.querySelectorAll('#year').forEach(el => el.textContent = year);

  // Photo modal
  const photo = document.getElementById('profile-photo');
  const photoModal = document.getElementById('photoModal');
  if(photo && photoModal){
    photo.addEventListener('click', () => { photoModal.setAttribute('aria-hidden','false'); });
    photoModal.addEventListener('click', e => { if(e.target.dataset.close !== undefined || e.target === photoModal) photoModal.setAttribute('aria-hidden','true'); });
  }

  // Contact confirmation modal
  const submitBtn = document.getElementById('submitBtn');
  const confirmModal = document.getElementById('confirmModal');
  const confirmSubmit = document.getElementById('confirmSubmit');
  const contactForm = document.getElementById('contactForm');

  submitBtn?.addEventListener('click', ()=>{
    if(contactForm.reportValidity()) confirmModal.setAttribute('aria-hidden','false');
  });

  confirmModal?.addEventListener('click', e=>{
    if(e.target.dataset.close !== undefined || e.target === confirmModal) confirmModal.setAttribute('aria-hidden','true');
  });

  confirmSubmit?.addEventListener('click', ()=>{
    confirmModal.setAttribute('aria-hidden','true');
    alert('Message sent successfully (demo).');
    contactForm.reset();
  });
});
