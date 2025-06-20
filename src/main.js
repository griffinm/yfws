// Main JavaScript file for Yes For Wilmington Schools

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
    });
  });

  // Add click handlers for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.textContent;
      
      switch(buttonText) {
        case 'Get Involved':
          alert('Thank you for your interest! Please contact us to learn more about getting involved.');
          break;
        case 'Email Us':
          window.location.href = 'mailto:contact@yesforwilmingtonschools.org';
          break;
        case 'Call Us':
          window.location.href = 'tel:+1234567890';
          break;
        default:
          console.log('Button clicked:', buttonText);
      }
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

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-full');
    nav.classList.toggle('left-0');
    nav.classList.toggle('right-0');
    nav.classList.toggle('bg-white');
    nav.classList.toggle('shadow-lg');
    nav.classList.toggle('p-4');
  });

  console.log('Yes For Wilmington Schools website loaded successfully!');
}); 