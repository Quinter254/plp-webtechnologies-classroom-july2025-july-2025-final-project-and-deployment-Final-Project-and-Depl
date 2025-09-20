// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form submission (optional)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    form.reset();
  });
}
