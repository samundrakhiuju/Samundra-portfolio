/**
 * Samundra Khiuju - Portfolio Logic
 * Version: 2.0 (Bilingual Optimized)
 */

// 1. Selection: Grab all sections and navigation links
const sections = document.querySelectorAll('section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');

// 2. Scroll Spy: Update the active navigation link based on scroll position
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    // Check if the scroll position has reached the section
    // The -100 is a buffer for the sticky header
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    // Reset all link colors
    link.classList.remove('active');
    link.style.color = ''; 

    // Add active color to the link matching the current section ID
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#00c8f0'; // Matches your --accent color
    }
  });
});

// 3. Simple Reveal Animation: Make sections appear smoothly
const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If the section is visible in the window, make it opaque
    if (sectionTop < windowHeight - 150) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

// Initial setup for the animation
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
});

// Run reveal animation on scroll
window.addEventListener('scroll', revealSection);

// Run once on load to show the top section
window.addEventListener('load', revealSection);
