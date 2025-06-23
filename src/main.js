
import logoImage from './images/yes-logo.png'
import schoolRender from './images/school-render.jpg'

// Add fade-in animation to sections when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
  // Set the placeholder image in the about section
  const logoImageElement = document.querySelector('.logo-image');
  if (logoImageElement) {
    logoImageElement.src = logoImage
  }

  const schoolRenderElement = document.querySelector('.school-render');
  if (schoolRenderElement) {
    schoolRenderElement.src = schoolRender
  }

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Add smooth scrolling to navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      // Hide mobile menu after clicking a link
      hideMobileMenu();
    });
  });

  // Add mobile menu functionality
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.className = 'md:hidden bg-gray-100 hover:bg-gray-200 p-2 rounded';
  mobileMenuButton.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  `;

  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  // Insert mobile menu button before the nav
  header.querySelector('.flex').insertBefore(mobileMenuButton, nav);

  // Function to hide mobile menu
  function hideMobileMenu() {
    nav.classList.add('hidden');
    nav.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4');
  }

  // Function to show mobile menu
  function showMobileMenu() {
    nav.classList.remove('hidden');
    nav.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4');
  }

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', () => {
    if (nav.classList.contains('hidden')) {
      showMobileMenu();
    } else {
      hideMobileMenu();
    }
  });

  // Hide mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !nav.classList.contains('hidden')) {
      hideMobileMenu();
    }
  });
}); 