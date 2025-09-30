// Main JavaScript file for common functionality

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuButton.setAttribute('aria-expanded',
        mobileMenuButton.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});